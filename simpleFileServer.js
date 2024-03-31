// NodeJS импорт
const fs = require('fs');
const http = require('http');

// GET
function handleGetRequest(req, res) {
    const filePath = './text.txt';

    fs.readFile(filePath, () => {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(data);
    });
}

// POST
function handlePostRequest(req, res) {
    let body = '';
    req.on('data', (chunk) => {
        // Собираем полный текст запроса
        body += chunk.toString();
    });

    req.on('end', () => {
        const filePath = './text.txt';

        fs.appendFile(filePath, body, (err) => {
            if (err) {
                console.error('Ошибка добавления в файл:', err);
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Внутренняя ошибка сервера');
                return;
            }

            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('Тело запроса добавлено в файл.');
        });
    });
}

// HTTP server
const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        handleGetRequest(req, res);
    } else if (req.method === 'POST' && req.url === '/') {
        handlePostRequest(req, res);
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Not Found');
    }
});

// Server start
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});