import { createProxyMiddleware } from 'http-proxy-middleware';

// // Create proxy instance outside of request handler function to avoid unnecessary re-creation
// export default createProxyMiddleware(
//   {
//   target: "http://localhost:5000", //the data server
//   pathRewrite: {'^/api' : ''},
//   changeOrigin: true,
//   cookieDomainRewrite: "localhost",
//   ws: true,
//   secure: false,
//   cookieDomainRewrite: "localhost",
//   debug: true,
// });

//this is needed!!
export const config = {
    api: {
      bodyParser: false,
    },
  }
var proxyOptions = {
  target: 'http://localhost:5000',
  pathRewrite: {['^/api'] : ''},
  changeOrigin: true,
  ws: true,
  secure: false,
  cookieDomainRewrite: 'localhost',
  debug: true,
  // onProxyReq: (proxyReq, req) => {
  //     Object.keys(req.headers).forEach(function (key) {
  //       proxyReq.setHeader(key, req.headers[key]);
  //     });
  //   },
  // onProxyRes: (proxyRes, req, res) => {
  //   const sc = proxyRes.headers['set-cookie'];
  //   if (Array.isArray(sc)) {
  //     proxyRes.headers['set-cookie'] = sc.map(sc => {
  //       return sc.split(';')
  //         .filter(v => v.trim().toLowerCase() !== 'secure')
  //         .join('; ')
  //     });
  //   }
  // }
}
// function relayRequestHeaders(proxyReq, req) {
//   Object.keys(req.headers).forEach(function (key) {
//     proxyReq.setHeader(key, req.headers[key]);
//   });
// }
// function relayResponseHeaders(proxyRes, req, res) {
//  Object.keys(proxyRes.headers).forEach(function (key) {
//    res.append(key, proxyRes.headers[key]);
//  });
// }
export default createProxyMiddleware(proxyOptions);