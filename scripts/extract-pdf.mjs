import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createCanvas, DOMMatrix, ImageData, Path2D } from '@napi-rs/canvas';
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf.mjs';

globalThis.DOMMatrix = DOMMatrix;
globalThis.ImageData = ImageData;
globalThis.Path2D = Path2D;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const pdfPath = process.argv[2] || 'F:\\CCT Website Contents.pdf';
const outputDir = path.join(rootDir, 'reference', 'pdf');

class NodeCanvasFactory {
  create(width, height) {
    const canvas = createCanvas(Math.ceil(width), Math.ceil(height));
    const context = canvas.getContext('2d');

    return { canvas, context };
  }

  reset(canvasAndContext, width, height) {
    canvasAndContext.canvas.width = Math.ceil(width);
    canvasAndContext.canvas.height = Math.ceil(height);
  }

  destroy(canvasAndContext) {
    canvasAndContext.canvas.width = 0;
    canvasAndContext.canvas.height = 0;
    canvasAndContext.canvas = null;
    canvasAndContext.context = null;
  }
}

const textFromPage = (items) =>
  items
    .map((item) => item.str)
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim();

await fs.mkdir(outputDir, { recursive: true });

const pdfData = new Uint8Array(await fs.readFile(pdfPath));
const loadingTask = pdfjsLib.getDocument({
  data: pdfData,
  useWorkerFetch: false,
  isEvalSupported: false,
  disableFontFace: true,
});

const pdf = await loadingTask.promise;
const summary = {
  source: pdfPath,
  pages: pdf.numPages,
  extractedAt: new Date().toISOString(),
  items: [],
};

for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
  const page = await pdf.getPage(pageNumber);
  const textContent = await page.getTextContent();
  const pageText = textFromPage(textContent.items);
  const viewport = page.getViewport({ scale: 1.5 });
  const canvasFactory = new NodeCanvasFactory();
  const canvasAndContext = canvasFactory.create(viewport.width, viewport.height);

  await page.render({
    canvasContext: canvasAndContext.context,
    viewport,
    canvasFactory,
  }).promise;

  const imagePath = path.join(outputDir, `page-${String(pageNumber).padStart(2, '0')}.png`);
  await fs.writeFile(imagePath, canvasAndContext.canvas.toBuffer('image/png'));

  summary.items.push({
    page: pageNumber,
    text: pageText,
    image: imagePath,
  });

  canvasFactory.destroy(canvasAndContext);
}

await fs.writeFile(
  path.join(outputDir, 'content.json'),
  `${JSON.stringify(summary, null, 2)}\n`,
  'utf8',
);

console.log(`Extracted ${pdf.numPages} pages from ${pdfPath}`);
