var fs = require('fs');
var exec = require('child_process').exec;

// If this is the first build, run tsc (typescript compiler) so the
// ts files are compiled to the js directory
if (!fs.existsSync('js')) {
  exec('tsc');
} 
