import http = require('http');
// import { Buffer } from 'node:buffer';

// const postData = JSON.stringify({
//   msg: 'Hello World!',
// });

// const options = {
//   hostname: 'localhost:3001',
//   port: 80,
//   path: '/upload',
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     'Content-Length': Buffer.byteLength(postData),
//   },
// };

// const req = http.request(options, (res) => {
//   console.log(`STATUS: ${res.statusCode}`);
//   console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
//   res.setEncoding('utf8');
//   res.on('data', (chunk) => {
//     console.log(`BODY: ${chunk}`);
//   });
//   res.on('end', () => {
//     console.log('No more data in response.');
//   });
// });

// req.on('error', (e) => {
//   console.error(`problem with request: ${e.message}`);
// });

// // Write data to request body
// req.write(postData);
// req.end();

// TODO:启动一个http server
http
  .createServer((req, res) => {
    res.write('hello http-server created with node.js');
    res.end();
  })
  .listen(3001,() => {
  console.log(`Server is listening on 3001`)
});
