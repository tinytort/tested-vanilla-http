const http = require('http');
const quizTwo = require('../lib/quizTwo');
const server = http.createServer(quizTwo);
const port = 3000;
const url = 'mongodb://localhost:27017/coder';
db.connect(url);

server.listen(port, () => {
    console.log('http server running on', port);
});