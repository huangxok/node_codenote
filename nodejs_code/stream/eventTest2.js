var http = require('http');
var fs = require('fs');


http.createServer(function(req, res) {

    var filePath = './stream/3.mp3';
    var stat = fs.statSync(filePath);

    res.writeHead(200, {
        'Content-Type': 'audio/mpeg',
        'Content-Length': stat.size
    });

    var readStream = fs.createReadStream(filePath);
    readStream.on('data', function(data) {
        var tag = res.write(data)
        if (!tag) {
            readStream.pause();
        }
        //res.write(data);
    });

    res.on('drain', function() {
        console.log('drain event fired.');
        readStream.resume();
        console.log('continue write')
    });

    readStream.on('end', function() {
        res.end();
    });
}).listen(6969);