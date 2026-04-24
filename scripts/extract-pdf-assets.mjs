import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { PDFParse } from 'pdf-parse';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const pdfPath = process.argv[2] || 'F:\\CCT Website Contents.pdf';
const outputDir = path.join(rootDir, 'reference', 'pdf');
const screenshotsDir = path.join(outputDir, 'screenshots');
const imagesDir = path.join(outputDir, 'images');

const detectExtension = (data) => {
  if (data?.[0] === 0x89 && data?.[1] === 0x50 && data?.[2] === 0x4e && data?.[3] === 0x47) {
    return 'png';
  }

  if (data?.[0] === 0xff && data?.[1] === 0xd8 && data?.[2] === 0xff) {
    return 'jpg';
  }

  if (data?.[0] === 0x47 && data?.[1] === 0x49 && data?.[2] === 0x46) {
    return 'gif';
  }

  if (data?.[0] === 0x42 && data?.[1] === 0x4d) {
    return 'bmp';
  }

  return 'bin';
};

await fs.mkdir(screenshotsDir, { recursive: true });
await fs.mkdir(imagesDir, { recursive: true });

const buffer = await fs.readFile(pdfPath);
const data = new Uint8Array(buffer);
const parser = new PDFParse({ data, useWorkerFetch: false });

const textResult = await parser.getText();
const screenshotResult = await parser.getScreenshot({
  desiredWidth: 1400,
  imageDataUrl: false,
});
const imageResult = await parser.getImage({
  imageThreshold: 0,
  imageDataUrl: false,
});

const summary = {
  source: pdfPath,
  pages: textResult.total,
  extractedAt: new Date().toISOString(),
  pageText: [],
  pageScreenshots: [],
  embeddedImages: [],
};

for (const page of textResult.pages) {
  summary.pageText.push({
    page: page.num,
    text: page.text,
  });
}

for (const page of screenshotResult.pages) {
  const fileName = `page-${String(page.pageNumber).padStart(2, '0')}.png`;
  const absolutePath = path.join(screenshotsDir, fileName);

  await fs.writeFile(absolutePath, page.data);
  summary.pageScreenshots.push({
    page: page.pageNumber,
    file: absolutePath,
  });
}

for (const page of imageResult.pages) {
  for (let index = 0; index < page.images.length; index += 1) {
    const image = page.images[index];
    const extension = detectExtension(image.data);
    const fileName = `page-${String(page.pageNumber).padStart(2, '0')}-image-${String(index + 1).padStart(2, '0')}.${extension}`;
    const absolutePath = path.join(imagesDir, fileName);

    await fs.writeFile(absolutePath, image.data);
    summary.embeddedImages.push({
      page: page.pageNumber,
      name: image.name,
      width: image.width,
      height: image.height,
      format: extension,
      file: absolutePath,
    });
  }
}

await parser.destroy();

await fs.writeFile(
  path.join(outputDir, 'content.json'),
  `${JSON.stringify(summary, null, 2)}\n`,
  'utf8',
);

console.log(`Extracted ${textResult.total} pages, ${summary.pageScreenshots.length} screenshots, and ${summary.embeddedImages.length} images.`);
