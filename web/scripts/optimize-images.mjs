import sharp from "sharp";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";

const publicDir = fileURLToPath(new URL("../public/", import.meta.url));

async function toWebp(filename, maxEdge, quality) {
  const input = `${publicDir}/${filename}`;
  if (!existsSync(input)) {
    console.warn("skip (missing):", filename);
    return;
  }
  const base = filename.replace(/\.(png|jpe?g|webp)$/i, "");
  const outPath = `${publicDir}/${base}.webp`;
  await sharp(input).resize(maxEdge, maxEdge, { fit: "inside", withoutEnlargement: true }).webp({ quality, effort: 6 }).toFile(outPath);
  console.log("→", `${base}.webp`);
}

await toWebp("profile-round.png", 560, 82);
await toWebp("profile-square.jpeg", 480, 82);
