import { createProxyMiddleware } from 'http-proxy-middleware';

//To do:
//Promisify request such that it will return a resolve/reject; this will allow api to resolve
//Recreate [HPM] Upgrading to Websocket problem and figure out exactly how HPM works :)


var proxyOptions = {
  target: 'https://node-auth-site-netlify.herokuapp.com',
  pathRewrite: {['^/api'] : ''},
  changeOrigin: true,
  ws: false,
  secure: false,
  cookieDomainRewrite: 'localhost',
  debug: true,
  onProxyRes: () => console.log('proxy resolved!'),
  // onProxyReq: (proxyReq, req) => {
  //     Object.keys(req.headers).forEach(function (key) {
  //       proxyReq.setHeader(key, req.headers[key]);
  //     });
  //   },
  // onProxyRes: ((proxyRes, req, res) => {
  //   const sc = proxyRes.headers['set-cookie'];
  //   if (Array.isArray(sc)) {
  //     proxyRes.headers['set-cookie'] = sc.map(sc => {
  //       return sc.split(';')
  //         .filter(v => v.trim().toLowerCase() !== 'secure')
  //         .join('; ')
  //     });
  //   }
  // })
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
//this is needed!!
export const config = {
  api: {
    bodyParser: false,
  },
}
export default createProxyMiddleware(proxyOptions);