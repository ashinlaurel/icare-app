const proxy = require("http-proxy-middleware");

/**
 * Dev-only: forwards /api to the Node backend. Used when REACT_APP_BACKEND is /api
 * (same as production) so the browser hits the CRA origin and this proxy runs
 * inside the frontend container (target must be reachable from there).
 */
module.exports = function (app) {
  const target =
    process.env.API_PROXY_TARGET || "http://localhost:3000";

  // Use proxy('/api', …) — not app.use('/api', proxy(…)).
  // With app.use('/api', …), Express strips the mount path and the upstream
  // request becomes /admin/signin instead of /api/admin/signin (404 on backend).
  app.use(
    proxy("/api", {
      target,
      changeOrigin: true,
    })
  );
};
