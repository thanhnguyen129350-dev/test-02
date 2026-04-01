const http = require('http');
const { sum, subtract, division } = require('./math'); // file của bạn

const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);

    const a = Number(url.searchParams.get('a'));
    const b = Number(url.searchParams.get('b'));

    let result;

    if (url.pathname === '/sum') {
        result = sum(a, b);
    } else if (url.pathname === '/subtract') {
        result = subtract(a, b);
    } else if (url.pathname === '/division') {
        result = division(a, b);
    } else {
        res.writeHead(404);
        return res.end('Not Found');
    }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ result }));
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});