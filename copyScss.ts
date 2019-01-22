import * as shell from 'shelljs';

shell.mkdir('-p', 'src/public/css/lib/bootstrap');
shell.mkdir('-p', 'src/public/css/lib/font-awesome');
shell.mkdir('-p', 'src/public/js/lib');
shell.mkdir('-p', 'src/public/webfonts');
shell.cp('-R', 'node_modules/bootstrap/scss', 'src/public/css/lib/bootstrap');
shell.cp('-R', 'node_modules/font-awesome/scss', 'src/public/css/lib/font-awesome');
shell.cp('-R', 'node_modules/bootstrap/dist/js/bootstrap.min.js', 'src/public/js/lib');
shell.cp('-R', 'node_modules/jquery/dist/jquery.min.js', 'src/public/js/lib');
shell.cp('-R', 'node_modules/popper.js/dist/umd/popper.min.js', 'src/public/js/lib');
shell.cp('-R', 'node_modules/axios/dist/axios.min.js', 'src/public/js/lib');
shell.cp('-R', 'node_modules/@fortawesome/fontawesome-free/webfonts/*', 'src/public/webfonts');
