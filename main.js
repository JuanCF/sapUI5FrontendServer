var sh = require('shelljs');
var gulpLess = undefined;
var nodemonPid = undefined;

gulpLess = sh.exec('gulp default',{async:true});
//sh.exec('node server.js',{async:true});

nodemonPid = sh.exec('nodemon --config nodemon.json server.js',{async:true});

