
var argv = require('optimist')
           .usage('Count the lines in a file.\nUsage: $0')
           .demand('f')
	   .alias('f', 'file')
	   .describe('f', 'File to load.')
           .argv;

var s = require('fs').createReadStream(argv.file);

var lines = 0;

s.on('data', function(buf){
    lines += buf.toString().match(/\n/g).length;
});


s.on('end', function(){
    console.log(lines);
});
