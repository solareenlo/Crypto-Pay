/// <reference types="express" />
// Add RequestValidation Interface on to Express's Request Interface.
declare namespace Express {
  interface Request extends IFlash {
    foo: string;
  }
}

interface IFlash {
  flash(type: string, message: any): void;
}

declare module 'express-flash';
