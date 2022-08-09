// var http = require('http');
const jsonServer = require('json-server');
/*
var server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var message = 'It works!\n',
        version = 'NodeJS ' + process.versions.node + '\n',
        response = [message, version].join('\n');
    res.end(response);
});
*/

const server = jsonServer.create();
const router = jsonServer.router('usersdb.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 4001;
server.use(middlewares);
server.use(router);
server.listen(port);
// server.listen();
