import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
const root = fileURLToPath(new URL("../", import.meta.url));
const dist = path.join(root, "dist");
await rm(dist, { recursive: true, force: true });
await cp(path.join(root, "public"), dist, { recursive: true });
await cp(path.join(root, "src/index.html"), path.join(dist, "index.html"));
const mapping = JSON.parse(
  await readFile(path.join(root, "source-map.json"), "utf8"),
);
for (const [source, output] of Object.entries(mapping)) {
  await mkdir(path.dirname(path.join(dist, "assets", output)), {
    recursive: true,
  });
  await cp(path.join(root, "src", source), path.join(dist, "assets", output));
}
console.log("Built complete self-contained static site in dist/");
