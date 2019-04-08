/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Module dependencies.
 */
const body_parser_1 = __importDefault(__webpack_require__(/*! body-parser */ "body-parser"));
const chalk_1 = __importDefault(__webpack_require__(/*! chalk */ "chalk"));
const compression_1 = __importDefault(__webpack_require__(/*! compression */ "compression"));
const dotenv_1 = __importDefault(__webpack_require__(/*! dotenv */ "dotenv"));
const express_1 = __importDefault(__webpack_require__(/*! express */ "express"));
const express_flash_1 = __importDefault(__webpack_require__(/*! express-flash */ "express-flash"));
const express_session_1 = __importDefault(__webpack_require__(/*! express-session */ "express-session"));
const express_validator_1 = __importDefault(__webpack_require__(/*! express-validator */ "express-validator"));
const lusca_1 = __importDefault(__webpack_require__(/*! lusca */ "lusca"));
const connect_mongo_1 = __importDefault(__webpack_require__(/*! connect-mongo */ "connect-mongo"));
const mongoose_1 = __importDefault(__webpack_require__(/*! mongoose */ "mongoose"));
const morgan_1 = __importDefault(__webpack_require__(/*! morgan */ "morgan"));
const passport_1 = __importDefault(__webpack_require__(/*! passport */ "passport"));
const path_1 = __importDefault(__webpack_require__(/*! path */ "path"));
const MongoStore = connect_mongo_1.default(express_session_1.default);
dotenv_1.default.config({ path: '.env.example' });
/**
 * Controllers (route handlers).
 */
const contactController = __importStar(__webpack_require__(/*! ./controllers/contact */ "./src/controllers/contact.ts"));
const homeController = __importStar(__webpack_require__(/*! ./controllers/home */ "./src/controllers/home.ts"));
const userController = __importStar(__webpack_require__(/*! ./controllers/user */ "./src/controllers/user.ts"));
/**
 * API keys and Passport configuration.
 */
const passportConfig = __webpack_require__(/*! ./config/passport */ "./src/config/passport.ts");
/**
 * Create Express server.
 */
const app = express_1.default();
/**
 * Connect to MongoDB.
 */
mongoose_1.default.set('useFindAndModify', false);
mongoose_1.default.set('useCreateIndex', true);
mongoose_1.default.set('useNewUrlParser', true);
mongoose_1.default.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/crypto-pay');
mongoose_1.default.connection.on('error', (err) => {
    console.error(err);
    console.log('%s MongoDB connection error. Please make sure MongoDB is running.', chalk_1.default.red('✗'));
    process.exit();
});
/**
 * Express configuration.
 */
app.set('port', process.env.PORT || 3000);
app.set('views', path_1.default.join(__dirname, '../views'));
app.set('view engine', 'pug');
app.use(compression_1.default());
app.use(morgan_1.default('dev'));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(express_validator_1.default());
app.use(express_session_1.default({
    resave: true,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET,
    cookie: { maxAge: 1209600000 },
    store: new MongoStore({
        url: process.env.MONGODB_URI || 'mongodb://localhost:27017/crypto-pay',
        autoReconnect: true,
    })
}));
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
app.use(express_flash_1.default());
app.use(lusca_1.default.xframe('SAMEORIGIN'));
app.use(lusca_1.default.xssProtection(true));
app.disable('x-powered-by');
app.use((req, res, next) => {
    res.locals.user = req.user;
    next();
});
app.use((req, res, next) => {
    // After successful login, redirect back to the intended page
    if (!req.user
        && req.path !== '/login'
        && req.path !== '/signup'
        && !req.path.match(/^\/auth/)
        && !req.path.match(/\./)) {
        req.session.returnTo = req.originalUrl;
    }
    else if (req.user
        && req.path === '/account') {
        req.session.returnTo = req.originalUrl;
    }
    next();
});
app.use('/', express_1.default.static(path_1.default.join(__dirname, 'public'), { maxAge: 31557600000 }));
/**
 * Primary app routes.
 */
app.get('/', homeController.home);
app.get('/login', userController.getLogin);
app.post('/login', userController.postLogin);
app.get('/logout', userController.logout);
app.get('/forgot', userController.getForgot);
app.post('/forgot', userController.postForgot);
app.get('/reset/:token', userController.getReset);
app.post('/reset/:token', userController.postReset);
app.get('/signup', userController.getSignup);
app.post('/signup', userController.postSignup);
app.get('/contact', contactController.getContact);
app.post('/contact', contactController.postContact);
app.get('/account', passportConfig.isAuthenticated, userController.getAccount);
app.post('/account/profile', passportConfig.isAuthenticated, userController.postUpdateProfile);
app.post('/account/password', passportConfig.isAuthenticated, userController.postUpdatePassword);
app.post('/account/delete', passportConfig.isAuthenticated, userController.postDeleteAccount);
app.get('/account/unlink/:provider', passportConfig.isAuthenticated, userController.getOauthUnlink);
app.get('/bitcoin', homeController.getPayBitcoin);
app.put('/bitcoin', homeController.putPizzaCount);
app.get('/others', homeController.getPayOthers);
/**
 * OAuth authentication routes. (Sign in)
 */
app.get('/auth/facebook', passport_1.default.authenticate('facebook', { scope: ['email', 'public_profile'] }));
app.get('/auth/facebook/callback', passport_1.default.authenticate('facebook', { failureRedirect: '/login' }), (req, res) => {
    res.redirect(req.session.returnTo || '/');
});
app.get('/auth/twitter', passport_1.default.authenticate('twitter'));
app.get('/auth/twitter/callback', passport_1.default.authenticate('twitter', { failureRedirect: '/login' }), (req, res) => {
    res.redirect(req.session.returnTo || '/');
});
exports.default = app;


/***/ }),

/***/ "./src/bitcoin/lib.ts":
/*!****************************!*\
  !*** ./src/bitcoin/lib.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const bitcoinjs_lib_1 = __webpack_require__(/*! bitcoinjs-lib */ "bitcoinjs-lib");
const bip32 = __importStar(__webpack_require__(/*! bip32 */ "bip32"));
// example extPubkey base58 string
exports.extPubkeys = [
    process.env.EXT_PUB_KEY_BASE58_1,
    process.env.EXT_PUB_KEY_BASE58_2,
    process.env.EXT_PUB_KEY_BASE58_3
];
// generate derived child extended public key
function generateChildPubkeyBuffer(extKeyStr, index) {
    const extkey = bip32.fromBase58(extKeyStr, bitcoinjs_lib_1.networks.testnet);
    return extkey.derive(index).publicKey;
}
exports.generateChildPubkeyBuffer = generateChildPubkeyBuffer;
// generate derived child extended public key
function generateChildPubkeyBase58(extKeyStr, index) {
    const extkey = bip32.fromBase58(extKeyStr, bitcoinjs_lib_1.networks.testnet);
    return extkey.derive(index).toBase58();
}
exports.generateChildPubkeyBase58 = generateChildPubkeyBase58;
function generateMultisigAddress(m, pubkeys) {
    return bitcoinjs_lib_1.payments.p2sh({ network: bitcoinjs_lib_1.networks.testnet,
        redeem: bitcoinjs_lib_1.payments.p2wsh({ network: bitcoinjs_lib_1.networks.testnet,
            redeem: bitcoinjs_lib_1.payments.p2ms({ network: bitcoinjs_lib_1.networks.testnet,
                m, pubkeys,
            }),
        }),
    }).address;
}
exports.generateMultisigAddress = generateMultisigAddress;


/***/ }),

/***/ "./src/config/passport.ts":
/*!********************************!*\
  !*** ./src/config/passport.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(__webpack_require__(/*! passport */ "passport"));
const passport_local_1 = __importDefault(__webpack_require__(/*! passport-local */ "passport-local"));
const passport_facebook_1 = __importDefault(__webpack_require__(/*! passport-facebook */ "passport-facebook"));
const passport_twitter_1 = __importDefault(__webpack_require__(/*! passport-twitter */ "passport-twitter"));
const lodash_1 = __importDefault(__webpack_require__(/*! lodash */ "lodash"));
const User_1 = __importDefault(__webpack_require__(/*! ../models/User */ "./src/models/User.ts"));
const LocalStrategy = passport_local_1.default.Strategy;
const FacebookStrategy = passport_facebook_1.default.Strategy;
const TwitterStrategy = passport_twitter_1.default.Strategy;
passport_1.default.serializeUser((user, done) => {
    done(undefined, user.id);
});
passport_1.default.deserializeUser((id, done) => {
    User_1.default.findById(id, (err, user) => {
        done(err, user);
    });
});
/**
 * Sign in using Email and Password.
 */
passport_1.default.use(new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
    User_1.default.findOne({ email: email.toLowerCase() }, (err, user) => {
        if (err) {
            return done(err);
        }
        if (!user) {
            return done(undefined, false, { message: `Email ${email} not found.` });
        }
        user.comparePassword(password, (err, isMatch) => {
            if (err) {
                return done(err);
            }
            if (isMatch) {
                return done(undefined, user);
            }
            return done(undefined, false, { message: 'Invalid email or password.' });
        });
    });
}));
/**
 * OAuth Strategy Overview
 *
 * - User is already logged in.
 *   - Check if there is an existing account with a provider id.
 *     - If there is, return an error message. (Account merging not supported)
 *     - Else link new OAuth account with currently logged-in user.
 * - User is not logged in.
 *   - Check if it's a returning user.
 *     - If returning user, sign in and we are done.
 *     - Else check if there is an existing account with user's email.
 *       - If there is, return an error message.
 *       - Else create a new account.
 */
/**
 * Sign in with Facebook.
 */
passport_1.default.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_ID,
    clientSecret: process.env.FACEBOOK_SECRET,
    callbackURL: '/auth/facebook/callback',
    profileFields: ['name', 'email', 'link', 'locale', 'timezone', 'gender'],
    passReqToCallback: true
}, (req, accessToken, refreshToken, profile, done) => {
    if (req.user) {
        User_1.default.findOne({ facebook: profile.id }, (err, existingUser) => {
            if (err) {
                return done(err);
            }
            if (existingUser) {
                req.flash('errors', { msg: 'There is already a Facebook account that belongs to you. Sign in with that account or delete it, then link it with your current account.' });
                done(err);
            }
            else {
                User_1.default.findById(req.user.id, (err, user) => {
                    if (err) {
                        return done(err);
                    }
                    user.facebook = profile.id;
                    user.tokens.push({ kind: 'facebook', accessToken });
                    user.profile.name = user.profile.name || `${profile.name.givenName} ${profile.name.familyName}`;
                    user.profile.gender = user.profile.gender || profile._json.gender;
                    user.profile.picture = user.profile.picture || `https://graph.facebook.com/${profile.id}/picture?type=large`;
                    user.save((err) => {
                        req.flash('info', { msg: 'Facebook account has been linked.' });
                        done(err, user);
                    });
                });
            }
        });
    }
    else {
        User_1.default.findOne({ facebook: profile.id }, (err, existingUser) => {
            if (err) {
                return done(err);
            }
            if (existingUser) {
                return done(undefined, existingUser);
            }
            User_1.default.findOne({ email: profile._json.email }, (err, existingEmailUser) => {
                if (err) {
                    return done(err);
                }
                if (existingEmailUser) {
                    req.flash('errors', { msg: 'There is already an account using this email address. Sign in to that account and link it with Facebook manually from Account Settings.' });
                    done(err);
                }
                else {
                    const user = new User_1.default();
                    user.email = profile._json.email;
                    user.facebook = profile.id;
                    user.tokens.push({ kind: 'facebook', accessToken });
                    user.profile.name = `${profile.name.givenName} ${profile.name.familyName}`;
                    user.profile.gender = profile._json.gender;
                    user.profile.picture = `https://graph.facebook.com/${profile.id}/picture?type=large`;
                    user.profile.location = (profile._json.location) ? profile._json.location.name : '';
                    user.save((err) => {
                        done(err, user);
                    });
                }
            });
        });
    }
}));
/**
 * Sign in with Twitter.
 */
passport_1.default.use(new TwitterStrategy({
    consumerKey: process.env.TWITTER_KEY,
    consumerSecret: process.env.TWITTER_SECRET,
    callbackURL: '/auth/twitter/callback',
    passReqToCallback: true
}, (req, accessToken, tokenSecret, profile, done) => {
    if (req.user) {
        User_1.default.findOne({ twitter: profile.id }, (err, existingUser) => {
            if (err) {
                return done(err);
            }
            if (existingUser) {
                req.flash('errors', { msg: 'There is already a Twitter account that belongs to you. Sign in with that account or delete it, then link it with your current account.' });
                done(err);
            }
            else {
                User_1.default.findById(req.user.id, (err, user) => {
                    if (err) {
                        return done(err);
                    }
                    user.twitter = profile.id;
                    user.tokens.push({ kind: 'twitter', accessToken, tokenSecret });
                    user.profile.name = user.profile.name || profile.displayName;
                    user.profile.location = user.profile.location || profile._json.location;
                    user.profile.picture = user.profile.picture || profile._json.profile_image_url_https;
                    user.save((err) => {
                        if (err) {
                            return done(err);
                        }
                        req.flash('info', { msg: 'Twitter account has been linked.' });
                        done(err, user);
                    });
                });
            }
        });
    }
    else {
        User_1.default.findOne({ twitter: profile.id }, (err, existingUser) => {
            if (err) {
                return done(err);
            }
            if (existingUser) {
                return done(undefined, existingUser);
            }
            const user = new User_1.default();
            // Twitter will not provide an email address.  Period.
            // But a person’s twitter username is guaranteed to be unique
            // so we can "fake" a twitter email address as follows:
            user.email = `${profile.username}@twitter.com`;
            user.twitter = profile.id;
            user.tokens.push({ kind: 'twitter', accessToken, tokenSecret });
            user.profile.name = profile.displayName;
            user.profile.location = profile._json.location;
            user.profile.picture = profile._json.profile_image_url_https;
            user.save((err) => {
                done(err, user);
            });
        });
    }
}));
/**
 * Login Required middleware.
 */
exports.isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
};
/**
 * Authorization Required middleware.
 */
exports.isAuthorized = (req, res, next) => {
    const provider = req.path.split('/').slice(-1)[0];
    if (lodash_1.default.find(req.user.tokens, { kind: provider })) {
        next();
    }
    else {
        res.redirect(`/auth/${provider}`);
    }
};


/***/ }),

/***/ "./src/controllers/contact.ts":
/*!************************************!*\
  !*** ./src/controllers/contact.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(__webpack_require__(/*! nodemailer */ "nodemailer"));
/**
 * GET /contact
 * Contact form page.
 */
exports.getContact = (req, res) => {
    const unknownUser = !(req.user);
    res.render('contact', {
        title: 'お問合せ',
        unknownUser
    });
};
/**
 * POST /contact
 * Send a contact form via Nodemailer.
 */
exports.postContact = (req, res) => {
    let fromName;
    let fromEmail;
    if (!req.user) {
        req.check('name').not().isEmpty().withMessage('お名前をお書きください.');
        req.check('email').isEmail().withMessage('メールアドレスが無効です.');
    }
    req.check('message').notEmpty().withMessage('ご用件をお書きください');
    const errors = req.validationErrors();
    if (errors) {
        req.flash('errors', errors);
        return res.redirect('/contact');
    }
    if (!req.user) {
        fromName = req.body.name;
        fromEmail = req.body.email;
    }
    else {
        fromName = req.user.profile.name || '';
        fromEmail = req.user.email;
    }
    let transporter = nodemailer_1.default.createTransport({
        service: 'SendGrid',
        auth: {
            user: process.env.SENDGRID_USER,
            pass: process.env.SENDGRID_PASSWORD
        }
    });
    const mailOptions = {
        to: 'your@email.com',
        from: `${fromName} <${fromEmail}>`,
        subject: 'Contact Form | Crypto Pay',
        text: req.body.message
    };
    return transporter.sendMail(mailOptions)
        .then(() => {
        req.flash('success', { msg: 'Email has been sent successfully!' });
        res.redirect('/contact');
    })
        .catch((err) => {
        if (err.message === 'self signed certificate in certificate chain') {
            console.log('WARNING: Self signed certificate in certificate chain.' +
                ' Retrying with the self signed certificate. Use a valid certificate if in production.');
            transporter = nodemailer_1.default.createTransport({
                service: 'SendGrid',
                auth: {
                    user: process.env.SENDGRID_USER,
                    pass: process.env.SENDGRID_PASSWORD
                },
                tls: {
                    rejectUnauthorized: false
                }
            });
            return transporter.sendMail(mailOptions);
        }
        console.log('ERROR: Could not send contact email after security downgrade.\n', err);
        req.flash('errors', { msg: 'Error sending the message. Please try again shortly.' });
        return false;
    })
        .then((result) => {
        if (result) {
            req.flash('success', { msg: 'Email has been sent successfully!' });
            return res.redirect('/contact');
        }
    })
        .catch((err) => {
        console.log('ERROR: Could not send contact email.\n', err);
        req.flash('errors', { msg: 'Error sending the message. Please try again shortly.' });
        return res.redirect('/contact');
    });
};


/***/ }),

/***/ "./src/controllers/home.ts":
/*!*********************************!*\
  !*** ./src/controllers/home.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(__webpack_require__(/*! ../models/User */ "./src/models/User.ts"));
const lib = __webpack_require__(/*! ../bitcoin/lib */ "./src/bitcoin/lib.ts");
/**
 * GET /
 * Home page.
 */
exports.home = (req, res) => {
    res.render('home', {
        title: 'ホーム'
    });
};
exports.getPayBitcoin = (req, res) => {
    if (!req.user) {
        req.flash('errors', { msg: '詳細を表示するにはログインしてください.証明書を発行するにはログインしてください.' });
        return res.redirect('/');
    }
    if (!req.user) {
        return res.redirect('/');
    }
    const tbtc = {
        price: [0.005, 0.003, 0.001],
        count: [0, 0, 0],
        amount: [0, 0, 0],
        address: ['large', 'middle', 'small']
    };
    const { id } = req.user;
    User_1.default.find({ _id: id }, (findErr, user) => {
        if (findErr)
            res.status(500);
        else {
            res.status(200);
            tbtc.count[0] = user[0].largeCount;
            tbtc.count[1] = user[0].middleCount;
            tbtc.count[2] = user[0].smallCount;
            for (let i = 0; i < 3; i++) {
                tbtc.amount[i] = tbtc.price[i] * tbtc.count[i];
                const pubKeysBase58 = [];
                // 環境変数にあるpubkeys -> customerNumberによる子拡張公開鍵 -> ピザのサイズによる子拡張公開鍵を生成
                for (let j = 0; j < 3; j++)
                    pubKeysBase58.push(lib.generateChildPubkeyBase58(user[0].extPubKey[j], i));
                const pubKeys = [];
                // 環境変数にあるpubkeys -> customerNumberによる子拡張公開鍵 -> ピザのサイズによる子拡張公開鍵 -> ピザの個数による子拡張公開鍵を生成
                for (let j = 0; j < 3; j++)
                    pubKeys.push(lib.generateChildPubkeyBuffer(pubKeysBase58[j], Number(tbtc.count[i])));
                tbtc.address[i] = lib.generateMultisigAddress(3, pubKeys);
            }
            res.render('pay/bitcoin', {
                title: 'Bitcoin Pay',
                tbtc
            });
        }
    });
};
const getCount = (user, size) => {
    if (size == 0) {
        return user.largeCount;
    }
    else if (size == 1) {
        return user.middleCount;
    }
    else if (size == 2) {
        return user.smallCount;
    }
    else {
        return 0;
    }
};
exports.putPizzaCount = (req, res) => __awaiter(this, void 0, void 0, function* () {
    const { id } = req.user; // mongodbで一意に与えられるユーザーのidを取得
    const count = req.body.data.count; // 何個ずつ増やしたり減らしたりするかの個数
    const size = req.body.data.size; // ピザのサイズ. 0 = large, 1 = middle, 2 = small.
    const prices = [0.005, 0.003, 0.001];
    try {
        yield User_1.default.findById(id, (err, user) => {
            if (err)
                res.status(500).send();
            const pizzaCount = getCount(user, size); // ピザの枚数
            if ((pizzaCount >= 0 && count == 1) || (pizzaCount > 0 && count == -1)) {
                if (size == 0) {
                    User_1.default.findByIdAndUpdate(id, { $inc: { largeCount: count } }, err => {
                        if (err)
                            res.status(500).send();
                    });
                }
                else if (size == 1) {
                    User_1.default.findByIdAndUpdate(id, { $inc: { middleCount: count } }, err => {
                        if (err)
                            res.status(500).send();
                    });
                }
                else if (size == 2) {
                    User_1.default.findByIdAndUpdate(id, { $inc: { smallCount: count } }, err => {
                        if (err)
                            res.status(500).send();
                    });
                }
                else {
                    res.status(500).send();
                }
            }
        }).exec();
    }
    catch (_a) {
        res.status(500).send();
    }
    try {
        yield User_1.default.find({ _id: id }, (findErr, user) => {
            if (findErr)
                res.status(500).send();
            const pizzaCount = getCount(user[0], size); // User.finde({_id: id})でDB検索すると結果が配列で返ってくるのでuserは使えずにuser[0]を使ってる.
            const pubKeysBase58 = [];
            // 環境変数にあるpubkeys -> customerNumberによる子拡張公開鍵 -> ピザのサイズによる子拡張公開鍵を生成
            for (let i = 0; i < 3; i++)
                pubKeysBase58.push(lib.generateChildPubkeyBase58(user[0].extPubKey[i], size));
            const pubKeys = [];
            // 環境変数にあるpubkeys -> customerNumberによる子拡張公開鍵 -> ピザのサイズによる子拡張公開鍵 -> ピザの個数による子拡張公開鍵を生成
            for (let i = 0; i < 3; i++)
                pubKeys.push(lib.generateChildPubkeyBuffer(pubKeysBase58[i], pizzaCount));
            const address = lib.generateMultisigAddress(3, pubKeys);
            const amount = prices[size] * Number(pizzaCount);
            const data = {
                address: `https://chart.apis.google.com/chart?cht=qr&chs=300x300&chl=bitcoin:${address}?amount=${amount}`,
                count: pizzaCount,
            };
            res.status(200).send(data);
        }).exec();
    }
    catch (_b) {
        res.status(500).send();
    }
});
exports.getPayOthers = (req, res) => {
    res.render('pay/others', {
        title: 'Others Pay'
    });
};


/***/ }),

/***/ "./src/controllers/user.ts":
/*!*********************************!*\
  !*** ./src/controllers/user.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(__webpack_require__(/*! crypto */ "crypto"));
const nodemailer_1 = __importDefault(__webpack_require__(/*! nodemailer */ "nodemailer"));
const passport_1 = __importDefault(__webpack_require__(/*! passport */ "passport"));
const util_1 = __webpack_require__(/*! util */ "util");
const User_1 = __importDefault(__webpack_require__(/*! ../models/User */ "./src/models/User.ts"));
const Count_1 = __importDefault(__webpack_require__(/*! ../models/Count */ "./src/models/Count.ts"));
const lib = __webpack_require__(/*! ../bitcoin/lib */ "./src/bitcoin/lib.ts");
const randomBytesAsync = util_1.promisify(crypto_1.default.randomBytes);
/**
 * GET /login
 * Login page.
 */
exports.getLogin = (req, res) => {
    if (req.user) {
        return res.redirect('/');
    }
    res.render('account/login', {
        title: 'ログイン'
    });
};
/**
 * POST /login
 * Sign in using email and password.
 */
exports.postLogin = (req, res, next) => {
    req.assert('email', '無効なメールアドレスです.').isEmail();
    req.assert('password', 'パスワードを空白にすることはできません.').notEmpty();
    req.sanitize('email').normalizeEmail({ gmail_remove_dots: false });
    const errors = req.validationErrors();
    if (errors) {
        req.flash('errors', errors);
        return res.redirect('/login');
    }
    passport_1.default.authenticate('local', (err, user, info) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            req.flash('errors', info);
            return res.redirect('/login');
        }
        req.logIn(user, (err) => {
            if (err) {
                return next(err);
            }
            req.flash('success', { msg: 'ログインに成功しました.' });
            res.redirect(req.session.returnTo || '/');
        });
    })(req, res, next);
};
/**
 * GET /logout
 * Log out.
 */
exports.logout = (req, res) => {
    req.logout();
    req.session.destroy((err) => {
        if (err) {
            console.log('Error : Failed to destroy the session during logout.', err);
        }
        req.user = undefined;
        res.redirect('/');
    });
};
/**
 * GET /signup
 * Signup page.
 */
exports.getSignup = (req, res) => {
    if (req.user) {
        return res.redirect('/');
    }
    res.render('account/signup', {
        title: 'アカウント作成'
    });
};
/**
 * POST /signup
 * Create a new local account.
 */
exports.postSignup = (req, res, next) => {
    req.assert('email', '無効なメールアドレスです.').isEmail();
    req.assert('password', 'パスワードは4文字以上にしてください.').len({ min: 4 });
    req.assert('confirmPassword', 'パスワードが一致しません.').equals(req.body.password);
    req.sanitize('email').normalizeEmail({ gmail_remove_dots: false });
    const errors = req.validationErrors();
    if (errors) {
        req.flash('errors', errors);
        return res.redirect('/signup');
    }
    // 顧客のカウンターを保存してる
    Count_1.default.findOne({ name: 'sola' }, (err, count) => {
        if (err) {
            return next(err);
        }
        if (!count) {
            const count = new Count_1.default({
                name: 'sola',
                customerCount: 0
            });
            count.save((err) => {
                if (err) {
                    return next(err);
                }
            });
        }
        else
            console.log('Counter exist.');
    });
    // 顧客のjsonを新規作成
    const user = new User_1.default({
        email: req.body.email,
        password: req.body.password,
        largeCount: 0,
        middleCount: 0,
        smallCount: 0,
        customerNumber: 0,
        extPubKey: ['a', 'b', 'c']
    });
    User_1.default.findOne({ email: req.body.email }, (err, existingUser) => {
        if (err) {
            return next(err);
        }
        if (existingUser) {
            req.flash('errors', { msg: 'このメールアドレスのアカウントはすでに存在しています.' });
            return res.redirect('/signup');
        }
        // 顧客のカウントを1つ増やして保存してる
        Count_1.default.findOneAndUpdate({ name: 'sola' }, { $inc: { 'customerCount': 1 } }, { new: true }, (err, count) => {
            if (err) {
                return next(err);
            }
            user.customerNumber = Number(count.customerCount);
            for (let i = 0; i < 3; i++) {
                user.extPubKey[i] = lib.generateChildPubkeyBase58(lib.extPubkeys[i], Number(user.customerNumber));
            }
            user.save((err) => {
                if (err) {
                    return next(err);
                }
                req.logIn(user, (err) => {
                    if (err) {
                        return next(err);
                    }
                    res.redirect('/');
                });
            });
        });
    });
};
/**
 * GET /forgot
 * Forgot Password page.
 */
exports.getForgot = (req, res) => {
    if (req.isAuthenticated()) {
        return res.redirect('/');
    }
    res.render('account/forgot', {
        title: 'パスワードをお忘れの方へ'
    });
};
/**
 * POST /forgot
 * Create a random token, then the send user an email with a reset link.
 */
exports.postForgot = (req, res, next) => {
    req.assert('email', '有効なメールアドレスを入力してください.').isEmail();
    req.sanitize('email').normalizeEmail({ gmail_remove_dots: false });
    const errors = req.validationErrors();
    if (errors) {
        req.flash('errors', errors);
        return res.redirect('/forgot');
    }
    const createRandomToken = randomBytesAsync(16)
        .then(buf => buf.toString('hex'));
    const setRandomToken = (token) => User_1.default
        .findOne({ email: req.body.email })
        .then((user) => {
        if (!user) {
            req.flash('errors', { msg: 'このメールアドレスのアカウントは存在しません.' });
        }
        else {
            user.passwordResetToken = token;
            user.passwordResetExpires = Date.now() + 3600000; // 1 hour
            user = user.save();
        }
        return user;
    });
    const sendForgotPasswordEmail = (user) => {
        if (!user) {
            return;
        }
        const token = user.passwordResetToken;
        let transporter = nodemailer_1.default.createTransport({
            service: 'SendGrid',
            auth: {
                user: process.env.SENDGRID_USER,
                pass: process.env.SENDGRID_PASSWORD
            }
        });
        const mailOptions = {
            to: user.email,
            from: 'crypto@pay.com',
            subject: 'Crypto Payのパスワードリセット',
            text: `You are receiving this email because you (or someone else) have requested the reset of the password for your account.\n\n
        Please click on the following link, or paste this into your browser to complete the process:\n\n
        http://${req.headers.host}/reset/${token}\n\n
        If you did not request this, please ignore this email and your password will remain unchanged.\n`
        };
        return transporter.sendMail(mailOptions)
            .then(() => {
            req.flash('info', { msg: `An e-mail has been sent to ${user.email} with further instructions.` });
        })
            .catch((err) => {
            if (err.message === 'self signed certificate in certificate chain') {
                console.log('WARNING: Self signed certificate in certificate chain.' +
                    ' Retrying with the self signed certificate. Use a valid certificate if in production.');
                transporter = nodemailer_1.default.createTransport({
                    service: 'SendGrid',
                    auth: {
                        user: process.env.SENDGRID_USER,
                        pass: process.env.SENDGRID_PASSWORD
                    },
                    tls: {
                        rejectUnauthorized: false
                    }
                });
                return transporter.sendMail(mailOptions)
                    .then(() => {
                    req.flash('info', { msg: `An e-mail has been sent to ${user.email} with further instructions.` });
                });
            }
            console.log('ERROR: Could not send forgot password email after security downgrade.\n', err);
            req.flash('errors', { msg: 'Error sending the password reset message. Please try again shortly.' });
            return err;
        });
    };
    createRandomToken
        .then(setRandomToken)
        .then(sendForgotPasswordEmail)
        .then(() => res.redirect('/forgot'))
        .catch(next);
};
/**
 * GET /reset/:token
 * Reset Password page.
 */
exports.getReset = (req, res, next) => {
    if (req.isAuthenticated()) {
        return res.redirect('/');
    }
    User_1.default
        .findOne({ passwordResetToken: req.params.token })
        .where('passwordResetExpires').gt(Date.now())
        .exec((err, user) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            req.flash('errors', { msg: 'パスワードリセットトークンが無効か期限切れです.' });
            return res.redirect('/forgot');
        }
        res.render('account/reset', {
            title: 'パスワードリセット'
        });
    });
};
/**
 * POST /reset/:token
 * Process the reset password request.
 */
exports.postReset = (req, res, next) => {
    req.assert('password', 'パスワードは4文字以上にしてください.').len({ min: 4 });
    req.assert('confirm', 'パスワードが一致しません.').equals(req.body.password);
    const errors = req.validationErrors();
    if (errors) {
        req.flash('errors', errors);
        return res.redirect('back');
    }
    const resetPassword = () => User_1.default
        .findOne({ passwordResetToken: req.params.token })
        .where('passwordResetExpires').gt(Date.now())
        .then((user) => {
        if (!user) {
            req.flash('errors', { msg: 'パスワードリセットトークンが無効か期限切れです.' });
            return res.redirect('back');
        }
        user.password = req.body.password;
        user.passwordResetToken = undefined;
        user.passwordResetExpires = undefined;
        return user.save().then(() => new Promise((resolve, reject) => {
            req.logIn(user, (err) => {
                if (err) {
                    return reject(err);
                }
                resolve(user);
            });
        }));
    });
    const sendResetPasswordEmail = (user) => {
        if (!user) {
            return;
        }
        let transporter = nodemailer_1.default.createTransport({
            service: 'SendGrid',
            auth: {
                user: process.env.SENDGRID_USER,
                pass: process.env.SENDGRID_PASSWORD
            }
        });
        const mailOptions = {
            to: user.email,
            from: 'test@example.com',
            subject: 'Crypto Payのパスワードを変更しました.',
            text: `Hello,\n\nThis is a confirmation that the password for your account ${user.email} has just been changed.\n`
        };
        return transporter.sendMail(mailOptions)
            .then(() => {
            req.flash('success', { msg: 'パスワード変更に成功しました.' });
        })
            .catch((err) => {
            if (err.message === 'self signed certificate in certificate chain') {
                console.log('WARNING: Self signed certificate in certificate chain. Retrying with the self signed certificate. Use a valid certificate if in production.');
                transporter = nodemailer_1.default.createTransport({
                    service: 'SendGrid',
                    auth: {
                        user: process.env.SENDGRID_USER,
                        pass: process.env.SENDGRID_PASSWORD
                    },
                    tls: {
                        rejectUnauthorized: false
                    }
                });
                return transporter.sendMail(mailOptions)
                    .then(() => {
                    req.flash('success', { msg: 'パスワード変更に成功しました.' });
                });
            }
            console.log('ERROR: Could not send password reset confirmation email after security downgrade.\n', err);
            req.flash('warning', { msg: 'Your password has been changed, however we were unable to send you a confirmation email. We will be looking into it shortly.' });
            return err;
        });
    };
    resetPassword()
        .then(sendResetPasswordEmail)
        .then(() => { if (!res.finished)
        res.redirect('/'); })
        .catch(err => next(err));
};
/**
 * GET /account
 * Profile page.
 */
exports.getAccount = (req, res) => {
    res.render('account/profile', {
        title: 'Account Management'
    });
};
/**
 * POST /account/profile
 * Update profile information.
 */
exports.postUpdateProfile = (req, res, next) => {
    req.assert('email', '有効なメールアドレスを入力してください.').isEmail();
    req.sanitize('email').normalizeEmail({ gmail_remove_dots: false });
    const errors = req.validationErrors();
    if (errors) {
        req.flash('errors', errors);
        return res.redirect('/account');
    }
    User_1.default.findById(req.user.id, (err, user) => {
        if (err) {
            return next(err);
        }
        user.email = req.body.email || '';
        user.profile.name = req.body.name || '';
        user.profile.gender = req.body.gender || '';
        user.profile.location = req.body.location || '';
        user.profile.website = req.body.website || '';
        user.save((err) => {
            if (err) {
                if (err.code === 11000) {
                    req.flash('errors', { msg: '入力されたメールアドレスはすでに存在しています.' });
                    return res.redirect('/account');
                }
                return next(err);
            }
            req.flash('success', { msg: 'プロフィール情報を更新しました.' });
            res.redirect('/account');
        });
    });
};
/**
 * POST /account/password
 * Update current password.
 */
exports.postUpdatePassword = (req, res, next) => {
    req.assert('password', 'パスワードは4文字以上にしてください.').len({ min: 4 });
    req.assert('confirmPassword', 'パスワードが一致しません.').equals(req.body.password);
    const errors = req.validationErrors();
    if (errors) {
        req.flash('errors', errors);
        return res.redirect('/account');
    }
    User_1.default.findById(req.user.id, (err, user) => {
        if (err) {
            return next(err);
        }
        user.password = req.body.password;
        user.save((err) => {
            if (err) {
                return next(err);
            }
            req.flash('success', { msg: 'パスワードを変更しました.' });
            res.redirect('/account');
        });
    });
};
/**
 * POST /account/delete
 * Delete user account.
 */
exports.postDeleteAccount = (req, res, next) => {
    User_1.default.deleteOne({ _id: req.user.id }, (err) => {
        if (err) {
            return next(err);
        }
        req.logout();
        req.flash('info', { msg: 'アカウントを削除しました.' });
        res.redirect('/');
    });
};
/**
 * GET /account/unlink/:provider
 * Unlink OAuth provider.
 */
exports.getOauthUnlink = (req, res, next) => {
    const { provider } = req.params;
    User_1.default.findById(req.user.id, (err, user) => {
        if (err) {
            return next(err);
        }
        user[provider] = undefined;
        user.tokens = user.tokens.filter((token) => token.kind !== provider);
        user.save((err) => {
            if (err) {
                return next(err);
            }
            req.flash('info', { msg: `${provider}アカウントとの連携を解除しました.` });
            res.redirect('/account');
        });
    });
};


/***/ }),

/***/ "./src/models/Count.ts":
/*!*****************************!*\
  !*** ./src/models/Count.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(__webpack_require__(/*! mongoose */ "mongoose"));
const countSchema = new mongoose_1.default.Schema({
    name: String,
    customerCount: Number
});
const Count = mongoose_1.default.model('Count', countSchema);
exports.default = Count;


/***/ }),

/***/ "./src/models/User.ts":
/*!****************************!*\
  !*** ./src/models/User.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_nodejs_1 = __importDefault(__webpack_require__(/*! bcrypt-nodejs */ "bcrypt-nodejs"));
const crypto_1 = __importDefault(__webpack_require__(/*! crypto */ "crypto"));
const mongoose_1 = __importDefault(__webpack_require__(/*! mongoose */ "mongoose"));
const userSchema = new mongoose_1.default.Schema({
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
userSchema.pre('save', function save(next) {
    const user = this;
    if (!user.isModified('password')) {
        return next();
    }
    bcrypt_nodejs_1.default.genSalt(10, (err, salt) => {
        if (err) {
            return next(err);
        }
        bcrypt_nodejs_1.default.hash(user.password, salt, undefined, (err, hash) => {
            if (err) {
                return next(err);
            }
            user.password = hash;
            next();
        });
    });
});
/**
 * Helper method for validating user's password.
 */
userSchema.methods.comparePassword = function comparePassword(candidatePassword, cb) {
    bcrypt_nodejs_1.default.compare(candidatePassword, this.password, (err, isMatch) => {
        cb(err, isMatch);
    });
};
/**
 * Helper method for getting user's gravatar.
 */
userSchema.methods.gravatar = function gravatar(size) {
    if (!size) {
        size = 200;
    }
    if (!this.email) {
        return `https://gravatar.com/avatar/?s=${size}&d=retro`;
    }
    const md5 = crypto_1.default.createHash('md5').update(this.email).digest('hex');
    return `https://gravatar.com/avatar/${md5}?s=${size}&d=retro`;
};
const User = mongoose_1.default.model('User', userSchema);
exports.default = User;


/***/ }),

/***/ "./src/server.ts":
/*!***********************!*\
  !*** ./src/server.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(__webpack_require__(/*! chalk */ "chalk"));
const dotenv_1 = __importDefault(__webpack_require__(/*! dotenv */ "dotenv"));
const errorhandler_1 = __importDefault(__webpack_require__(/*! errorhandler */ "errorhandler"));
dotenv_1.default.config({ path: '.env.example' });
const app_1 = __importDefault(__webpack_require__(/*! ./app */ "./src/app.ts"));
/**
 * Error Handler.
 */
if (true) {
    // only use in development
    app_1.default.use(errorhandler_1.default());
}
else {}
/**
 * Start Express server.
 */
const server = app_1.default.listen(app_1.default.get('port'), () => {
    console.log('%s http://localhost:%d で動いています.', chalk_1.default.green('✓'), app_1.default.get('port'));
    console.log('%s %sモードです.', chalk_1.default.green('✓'), app_1.default.get('env'));
    console.log('%s CTRL-C で停止します.', chalk_1.default.green('✓'));
});
exports.default = server;


/***/ }),

/***/ "bcrypt-nodejs":
/*!********************************!*\
  !*** external "bcrypt-nodejs" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bcrypt-nodejs");

/***/ }),

/***/ "bip32":
/*!************************!*\
  !*** external "bip32" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bip32");

/***/ }),

/***/ "bitcoinjs-lib":
/*!********************************!*\
  !*** external "bitcoinjs-lib" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bitcoinjs-lib");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "chalk":
/*!************************!*\
  !*** external "chalk" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("chalk");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),

/***/ "connect-mongo":
/*!********************************!*\
  !*** external "connect-mongo" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("connect-mongo");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),

/***/ "errorhandler":
/*!*******************************!*\
  !*** external "errorhandler" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("errorhandler");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "express-flash":
/*!********************************!*\
  !*** external "express-flash" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express-flash");

/***/ }),

/***/ "express-session":
/*!**********************************!*\
  !*** external "express-session" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),

/***/ "express-validator":
/*!************************************!*\
  !*** external "express-validator" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express-validator");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "lusca":
/*!************************!*\
  !*** external "lusca" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lusca");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nodemailer");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),

/***/ "passport-facebook":
/*!************************************!*\
  !*** external "passport-facebook" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("passport-facebook");

/***/ }),

/***/ "passport-local":
/*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("passport-local");

/***/ }),

/***/ "passport-twitter":
/*!***********************************!*\
  !*** external "passport-twitter" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("passport-twitter");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYml0Y29pbi9saWIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy9wYXNzcG9ydC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvY29udGFjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvaG9tZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvdXNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL0NvdW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvVXNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImJjcnlwdC1ub2RlanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiaXAzMlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJpdGNvaW5qcy1saWJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNoYWxrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29tcHJlc3Npb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb25uZWN0LW1vbmdvXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY3J5cHRvXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZG90ZW52XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXJyb3JoYW5kbGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3MtZmxhc2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzLXNlc3Npb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzLXZhbGlkYXRvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImx1c2NhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9uZ29vc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb3JnYW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJub2RlbWFpbGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGFzc3BvcnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXNzcG9ydC1mYWNlYm9va1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhc3Nwb3J0LWxvY2FsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGFzc3BvcnQtdHdpdHRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1dGlsXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7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Q1QsbUJBQW1CLEVBQ25CLGVBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQ2pCLENBQUM7QUFDSixDQUFDLENBQUMsQ0FBQztBQUVILGtCQUFlLE1BQU0sQ0FBQzs7Ozs7Ozs7Ozs7O0FDM0N0QiwwQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxpQyIsImZpbGUiOiJzZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9zZXJ2ZXIudHNcIik7XG4iLCIvKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cbmltcG9ydCBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJztcbmltcG9ydCBjaGFsayBmcm9tICdjaGFsayc7XG5pbXBvcnQgY29tcHJlc3Npb24gZnJvbSAnY29tcHJlc3Npb24nO1xuaW1wb3J0IGRvdGVudiBmcm9tICdkb3RlbnYnO1xuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgZmxhc2ggZnJvbSAnZXhwcmVzcy1mbGFzaCc7XG5pbXBvcnQgc2Vzc2lvbiBmcm9tICdleHByZXNzLXNlc3Npb24nO1xuaW1wb3J0IGV4cHJlc3NWYWxpZGF0b3IgZnJvbSAnZXhwcmVzcy12YWxpZGF0b3InO1xuaW1wb3J0IHsgY2hlY2ssIGJvZHksIHF1ZXJ5LCBwYXJhbSwgdmFsaWRhdGlvblJlc3VsdCB9IGZyb20gJ2V4cHJlc3MtdmFsaWRhdG9yL2NoZWNrJztcbmltcG9ydCBsdXNjYSBmcm9tICdsdXNjYSc7XG5pbXBvcnQgbW9uZ28gZnJvbSAnY29ubmVjdC1tb25nbyc7XG5pbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuaW1wb3J0IGxvZ2dlciBmcm9tICdtb3JnYW4nO1xuaW1wb3J0IHBhc3Nwb3J0IGZyb20gJ3Bhc3Nwb3J0JztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuXG5jb25zdCBNb25nb1N0b3JlID0gbW9uZ28oc2Vzc2lvbik7XG5cbmRvdGVudi5jb25maWcoeyBwYXRoOiAnLmVudi5leGFtcGxlJyB9KTtcblxuLyoqXG4gKiBDb250cm9sbGVycyAocm91dGUgaGFuZGxlcnMpLlxuICovXG5pbXBvcnQgKiBhcyBjb250YWN0Q29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXJzL2NvbnRhY3QnO1xuaW1wb3J0ICogYXMgaG9tZUNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVycy9ob21lJztcbmltcG9ydCAqIGFzIHVzZXJDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcnMvdXNlcic7XG5cbi8qKlxuICogQVBJIGtleXMgYW5kIFBhc3Nwb3J0IGNvbmZpZ3VyYXRpb24uXG4gKi9cbmNvbnN0IHBhc3Nwb3J0Q29uZmlnID0gcmVxdWlyZSgnLi9jb25maWcvcGFzc3BvcnQnKTtcblxuLyoqXG4gKiBDcmVhdGUgRXhwcmVzcyBzZXJ2ZXIuXG4gKi9cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcblxuLyoqXG4gKiBDb25uZWN0IHRvIE1vbmdvREIuXG4gKi9cbm1vbmdvb3NlLnNldCgndXNlRmluZEFuZE1vZGlmeScsIGZhbHNlKTtcbm1vbmdvb3NlLnNldCgndXNlQ3JlYXRlSW5kZXgnLCB0cnVlKTtcbm1vbmdvb3NlLnNldCgndXNlTmV3VXJsUGFyc2VyJywgdHJ1ZSk7XG5tb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJIHx8ICdtb25nb2RiOi8vbG9jYWxob3N0OjI3MDE3L2NyeXB0by1wYXknKTtcbm1vbmdvb3NlLmNvbm5lY3Rpb24ub24oJ2Vycm9yJywgKGVycikgPT4ge1xuICBjb25zb2xlLmVycm9yKGVycik7XG4gIGNvbnNvbGUubG9nKFxuICAgICclcyBNb25nb0RCIGNvbm5lY3Rpb24gZXJyb3IuIFBsZWFzZSBtYWtlIHN1cmUgTW9uZ29EQiBpcyBydW5uaW5nLicsXG4gICAgY2hhbGsucmVkKCfinJcnKVxuICApO1xuICBwcm9jZXNzLmV4aXQoKTtcbn0pO1xuXG4vKipcbiAqIEV4cHJlc3MgY29uZmlndXJhdGlvbi5cbiAqL1xuYXBwLnNldCgncG9ydCcsIHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMCk7XG5hcHAuc2V0KCd2aWV3cycsIHBhdGguam9pbihfX2Rpcm5hbWUsICcuLi92aWV3cycpKTtcbmFwcC5zZXQoJ3ZpZXcgZW5naW5lJywgJ3B1ZycpO1xuYXBwLnVzZShjb21wcmVzc2lvbigpKTtcbmFwcC51c2UobG9nZ2VyKCdkZXYnKSk7XG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcbmFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IHRydWUgfSkpO1xuYXBwLnVzZShleHByZXNzVmFsaWRhdG9yKCkpO1xuYXBwLnVzZShzZXNzaW9uKHtcbiAgcmVzYXZlOiB0cnVlLFxuICBzYXZlVW5pbml0aWFsaXplZDogdHJ1ZSxcbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5TRVNTSU9OX1NFQ1JFVCxcbiAgY29va2llOiB7IG1heEFnZTogMTIwOTYwMDAwMCB9LCAvLyB0d28gd2Vla3MgaW4gbWlsbGlzZWNvbmRzXG4gIHN0b3JlOiBuZXcgTW9uZ29TdG9yZSh7XG4gICAgdXJsOiBwcm9jZXNzLmVudi5NT05HT0RCX1VSSSB8fCAnbW9uZ29kYjovL2xvY2FsaG9zdDoyNzAxNy9jcnlwdG8tcGF5JyxcbiAgICBhdXRvUmVjb25uZWN0OiB0cnVlLFxuICB9KVxufSkpO1xuYXBwLnVzZShwYXNzcG9ydC5pbml0aWFsaXplKCkpO1xuYXBwLnVzZShwYXNzcG9ydC5zZXNzaW9uKCkpO1xuYXBwLnVzZShmbGFzaCgpKTtcbmFwcC51c2UobHVzY2EueGZyYW1lKCdTQU1FT1JJR0lOJykpO1xuYXBwLnVzZShsdXNjYS54c3NQcm90ZWN0aW9uKHRydWUpKTtcbmFwcC5kaXNhYmxlKCd4LXBvd2VyZWQtYnknKTtcbmFwcC51c2UoKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIHJlcy5sb2NhbHMudXNlciA9IHJlcS51c2VyO1xuICBuZXh0KCk7XG59KTtcbmFwcC51c2UoKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIC8vIEFmdGVyIHN1Y2Nlc3NmdWwgbG9naW4sIHJlZGlyZWN0IGJhY2sgdG8gdGhlIGludGVuZGVkIHBhZ2VcbiAgaWYgKCFyZXEudXNlclxuICAgICYmIHJlcS5wYXRoICE9PSAnL2xvZ2luJ1xuICAgICYmIHJlcS5wYXRoICE9PSAnL3NpZ251cCdcbiAgICAmJiAhcmVxLnBhdGgubWF0Y2goL15cXC9hdXRoLylcbiAgICAmJiAhcmVxLnBhdGgubWF0Y2goL1xcLi8pKSB7XG4gICAgcmVxLnNlc3Npb24ucmV0dXJuVG8gPSByZXEub3JpZ2luYWxVcmw7XG4gIH0gZWxzZSBpZiAocmVxLnVzZXJcbiAgICAmJiByZXEucGF0aCA9PT0gJy9hY2NvdW50Jykge1xuICAgIHJlcS5zZXNzaW9uLnJldHVyblRvID0gcmVxLm9yaWdpbmFsVXJsO1xuICB9XG4gIG5leHQoKTtcbn0pO1xuYXBwLnVzZSgnLycsIGV4cHJlc3Muc3RhdGljKHBhdGguam9pbihfX2Rpcm5hbWUsICdwdWJsaWMnKSwgeyBtYXhBZ2U6IDMxNTU3NjAwMDAwIH0pKTtcblxuLyoqXG4gKiBQcmltYXJ5IGFwcCByb3V0ZXMuXG4gKi9cbmFwcC5nZXQoJy8nLCBob21lQ29udHJvbGxlci5ob21lKTtcbmFwcC5nZXQoJy9sb2dpbicsIHVzZXJDb250cm9sbGVyLmdldExvZ2luKTtcbmFwcC5wb3N0KCcvbG9naW4nLCB1c2VyQ29udHJvbGxlci5wb3N0TG9naW4pO1xuYXBwLmdldCgnL2xvZ291dCcsIHVzZXJDb250cm9sbGVyLmxvZ291dCk7XG5hcHAuZ2V0KCcvZm9yZ290JywgdXNlckNvbnRyb2xsZXIuZ2V0Rm9yZ290KTtcbmFwcC5wb3N0KCcvZm9yZ290JywgdXNlckNvbnRyb2xsZXIucG9zdEZvcmdvdCk7XG5hcHAuZ2V0KCcvcmVzZXQvOnRva2VuJywgdXNlckNvbnRyb2xsZXIuZ2V0UmVzZXQpO1xuYXBwLnBvc3QoJy9yZXNldC86dG9rZW4nLCB1c2VyQ29udHJvbGxlci5wb3N0UmVzZXQpO1xuYXBwLmdldCgnL3NpZ251cCcsIHVzZXJDb250cm9sbGVyLmdldFNpZ251cCk7XG5hcHAucG9zdCgnL3NpZ251cCcsIHVzZXJDb250cm9sbGVyLnBvc3RTaWdudXApO1xuYXBwLmdldCgnL2NvbnRhY3QnLCBjb250YWN0Q29udHJvbGxlci5nZXRDb250YWN0KTtcbmFwcC5wb3N0KCcvY29udGFjdCcsIGNvbnRhY3RDb250cm9sbGVyLnBvc3RDb250YWN0KTtcbmFwcC5nZXQoJy9hY2NvdW50JywgcGFzc3BvcnRDb25maWcuaXNBdXRoZW50aWNhdGVkLCB1c2VyQ29udHJvbGxlci5nZXRBY2NvdW50KTtcbmFwcC5wb3N0KCcvYWNjb3VudC9wcm9maWxlJywgcGFzc3BvcnRDb25maWcuaXNBdXRoZW50aWNhdGVkLCB1c2VyQ29udHJvbGxlci5wb3N0VXBkYXRlUHJvZmlsZSk7XG5hcHAucG9zdCgnL2FjY291bnQvcGFzc3dvcmQnLCBwYXNzcG9ydENvbmZpZy5pc0F1dGhlbnRpY2F0ZWQsIHVzZXJDb250cm9sbGVyLnBvc3RVcGRhdGVQYXNzd29yZCk7XG5hcHAucG9zdCgnL2FjY291bnQvZGVsZXRlJywgcGFzc3BvcnRDb25maWcuaXNBdXRoZW50aWNhdGVkLCB1c2VyQ29udHJvbGxlci5wb3N0RGVsZXRlQWNjb3VudCk7XG5hcHAuZ2V0KCcvYWNjb3VudC91bmxpbmsvOnByb3ZpZGVyJywgcGFzc3BvcnRDb25maWcuaXNBdXRoZW50aWNhdGVkLCB1c2VyQ29udHJvbGxlci5nZXRPYXV0aFVubGluayk7XG5hcHAuZ2V0KCcvYml0Y29pbicsIGhvbWVDb250cm9sbGVyLmdldFBheUJpdGNvaW4pO1xuYXBwLnB1dCgnL2JpdGNvaW4nLCBob21lQ29udHJvbGxlci5wdXRQaXp6YUNvdW50KTtcbmFwcC5nZXQoJy9vdGhlcnMnLCBob21lQ29udHJvbGxlci5nZXRQYXlPdGhlcnMpO1xuXG4vKipcbiAqIE9BdXRoIGF1dGhlbnRpY2F0aW9uIHJvdXRlcy4gKFNpZ24gaW4pXG4gKi9cbmFwcC5nZXQoJy9hdXRoL2ZhY2Vib29rJywgcGFzc3BvcnQuYXV0aGVudGljYXRlKCdmYWNlYm9vaycsIHsgc2NvcGU6IFsnZW1haWwnLCAncHVibGljX3Byb2ZpbGUnXSB9KSk7XG5hcHAuZ2V0KCcvYXV0aC9mYWNlYm9vay9jYWxsYmFjaycsIHBhc3Nwb3J0LmF1dGhlbnRpY2F0ZSgnZmFjZWJvb2snLCB7IGZhaWx1cmVSZWRpcmVjdDogJy9sb2dpbicgfSksIChyZXEsIHJlcykgPT4ge1xuICByZXMucmVkaXJlY3QocmVxLnNlc3Npb24ucmV0dXJuVG8gfHwgJy8nKTtcbn0pO1xuYXBwLmdldCgnL2F1dGgvdHdpdHRlcicsIHBhc3Nwb3J0LmF1dGhlbnRpY2F0ZSgndHdpdHRlcicpKTtcbmFwcC5nZXQoJy9hdXRoL3R3aXR0ZXIvY2FsbGJhY2snLCBwYXNzcG9ydC5hdXRoZW50aWNhdGUoJ3R3aXR0ZXInLCB7IGZhaWx1cmVSZWRpcmVjdDogJy9sb2dpbicgfSksIChyZXEsIHJlcykgPT4ge1xuICByZXMucmVkaXJlY3QocmVxLnNlc3Npb24ucmV0dXJuVG8gfHwgJy8nKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBhcHA7XG4iLCJpbXBvcnQgeyBwYXltZW50cywgbmV0d29ya3MgfSBmcm9tICdiaXRjb2luanMtbGliJztcbmltcG9ydCAqIGFzIGJpcDMyIGZyb20gJ2JpcDMyJztcblxuLy8gZXhhbXBsZSBleHRQdWJrZXkgYmFzZTU4IHN0cmluZ1xuZXhwb3J0IGNvbnN0IGV4dFB1YmtleXM6IHN0cmluZ1tdID0gW1xuICBwcm9jZXNzLmVudi5FWFRfUFVCX0tFWV9CQVNFNThfMSxcbiAgcHJvY2Vzcy5lbnYuRVhUX1BVQl9LRVlfQkFTRTU4XzIsXG4gIHByb2Nlc3MuZW52LkVYVF9QVUJfS0VZX0JBU0U1OF8zXG5dO1xuXG4vLyBnZW5lcmF0ZSBkZXJpdmVkIGNoaWxkIGV4dGVuZGVkIHB1YmxpYyBrZXlcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUNoaWxkUHVia2V5QnVmZmVyKGV4dEtleVN0cjogc3RyaW5nLCBpbmRleDogbnVtYmVyKTogQnVmZmVyIHtcbiAgY29uc3QgZXh0a2V5ID0gYmlwMzIuZnJvbUJhc2U1OChleHRLZXlTdHIsIG5ldHdvcmtzLnRlc3RuZXQpO1xuICByZXR1cm4gZXh0a2V5LmRlcml2ZShpbmRleCkucHVibGljS2V5O1xufVxuXG4vLyBnZW5lcmF0ZSBkZXJpdmVkIGNoaWxkIGV4dGVuZGVkIHB1YmxpYyBrZXlcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUNoaWxkUHVia2V5QmFzZTU4KGV4dEtleVN0cjogc3RyaW5nLCBpbmRleDogbnVtYmVyKTogc3RyaW5nIHtcbiAgY29uc3QgZXh0a2V5ID0gYmlwMzIuZnJvbUJhc2U1OChleHRLZXlTdHIsIG5ldHdvcmtzLnRlc3RuZXQpO1xuICByZXR1cm4gZXh0a2V5LmRlcml2ZShpbmRleCkudG9CYXNlNTgoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlTXVsdGlzaWdBZGRyZXNzKG06IG51bWJlciwgcHVia2V5czogQnVmZmVyW10pOiBzdHJpbmcge1xuICByZXR1cm4gcGF5bWVudHMucDJzaCh7bmV0d29yazogbmV0d29ya3MudGVzdG5ldCxcbiAgICByZWRlZW06IHBheW1lbnRzLnAyd3NoKHtuZXR3b3JrOiBuZXR3b3Jrcy50ZXN0bmV0LFxuICAgICAgcmVkZWVtOiBwYXltZW50cy5wMm1zKHtuZXR3b3JrOiBuZXR3b3Jrcy50ZXN0bmV0LFxuICAgICAgICBtLCBwdWJrZXlzLFxuICAgICAgfSksXG4gICAgfSksXG4gIH0pLmFkZHJlc3M7XG59XG4iLCJpbXBvcnQgcGFzc3BvcnQgZnJvbSAncGFzc3BvcnQnO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAncmVxdWVzdCc7XG5pbXBvcnQgcGFzc3BvcnRMb2NhbCBmcm9tICdwYXNzcG9ydC1sb2NhbCc7XG5pbXBvcnQgcGFzc3BvcnRGYWNlYm9vayBmcm9tICdwYXNzcG9ydC1mYWNlYm9vayc7XG5pbXBvcnQgcGFzc3BvcnRUd2l0dGVyIGZyb20gJ3Bhc3Nwb3J0LXR3aXR0ZXInO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHsgZGVmYXVsdCBhcyBVc2VyIH0gZnJvbSAnLi4vbW9kZWxzL1VzZXInO1xuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UsIE5leHRGdW5jdGlvbiB9IGZyb20gJ2V4cHJlc3MnO1xuXG5jb25zdCBMb2NhbFN0cmF0ZWd5ID0gcGFzc3BvcnRMb2NhbC5TdHJhdGVneTtcbmNvbnN0IEZhY2Vib29rU3RyYXRlZ3kgPSBwYXNzcG9ydEZhY2Vib29rLlN0cmF0ZWd5O1xuY29uc3QgVHdpdHRlclN0cmF0ZWd5ID0gcGFzc3BvcnRUd2l0dGVyLlN0cmF0ZWd5O1xuXG5wYXNzcG9ydC5zZXJpYWxpemVVc2VyPGFueSwgYW55PigodXNlciwgZG9uZSkgPT4ge1xuICBkb25lKHVuZGVmaW5lZCwgdXNlci5pZCk7XG59KTtcblxucGFzc3BvcnQuZGVzZXJpYWxpemVVc2VyKChpZCwgZG9uZSkgPT4ge1xuICBVc2VyLmZpbmRCeUlkKGlkLCAoZXJyLCB1c2VyKSA9PiB7XG4gICAgZG9uZShlcnIsIHVzZXIpO1xuICB9KTtcbn0pO1xuXG4vKipcbiAqIFNpZ24gaW4gdXNpbmcgRW1haWwgYW5kIFBhc3N3b3JkLlxuICovXG5wYXNzcG9ydC51c2UobmV3IExvY2FsU3RyYXRlZ3koeyB1c2VybmFtZUZpZWxkOiAnZW1haWwnIH0sIChlbWFpbCwgcGFzc3dvcmQsIGRvbmUpID0+IHtcbiAgVXNlci5maW5kT25lKHsgZW1haWw6IGVtYWlsLnRvTG93ZXJDYXNlKCkgfSwgKGVyciwgdXNlcjogYW55KSA9PiB7XG4gICAgaWYgKGVycikgeyByZXR1cm4gZG9uZShlcnIpOyB9XG4gICAgaWYgKCF1c2VyKSB7XG4gICAgICByZXR1cm4gZG9uZSh1bmRlZmluZWQsIGZhbHNlLCB7IG1lc3NhZ2U6IGBFbWFpbCAke2VtYWlsfSBub3QgZm91bmQuYCB9KTtcbiAgICB9XG4gICAgdXNlci5jb21wYXJlUGFzc3dvcmQocGFzc3dvcmQsIChlcnI6IEVycm9yLCBpc01hdGNoOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoZXJyKSB7IHJldHVybiBkb25lKGVycik7IH1cbiAgICAgIGlmIChpc01hdGNoKSB7XG4gICAgICAgIHJldHVybiBkb25lKHVuZGVmaW5lZCwgdXNlcik7XG4gICAgICB9XG4gICAgICByZXR1cm4gZG9uZSh1bmRlZmluZWQsIGZhbHNlLCB7IG1lc3NhZ2U6ICdJbnZhbGlkIGVtYWlsIG9yIHBhc3N3b3JkLicgfSk7XG4gICAgfSk7XG4gIH0pO1xufSkpO1xuXG4vKipcbiAqIE9BdXRoIFN0cmF0ZWd5IE92ZXJ2aWV3XG4gKlxuICogLSBVc2VyIGlzIGFscmVhZHkgbG9nZ2VkIGluLlxuICogICAtIENoZWNrIGlmIHRoZXJlIGlzIGFuIGV4aXN0aW5nIGFjY291bnQgd2l0aCBhIHByb3ZpZGVyIGlkLlxuICogICAgIC0gSWYgdGhlcmUgaXMsIHJldHVybiBhbiBlcnJvciBtZXNzYWdlLiAoQWNjb3VudCBtZXJnaW5nIG5vdCBzdXBwb3J0ZWQpXG4gKiAgICAgLSBFbHNlIGxpbmsgbmV3IE9BdXRoIGFjY291bnQgd2l0aCBjdXJyZW50bHkgbG9nZ2VkLWluIHVzZXIuXG4gKiAtIFVzZXIgaXMgbm90IGxvZ2dlZCBpbi5cbiAqICAgLSBDaGVjayBpZiBpdCdzIGEgcmV0dXJuaW5nIHVzZXIuXG4gKiAgICAgLSBJZiByZXR1cm5pbmcgdXNlciwgc2lnbiBpbiBhbmQgd2UgYXJlIGRvbmUuXG4gKiAgICAgLSBFbHNlIGNoZWNrIGlmIHRoZXJlIGlzIGFuIGV4aXN0aW5nIGFjY291bnQgd2l0aCB1c2VyJ3MgZW1haWwuXG4gKiAgICAgICAtIElmIHRoZXJlIGlzLCByZXR1cm4gYW4gZXJyb3IgbWVzc2FnZS5cbiAqICAgICAgIC0gRWxzZSBjcmVhdGUgYSBuZXcgYWNjb3VudC5cbiAqL1xuXG4vKipcbiAqIFNpZ24gaW4gd2l0aCBGYWNlYm9vay5cbiAqL1xucGFzc3BvcnQudXNlKG5ldyBGYWNlYm9va1N0cmF0ZWd5KHtcbiAgY2xpZW50SUQ6IHByb2Nlc3MuZW52LkZBQ0VCT09LX0lELFxuICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkZBQ0VCT09LX1NFQ1JFVCxcbiAgY2FsbGJhY2tVUkw6ICcvYXV0aC9mYWNlYm9vay9jYWxsYmFjaycsXG4gIHByb2ZpbGVGaWVsZHM6IFsnbmFtZScsICdlbWFpbCcsICdsaW5rJywgJ2xvY2FsZScsICd0aW1lem9uZScsICdnZW5kZXInXSxcbiAgcGFzc1JlcVRvQ2FsbGJhY2s6IHRydWVcbn0sIChyZXE6IGFueSwgYWNjZXNzVG9rZW4sIHJlZnJlc2hUb2tlbiwgcHJvZmlsZSwgZG9uZSkgPT4ge1xuICBpZiAocmVxLnVzZXIpIHtcbiAgICBVc2VyLmZpbmRPbmUoeyBmYWNlYm9vazogcHJvZmlsZS5pZCB9LCAoZXJyLCBleGlzdGluZ1VzZXIpID0+IHtcbiAgICAgIGlmIChlcnIpIHsgcmV0dXJuIGRvbmUoZXJyKTsgfVxuICAgICAgaWYgKGV4aXN0aW5nVXNlcikge1xuICAgICAgICByZXEuZmxhc2goJ2Vycm9ycycsIHsgbXNnOiAnVGhlcmUgaXMgYWxyZWFkeSBhIEZhY2Vib29rIGFjY291bnQgdGhhdCBiZWxvbmdzIHRvIHlvdS4gU2lnbiBpbiB3aXRoIHRoYXQgYWNjb3VudCBvciBkZWxldGUgaXQsIHRoZW4gbGluayBpdCB3aXRoIHlvdXIgY3VycmVudCBhY2NvdW50LicgfSk7XG4gICAgICAgIGRvbmUoZXJyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIFVzZXIuZmluZEJ5SWQocmVxLnVzZXIuaWQsIChlcnIsIHVzZXIpID0+IHtcbiAgICAgICAgICBpZiAoZXJyKSB7IHJldHVybiBkb25lKGVycik7IH1cbiAgICAgICAgICB1c2VyLmZhY2Vib29rID0gcHJvZmlsZS5pZDtcbiAgICAgICAgICB1c2VyLnRva2Vucy5wdXNoKHsga2luZDogJ2ZhY2Vib29rJywgYWNjZXNzVG9rZW4gfSk7XG4gICAgICAgICAgdXNlci5wcm9maWxlLm5hbWUgPSB1c2VyLnByb2ZpbGUubmFtZSB8fCBgJHtwcm9maWxlLm5hbWUuZ2l2ZW5OYW1lfSAke3Byb2ZpbGUubmFtZS5mYW1pbHlOYW1lfWA7XG4gICAgICAgICAgdXNlci5wcm9maWxlLmdlbmRlciA9IHVzZXIucHJvZmlsZS5nZW5kZXIgfHwgcHJvZmlsZS5fanNvbi5nZW5kZXI7XG4gICAgICAgICAgdXNlci5wcm9maWxlLnBpY3R1cmUgPSB1c2VyLnByb2ZpbGUucGljdHVyZSB8fCBgaHR0cHM6Ly9ncmFwaC5mYWNlYm9vay5jb20vJHtwcm9maWxlLmlkfS9waWN0dXJlP3R5cGU9bGFyZ2VgO1xuICAgICAgICAgIHVzZXIuc2F2ZSgoZXJyKSA9PiB7XG4gICAgICAgICAgICByZXEuZmxhc2goJ2luZm8nLCB7IG1zZzogJ0ZhY2Vib29rIGFjY291bnQgaGFzIGJlZW4gbGlua2VkLicgfSk7XG4gICAgICAgICAgICBkb25lKGVyciwgdXNlcik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIFVzZXIuZmluZE9uZSh7IGZhY2Vib29rOiBwcm9maWxlLmlkIH0sIChlcnIsIGV4aXN0aW5nVXNlcikgPT4ge1xuICAgICAgaWYgKGVycikgeyByZXR1cm4gZG9uZShlcnIpOyB9XG4gICAgICBpZiAoZXhpc3RpbmdVc2VyKSB7XG4gICAgICAgIHJldHVybiBkb25lKHVuZGVmaW5lZCwgZXhpc3RpbmdVc2VyKTtcbiAgICAgIH1cbiAgICAgIFVzZXIuZmluZE9uZSh7IGVtYWlsOiBwcm9maWxlLl9qc29uLmVtYWlsIH0sIChlcnIsIGV4aXN0aW5nRW1haWxVc2VyKSA9PiB7XG4gICAgICAgIGlmIChlcnIpIHsgcmV0dXJuIGRvbmUoZXJyKTsgfVxuICAgICAgICBpZiAoZXhpc3RpbmdFbWFpbFVzZXIpIHtcbiAgICAgICAgICByZXEuZmxhc2goJ2Vycm9ycycsIHsgbXNnOiAnVGhlcmUgaXMgYWxyZWFkeSBhbiBhY2NvdW50IHVzaW5nIHRoaXMgZW1haWwgYWRkcmVzcy4gU2lnbiBpbiB0byB0aGF0IGFjY291bnQgYW5kIGxpbmsgaXQgd2l0aCBGYWNlYm9vayBtYW51YWxseSBmcm9tIEFjY291bnQgU2V0dGluZ3MuJyB9KTtcbiAgICAgICAgICBkb25lKGVycik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgdXNlciA9IG5ldyBVc2VyKCk7XG4gICAgICAgICAgdXNlci5lbWFpbCA9IHByb2ZpbGUuX2pzb24uZW1haWw7XG4gICAgICAgICAgdXNlci5mYWNlYm9vayA9IHByb2ZpbGUuaWQ7XG4gICAgICAgICAgdXNlci50b2tlbnMucHVzaCh7IGtpbmQ6ICdmYWNlYm9vaycsIGFjY2Vzc1Rva2VuIH0pO1xuICAgICAgICAgIHVzZXIucHJvZmlsZS5uYW1lID0gYCR7cHJvZmlsZS5uYW1lLmdpdmVuTmFtZX0gJHtwcm9maWxlLm5hbWUuZmFtaWx5TmFtZX1gO1xuICAgICAgICAgIHVzZXIucHJvZmlsZS5nZW5kZXIgPSBwcm9maWxlLl9qc29uLmdlbmRlcjtcbiAgICAgICAgICB1c2VyLnByb2ZpbGUucGljdHVyZSA9IGBodHRwczovL2dyYXBoLmZhY2Vib29rLmNvbS8ke3Byb2ZpbGUuaWR9L3BpY3R1cmU/dHlwZT1sYXJnZWA7XG4gICAgICAgICAgdXNlci5wcm9maWxlLmxvY2F0aW9uID0gKHByb2ZpbGUuX2pzb24ubG9jYXRpb24pID8gcHJvZmlsZS5fanNvbi5sb2NhdGlvbi5uYW1lIDogJyc7XG4gICAgICAgICAgdXNlci5zYXZlKChlcnIpID0+IHtcbiAgICAgICAgICAgIGRvbmUoZXJyLCB1c2VyKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn0pKTtcblxuLyoqXG4gKiBTaWduIGluIHdpdGggVHdpdHRlci5cbiAqL1xucGFzc3BvcnQudXNlKG5ldyBUd2l0dGVyU3RyYXRlZ3koe1xuICBjb25zdW1lcktleTogcHJvY2Vzcy5lbnYuVFdJVFRFUl9LRVksXG4gIGNvbnN1bWVyU2VjcmV0OiBwcm9jZXNzLmVudi5UV0lUVEVSX1NFQ1JFVCxcbiAgY2FsbGJhY2tVUkw6ICcvYXV0aC90d2l0dGVyL2NhbGxiYWNrJyxcbiAgcGFzc1JlcVRvQ2FsbGJhY2s6IHRydWVcbn0sIChyZXE6IGFueSwgYWNjZXNzVG9rZW4sIHRva2VuU2VjcmV0LCBwcm9maWxlLCBkb25lKSA9PiB7XG4gIGlmIChyZXEudXNlcikge1xuICAgIFVzZXIuZmluZE9uZSh7IHR3aXR0ZXI6IHByb2ZpbGUuaWQgfSwgKGVyciwgZXhpc3RpbmdVc2VyKSA9PiB7XG4gICAgICBpZiAoZXJyKSB7IHJldHVybiBkb25lKGVycik7IH1cbiAgICAgIGlmIChleGlzdGluZ1VzZXIpIHtcbiAgICAgICAgcmVxLmZsYXNoKCdlcnJvcnMnLCB7IG1zZzogJ1RoZXJlIGlzIGFscmVhZHkgYSBUd2l0dGVyIGFjY291bnQgdGhhdCBiZWxvbmdzIHRvIHlvdS4gU2lnbiBpbiB3aXRoIHRoYXQgYWNjb3VudCBvciBkZWxldGUgaXQsIHRoZW4gbGluayBpdCB3aXRoIHlvdXIgY3VycmVudCBhY2NvdW50LicgfSk7XG4gICAgICAgIGRvbmUoZXJyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIFVzZXIuZmluZEJ5SWQocmVxLnVzZXIuaWQsIChlcnIsIHVzZXIpID0+IHtcbiAgICAgICAgICBpZiAoZXJyKSB7IHJldHVybiBkb25lKGVycik7IH1cbiAgICAgICAgICB1c2VyLnR3aXR0ZXIgPSBwcm9maWxlLmlkO1xuICAgICAgICAgIHVzZXIudG9rZW5zLnB1c2goeyBraW5kOiAndHdpdHRlcicsIGFjY2Vzc1Rva2VuLCB0b2tlblNlY3JldCB9KTtcbiAgICAgICAgICB1c2VyLnByb2ZpbGUubmFtZSA9IHVzZXIucHJvZmlsZS5uYW1lIHx8IHByb2ZpbGUuZGlzcGxheU5hbWU7XG4gICAgICAgICAgdXNlci5wcm9maWxlLmxvY2F0aW9uID0gdXNlci5wcm9maWxlLmxvY2F0aW9uIHx8IHByb2ZpbGUuX2pzb24ubG9jYXRpb247XG4gICAgICAgICAgdXNlci5wcm9maWxlLnBpY3R1cmUgPSB1c2VyLnByb2ZpbGUucGljdHVyZSB8fCBwcm9maWxlLl9qc29uLnByb2ZpbGVfaW1hZ2VfdXJsX2h0dHBzO1xuICAgICAgICAgIHVzZXIuc2F2ZSgoZXJyKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7IHJldHVybiBkb25lKGVycik7IH1cbiAgICAgICAgICAgIHJlcS5mbGFzaCgnaW5mbycsIHsgbXNnOiAnVHdpdHRlciBhY2NvdW50IGhhcyBiZWVuIGxpbmtlZC4nIH0pO1xuICAgICAgICAgICAgZG9uZShlcnIsIHVzZXIpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBVc2VyLmZpbmRPbmUoeyB0d2l0dGVyOiBwcm9maWxlLmlkIH0sIChlcnIsIGV4aXN0aW5nVXNlcikgPT4ge1xuICAgICAgaWYgKGVycikgeyByZXR1cm4gZG9uZShlcnIpOyB9XG4gICAgICBpZiAoZXhpc3RpbmdVc2VyKSB7XG4gICAgICAgIHJldHVybiBkb25lKHVuZGVmaW5lZCwgZXhpc3RpbmdVc2VyKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHVzZXIgPSBuZXcgVXNlcigpO1xuICAgICAgLy8gVHdpdHRlciB3aWxsIG5vdCBwcm92aWRlIGFuIGVtYWlsIGFkZHJlc3MuICBQZXJpb2QuXG4gICAgICAvLyBCdXQgYSBwZXJzb27igJlzIHR3aXR0ZXIgdXNlcm5hbWUgaXMgZ3VhcmFudGVlZCB0byBiZSB1bmlxdWVcbiAgICAgIC8vIHNvIHdlIGNhbiBcImZha2VcIiBhIHR3aXR0ZXIgZW1haWwgYWRkcmVzcyBhcyBmb2xsb3dzOlxuICAgICAgdXNlci5lbWFpbCA9IGAke3Byb2ZpbGUudXNlcm5hbWV9QHR3aXR0ZXIuY29tYDtcbiAgICAgIHVzZXIudHdpdHRlciA9IHByb2ZpbGUuaWQ7XG4gICAgICB1c2VyLnRva2Vucy5wdXNoKHsga2luZDogJ3R3aXR0ZXInLCBhY2Nlc3NUb2tlbiwgdG9rZW5TZWNyZXQgfSk7XG4gICAgICB1c2VyLnByb2ZpbGUubmFtZSA9IHByb2ZpbGUuZGlzcGxheU5hbWU7XG4gICAgICB1c2VyLnByb2ZpbGUubG9jYXRpb24gPSBwcm9maWxlLl9qc29uLmxvY2F0aW9uO1xuICAgICAgdXNlci5wcm9maWxlLnBpY3R1cmUgPSBwcm9maWxlLl9qc29uLnByb2ZpbGVfaW1hZ2VfdXJsX2h0dHBzO1xuICAgICAgdXNlci5zYXZlKChlcnIpID0+IHtcbiAgICAgICAgZG9uZShlcnIsIHVzZXIpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn0pKTtcblxuLyoqXG4gKiBMb2dpbiBSZXF1aXJlZCBtaWRkbGV3YXJlLlxuICovXG5leHBvcnQgbGV0IGlzQXV0aGVudGljYXRlZCA9IChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikgPT4ge1xuICBpZiAocmVxLmlzQXV0aGVudGljYXRlZCgpKSB7XG4gICAgcmV0dXJuIG5leHQoKTtcbiAgfVxuICByZXMucmVkaXJlY3QoJy9sb2dpbicpO1xufTtcblxuLyoqXG4gKiBBdXRob3JpemF0aW9uIFJlcXVpcmVkIG1pZGRsZXdhcmUuXG4gKi9cbmV4cG9ydCBsZXQgaXNBdXRob3JpemVkID0gKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKSA9PiB7XG4gIGNvbnN0IHByb3ZpZGVyID0gcmVxLnBhdGguc3BsaXQoJy8nKS5zbGljZSgtMSlbMF07XG4gIGlmIChfLmZpbmQocmVxLnVzZXIudG9rZW5zLCB7IGtpbmQ6IHByb3ZpZGVyIH0pKSB7XG4gICAgbmV4dCgpO1xuICB9IGVsc2Uge1xuICAgIHJlcy5yZWRpcmVjdChgL2F1dGgvJHtwcm92aWRlcn1gKTtcbiAgfVxufTtcbiIsImltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgbm9kZW1haWxlciBmcm9tICdub2RlbWFpbGVyJztcblxuLyoqXG4gKiBHRVQgL2NvbnRhY3RcbiAqIENvbnRhY3QgZm9ybSBwYWdlLlxuICovXG5leHBvcnQgbGV0IGdldENvbnRhY3QgPSAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG4gIGNvbnN0IHVua25vd25Vc2VyID0gIShyZXEudXNlcik7XG4gIHJlcy5yZW5kZXIoJ2NvbnRhY3QnLCB7XG4gICAgdGl0bGU6ICfjgYrllY/lkIjjgZsnLFxuICAgIHVua25vd25Vc2VyXG4gIH0pO1xufTtcblxuLyoqXG4gKiBQT1NUIC9jb250YWN0XG4gKiBTZW5kIGEgY29udGFjdCBmb3JtIHZpYSBOb2RlbWFpbGVyLlxuICovXG5leHBvcnQgbGV0IHBvc3RDb250YWN0ID0gKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuICBsZXQgZnJvbU5hbWU7XG4gIGxldCBmcm9tRW1haWw7XG4gIGlmICghcmVxLnVzZXIpIHtcbiAgICByZXEuY2hlY2soJ25hbWUnKS5ub3QoKS5pc0VtcHR5KCkud2l0aE1lc3NhZ2UoJ+OBiuWQjeWJjeOCkuOBiuabuOOBjeOBj+OBoOOBleOBhC4nKTtcbiAgICByZXEuY2hlY2soJ2VtYWlsJykuaXNFbWFpbCgpLndpdGhNZXNzYWdlKCfjg6Hjg7zjg6vjgqLjg4njg6zjgrnjgYznhKHlirnjgafjgZkuJyk7XG4gIH1cbiAgcmVxLmNoZWNrKCdtZXNzYWdlJykubm90RW1wdHkoKS53aXRoTWVzc2FnZSgn44GU55So5Lu244KS44GK5pu444GN44GP44Gg44GV44GEJyk7XG5cbiAgY29uc3QgZXJyb3JzID0gcmVxLnZhbGlkYXRpb25FcnJvcnMoKTtcblxuICBpZiAoZXJyb3JzKSB7XG4gICAgcmVxLmZsYXNoKCdlcnJvcnMnLCBlcnJvcnMpO1xuICAgIHJldHVybiByZXMucmVkaXJlY3QoJy9jb250YWN0Jyk7XG4gIH1cblxuICBpZiAoIXJlcS51c2VyKSB7XG4gICAgZnJvbU5hbWUgPSByZXEuYm9keS5uYW1lO1xuICAgIGZyb21FbWFpbCA9IHJlcS5ib2R5LmVtYWlsO1xuICB9IGVsc2Uge1xuICAgIGZyb21OYW1lID0gcmVxLnVzZXIucHJvZmlsZS5uYW1lIHx8ICcnO1xuICAgIGZyb21FbWFpbCA9IHJlcS51c2VyLmVtYWlsO1xuICB9XG5cbiAgbGV0IHRyYW5zcG9ydGVyID0gbm9kZW1haWxlci5jcmVhdGVUcmFuc3BvcnQoe1xuICAgIHNlcnZpY2U6ICdTZW5kR3JpZCcsXG4gICAgYXV0aDoge1xuICAgICAgdXNlcjogcHJvY2Vzcy5lbnYuU0VOREdSSURfVVNFUixcbiAgICAgIHBhc3M6IHByb2Nlc3MuZW52LlNFTkRHUklEX1BBU1NXT1JEXG4gICAgfVxuICB9KTtcbiAgY29uc3QgbWFpbE9wdGlvbnMgPSB7XG4gICAgdG86ICd5b3VyQGVtYWlsLmNvbScsXG4gICAgZnJvbTogYCR7ZnJvbU5hbWV9IDwke2Zyb21FbWFpbH0+YCxcbiAgICBzdWJqZWN0OiAnQ29udGFjdCBGb3JtIHwgQ3J5cHRvIFBheScsXG4gICAgdGV4dDogcmVxLmJvZHkubWVzc2FnZVxuICB9O1xuICByZXR1cm4gdHJhbnNwb3J0ZXIuc2VuZE1haWwobWFpbE9wdGlvbnMpXG4gICAgLnRoZW4oKCkgPT4ge1xuICAgICAgcmVxLmZsYXNoKCdzdWNjZXNzJywgeyBtc2c6ICdFbWFpbCBoYXMgYmVlbiBzZW50IHN1Y2Nlc3NmdWxseSEnIH0pO1xuICAgICAgcmVzLnJlZGlyZWN0KCcvY29udGFjdCcpO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIGlmIChlcnIubWVzc2FnZSA9PT0gJ3NlbGYgc2lnbmVkIGNlcnRpZmljYXRlIGluIGNlcnRpZmljYXRlIGNoYWluJykge1xuICAgICAgICBjb25zb2xlLmxvZygnV0FSTklORzogU2VsZiBzaWduZWQgY2VydGlmaWNhdGUgaW4gY2VydGlmaWNhdGUgY2hhaW4uJyArXG4gICAgICAgICAgJyBSZXRyeWluZyB3aXRoIHRoZSBzZWxmIHNpZ25lZCBjZXJ0aWZpY2F0ZS4gVXNlIGEgdmFsaWQgY2VydGlmaWNhdGUgaWYgaW4gcHJvZHVjdGlvbi4nKTtcbiAgICAgICAgdHJhbnNwb3J0ZXIgPSBub2RlbWFpbGVyLmNyZWF0ZVRyYW5zcG9ydCh7XG4gICAgICAgICAgc2VydmljZTogJ1NlbmRHcmlkJyxcbiAgICAgICAgICBhdXRoOiB7XG4gICAgICAgICAgICB1c2VyOiBwcm9jZXNzLmVudi5TRU5ER1JJRF9VU0VSLFxuICAgICAgICAgICAgcGFzczogcHJvY2Vzcy5lbnYuU0VOREdSSURfUEFTU1dPUkRcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRsczoge1xuICAgICAgICAgICAgcmVqZWN0VW5hdXRob3JpemVkOiBmYWxzZVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0cmFuc3BvcnRlci5zZW5kTWFpbChtYWlsT3B0aW9ucyk7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZygnRVJST1I6IENvdWxkIG5vdCBzZW5kIGNvbnRhY3QgZW1haWwgYWZ0ZXIgc2VjdXJpdHkgZG93bmdyYWRlLlxcbicsIGVycik7XG4gICAgICByZXEuZmxhc2goJ2Vycm9ycycsIHsgbXNnOiAnRXJyb3Igc2VuZGluZyB0aGUgbWVzc2FnZS4gUGxlYXNlIHRyeSBhZ2FpbiBzaG9ydGx5LicgfSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSlcbiAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIHJlcS5mbGFzaCgnc3VjY2VzcycsIHsgbXNnOiAnRW1haWwgaGFzIGJlZW4gc2VudCBzdWNjZXNzZnVsbHkhJyB9KTtcbiAgICAgICAgcmV0dXJuIHJlcy5yZWRpcmVjdCgnL2NvbnRhY3QnKTtcbiAgICAgIH1cbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnRVJST1I6IENvdWxkIG5vdCBzZW5kIGNvbnRhY3QgZW1haWwuXFxuJywgZXJyKTtcbiAgICAgIHJlcS5mbGFzaCgnZXJyb3JzJywgeyBtc2c6ICdFcnJvciBzZW5kaW5nIHRoZSBtZXNzYWdlLiBQbGVhc2UgdHJ5IGFnYWluIHNob3J0bHkuJyB9KTtcbiAgICAgIHJldHVybiByZXMucmVkaXJlY3QoJy9jb250YWN0Jyk7XG4gICAgfSk7XG59O1xuIiwiaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgVXNlciwgVXNlck1vZGVsLCBJVXNlckRvY3VtZW50IH0gZnJvbSAnLi4vbW9kZWxzL1VzZXInO1xuXG5jb25zdCBsaWIgPSByZXF1aXJlKCcuLi9iaXRjb2luL2xpYicpO1xuXG5pbnRlcmZhY2UgSW51bSB7XG4gIHByaWNlOiBudW1iZXJbXTtcbiAgY291bnQ6IG51bWJlcltdO1xuICBhbW91bnQ6IG51bWJlcltdO1xuICBhZGRyZXNzOiBzdHJpbmdbXTtcbn1cblxuLyoqXG4gKiBHRVQgL1xuICogSG9tZSBwYWdlLlxuICovXG5leHBvcnQgbGV0IGhvbWUgPSAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG4gIHJlcy5yZW5kZXIoJ2hvbWUnLCB7XG4gICAgdGl0bGU6ICfjg5vjg7zjg6AnXG4gIH0pO1xufTtcblxuZXhwb3J0IGxldCBnZXRQYXlCaXRjb2luID0gKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuICBpZiAoIXJlcS51c2VyKSB7XG4gICAgcmVxLmZsYXNoKCdlcnJvcnMnLCB7IG1zZzogJ+ips+e0sOOCkuihqOekuuOBmeOCi+OBq+OBr+ODreOCsOOCpOODs+OBl+OBpuOBj+OBoOOBleOBhC7oqLzmmI7mm7jjgpLnmbrooYzjgZnjgovjgavjga/jg63jgrDjgqTjg7PjgZfjgabjgY/jgaDjgZXjgYQuJyB9KTtcbiAgICByZXR1cm4gcmVzLnJlZGlyZWN0KCcvJyk7XG4gIH1cbiAgaWYgKCFyZXEudXNlcikge1xuICAgIHJldHVybiByZXMucmVkaXJlY3QoJy8nKTtcbiAgfVxuICBjb25zdCB0YnRjOiBJbnVtID0ge1xuICAgIHByaWNlOiBbMC4wMDUsIDAuMDAzLCAwLjAwMV0sXG4gICAgY291bnQ6IFswLCAwLCAwXSxcbiAgICBhbW91bnQ6IFswLCAwLCAwXSxcbiAgICBhZGRyZXNzOiBbJ2xhcmdlJywgJ21pZGRsZScsICdzbWFsbCddXG4gIH07XG4gIGNvbnN0IHsgaWQgfSA9IHJlcS51c2VyO1xuICBVc2VyLmZpbmQoeyBfaWQ6IGlkIH0sIChmaW5kRXJyLCB1c2VyOiBJVXNlckRvY3VtZW50KSA9PiB7IC8vIGZpbmTjgZfjgZ/jgoLjga7jga/phY3liJfjga7kuK3jga5vYmplY3TjgajjgZfjgabov5TjgaPjgabjgY/jgotcbiAgICBpZiAoZmluZEVycikgcmVzLnN0YXR1cyg1MDApO1xuICAgIGVsc2Uge1xuICAgICAgcmVzLnN0YXR1cygyMDApO1xuICAgICAgdGJ0Yy5jb3VudFswXSA9IHVzZXJbMF0ubGFyZ2VDb3VudDtcbiAgICAgIHRidGMuY291bnRbMV0gPSB1c2VyWzBdLm1pZGRsZUNvdW50O1xuICAgICAgdGJ0Yy5jb3VudFsyXSA9IHVzZXJbMF0uc21hbGxDb3VudDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgIHRidGMuYW1vdW50W2ldID0gdGJ0Yy5wcmljZVtpXSAqIHRidGMuY291bnRbaV07XG4gICAgICAgIGNvbnN0IHB1YktleXNCYXNlNTg6IHN0cmluZ1tdID0gW107XG4gICAgICAgIC8vIOeSsOWig+WkieaVsOOBq+OBguOCi3B1YmtleXMgLT4gY3VzdG9tZXJOdW1iZXLjgavjgojjgovlrZDmi6HlvLXlhazplovpjbUgLT4g44OU44K244Gu44K144Kk44K644Gr44KI44KL5a2Q5ouh5by15YWs6ZaL6Y2144KS55Sf5oiQXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMzsgaisrKVxuICAgICAgICAgIHB1YktleXNCYXNlNTgucHVzaChsaWIuZ2VuZXJhdGVDaGlsZFB1YmtleUJhc2U1OCh1c2VyWzBdLmV4dFB1YktleVtqXSwgaSkpO1xuICAgICAgICBjb25zdCBwdWJLZXlzOiBCdWZmZXJbXSA9IFtdO1xuICAgICAgICAvLyDnkrDlooPlpInmlbDjgavjgYLjgotwdWJrZXlzIC0+IGN1c3RvbWVyTnVtYmVy44Gr44KI44KL5a2Q5ouh5by15YWs6ZaL6Y21IC0+IOODlOOCtuOBruOCteOCpOOCuuOBq+OCiOOCi+WtkOaLoeW8teWFrOmWi+mNtSAtPiDjg5Tjgrbjga7lgIvmlbDjgavjgojjgovlrZDmi6HlvLXlhazplovpjbXjgpLnlJ/miJBcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAzOyBqKyspXG4gICAgICAgICAgcHViS2V5cy5wdXNoKGxpYi5nZW5lcmF0ZUNoaWxkUHVia2V5QnVmZmVyKHB1YktleXNCYXNlNThbal0sIE51bWJlcih0YnRjLmNvdW50W2ldKSkpO1xuICAgICAgICB0YnRjLmFkZHJlc3NbaV0gPSBsaWIuZ2VuZXJhdGVNdWx0aXNpZ0FkZHJlc3MoMywgcHViS2V5cyk7XG4gICAgICB9XG4gICAgICByZXMucmVuZGVyKCdwYXkvYml0Y29pbicsIHtcbiAgICAgICAgdGl0bGU6ICdCaXRjb2luIFBheScsXG4gICAgICAgIHRidGNcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBnZXRDb3VudDogKHVzZXI6IElVc2VyRG9jdW1lbnQsIHNpemU6IG51bWJlcikgPT4gTnVtYmVyID0gKHVzZXIsIHNpemUpID0+IHtcbiAgaWYgKCBzaXplID09IDAgKSB7XG4gICAgcmV0dXJuIHVzZXIubGFyZ2VDb3VudDtcbiAgfSBlbHNlIGlmICggc2l6ZSA9PSAxICkge1xuICAgIHJldHVybiB1c2VyLm1pZGRsZUNvdW50O1xuICB9IGVsc2UgaWYgKCBzaXplID09IDIgKSB7XG4gICAgcmV0dXJuIHVzZXIuc21hbGxDb3VudDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gMDtcbiAgfVxufTtcblxuZXhwb3J0IGxldCBwdXRQaXp6YUNvdW50ID0gYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuICBjb25zdCB7IGlkIH0gPSByZXEudXNlcjsgLy8gbW9uZ29kYuOBp+S4gOaEj+OBq+S4juOBiOOCieOCjOOCi+ODpuODvOOCtuODvOOBrmlk44KS5Y+W5b6XXG4gIGNvbnN0IGNvdW50OiBudW1iZXIgPSByZXEuYm9keS5kYXRhLmNvdW50OyAvLyDkvZXlgIvjgZrjgaTlopfjgoTjgZfjgZ/jgormuJvjgonjgZfjgZ/jgorjgZnjgovjgYvjga7lgIvmlbBcbiAgY29uc3Qgc2l6ZTogbnVtYmVyID0gcmVxLmJvZHkuZGF0YS5zaXplOyAvLyDjg5Tjgrbjga7jgrXjgqTjgrouIDAgPSBsYXJnZSwgMSA9IG1pZGRsZSwgMiA9IHNtYWxsLlxuICBjb25zdCBwcmljZXM6IG51bWJlcltdID0gWzAuMDA1LCAwLjAwMywgMC4wMDFdO1xuICB0cnkge1xuICAgIGF3YWl0IFVzZXIuZmluZEJ5SWQoaWQsIChlcnIsIHVzZXI6IElVc2VyRG9jdW1lbnQpID0+IHtcbiAgICAgIGlmIChlcnIpIHJlcy5zdGF0dXMoNTAwKS5zZW5kKCk7XG4gICAgICBjb25zdCBwaXp6YUNvdW50ID0gZ2V0Q291bnQodXNlciwgc2l6ZSk7IC8vIOODlOOCtuOBruaemuaVsFxuICAgICAgaWYgKChwaXp6YUNvdW50ID49IDAgJiYgY291bnQgPT0gMSkgfHwgKHBpenphQ291bnQgPiAwICYmIGNvdW50ID09IC0xKSkge1xuICAgICAgICBpZiAoIHNpemUgPT0gMCApIHtcbiAgICAgICAgICBVc2VyLmZpbmRCeUlkQW5kVXBkYXRlKGlkLCB7ICRpbmM6IHtsYXJnZUNvdW50OiBjb3VudH0gfSwgZXJyID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHJlcy5zdGF0dXMoNTAwKS5zZW5kKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoIHNpemUgPT0gMSApIHtcbiAgICAgICAgICBVc2VyLmZpbmRCeUlkQW5kVXBkYXRlKGlkLCB7ICRpbmM6IHttaWRkbGVDb3VudDogY291bnR9IH0sIGVyciA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSByZXMuc3RhdHVzKDUwMCkuc2VuZCgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKCBzaXplID09IDIgKSB7XG4gICAgICAgICAgVXNlci5maW5kQnlJZEFuZFVwZGF0ZShpZCwgeyAkaW5jOiB7c21hbGxDb3VudDogY291bnR9IH0sIGVyciA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSByZXMuc3RhdHVzKDUwMCkuc2VuZCgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5zZW5kKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KS5leGVjKCk7XG4gIH0gY2F0Y2gge1xuICAgIHJlcy5zdGF0dXMoNTAwKS5zZW5kKCk7XG4gIH1cbiAgdHJ5IHtcbiAgICBhd2FpdCBVc2VyLmZpbmQoeyBfaWQ6IGlkIH0sIChmaW5kRXJyLCB1c2VyOiBJVXNlckRvY3VtZW50KSA9PiB7XG4gICAgICBpZiAoZmluZEVycikgcmVzLnN0YXR1cyg1MDApLnNlbmQoKTtcbiAgICAgIGNvbnN0IHBpenphQ291bnQgPSBnZXRDb3VudCh1c2VyWzBdLCBzaXplKTsgLy8gVXNlci5maW5kZSh7X2lkOiBpZH0p44GnRELmpJzntKLjgZnjgovjgajntZDmnpzjgYzphY3liJfjgafov5TjgaPjgabjgY/jgovjga7jgad1c2Vy44Gv5L2/44GI44Ga44GrdXNlclswXeOCkuS9v+OBo+OBpuOCiy5cbiAgICAgIGNvbnN0IHB1YktleXNCYXNlNTg6IHN0cmluZ1tdID0gW107XG4gICAgICAvLyDnkrDlooPlpInmlbDjgavjgYLjgotwdWJrZXlzIC0+IGN1c3RvbWVyTnVtYmVy44Gr44KI44KL5a2Q5ouh5by15YWs6ZaL6Y21IC0+IOODlOOCtuOBruOCteOCpOOCuuOBq+OCiOOCi+WtkOaLoeW8teWFrOmWi+mNteOCkueUn+aIkFxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspXG4gICAgICAgIHB1YktleXNCYXNlNTgucHVzaChsaWIuZ2VuZXJhdGVDaGlsZFB1YmtleUJhc2U1OCh1c2VyWzBdLmV4dFB1YktleVtpXSwgc2l6ZSkpO1xuICAgICAgY29uc3QgcHViS2V5czogQnVmZmVyW10gPSBbXTtcbiAgICAgIC8vIOeSsOWig+WkieaVsOOBq+OBguOCi3B1YmtleXMgLT4gY3VzdG9tZXJOdW1iZXLjgavjgojjgovlrZDmi6HlvLXlhazplovpjbUgLT4g44OU44K244Gu44K144Kk44K644Gr44KI44KL5a2Q5ouh5by15YWs6ZaL6Y21IC0+IOODlOOCtuOBruWAi+aVsOOBq+OCiOOCi+WtkOaLoeW8teWFrOmWi+mNteOCkueUn+aIkFxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspXG4gICAgICAgIHB1YktleXMucHVzaChsaWIuZ2VuZXJhdGVDaGlsZFB1YmtleUJ1ZmZlcihwdWJLZXlzQmFzZTU4W2ldLCBwaXp6YUNvdW50KSk7XG4gICAgICBjb25zdCBhZGRyZXNzOiBzdHJpbmcgPSBsaWIuZ2VuZXJhdGVNdWx0aXNpZ0FkZHJlc3MoMywgcHViS2V5cyk7XG4gICAgICBjb25zdCBhbW91bnQgPSBwcmljZXNbc2l6ZV0gKiBOdW1iZXIocGl6emFDb3VudCk7XG4gICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICBhZGRyZXNzOiBgaHR0cHM6Ly9jaGFydC5hcGlzLmdvb2dsZS5jb20vY2hhcnQ/Y2h0PXFyJmNocz0zMDB4MzAwJmNobD1iaXRjb2luOiR7YWRkcmVzc30/YW1vdW50PSR7YW1vdW50fWAsXG4gICAgICAgIGNvdW50OiBwaXp6YUNvdW50LFxuICAgICAgfTtcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGRhdGEpO1xuICAgIH0pLmV4ZWMoKTtcbiAgfSBjYXRjaCB7XG4gICAgcmVzLnN0YXR1cyg1MDApLnNlbmQoKTtcbiAgfVxufTtcblxuZXhwb3J0IGxldCBnZXRQYXlPdGhlcnMgPSAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG4gIHJlcy5yZW5kZXIoJ3BheS9vdGhlcnMnLCB7XG4gICAgdGl0bGU6ICdPdGhlcnMgUGF5J1xuICB9KTtcbn07XG4iLCJpbXBvcnQgY3J5cHRvIGZyb20gJ2NyeXB0byc7XG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSwgTmV4dEZ1bmN0aW9uIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBXcml0ZUVycm9yIH0gZnJvbSAnbW9uZ29kYic7XG5pbXBvcnQgbm9kZW1haWxlciBmcm9tICdub2RlbWFpbGVyJztcbmltcG9ydCBwYXNzcG9ydCBmcm9tICdwYXNzcG9ydCc7XG5pbXBvcnQgeyBJVmVyaWZ5T3B0aW9ucyB9IGZyb20gJ3Bhc3Nwb3J0LWxvY2FsJztcbmltcG9ydCB7IHByb21pc2lmeSB9IGZyb20gJ3V0aWwnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBVc2VyLCBVc2VyTW9kZWwsIEF1dGhUb2tlbiB9IGZyb20gJy4uL21vZGVscy9Vc2VyJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgQ291bnQgfSBmcm9tICcuLi9tb2RlbHMvQ291bnQnO1xuXG5jb25zdCBsaWIgPSByZXF1aXJlKCcuLi9iaXRjb2luL2xpYicpO1xuY29uc3QgcmFuZG9tQnl0ZXNBc3luYyA9IHByb21pc2lmeShjcnlwdG8ucmFuZG9tQnl0ZXMpO1xuXG4vKipcbiAqIEdFVCAvbG9naW5cbiAqIExvZ2luIHBhZ2UuXG4gKi9cbmV4cG9ydCBsZXQgZ2V0TG9naW4gPSAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG4gIGlmIChyZXEudXNlcikge1xuICAgIHJldHVybiByZXMucmVkaXJlY3QoJy8nKTtcbiAgfVxuICByZXMucmVuZGVyKCdhY2NvdW50L2xvZ2luJywge1xuICAgIHRpdGxlOiAn44Ot44Kw44Kk44OzJ1xuICB9KTtcbn07XG5cbi8qKlxuICogUE9TVCAvbG9naW5cbiAqIFNpZ24gaW4gdXNpbmcgZW1haWwgYW5kIHBhc3N3b3JkLlxuICovXG5leHBvcnQgbGV0IHBvc3RMb2dpbiA9IChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikgPT4ge1xuICByZXEuYXNzZXJ0KCdlbWFpbCcsICfnhKHlirnjgarjg6Hjg7zjg6vjgqLjg4njg6zjgrnjgafjgZkuJykuaXNFbWFpbCgpO1xuICByZXEuYXNzZXJ0KCdwYXNzd29yZCcsICfjg5Hjgrnjg6/jg7zjg4njgpLnqbrnmb3jgavjgZnjgovjgZPjgajjga/jgafjgY3jgb7jgZvjgpMuJykubm90RW1wdHkoKTtcbiAgcmVxLnNhbml0aXplKCdlbWFpbCcpLm5vcm1hbGl6ZUVtYWlsKHsgZ21haWxfcmVtb3ZlX2RvdHM6IGZhbHNlIH0pO1xuXG4gIGNvbnN0IGVycm9ycyA9IHJlcS52YWxpZGF0aW9uRXJyb3JzKCk7XG5cbiAgaWYgKGVycm9ycykge1xuICAgIHJlcS5mbGFzaCgnZXJyb3JzJywgZXJyb3JzKTtcbiAgICByZXR1cm4gcmVzLnJlZGlyZWN0KCcvbG9naW4nKTtcbiAgfVxuXG4gIHBhc3Nwb3J0LmF1dGhlbnRpY2F0ZSgnbG9jYWwnLCAoZXJyOiBFcnJvciwgdXNlcjogVXNlck1vZGVsLCBpbmZvOiBJVmVyaWZ5T3B0aW9ucykgPT4ge1xuICAgIGlmIChlcnIpIHsgcmV0dXJuIG5leHQoZXJyKTsgfVxuICAgIGlmICghdXNlcikge1xuICAgICAgcmVxLmZsYXNoKCdlcnJvcnMnLCBpbmZvKTtcbiAgICAgIHJldHVybiByZXMucmVkaXJlY3QoJy9sb2dpbicpO1xuICAgIH1cbiAgICByZXEubG9nSW4odXNlciwgKGVycikgPT4ge1xuICAgICAgaWYgKGVycikgeyByZXR1cm4gbmV4dChlcnIpOyB9XG4gICAgICByZXEuZmxhc2goJ3N1Y2Nlc3MnLCB7IG1zZzogJ+ODreOCsOOCpOODs+OBq+aIkOWKn+OBl+OBvuOBl+OBny4nIH0pO1xuICAgICAgcmVzLnJlZGlyZWN0KHJlcS5zZXNzaW9uLnJldHVyblRvIHx8ICcvJyk7XG4gICAgfSk7XG4gIH0pKHJlcSwgcmVzLCBuZXh0KTtcbn07XG5cbi8qKlxuICogR0VUIC9sb2dvdXRcbiAqIExvZyBvdXQuXG4gKi9cbmV4cG9ydCBsZXQgbG9nb3V0ID0gKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuICByZXEubG9nb3V0KCk7XG4gIHJlcS5zZXNzaW9uLmRlc3Ryb3koKGVycikgPT4ge1xuICAgIGlmIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdFcnJvciA6IEZhaWxlZCB0byBkZXN0cm95IHRoZSBzZXNzaW9uIGR1cmluZyBsb2dvdXQuJywgZXJyKTtcbiAgICB9XG4gICAgcmVxLnVzZXIgPSB1bmRlZmluZWQ7XG4gICAgcmVzLnJlZGlyZWN0KCcvJyk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBHRVQgL3NpZ251cFxuICogU2lnbnVwIHBhZ2UuXG4gKi9cbmV4cG9ydCBsZXQgZ2V0U2lnbnVwID0gKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuICBpZiAocmVxLnVzZXIpIHtcbiAgICByZXR1cm4gcmVzLnJlZGlyZWN0KCcvJyk7XG4gIH1cbiAgcmVzLnJlbmRlcignYWNjb3VudC9zaWdudXAnLCB7XG4gICAgdGl0bGU6ICfjgqLjgqvjgqbjg7Pjg4jkvZzmiJAnXG4gIH0pO1xufTtcblxuLyoqXG4gKiBQT1NUIC9zaWdudXBcbiAqIENyZWF0ZSBhIG5ldyBsb2NhbCBhY2NvdW50LlxuICovXG5leHBvcnQgbGV0IHBvc3RTaWdudXAgPSAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pID0+IHtcbiAgcmVxLmFzc2VydCgnZW1haWwnLCAn54Sh5Yq544Gq44Oh44O844Or44Ki44OJ44Os44K544Gn44GZLicpLmlzRW1haWwoKTtcbiAgcmVxLmFzc2VydCgncGFzc3dvcmQnLCAn44OR44K544Ov44O844OJ44GvNOaWh+Wtl+S7peS4iuOBq+OBl+OBpuOBj+OBoOOBleOBhC4nKS5sZW4oeyBtaW46IDQgfSk7XG4gIHJlcS5hc3NlcnQoJ2NvbmZpcm1QYXNzd29yZCcsICfjg5Hjgrnjg6/jg7zjg4njgYzkuIDoh7TjgZfjgb7jgZvjgpMuJykuZXF1YWxzKHJlcS5ib2R5LnBhc3N3b3JkKTtcbiAgcmVxLnNhbml0aXplKCdlbWFpbCcpLm5vcm1hbGl6ZUVtYWlsKHsgZ21haWxfcmVtb3ZlX2RvdHM6IGZhbHNlIH0pO1xuXG4gIGNvbnN0IGVycm9ycyA9IHJlcS52YWxpZGF0aW9uRXJyb3JzKCk7XG5cbiAgaWYgKGVycm9ycykge1xuICAgIHJlcS5mbGFzaCgnZXJyb3JzJywgZXJyb3JzKTtcbiAgICByZXR1cm4gcmVzLnJlZGlyZWN0KCcvc2lnbnVwJyk7XG4gIH1cblxuICAvLyDpoaflrqLjga7jgqvjgqbjg7Pjgr/jg7zjgpLkv53lrZjjgZfjgabjgotcbiAgQ291bnQuZmluZE9uZSh7bmFtZTogJ3NvbGEnfSwgKGVyciwgY291bnQpID0+IHtcbiAgICBpZiAoZXJyKSB7IHJldHVybiBuZXh0KGVycik7IH1cbiAgICBpZiAoIWNvdW50KSB7XG4gICAgICBjb25zdCBjb3VudCA9IG5ldyBDb3VudCh7XG4gICAgICAgIG5hbWU6ICdzb2xhJyxcbiAgICAgICAgY3VzdG9tZXJDb3VudDogMFxuICAgICAgfSk7XG4gICAgICBjb3VudC5zYXZlKChlcnIpID0+IHtcbiAgICAgICAgaWYgKGVycikgeyByZXR1cm4gbmV4dChlcnIpOyB9XG4gICAgICB9KTtcbiAgICB9IGVsc2UgY29uc29sZS5sb2coJ0NvdW50ZXIgZXhpc3QuJyk7XG4gIH0pO1xuXG4gIC8vIOmhp+WuouOBrmpzb27jgpLmlrDopo/kvZzmiJBcbiAgY29uc3QgdXNlciA9IG5ldyBVc2VyKHtcbiAgICBlbWFpbDogcmVxLmJvZHkuZW1haWwsXG4gICAgcGFzc3dvcmQ6IHJlcS5ib2R5LnBhc3N3b3JkLFxuICAgIGxhcmdlQ291bnQ6IDAsXG4gICAgbWlkZGxlQ291bnQ6IDAsXG4gICAgc21hbGxDb3VudDogMCxcbiAgICBjdXN0b21lck51bWJlcjogMCxcbiAgICBleHRQdWJLZXk6IFsnYScsICdiJywgJ2MnXVxuICB9KTtcblxuICBVc2VyLmZpbmRPbmUoeyBlbWFpbDogcmVxLmJvZHkuZW1haWwgfSwgKGVyciwgZXhpc3RpbmdVc2VyKSA9PiB7XG4gICAgaWYgKGVycikgeyByZXR1cm4gbmV4dChlcnIpOyB9XG4gICAgaWYgKGV4aXN0aW5nVXNlcikge1xuICAgICAgcmVxLmZsYXNoKCdlcnJvcnMnLCB7IG1zZzogJ+OBk+OBruODoeODvOODq+OCouODieODrOOCueOBruOCouOCq+OCpuODs+ODiOOBr+OBmeOBp+OBq+WtmOWcqOOBl+OBpuOBhOOBvuOBmS4nIH0pO1xuICAgICAgcmV0dXJuIHJlcy5yZWRpcmVjdCgnL3NpZ251cCcpO1xuICAgIH1cbiAgICAvLyDpoaflrqLjga7jgqvjgqbjg7Pjg4jjgpIx44Gk5aKX44KE44GX44Gm5L+d5a2Y44GX44Gm44KLXG4gICAgQ291bnQuZmluZE9uZUFuZFVwZGF0ZSh7bmFtZTogJ3NvbGEnfSwgeyRpbmM6IHsnY3VzdG9tZXJDb3VudCc6IDF9fSwge25ldzogdHJ1ZX0sIChlcnIsIGNvdW50KSA9PiB7XG4gICAgICBpZiAoZXJyKSB7IHJldHVybiBuZXh0KGVycik7IH1cbiAgICAgIHVzZXIuY3VzdG9tZXJOdW1iZXIgPSBOdW1iZXIoY291bnQuY3VzdG9tZXJDb3VudCk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgICB1c2VyLmV4dFB1YktleVtpXSA9IGxpYi5nZW5lcmF0ZUNoaWxkUHVia2V5QmFzZTU4KGxpYi5leHRQdWJrZXlzW2ldLCBOdW1iZXIodXNlci5jdXN0b21lck51bWJlcikpO1xuICAgICAgfVxuICAgICAgdXNlci5zYXZlKChlcnIpID0+IHtcbiAgICAgICAgaWYgKGVycikgeyByZXR1cm4gbmV4dChlcnIpOyB9XG4gICAgICAgIHJlcS5sb2dJbih1c2VyLCAoZXJyKSA9PiB7XG4gICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgcmV0dXJuIG5leHQoZXJyKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVzLnJlZGlyZWN0KCcvJyk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBHRVQgL2ZvcmdvdFxuICogRm9yZ290IFBhc3N3b3JkIHBhZ2UuXG4gKi9cbmV4cG9ydCBsZXQgZ2V0Rm9yZ290ID0gKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuICBpZiAocmVxLmlzQXV0aGVudGljYXRlZCgpKSB7XG4gICAgcmV0dXJuIHJlcy5yZWRpcmVjdCgnLycpO1xuICB9XG4gIHJlcy5yZW5kZXIoJ2FjY291bnQvZm9yZ290Jywge1xuICAgIHRpdGxlOiAn44OR44K544Ov44O844OJ44KS44GK5b+Y44KM44Gu5pa544G4J1xuICB9KTtcbn07XG5cbi8qKlxuICogUE9TVCAvZm9yZ290XG4gKiBDcmVhdGUgYSByYW5kb20gdG9rZW4sIHRoZW4gdGhlIHNlbmQgdXNlciBhbiBlbWFpbCB3aXRoIGEgcmVzZXQgbGluay5cbiAqL1xuZXhwb3J0IGxldCBwb3N0Rm9yZ290ID0gKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKSA9PiB7XG4gIHJlcS5hc3NlcnQoJ2VtYWlsJywgJ+acieWKueOBquODoeODvOODq+OCouODieODrOOCueOCkuWFpeWKm+OBl+OBpuOBj+OBoOOBleOBhC4nKS5pc0VtYWlsKCk7XG4gIHJlcS5zYW5pdGl6ZSgnZW1haWwnKS5ub3JtYWxpemVFbWFpbCh7IGdtYWlsX3JlbW92ZV9kb3RzOiBmYWxzZSB9KTtcblxuICBjb25zdCBlcnJvcnMgPSByZXEudmFsaWRhdGlvbkVycm9ycygpO1xuXG4gIGlmIChlcnJvcnMpIHtcbiAgICByZXEuZmxhc2goJ2Vycm9ycycsIGVycm9ycyk7XG4gICAgcmV0dXJuIHJlcy5yZWRpcmVjdCgnL2ZvcmdvdCcpO1xuICB9XG5cbiAgY29uc3QgY3JlYXRlUmFuZG9tVG9rZW4gPSByYW5kb21CeXRlc0FzeW5jKDE2KVxuICAgIC50aGVuKGJ1ZiA9PiBidWYudG9TdHJpbmcoJ2hleCcpKTtcblxuICBjb25zdCBzZXRSYW5kb21Ub2tlbiA9ICh0b2tlbjogc3RyaW5nKSA9PlxuICAgIFVzZXJcbiAgICAgIC5maW5kT25lKHsgZW1haWw6IHJlcS5ib2R5LmVtYWlsIH0pXG4gICAgICAudGhlbigodXNlcjogYW55KSA9PiB7XG4gICAgICAgIGlmICghdXNlcikge1xuICAgICAgICAgIHJlcS5mbGFzaCgnZXJyb3JzJywgeyBtc2c6ICfjgZPjga7jg6Hjg7zjg6vjgqLjg4njg6zjgrnjga7jgqLjgqvjgqbjg7Pjg4jjga/lrZjlnKjjgZfjgb7jgZvjgpMuJyB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB1c2VyLnBhc3N3b3JkUmVzZXRUb2tlbiA9IHRva2VuO1xuICAgICAgICAgIHVzZXIucGFzc3dvcmRSZXNldEV4cGlyZXMgPSBEYXRlLm5vdygpICsgMzYwMDAwMDsgLy8gMSBob3VyXG4gICAgICAgICAgdXNlciA9IHVzZXIuc2F2ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1c2VyO1xuICAgICAgfSk7XG5cbiAgY29uc3Qgc2VuZEZvcmdvdFBhc3N3b3JkRW1haWwgPSAodXNlcjogVXNlck1vZGVsKSA9PiB7XG4gICAgaWYgKCF1c2VyKSB7IHJldHVybjsgfVxuICAgIGNvbnN0IHRva2VuID0gdXNlci5wYXNzd29yZFJlc2V0VG9rZW47XG4gICAgbGV0IHRyYW5zcG9ydGVyID0gbm9kZW1haWxlci5jcmVhdGVUcmFuc3BvcnQoe1xuICAgICAgc2VydmljZTogJ1NlbmRHcmlkJyxcbiAgICAgIGF1dGg6IHtcbiAgICAgICAgdXNlcjogcHJvY2Vzcy5lbnYuU0VOREdSSURfVVNFUixcbiAgICAgICAgcGFzczogcHJvY2Vzcy5lbnYuU0VOREdSSURfUEFTU1dPUkRcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBtYWlsT3B0aW9ucyA9IHtcbiAgICAgIHRvOiB1c2VyLmVtYWlsLFxuICAgICAgZnJvbTogJ2NyeXB0b0BwYXkuY29tJyxcbiAgICAgIHN1YmplY3Q6ICdDcnlwdG8gUGF544Gu44OR44K544Ov44O844OJ44Oq44K744OD44OIJyxcbiAgICAgIHRleHQ6IGBZb3UgYXJlIHJlY2VpdmluZyB0aGlzIGVtYWlsIGJlY2F1c2UgeW91IChvciBzb21lb25lIGVsc2UpIGhhdmUgcmVxdWVzdGVkIHRoZSByZXNldCBvZiB0aGUgcGFzc3dvcmQgZm9yIHlvdXIgYWNjb3VudC5cXG5cXG5cbiAgICAgICAgUGxlYXNlIGNsaWNrIG9uIHRoZSBmb2xsb3dpbmcgbGluaywgb3IgcGFzdGUgdGhpcyBpbnRvIHlvdXIgYnJvd3NlciB0byBjb21wbGV0ZSB0aGUgcHJvY2VzczpcXG5cXG5cbiAgICAgICAgaHR0cDovLyR7cmVxLmhlYWRlcnMuaG9zdH0vcmVzZXQvJHt0b2tlbn1cXG5cXG5cbiAgICAgICAgSWYgeW91IGRpZCBub3QgcmVxdWVzdCB0aGlzLCBwbGVhc2UgaWdub3JlIHRoaXMgZW1haWwgYW5kIHlvdXIgcGFzc3dvcmQgd2lsbCByZW1haW4gdW5jaGFuZ2VkLlxcbmBcbiAgICB9O1xuICAgIHJldHVybiB0cmFuc3BvcnRlci5zZW5kTWFpbChtYWlsT3B0aW9ucylcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgcmVxLmZsYXNoKCdpbmZvJywgeyBtc2c6IGBBbiBlLW1haWwgaGFzIGJlZW4gc2VudCB0byAke3VzZXIuZW1haWx9IHdpdGggZnVydGhlciBpbnN0cnVjdGlvbnMuYCB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBpZiAoZXJyLm1lc3NhZ2UgPT09ICdzZWxmIHNpZ25lZCBjZXJ0aWZpY2F0ZSBpbiBjZXJ0aWZpY2F0ZSBjaGFpbicpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnV0FSTklORzogU2VsZiBzaWduZWQgY2VydGlmaWNhdGUgaW4gY2VydGlmaWNhdGUgY2hhaW4uJyArXG4gICAgICAgICAgICAnIFJldHJ5aW5nIHdpdGggdGhlIHNlbGYgc2lnbmVkIGNlcnRpZmljYXRlLiBVc2UgYSB2YWxpZCBjZXJ0aWZpY2F0ZSBpZiBpbiBwcm9kdWN0aW9uLicpO1xuICAgICAgICAgIHRyYW5zcG9ydGVyID0gbm9kZW1haWxlci5jcmVhdGVUcmFuc3BvcnQoe1xuICAgICAgICAgICAgc2VydmljZTogJ1NlbmRHcmlkJyxcbiAgICAgICAgICAgIGF1dGg6IHtcbiAgICAgICAgICAgICAgdXNlcjogcHJvY2Vzcy5lbnYuU0VOREdSSURfVVNFUixcbiAgICAgICAgICAgICAgcGFzczogcHJvY2Vzcy5lbnYuU0VOREdSSURfUEFTU1dPUkRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0bHM6IHtcbiAgICAgICAgICAgICAgcmVqZWN0VW5hdXRob3JpemVkOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiB0cmFuc3BvcnRlci5zZW5kTWFpbChtYWlsT3B0aW9ucylcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgcmVxLmZsYXNoKCdpbmZvJywgeyBtc2c6IGBBbiBlLW1haWwgaGFzIGJlZW4gc2VudCB0byAke3VzZXIuZW1haWx9IHdpdGggZnVydGhlciBpbnN0cnVjdGlvbnMuYCB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUjogQ291bGQgbm90IHNlbmQgZm9yZ290IHBhc3N3b3JkIGVtYWlsIGFmdGVyIHNlY3VyaXR5IGRvd25ncmFkZS5cXG4nLCBlcnIpO1xuICAgICAgICByZXEuZmxhc2goJ2Vycm9ycycsIHsgbXNnOiAnRXJyb3Igc2VuZGluZyB0aGUgcGFzc3dvcmQgcmVzZXQgbWVzc2FnZS4gUGxlYXNlIHRyeSBhZ2FpbiBzaG9ydGx5LicgfSk7XG4gICAgICAgIHJldHVybiBlcnI7XG4gICAgICB9KTtcbiAgfTtcblxuICBjcmVhdGVSYW5kb21Ub2tlblxuICAgIC50aGVuKHNldFJhbmRvbVRva2VuKVxuICAgIC50aGVuKHNlbmRGb3Jnb3RQYXNzd29yZEVtYWlsKVxuICAgIC50aGVuKCgpID0+IHJlcy5yZWRpcmVjdCgnL2ZvcmdvdCcpKVxuICAgIC5jYXRjaChuZXh0KTtcbn07XG5cbi8qKlxuICogR0VUIC9yZXNldC86dG9rZW5cbiAqIFJlc2V0IFBhc3N3b3JkIHBhZ2UuXG4gKi9cbmV4cG9ydCBsZXQgZ2V0UmVzZXQgPSAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pID0+IHtcbiAgaWYgKHJlcS5pc0F1dGhlbnRpY2F0ZWQoKSkge1xuICAgIHJldHVybiByZXMucmVkaXJlY3QoJy8nKTtcbiAgfVxuICBVc2VyXG4gICAgLmZpbmRPbmUoeyBwYXNzd29yZFJlc2V0VG9rZW46IHJlcS5wYXJhbXMudG9rZW4gfSlcbiAgICAud2hlcmUoJ3Bhc3N3b3JkUmVzZXRFeHBpcmVzJykuZ3QoRGF0ZS5ub3coKSlcbiAgICAuZXhlYygoZXJyLCB1c2VyKSA9PiB7XG4gICAgICBpZiAoZXJyKSB7IHJldHVybiBuZXh0KGVycik7IH1cbiAgICAgIGlmICghdXNlcikge1xuICAgICAgICByZXEuZmxhc2goJ2Vycm9ycycsIHsgbXNnOiAn44OR44K544Ov44O844OJ44Oq44K744OD44OI44OI44O844Kv44Oz44GM54Sh5Yq544GL5pyf6ZmQ5YiH44KM44Gn44GZLicgfSk7XG4gICAgICAgIHJldHVybiByZXMucmVkaXJlY3QoJy9mb3Jnb3QnKTtcbiAgICAgIH1cbiAgICAgIHJlcy5yZW5kZXIoJ2FjY291bnQvcmVzZXQnLCB7XG4gICAgICAgIHRpdGxlOiAn44OR44K544Ov44O844OJ44Oq44K744OD44OIJ1xuICAgICAgfSk7XG4gICAgfSk7XG59O1xuXG4vKipcbiAqIFBPU1QgL3Jlc2V0Lzp0b2tlblxuICogUHJvY2VzcyB0aGUgcmVzZXQgcGFzc3dvcmQgcmVxdWVzdC5cbiAqL1xuZXhwb3J0IGxldCBwb3N0UmVzZXQgPSAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pID0+IHtcbiAgcmVxLmFzc2VydCgncGFzc3dvcmQnLCAn44OR44K544Ov44O844OJ44GvNOaWh+Wtl+S7peS4iuOBq+OBl+OBpuOBj+OBoOOBleOBhC4nKS5sZW4oeyBtaW46IDQgfSk7XG4gIHJlcS5hc3NlcnQoJ2NvbmZpcm0nLCAn44OR44K544Ov44O844OJ44GM5LiA6Ie044GX44G+44Gb44KTLicpLmVxdWFscyhyZXEuYm9keS5wYXNzd29yZCk7XG5cbiAgY29uc3QgZXJyb3JzID0gcmVxLnZhbGlkYXRpb25FcnJvcnMoKTtcblxuICBpZiAoZXJyb3JzKSB7XG4gICAgcmVxLmZsYXNoKCdlcnJvcnMnLCBlcnJvcnMpO1xuICAgIHJldHVybiByZXMucmVkaXJlY3QoJ2JhY2snKTtcbiAgfVxuXG4gIGNvbnN0IHJlc2V0UGFzc3dvcmQgPSAoKSA9PlxuICAgIFVzZXJcbiAgICAgIC5maW5kT25lKHsgcGFzc3dvcmRSZXNldFRva2VuOiByZXEucGFyYW1zLnRva2VuIH0pXG4gICAgICAud2hlcmUoJ3Bhc3N3b3JkUmVzZXRFeHBpcmVzJykuZ3QoRGF0ZS5ub3coKSlcbiAgICAgIC50aGVuKCh1c2VyKSA9PiB7XG4gICAgICAgIGlmICghdXNlcikge1xuICAgICAgICAgIHJlcS5mbGFzaCgnZXJyb3JzJywgeyBtc2c6ICfjg5Hjgrnjg6/jg7zjg4njg6rjgrvjg4Pjg4jjg4jjg7zjgq/jg7PjgYznhKHlirnjgYvmnJ/pmZDliIfjgozjgafjgZkuJyB9KTtcbiAgICAgICAgICByZXR1cm4gcmVzLnJlZGlyZWN0KCdiYWNrJyk7XG4gICAgICAgIH1cbiAgICAgICAgdXNlci5wYXNzd29yZCA9IHJlcS5ib2R5LnBhc3N3b3JkO1xuICAgICAgICB1c2VyLnBhc3N3b3JkUmVzZXRUb2tlbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgdXNlci5wYXNzd29yZFJlc2V0RXhwaXJlcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgcmV0dXJuIHVzZXIuc2F2ZSgpLnRoZW4oKCkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgIHJlcS5sb2dJbih1c2VyLCAoZXJyKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7IHJldHVybiByZWplY3QoZXJyKTsgfVxuICAgICAgICAgICAgcmVzb2x2ZSh1c2VyKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSkpO1xuICAgICAgfSk7XG5cbiAgY29uc3Qgc2VuZFJlc2V0UGFzc3dvcmRFbWFpbCA9ICh1c2VyOiBVc2VyTW9kZWwpID0+IHtcbiAgICBpZiAoIXVzZXIpIHsgcmV0dXJuOyB9XG4gICAgbGV0IHRyYW5zcG9ydGVyID0gbm9kZW1haWxlci5jcmVhdGVUcmFuc3BvcnQoe1xuICAgICAgc2VydmljZTogJ1NlbmRHcmlkJyxcbiAgICAgIGF1dGg6IHtcbiAgICAgICAgdXNlcjogcHJvY2Vzcy5lbnYuU0VOREdSSURfVVNFUixcbiAgICAgICAgcGFzczogcHJvY2Vzcy5lbnYuU0VOREdSSURfUEFTU1dPUkRcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBtYWlsT3B0aW9ucyA9IHtcbiAgICAgIHRvOiB1c2VyLmVtYWlsLFxuICAgICAgZnJvbTogJ3Rlc3RAZXhhbXBsZS5jb20nLFxuICAgICAgc3ViamVjdDogJ0NyeXB0byBQYXnjga7jg5Hjgrnjg6/jg7zjg4njgpLlpInmm7TjgZfjgb7jgZfjgZ8uJyxcbiAgICAgIHRleHQ6IGBIZWxsbyxcXG5cXG5UaGlzIGlzIGEgY29uZmlybWF0aW9uIHRoYXQgdGhlIHBhc3N3b3JkIGZvciB5b3VyIGFjY291bnQgJHt1c2VyLmVtYWlsfSBoYXMganVzdCBiZWVuIGNoYW5nZWQuXFxuYFxuICAgIH07XG4gICAgcmV0dXJuIHRyYW5zcG9ydGVyLnNlbmRNYWlsKG1haWxPcHRpb25zKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICByZXEuZmxhc2goJ3N1Y2Nlc3MnLCB7IG1zZzogJ+ODkeOCueODr+ODvOODieWkieabtOOBq+aIkOWKn+OBl+OBvuOBl+OBny4nIH0pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGlmIChlcnIubWVzc2FnZSA9PT0gJ3NlbGYgc2lnbmVkIGNlcnRpZmljYXRlIGluIGNlcnRpZmljYXRlIGNoYWluJykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdXQVJOSU5HOiBTZWxmIHNpZ25lZCBjZXJ0aWZpY2F0ZSBpbiBjZXJ0aWZpY2F0ZSBjaGFpbi4gUmV0cnlpbmcgd2l0aCB0aGUgc2VsZiBzaWduZWQgY2VydGlmaWNhdGUuIFVzZSBhIHZhbGlkIGNlcnRpZmljYXRlIGlmIGluIHByb2R1Y3Rpb24uJyk7XG4gICAgICAgICAgdHJhbnNwb3J0ZXIgPSBub2RlbWFpbGVyLmNyZWF0ZVRyYW5zcG9ydCh7XG4gICAgICAgICAgICBzZXJ2aWNlOiAnU2VuZEdyaWQnLFxuICAgICAgICAgICAgYXV0aDoge1xuICAgICAgICAgICAgICB1c2VyOiBwcm9jZXNzLmVudi5TRU5ER1JJRF9VU0VSLFxuICAgICAgICAgICAgICBwYXNzOiBwcm9jZXNzLmVudi5TRU5ER1JJRF9QQVNTV09SRFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRsczoge1xuICAgICAgICAgICAgICByZWplY3RVbmF1dGhvcml6ZWQ6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIHRyYW5zcG9ydGVyLnNlbmRNYWlsKG1haWxPcHRpb25zKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICByZXEuZmxhc2goJ3N1Y2Nlc3MnLCB7IG1zZzogJ+ODkeOCueODr+ODvOODieWkieabtOOBq+aIkOWKn+OBl+OBvuOBl+OBny4nIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SOiBDb3VsZCBub3Qgc2VuZCBwYXNzd29yZCByZXNldCBjb25maXJtYXRpb24gZW1haWwgYWZ0ZXIgc2VjdXJpdHkgZG93bmdyYWRlLlxcbicsIGVycik7XG4gICAgICAgIHJlcS5mbGFzaCgnd2FybmluZycsIHsgbXNnOiAnWW91ciBwYXNzd29yZCBoYXMgYmVlbiBjaGFuZ2VkLCBob3dldmVyIHdlIHdlcmUgdW5hYmxlIHRvIHNlbmQgeW91IGEgY29uZmlybWF0aW9uIGVtYWlsLiBXZSB3aWxsIGJlIGxvb2tpbmcgaW50byBpdCBzaG9ydGx5LicgfSk7XG4gICAgICAgIHJldHVybiBlcnI7XG4gICAgICB9KTtcbiAgfTtcblxuICByZXNldFBhc3N3b3JkKClcbiAgICAudGhlbihzZW5kUmVzZXRQYXNzd29yZEVtYWlsKVxuICAgIC50aGVuKCgpID0+IHsgaWYgKCFyZXMuZmluaXNoZWQpIHJlcy5yZWRpcmVjdCgnLycpOyB9KVxuICAgIC5jYXRjaChlcnIgPT4gbmV4dChlcnIpKTtcbn07XG5cbi8qKlxuICogR0VUIC9hY2NvdW50XG4gKiBQcm9maWxlIHBhZ2UuXG4gKi9cbmV4cG9ydCBsZXQgZ2V0QWNjb3VudCA9IChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcbiAgcmVzLnJlbmRlcignYWNjb3VudC9wcm9maWxlJywge1xuICAgIHRpdGxlOiAnQWNjb3VudCBNYW5hZ2VtZW50J1xuICB9KTtcbn07XG5cbi8qKlxuICogUE9TVCAvYWNjb3VudC9wcm9maWxlXG4gKiBVcGRhdGUgcHJvZmlsZSBpbmZvcm1hdGlvbi5cbiAqL1xuZXhwb3J0IGxldCBwb3N0VXBkYXRlUHJvZmlsZSA9IChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikgPT4ge1xuICByZXEuYXNzZXJ0KCdlbWFpbCcsICfmnInlirnjgarjg6Hjg7zjg6vjgqLjg4njg6zjgrnjgpLlhaXlipvjgZfjgabjgY/jgaDjgZXjgYQuJykuaXNFbWFpbCgpO1xuICByZXEuc2FuaXRpemUoJ2VtYWlsJykubm9ybWFsaXplRW1haWwoeyBnbWFpbF9yZW1vdmVfZG90czogZmFsc2UgfSk7XG5cbiAgY29uc3QgZXJyb3JzID0gcmVxLnZhbGlkYXRpb25FcnJvcnMoKTtcblxuICBpZiAoZXJyb3JzKSB7XG4gICAgcmVxLmZsYXNoKCdlcnJvcnMnLCBlcnJvcnMpO1xuICAgIHJldHVybiByZXMucmVkaXJlY3QoJy9hY2NvdW50Jyk7XG4gIH1cblxuICBVc2VyLmZpbmRCeUlkKHJlcS51c2VyLmlkLCAoZXJyLCB1c2VyKSA9PiB7XG4gICAgaWYgKGVycikgeyByZXR1cm4gbmV4dChlcnIpOyB9XG4gICAgdXNlci5lbWFpbCA9IHJlcS5ib2R5LmVtYWlsIHx8ICcnO1xuICAgIHVzZXIucHJvZmlsZS5uYW1lID0gcmVxLmJvZHkubmFtZSB8fCAnJztcbiAgICB1c2VyLnByb2ZpbGUuZ2VuZGVyID0gcmVxLmJvZHkuZ2VuZGVyIHx8ICcnO1xuICAgIHVzZXIucHJvZmlsZS5sb2NhdGlvbiA9IHJlcS5ib2R5LmxvY2F0aW9uIHx8ICcnO1xuICAgIHVzZXIucHJvZmlsZS53ZWJzaXRlID0gcmVxLmJvZHkud2Vic2l0ZSB8fCAnJztcbiAgICB1c2VyLnNhdmUoKGVycikgPT4ge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICBpZiAoZXJyLmNvZGUgPT09IDExMDAwKSB7XG4gICAgICAgICAgcmVxLmZsYXNoKCdlcnJvcnMnLCB7IG1zZzogJ+WFpeWKm+OBleOCjOOBn+ODoeODvOODq+OCouODieODrOOCueOBr+OBmeOBp+OBq+WtmOWcqOOBl+OBpuOBhOOBvuOBmS4nIH0pO1xuICAgICAgICAgIHJldHVybiByZXMucmVkaXJlY3QoJy9hY2NvdW50Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5leHQoZXJyKTtcbiAgICAgIH1cbiAgICAgIHJlcS5mbGFzaCgnc3VjY2VzcycsIHsgbXNnOiAn44OX44Ot44OV44Kj44O844Or5oOF5aCx44KS5pu05paw44GX44G+44GX44GfLicgfSk7XG4gICAgICByZXMucmVkaXJlY3QoJy9hY2NvdW50Jyk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBQT1NUIC9hY2NvdW50L3Bhc3N3b3JkXG4gKiBVcGRhdGUgY3VycmVudCBwYXNzd29yZC5cbiAqL1xuZXhwb3J0IGxldCBwb3N0VXBkYXRlUGFzc3dvcmQgPSAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pID0+IHtcbiAgcmVxLmFzc2VydCgncGFzc3dvcmQnLCAn44OR44K544Ov44O844OJ44GvNOaWh+Wtl+S7peS4iuOBq+OBl+OBpuOBj+OBoOOBleOBhC4nKS5sZW4oeyBtaW46IDQgfSk7XG4gIHJlcS5hc3NlcnQoJ2NvbmZpcm1QYXNzd29yZCcsICfjg5Hjgrnjg6/jg7zjg4njgYzkuIDoh7TjgZfjgb7jgZvjgpMuJykuZXF1YWxzKHJlcS5ib2R5LnBhc3N3b3JkKTtcblxuICBjb25zdCBlcnJvcnMgPSByZXEudmFsaWRhdGlvbkVycm9ycygpO1xuXG4gIGlmIChlcnJvcnMpIHtcbiAgICByZXEuZmxhc2goJ2Vycm9ycycsIGVycm9ycyk7XG4gICAgcmV0dXJuIHJlcy5yZWRpcmVjdCgnL2FjY291bnQnKTtcbiAgfVxuXG4gIFVzZXIuZmluZEJ5SWQocmVxLnVzZXIuaWQsIChlcnIsIHVzZXIpID0+IHtcbiAgICBpZiAoZXJyKSB7IHJldHVybiBuZXh0KGVycik7IH1cbiAgICB1c2VyLnBhc3N3b3JkID0gcmVxLmJvZHkucGFzc3dvcmQ7XG4gICAgdXNlci5zYXZlKChlcnIpID0+IHtcbiAgICAgIGlmIChlcnIpIHsgcmV0dXJuIG5leHQoZXJyKTsgfVxuICAgICAgcmVxLmZsYXNoKCdzdWNjZXNzJywgeyBtc2c6ICfjg5Hjgrnjg6/jg7zjg4njgpLlpInmm7TjgZfjgb7jgZfjgZ8uJyB9KTtcbiAgICAgIHJlcy5yZWRpcmVjdCgnL2FjY291bnQnKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIFBPU1QgL2FjY291bnQvZGVsZXRlXG4gKiBEZWxldGUgdXNlciBhY2NvdW50LlxuICovXG5leHBvcnQgbGV0IHBvc3REZWxldGVBY2NvdW50ID0gKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKSA9PiB7XG4gIFVzZXIuZGVsZXRlT25lKHsgX2lkOiByZXEudXNlci5pZCB9LCAoZXJyKSA9PiB7XG4gICAgaWYgKGVycikgeyByZXR1cm4gbmV4dChlcnIpOyB9XG4gICAgcmVxLmxvZ291dCgpO1xuICAgIHJlcS5mbGFzaCgnaW5mbycsIHsgbXNnOiAn44Ki44Kr44Km44Oz44OI44KS5YmK6Zmk44GX44G+44GX44GfLicgfSk7XG4gICAgcmVzLnJlZGlyZWN0KCcvJyk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBHRVQgL2FjY291bnQvdW5saW5rLzpwcm92aWRlclxuICogVW5saW5rIE9BdXRoIHByb3ZpZGVyLlxuICovXG5leHBvcnQgbGV0IGdldE9hdXRoVW5saW5rID0gKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKSA9PiB7XG4gIGNvbnN0IHsgcHJvdmlkZXIgfSA9IHJlcS5wYXJhbXM7XG4gIFVzZXIuZmluZEJ5SWQocmVxLnVzZXIuaWQsIChlcnIsIHVzZXI6IGFueSkgPT4ge1xuICAgIGlmIChlcnIpIHsgcmV0dXJuIG5leHQoZXJyKTsgfVxuICAgIHVzZXJbcHJvdmlkZXJdID0gdW5kZWZpbmVkO1xuICAgIHVzZXIudG9rZW5zID0gdXNlci50b2tlbnMuZmlsdGVyKCh0b2tlbjogQXV0aFRva2VuKSA9PiB0b2tlbi5raW5kICE9PSBwcm92aWRlcik7XG4gICAgdXNlci5zYXZlKChlcnI6IFdyaXRlRXJyb3IpID0+IHtcbiAgICAgIGlmIChlcnIpIHsgcmV0dXJuIG5leHQoZXJyKTsgfVxuICAgICAgcmVxLmZsYXNoKCdpbmZvJywgeyBtc2c6IGAke3Byb3ZpZGVyfeOCouOCq+OCpuODs+ODiOOBqOOBrumAo+aQuuOCkuino+mZpOOBl+OBvuOBl+OBny5gIH0pO1xuICAgICAgcmVzLnJlZGlyZWN0KCcvYWNjb3VudCcpO1xuICAgIH0pO1xuICB9KTtcbn07XG4iLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuXG5pbnRlcmZhY2UgSUNvdW50IGV4dGVuZHMgbW9uZ29vc2UuRG9jdW1lbnQge1xuICBuYW1lOiBTdHJpbmc7XG4gIGN1c3RvbWVyQ291bnQ6IE51bWJlcjtcbn1cblxuY29uc3QgY291bnRTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcbiAgbmFtZTogU3RyaW5nLFxuICBjdXN0b21lckNvdW50OiBOdW1iZXJcbn0pO1xuXG5jb25zdCBDb3VudCA9IG1vbmdvb3NlLm1vZGVsPElDb3VudD4oJ0NvdW50JywgY291bnRTY2hlbWEpO1xuXG5leHBvcnQgZGVmYXVsdCBDb3VudDtcbiIsImltcG9ydCBiY3J5cHQgZnJvbSAnYmNyeXB0LW5vZGVqcyc7XG5pbXBvcnQgY3J5cHRvIGZyb20gJ2NyeXB0byc7XG5pbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UsIE5leHRGdW5jdGlvbiB9IGZyb20gJ2V4cHJlc3MnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElVc2VyRG9jdW1lbnQgZXh0ZW5kcyBtb25nb29zZS5Eb2N1bWVudCB7XG4gIGVtYWlsOiBTdHJpbmc7XG4gIHBhc3N3b3JkOiBTdHJpbmc7XG4gIHBhc3N3b3JkUmVzZXRUb2tlbjogU3RyaW5nO1xuICBwYXNzd29yZFJlc2V0RXhwaXJlczogRGF0ZTtcbiAgbGFyZ2VDb3VudDogTnVtYmVyO1xuICBtaWRkbGVDb3VudDogTnVtYmVyO1xuICBzbWFsbENvdW50OiBOdW1iZXI7XG4gIGN1c3RvbWVyTnVtYmVyOiBOdW1iZXI7XG4gIGV4dFB1YktleTogQXJyYXk8U3RyaW5nPjtcbiAgW2luZGV4OiBzdHJpbmddOiBhbnk7XG5cbiAgZmFjZWJvb2s6IFN0cmluZztcbiAgdHdpdHRlcjogU3RyaW5nO1xuICB0b2tlbnM6IEFycmF5PHt9PjtcblxuICBwcm9maWxlOiB7XG4gICAgbmFtZTogU3RyaW5nLFxuICAgIGdlbmRlcjogU3RyaW5nLFxuICAgIGxvY2F0aW9uOiBTdHJpbmcsXG4gICAgd2Vic2l0ZTogU3RyaW5nLFxuICAgIHBpY3R1cmU6IFN0cmluZ1xuICB9O1xuXG4gIGNvbXBhcmVQYXNzd29yZChhcmcwOiBTdHJpbmcsIGFyZzE6IEJvb2xlYW4pOiB2b2lkO1xufVxuXG5leHBvcnQgdHlwZSBVc2VyTW9kZWwgPSBtb25nb29zZS5Eb2N1bWVudCAmIHtcbiAgZW1haWw6IHN0cmluZztcbiAgcGFzc3dvcmQ6IHN0cmluZztcbiAgcGFzc3dvcmRSZXNldFRva2VuOiBzdHJpbmc7XG4gIHBhc3N3b3JkUmVzZXRFeHBpcmVzOiBEYXRlO1xuICBsYXJnZUNvdW50OiBudW1iZXI7XG4gIG1pZGRsZUNvdW50OiBudW1iZXI7XG4gIHNtYWxsQ291bnQ6IG51bWJlcjtcbiAgY3VzdG9tZXJOdW1iZXI6IG51bWJlcjtcbiAgZXh0UHViS2V5OiBzdHJpbmdbXTtcbiAgW2luZGV4OiBzdHJpbmddOiBhbnk7XG5cbiAgZmFjZWJvb2s6IHN0cmluZztcbiAgdHdpdHRlcjogc3RyaW5nLFxuICB0b2tlbnM6IEF1dGhUb2tlbltdO1xuXG4gIHByb2ZpbGU6IHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgZ2VuZGVyOiBzdHJpbmc7XG4gICAgbG9jYXRpb246IHN0cmluZztcbiAgICB3ZWJzaXRlOiBzdHJpbmc7XG4gICAgcGljdHVyZTogc3RyaW5nO1xuICB9O1xuXG4gIGNvbXBhcmVQYXNzd29yZDogY29tcGFyZVBhc3N3b3JkRnVuY3Rpb247XG4gIGdyYXZhdGFyKHNpemU6IG51bWJlcik6IHN0cmluZztcbiAgLy8gZ3JhdmF0YXI6IChzaXplOiBudW1iZXIpID0+IHN0cmluZztcbn07XG5cbnR5cGUgY29tcGFyZVBhc3N3b3JkRnVuY3Rpb24gPSAoY2FuZGlkYXRlUGFzc3dvcmQ6IHN0cmluZywgY2I6IChlcnI6IGFueSwgaXNNYXRjaDogYW55KSA9PiB7fSkgPT4gdm9pZDtcblxuZXhwb3J0IHR5cGUgQXV0aFRva2VuID0ge1xuICBhY2Nlc3NUb2tlbjogc3RyaW5nO1xuICBraW5kOiBzdHJpbmc7XG59O1xuXG5jb25zdCB1c2VyU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gIGVtYWlsOiB7IHR5cGU6IFN0cmluZywgdW5pcXVlOiB0cnVlIH0sXG4gIHBhc3N3b3JkOiBTdHJpbmcsXG4gIHBhc3N3b3JkUmVzZXRUb2tlbjogU3RyaW5nLFxuICBwYXNzd29yZFJlc2V0RXhwaXJlczogRGF0ZSxcbiAgbGFyZ2VDb3VudDogTnVtYmVyLFxuICBtaWRkbGVDb3VudDogTnVtYmVyLFxuICBzbWFsbENvdW50OiBOdW1iZXIsXG4gIGN1c3RvbWVyTnVtYmVyOiBOdW1iZXIsXG4gIGV4dFB1YktleTogQXJyYXksXG5cbiAgZmFjZWJvb2s6IFN0cmluZyxcbiAgdHdpdHRlcjogU3RyaW5nLFxuICB0b2tlbnM6IEFycmF5LFxuXG4gIHByb2ZpbGU6IHtcbiAgICBuYW1lOiBTdHJpbmcsXG4gICAgZ2VuZGVyOiBTdHJpbmcsXG4gICAgbG9jYXRpb246IFN0cmluZyxcbiAgICB3ZWJzaXRlOiBTdHJpbmcsXG4gICAgcGljdHVyZTogU3RyaW5nXG4gIH1cbn0sIHsgdGltZXN0YW1wczogdHJ1ZSB9KTtcblxuLyoqXG4gKiBQYXNzd29yZCBoYXNoIG1pZGRsZXdhcmUuXG4gKi9cbnVzZXJTY2hlbWEucHJlKCdzYXZlJywgZnVuY3Rpb24gc2F2ZShuZXh0OiBOZXh0RnVuY3Rpb24pIHtcbiAgY29uc3QgdXNlciA9IHRoaXM7XG4gIGlmICghdXNlci5pc01vZGlmaWVkKCdwYXNzd29yZCcpKSB7IHJldHVybiBuZXh0KCk7IH1cbiAgYmNyeXB0LmdlblNhbHQoMTAsIChlcnIsIHNhbHQpID0+IHtcbiAgICBpZiAoZXJyKSB7IHJldHVybiBuZXh0KGVycik7IH1cbiAgICBiY3J5cHQuaGFzaCh1c2VyLnBhc3N3b3JkLCBzYWx0LCB1bmRlZmluZWQsIChlcnIsIGhhc2gpID0+IHtcbiAgICAgIGlmIChlcnIpIHsgcmV0dXJuIG5leHQoZXJyKTsgfVxuICAgICAgdXNlci5wYXNzd29yZCA9IGhhc2g7XG4gICAgICBuZXh0KCk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG5cbi8qKlxuICogSGVscGVyIG1ldGhvZCBmb3IgdmFsaWRhdGluZyB1c2VyJ3MgcGFzc3dvcmQuXG4gKi9cbnVzZXJTY2hlbWEubWV0aG9kcy5jb21wYXJlUGFzc3dvcmQgPSBmdW5jdGlvbiBjb21wYXJlUGFzc3dvcmQoY2FuZGlkYXRlUGFzc3dvcmQ6IHN0cmluZywgY2I6IChlcnI6IGFueSwgaXNNYXRjaDogYW55KSA9PiB7fSkge1xuICBiY3J5cHQuY29tcGFyZShjYW5kaWRhdGVQYXNzd29yZCwgdGhpcy5wYXNzd29yZCwgKGVyciwgaXNNYXRjaCkgPT4ge1xuICAgIGNiKGVyciwgaXNNYXRjaCk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBIZWxwZXIgbWV0aG9kIGZvciBnZXR0aW5nIHVzZXIncyBncmF2YXRhci5cbiAqL1xudXNlclNjaGVtYS5tZXRob2RzLmdyYXZhdGFyID0gZnVuY3Rpb24gZ3JhdmF0YXIoc2l6ZTogbnVtYmVyKSB7XG4gIGlmICghc2l6ZSkge1xuICAgIHNpemUgPSAyMDA7XG4gIH1cbiAgaWYgKCF0aGlzLmVtYWlsKSB7XG4gICAgcmV0dXJuIGBodHRwczovL2dyYXZhdGFyLmNvbS9hdmF0YXIvP3M9JHtzaXplfSZkPXJldHJvYDtcbiAgfVxuICBjb25zdCBtZDUgPSBjcnlwdG8uY3JlYXRlSGFzaCgnbWQ1JykudXBkYXRlKHRoaXMuZW1haWwpLmRpZ2VzdCgnaGV4Jyk7XG4gIHJldHVybiBgaHR0cHM6Ly9ncmF2YXRhci5jb20vYXZhdGFyLyR7bWQ1fT9zPSR7c2l6ZX0mZD1yZXRyb2A7XG59O1xuXG5jb25zdCBVc2VyID0gbW9uZ29vc2UubW9kZWw8SVVzZXJEb2N1bWVudD4oJ1VzZXInLCB1c2VyU2NoZW1hKTtcblxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcbiIsImltcG9ydCBjaGFsayBmcm9tICdjaGFsayc7XG5pbXBvcnQgZG90ZW52IGZyb20gJ2RvdGVudic7XG5pbXBvcnQgZXJyb3JIYW5kbGVyIGZyb20gJ2Vycm9yaGFuZGxlcic7XG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSwgTmV4dEZ1bmN0aW9uIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcblxuZG90ZW52LmNvbmZpZyh7IHBhdGg6ICcuZW52LmV4YW1wbGUnIH0pO1xuXG5pbXBvcnQgYXBwIGZyb20gJy4vYXBwJztcblxuLyoqXG4gKiBFcnJvciBIYW5kbGVyLlxuICovXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgLy8gb25seSB1c2UgaW4gZGV2ZWxvcG1lbnRcbiAgYXBwLnVzZShlcnJvckhhbmRsZXIoKSk7XG59IGVsc2Uge1xuICBhcHAudXNlKChlcnI6IEVycm9yLCByZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICByZXMuc3RhdHVzKDUwMCkuc2VuZCgnU2VydmVyIEVycm9yJyk7XG4gIH0pO1xufVxuXG4vKipcbiAqIFN0YXJ0IEV4cHJlc3Mgc2VydmVyLlxuICovXG5jb25zdCBzZXJ2ZXIgPSBhcHAubGlzdGVuKGFwcC5nZXQoJ3BvcnQnKSwgKCkgPT4ge1xuICBjb25zb2xlLmxvZyhcbiAgICAnJXMgaHR0cDovL2xvY2FsaG9zdDolZCDjgafli5XjgYTjgabjgYTjgb7jgZkuJyxcbiAgICBjaGFsay5ncmVlbign4pyTJyksXG4gICAgYXBwLmdldCgncG9ydCcpXG4gICk7XG4gIGNvbnNvbGUubG9nKFxuICAgICclcyAlc+ODouODvOODieOBp+OBmS4nLFxuICAgIGNoYWxrLmdyZWVuKCfinJMnKSxcbiAgICBhcHAuZ2V0KCdlbnYnKVxuICApO1xuICBjb25zb2xlLmxvZyhcbiAgICAnJXMgQ1RSTC1DIOOBp+WBnOatouOBl+OBvuOBmS4nLFxuICAgIGNoYWxrLmdyZWVuKCfinJMnKVxuICApO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHNlcnZlcjtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJjcnlwdC1ub2RlanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmlwMzJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYml0Y29pbmpzLWxpYlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJib2R5LXBhcnNlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjaGFsa1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb21wcmVzc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb25uZWN0LW1vbmdvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNyeXB0b1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkb3RlbnZcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXJyb3JoYW5kbGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzcy1mbGFzaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzLXNlc3Npb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzcy12YWxpZGF0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImx1c2NhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vcmdhblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub2RlbWFpbGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhc3Nwb3J0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhc3Nwb3J0LWZhY2Vib29rXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhc3Nwb3J0LWxvY2FsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhc3Nwb3J0LXR3aXR0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1dGlsXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=