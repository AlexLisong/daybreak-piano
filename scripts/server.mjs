import http from "node:http";
import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
const root = fileURLToPath(new URL("../dist/", import.meta.url));
const port = Number(process.env.PORT || 4173);
const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".webp": "image/webp",
  ".mp3": "audio/mpeg",
  ".mp4": "video/mp4",
  ".glb": "model/gltf-binary",
};
http
  .createServer(async (req, res) => {
    try {
      const pathname = decodeURIComponent(
        new URL(req.url, "http://localhost").pathname,
      );
      const target = path.resolve(
        root,
        "." + (pathname === "/" ? "/index.html" : pathname),
      );
      if (!target.startsWith(root)) {
        res.writeHead(403).end();
        return;
      }
      const info = await stat(target);
      if (!info.isFile()) {
        res.writeHead(404).end();
        return;
      }
      const headers = {
        "Content-Type":
          types[path.extname(target)] || "application/octet-stream",
        "Accept-Ranges": "bytes",
        "Cache-Control": "no-cache",
      };
      const range = req.headers.range?.match(/^bytes=(\d+)-(\d*)$/);
      if (range) {
        const start = Number(range[1]);
        const end = range[2]
          ? Math.min(Number(range[2]), info.size - 1)
          : info.size - 1;
        if (start > end || start >= info.size) {
          res.writeHead(416, { "Content-Range": `bytes */${info.size}` }).end();
          return;
        }
        res.writeHead(206, {
          ...headers,
          "Content-Range": `bytes ${start}-${end}/${info.size}`,
          "Content-Length": end - start + 1,
        });
        createReadStream(target, { start, end }).pipe(res);
      } else {
        res.writeHead(200, { ...headers, "Content-Length": info.size });
        if (req.method === "HEAD") res.end();
        else createReadStream(target).pipe(res);
      }
    } catch {
      res.writeHead(404).end("Not found");
    }
  })
  .listen(port, "127.0.0.1", () =>
    console.log(`Preview: http://127.0.0.1:${port}`),
  );
