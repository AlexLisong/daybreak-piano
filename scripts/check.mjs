import { readFile, readdir, stat } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
const root = fileURLToPath(new URL("../dist/", import.meta.url));
let checked = 0;
async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(file);
      continue;
    }
    if (!/\.(html|js|css)$/.test(file)) continue;
    const text = await readFile(file, "utf8");
    for (const match of text.matchAll(
      /["'`](\.?\.?\/[^"'`\s]+\.(?:js|css|png|jpg|webp|svg|mp3|mp4|wav|ogg|glb|gltf|json|woff2?|txt))["'`]/g,
    )) {
      const target = match[1].startsWith("/")
        ? path.join(root, match[1])
        : path.resolve(path.dirname(file), match[1]);
      await stat(target).catch(() => {
        throw new Error(`Missing dependency ${match[1]} in ${file}`);
      });
      checked++;
    }
  }
}
await walk(root);
console.log(`Verified ${checked} local dependency references.`);
