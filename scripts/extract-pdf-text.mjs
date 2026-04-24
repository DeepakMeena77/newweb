import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const pdfPath = process.argv[2] || 'F:\\CCT Website Contents.pdf';
const outputDir = path.join(rootDir, 'reference', 'pdf');

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

  summary.items.push({
    page: pageNumber,
    text: textFromPage(textContent.items),
  });
}

await fs.writeFile(
  path.join(outputDir, 'content.json'),
  `${JSON.stringify(summary, null, 2)}\n`,
  'utf8',
);

console.log(`Extracted ${pdf.numPages} pages from ${pdfPath}`);
