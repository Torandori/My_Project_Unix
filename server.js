import express from 'express';
import compression from 'compression';
import { createServer } from 'vite';

(async () => {
  const app = express();

  // Enable compression
  app.use(compression());

  // Use Vite middleware
  const vite = await createServer({
    server: { middlewareMode: true },
  });

  // Use the Vite middleware returned by createServer
  app.use(vite.middlewares);

  // Serve your static assets or other routes
  app.use(express.static('public')); // Example: serve assets from 'public' folder

  app.listen(5174, () => {
    console.log('Server is running on port 5173');
  });
})();