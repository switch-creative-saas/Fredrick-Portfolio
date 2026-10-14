#!/usr/bin/env node
/**
 * Turns raw photos into web-ready files and prints entries for src/content/photography.ts.
 *
 *   photos-raw/<series>/<file>.(jpg|jpeg|png|webp|tif|tiff|heic)
 *   photos-raw/<file>.jpg                 -> series "misc"
 *
 * For each photo it writes, under public/photography/<series>/:
 *   <name>-2400.webp   full size (used by the lightbox)
 *   <name>-1200.webp   grid size
 * and prints a ready-to-paste array with real width/height and a tiny blur placeholder.
 *
 * Usage: node scripts/optimize-photos.mjs
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const RAW_DIR = path.join(ROOT, 'photos-raw');
const OUT_DIR = path.join(ROOT, 'public', 'photography');
const SIZES = [2400, 1200];
const EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.tif', '.tiff', '.heic', '.avif']);

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/\.[^.]+$/, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

async function listPhotos() {
  const entries = await fs.readdir(RAW_DIR, { withFileTypes: true }).catch(() => null);
  if (!entries) {
    console.error(`No ${path.relative(ROOT, RAW_DIR)} folder. Create it and add photos (optionally in series subfolders).`);
    process.exit(1);
  }
  const files = [];
  for (const entry of entries) {
    const full = path.join(RAW_DIR, entry.name);
    if (entry.isDirectory()) {
      for (const inner of await fs.readdir(full, { withFileTypes: true })) {
        if (inner.isFile() && EXTENSIONS.has(path.extname(inner.name).toLowerCase())) {
          files.push({ file: path.join(full, inner.name), series: slugify(entry.name) });
        }
      }
    } else if (entry.isFile() && EXTENSIONS.has(path.extname(entry.name).toLowerCase())) {
      files.push({ file: full, series: 'misc' });
    }
  }
  return files.sort((a, b) => a.file.localeCompare(b.file));
}

async function processPhoto({ file, series }) {
  const name = slugify(path.basename(file));
  const dir = path.join(OUT_DIR, series);
  await fs.mkdir(dir, { recursive: true });

  // rotate() applies EXIF orientation so width/height match what people see.
  const base = sharp(file).rotate();
  const meta = await base.metadata();
  const portrait = (meta.orientation ?? 1) >= 5;
  const srcWidth = portrait ? meta.height : meta.width;
  const srcHeight = portrait ? meta.width : meta.height;

  const outputs = {};
  for (const size of SIZES) {
    const target = path.join(dir, `${name}-${size}.webp`);
    const info = await sharp(file)
      .rotate()
      .resize({ width: size, withoutEnlargement: true })
      .webp({ quality: size > 1200 ? 82 : 78 })
      .toFile(target);
    outputs[size] = { path: `/photography/${series}/${name}-${size}.webp`, width: info.width, height: info.height, bytes: info.size };
  }

  const blur = await sharp(file).rotate().resize({ width: 16 }).webp({ quality: 40 }).toBuffer();

  return {
    id: `${series}-${name}`,
    src: outputs[2400].path,
    thumb: outputs[1200].path,
    alt: `TODO(fred): describe this photo`,
    width: outputs[2400].width,
    height: outputs[2400].height,
    series,
    year: null,
    featured: false,
    blurDataURL: `data:image/webp;base64,${blur.toString('base64')}`,
    _source: { width: srcWidth, height: srcHeight, kb: Math.round(outputs[2400].bytes / 1024) },
  };
}

const photos = await listPhotos();
if (!photos.length) {
  console.error('No photos found in photos-raw/.');
  process.exit(1);
}

const results = [];
for (const photo of photos) {
  const result = await processPhoto(photo);
  console.error(`  ${path.relative(ROOT, photo.file)} -> ${result.src} (${result.width}x${result.height}, ${result._source.kb} KB)`);
  results.push(result);
}

const lines = results.map(({ _source, ...p }) => {
  void _source;
  // Keys unquoted, values left as JSON strings so apostrophes in alt text stay valid.
  return `  ${JSON.stringify(p, null, 2).replace(/\n/g, '\n  ').replace(/"(\w+)":/g, '$1:')},`;
});
console.log('\n// Paste into the photos array in src/content/photography.ts\n[\n' + lines.join('\n') + '\n]');
