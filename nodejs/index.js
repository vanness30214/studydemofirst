const http = require('http');
// const querystring = require('querystring');
// const server = http.createServer((req, res) => {
//    const url =req.url;
//    req.query = querystring.parse(url.split('?')[1]);
//     res.end(
//         JSON.stringify(req.query)
//     )
// });


const server = http.creatServer((req, res) => {
    if (req.method === 'POST') {
        let postData = '';
        req.on('data', chunk => {
            postData += chunk.toString()
        });
        req.on('end', ()=>{
            res.end('hello')
        })
    }
});
server.listen(3000);
