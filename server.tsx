import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import { createServer as createViteServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = 5173;

async function createServer() {
  const app = express();
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });
  app.use(vite.middlewares);

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;

    try {
      let template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');

      template = await vite.transformIndexHtml(url, template);
      const [startAppHTML, endAppHTML] = template.split('<!--ssr-outlet-->');

      const render = (await vite.ssrLoadModule('/src/entry-server.tsx')).render;

      res.write(startAppHTML);
      const appHtml = await render(url, {
        onShellReady() {
          appHtml.pipe(res);
        },
        onAllReady() {
          res.write(endAppHTML);
          res.end();
        },
      });
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });

  app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
  });
}

createServer();
