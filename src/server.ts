import chalk from 'chalk';
import dotenv from 'dotenv';
import errorHandler from 'errorhandler';
import { NextFunction, Request, Response } from 'express';
import path from 'path';

dotenv.config({ path: '.env.example' });

import app from './app';

/**
 * Error Handler.
 */
if (process.env.NODE_ENV === 'development') {
  // only use in development
  app.use(errorHandler());
} else {
  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err);
    res.status(500).send('Server Error');
  });
}

/**
 * Start Express server.
 */
const server = app.listen(app.get('port'), () => {
  console.log(
    '%s http://localhost:%d で動いています.',
    chalk.green('✓'),
    app.get('port')
  );
  console.log(
    '%s %sモードです.',
    chalk.green('✓'),
    app.get('env')
  );
  console.log(
    '%s CTRL-C で停止します.',
    chalk.green('✓')
  );
});

export default server;
