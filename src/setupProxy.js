const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',  // Specify the base path you want to proxy
    createProxyMiddleware({
      target: 'https://siwar.ksaa.gov.sa',  // Specify the target API server
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',  // Remove the '/api' prefix when forwarding the request
      },
    })
  );
};
