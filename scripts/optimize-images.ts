import sharp from 'sharp';
import { existsSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { PROJECTS_REGISTRY } from '../src/data/projects';

async function optimize(input: string, output: string, width: number, quality=78) {
  if (!existsSync(input)) throw new Error(`Missing source image: ${input}`);
  mkdirSync(dirname(output), { recursive: true });
  await sharp(input).rotate().resize({width, withoutEnlargement: true}).webp({quality, effort: 5}).toFile(output);
  console.log(`Optimized ${output}`);
}

async function main() {
  for (const width of [960,1600,2200]) {
    await optimize('public/Background.jpg',`public/optimized/hero-${width}.webp`,width,76);
  }
  for (const project of PROJECTS_REGISTRY) {
    const path = project.pt.coverImage;
    if (!path.startsWith('/')) throw new Error(`Expected a local cover for ${project.pt.slug}`);
    await optimize(join('public',path.slice(1)),`public/optimized/covers/${project.pt.slug}.webp`,900,76);
  }
}
main().catch(error=>{console.error(error);process.exitCode=1;});
