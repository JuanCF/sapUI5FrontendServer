var sh = require('shelljs');

sh.exec('gulp default',{async:true});
sh.exec('node server.js',{async:true});

