var fs = require('fs');

var writable = fs.createWriteStream('./stream/example1.txt', {
    flags: 'w+',
    defaultEncoding: 'utf8',
    mode: 0666,
});

writable.on('finish', function() {
    console.log('write finished');
    process.exit(0);
});

writable.on('error', function(err) {
    console.log('write error - %s', err.message);
});

writable.write('My name is 火云邪神', 'utf8');

// writable.end();
writable.end('this is end');