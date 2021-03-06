import bcrypt from 'bcrypt-nodejs';
import crypto from 'crypto';
import mongoose from 'mongoose';
import { Request, Response, NextFunction } from 'express';

export interface IUserDocument extends mongoose.Document {
  email: String;
  password: String;
  passwordResetToken: String;
  passwordResetExpires: Date;
  largeCount: Number;
  middleCount: Number;
  smallCount: Number;
  customerNumber: Number;
  extPubKey: Array<String>;
  [index: string]: any;

  facebook: String;
  twitter: String;
  tokens: Array<{}>;

  profile: {
    name: String,
    gender: String,
    location: String,
    website: String,
    picture: String
  };

  comparePassword(arg0: String, arg1: Boolean): void;
}

export type UserModel = mongoose.Document & {
  email: string;
  password: string;
  passwordResetToken: string;
  passwordResetExpires: Date;
  largeCount: number;
  middleCount: number;
  smallCount: number;
  customerNumber: number;
  extPubKey: string[];
  [index: string]: any;

  facebook: string;
  twitter: string,
  tokens: AuthToken[];

  profile: {
    name: string;
    gender: string;
    location: string;
    website: string;
    picture: string;
  };

  comparePassword: comparePasswordFunction;
  gravatar(size: number): string;
  // gravatar: (size: number) => string;
};

type comparePasswordFunction = (candidatePassword: string, cb: (err: any, isMatch: any) => {}) => void;

export type AuthToken = {
  accessToken: string;
  kind: string;
};

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
  passwordResetToken: String,
  passwordResetExpires: Date,
  largeCount: Number,
  middleCount: Number,
  smallCount: Number,
  customerNumber: Number,
  extPubKey: Array,

  facebook: String,
  twitter: String,
  tokens: Array,

  profile: {
    name: String,
    gender: String,
    location: String,
    website: String,
    picture: String
  }
}, { timestamps: true });

/**
 * Password hash middleware.
 */
userSchema.pre('save', function save(next: NextFunction) {
  const user = this;
  if (!user.isModified('password')) { return next(); }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) { return next(err); }
    bcrypt.hash(user.password, salt, undefined, (err, hash) => {
      if (err) { return next(err); }
      user.password = hash;
      next();
    });
  });
});

/**
 * Helper method for validating user's password.
 */
userSchema.methods.comparePassword = function comparePassword(candidatePassword: string, cb: (err: any, isMatch: any) => {}) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    cb(err, isMatch);
  });
};

/**
 * Helper method for getting user's gravatar.
 */
userSchema.methods.gravatar = function gravatar(size: number) {
  if (!size) {
    size = 200;
  }
  if (!this.email) {
    return `https://gravatar.com/avatar/?s=${size}&d=retro`;
  }
  const md5 = crypto.createHash('md5').update(this.email).digest('hex');
  return `https://gravatar.com/avatar/${md5}?s=${size}&d=retro`;
};

const User = mongoose.model<IUserDocument>('User', userSchema);

export default User;
