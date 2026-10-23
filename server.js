import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.join(__dirname, 'dist');
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.js': 'application/javascript; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.pdf': 'application/pdf',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.txt': 'text/plain; charset=UTF-8'
};

const server = http.createServer((req, res) => {
  try {
    const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
    let pathname = decodeURIComponent(parsedUrl.pathname);

    // Normalize path to prevent directory traversal
    let filePath = path.join(DIST_DIR, pathname);
    if (!filePath.startsWith(DIST_DIR)) {
      res.statusCode = 403;
      res.end('Forbidden');
      return;
    }

    fs.stat(filePath, (err, stats) => {
      // 1. Direct file match
      if (!err && stats.isFile()) {
        const ext = path.extname(filePath).toLowerCase();
        const contentType = MIME_TYPES[ext] || 'application/octet-stream';
        res.setHeader('Content-Type', contentType);

        if (pathname.startsWith('/assets/')) {
          res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
        } else {
          res.setHeader('Cache-Control', 'no-cache');
        }

        fs.createReadStream(filePath).pipe(res);
        return;
      }

      // 2. Directory index.html match
      if (!err && stats.isDirectory()) {
        const indexPath = path.join(filePath, 'index.html');
        if (fs.existsSync(indexPath)) {
          res.setHeader('Content-Type', 'text/html; charset=UTF-8');
          res.setHeader('Cache-Control', 'no-cache');
          fs.createReadStream(indexPath).pipe(res);
          return;
        }
      }

      // 3. SPA Fallback: serve dist/index.html for client-side routing
      const fallbackPath = path.join(DIST_DIR, 'index.html');
      if (fs.existsSync(fallbackPath)) {
        res.setHeader('Content-Type', 'text/html; charset=UTF-8');
        res.setHeader('Cache-Control', 'no-cache');
        fs.createReadStream(fallbackPath).pipe(res);
      } else {
        res.statusCode = 404;
        res.end('Build output not found. Please run "npm run build" first.');
      }
    });
  } catch (error) {
    res.statusCode = 500;
    res.end('Internal Server Error');
  }
});

server.listen(PORT, HOST, () => {
  console.log(`Production server running at http://${HOST}:${PORT}/`);
});
