import * as shell from 'shelljs';

shell.mkdir('-p', 'dist/public/js/lib/');
shell.cp('-R', 'src/public/js/lib', 'dist/public/js/');
shell.cp('-R', 'src/public/webfonts', 'dist/public/');
shell.cp('-R', 'src/public/images', 'dist/public/');
shell.cp('-R', 'src/public/js/bitcoin.js', 'dist/public/js/');
