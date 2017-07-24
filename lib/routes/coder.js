const quizTwo = require('./lib/quizTwo');

module.exports = function coder(req, res) {
    const coder = (quizTwo);
    if (req.method === 'GET') {
        coder.find({})
            .then(coder => res.end(JSON.stringify(coder)))
            .catch(console.log)//eslint-disable-line
    }
    else if (!req.method){
        return 'Hello World';
    }
    else {
        return status(404);
    }
};