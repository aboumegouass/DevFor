var StaticServer2 = require('static-server');
var server = new StaticServer2({
    rootPath: './dist/',
    port: 8000
});
server.start(function () {
    console.log('Server Started At Port ', server.port);
})