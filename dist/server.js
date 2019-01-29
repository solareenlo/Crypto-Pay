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
        req.check('name').not().isEmpty().withMessage('Name cannot be blank');
        req.check('email').isEmail().withMessage('Email is not valid');
    }
    req.check('message').notEmpty().withMessage('Message cannot be blank');
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
                console.log(tbtc.amount[i], tbtc.count[i], tbtc.address[i]);
            }
            res.render('pay/bitcoin', {
                title: 'Bitcoin Pay',
                tbtc
            });
        }
    });
};
exports.putPizzaCount = (req, res) => {
    const { id } = req.user; // mongodbで一意に与えられるユーザーのidを取得
    const count = req.body.data.count; // 何個ずつ増やしたり減らしたりするかの個数
    const size = req.body.data.size;
    if (size == 0) {
        User_1.default.findById(id, (err, user) => {
            if (err)
                res.status(500).send();
            else {
                if ((user.largeCount >= 0 && count == 1) || (user.largeCount > 0 && count == -1)) { // userはobjectで返ってきてる
                    User_1.default.findByIdAndUpdate(id, { $inc: { largeCount: count } }, err => {
                        if (err)
                            res.status(500).send();
                        else {
                            User_1.default.find({ _id: id }, (findErr, user) => {
                                if (findErr)
                                    res.status(500).send();
                                else {
                                    const pubKeysBase58 = [];
                                    // 環境変数にあるpubkeys -> customerNumberによる子拡張公開鍵 -> ピザのサイズによる子拡張公開鍵を生成
                                    for (let i = 0; i < 3; i++)
                                        pubKeysBase58.push(lib.generateChildPubkeyBase58(user[0].extPubKey[i], 0));
                                    const pubKeys = [];
                                    // 環境変数にあるpubkeys -> customerNumberによる子拡張公開鍵 -> ピザのサイズによる子拡張公開鍵 -> ピザの個数による子拡張公開鍵を生成
                                    for (let i = 0; i < 3; i++)
                                        pubKeys.push(lib.generateChildPubkeyBuffer(pubKeysBase58[i], Number(user[0].largeCount)));
                                    const address = lib.generateMultisigAddress(3, pubKeys);
                                    console.log(address);
                                    const amount = 0.005 * user[0].largeCount;
                                    const data = {
                                        address: `https://chart.apis.google.com/chart?cht=qr&chs=300x300&chl=bitcoin:${address}?amount=${amount}`,
                                        count: user[0].largeCount,
                                    };
                                    res.status(200).send(data);
                                }
                            });
                        }
                    });
                }
            }
        });
    }
    else if (size == 1) {
        User_1.default.findById(id, (err, user) => {
            if (err)
                res.status(500).send();
            else {
                if ((user.middleCount >= 0 && count == 1) || (user.middleCount > 0 && count == -1)) { // userはobjectで返ってきてる
                    User_1.default.findByIdAndUpdate(id, { $inc: { middleCount: count } }, err => {
                        if (err)
                            res.status(500).send();
                        else {
                            User_1.default.find({ _id: id }, (findErr, user) => {
                                if (findErr)
                                    res.status(500).send();
                                else {
                                    const pubKeysBase58 = [];
                                    // 環境変数にあるpubkeys -> customerNumberによる子拡張公開鍵 -> ピザのサイズによる子拡張公開鍵を生成
                                    for (let i = 0; i < 3; i++)
                                        pubKeysBase58.push(lib.generateChildPubkeyBase58(user[0].extPubKey[i], 1));
                                    const pubKeys = [];
                                    // 環境変数にあるpubkeys -> customerNumberによる子拡張公開鍵 -> ピザのサイズによる子拡張公開鍵 -> ピザの個数による子拡張公開鍵を生成
                                    for (let i = 0; i < 3; i++)
                                        pubKeys.push(lib.generateChildPubkeyBuffer(pubKeysBase58[i], Number(user[0].middleCount)));
                                    const address = lib.generateMultisigAddress(3, pubKeys);
                                    console.log(address);
                                    const amount = 0.003 * user[0].middleCount;
                                    const data = {
                                        address: `https://chart.apis.google.com/chart?cht=qr&chs=300x300&chl=bitcoin:${address}?amount=${amount}`,
                                        count: user[0].middleCount,
                                    };
                                    res.status(200).send(data); // userは配列の中にobjectが入ってる
                                }
                            });
                        }
                    });
                }
            }
        });
    }
    else if (size == 2) {
        User_1.default.findById(id, (err, user) => {
            if (err)
                res.status(500).send();
            else {
                if ((user.smallCount >= 0 && count == 1) || (user.smallCount > 0 && count == -1)) { // userはobjectで返ってきてる
                    User_1.default.findByIdAndUpdate(id, { $inc: { smallCount: count } }, err => {
                        if (err)
                            res.status(500).send();
                        else {
                            User_1.default.find({ _id: id }, (findErr, user) => {
                                if (findErr)
                                    res.status(500).send();
                                else {
                                    const pubKeysBase58 = [];
                                    // 環境変数にあるpubkeys -> customerNumberによる子拡張公開鍵 -> ピザのサイズによる子拡張公開鍵を生成
                                    for (let i = 0; i < 3; i++)
                                        pubKeysBase58.push(lib.generateChildPubkeyBase58(user[0].extPubKey[i], 1));
                                    const pubKeys = [];
                                    // 環境変数にあるpubkeys -> customerNumberによる子拡張公開鍵 -> ピザのサイズによる子拡張公開鍵 -> ピザの個数による子拡張公開鍵を生成
                                    for (let i = 0; i < 3; i++)
                                        pubKeys.push(lib.generateChildPubkeyBuffer(pubKeysBase58[i], Number(user[0].smallCount)));
                                    const address = lib.generateMultisigAddress(3, pubKeys);
                                    console.log(address);
                                    const amount = 0.001 * user[0].smallCount;
                                    const data = {
                                        address: `https://chart.apis.google.com/chart?cht=qr&chs=300x300&chl=bitcoin:${address}?amount=${amount}`,
                                        count: user[0].smallCount,
                                    };
                                    res.status(200).send(data); // userは配列の中にobjectが入ってる
                                }
                            });
                        }
                    });
                }
            }
        });
    }
};
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
            console.log(count.customerCount);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYml0Y29pbi9saWIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy9wYXNzcG9ydC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvY29udGFjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvaG9tZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvdXNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL0NvdW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvVXNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImJjcnlwdC1ub2RlanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiaXAzMlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJpdGNvaW5qcy1saWJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNoYWxrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29tcHJlc3Npb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb25uZWN0LW1vbmdvXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY3J5cHRvXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZG90ZW52XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXJyb3JoYW5kbGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3MtZmxhc2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzLXNlc3Npb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzLXZhbGlkYXRvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImx1c2NhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9uZ29vc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb3JnYW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJub2RlbWFpbGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGFzc3BvcnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXNzcG9ydC1mYWNlYm9va1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhc3Nwb3J0LWxvY2FsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGFzc3BvcnQtdHdpdHRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1dGlsXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7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Ozs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLGlDIiwiZmlsZSI6InNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3NlcnZlci50c1wiKTtcbiIsIi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqL1xuaW1wb3J0IGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInO1xuaW1wb3J0IGNoYWxrIGZyb20gJ2NoYWxrJztcbmltcG9ydCBjb21wcmVzc2lvbiBmcm9tICdjb21wcmVzc2lvbic7XG5pbXBvcnQgZG90ZW52IGZyb20gJ2RvdGVudic7XG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCBmbGFzaCBmcm9tICdleHByZXNzLWZsYXNoJztcbmltcG9ydCBzZXNzaW9uIGZyb20gJ2V4cHJlc3Mtc2Vzc2lvbic7XG5pbXBvcnQgZXhwcmVzc1ZhbGlkYXRvciBmcm9tICdleHByZXNzLXZhbGlkYXRvcic7XG5pbXBvcnQgeyBjaGVjaywgYm9keSwgcXVlcnksIHBhcmFtLCB2YWxpZGF0aW9uUmVzdWx0IH0gZnJvbSAnZXhwcmVzcy12YWxpZGF0b3IvY2hlY2snO1xuaW1wb3J0IGx1c2NhIGZyb20gJ2x1c2NhJztcbmltcG9ydCBtb25nbyBmcm9tICdjb25uZWN0LW1vbmdvJztcbmltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5pbXBvcnQgbG9nZ2VyIGZyb20gJ21vcmdhbic7XG5pbXBvcnQgcGFzc3BvcnQgZnJvbSAncGFzc3BvcnQnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5cbmNvbnN0IE1vbmdvU3RvcmUgPSBtb25nbyhzZXNzaW9uKTtcblxuZG90ZW52LmNvbmZpZyh7IHBhdGg6ICcuZW52LmV4YW1wbGUnIH0pO1xuXG4vKipcbiAqIENvbnRyb2xsZXJzIChyb3V0ZSBoYW5kbGVycykuXG4gKi9cbmltcG9ydCAqIGFzIGNvbnRhY3RDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcnMvY29udGFjdCc7XG5pbXBvcnQgKiBhcyBob21lQ29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXJzL2hvbWUnO1xuaW1wb3J0ICogYXMgdXNlckNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVycy91c2VyJztcblxuLyoqXG4gKiBBUEkga2V5cyBhbmQgUGFzc3BvcnQgY29uZmlndXJhdGlvbi5cbiAqL1xuY29uc3QgcGFzc3BvcnRDb25maWcgPSByZXF1aXJlKCcuL2NvbmZpZy9wYXNzcG9ydCcpO1xuXG4vKipcbiAqIENyZWF0ZSBFeHByZXNzIHNlcnZlci5cbiAqL1xuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG4vKipcbiAqIENvbm5lY3QgdG8gTW9uZ29EQi5cbiAqL1xubW9uZ29vc2Uuc2V0KCd1c2VGaW5kQW5kTW9kaWZ5JywgZmFsc2UpO1xubW9uZ29vc2Uuc2V0KCd1c2VDcmVhdGVJbmRleCcsIHRydWUpO1xubW9uZ29vc2Uuc2V0KCd1c2VOZXdVcmxQYXJzZXInLCB0cnVlKTtcbm1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkgfHwgJ21vbmdvZGI6Ly9sb2NhbGhvc3Q6MjcwMTcvY3J5cHRvLXBheScpO1xubW9uZ29vc2UuY29ubmVjdGlvbi5vbignZXJyb3InLCAoZXJyKSA9PiB7XG4gIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgY29uc29sZS5sb2coXG4gICAgJyVzIE1vbmdvREIgY29ubmVjdGlvbiBlcnJvci4gUGxlYXNlIG1ha2Ugc3VyZSBNb25nb0RCIGlzIHJ1bm5pbmcuJyxcbiAgICBjaGFsay5yZWQoJ+KclycpXG4gICk7XG4gIHByb2Nlc3MuZXhpdCgpO1xufSk7XG5cbi8qKlxuICogRXhwcmVzcyBjb25maWd1cmF0aW9uLlxuICovXG5hcHAuc2V0KCdwb3J0JywgcHJvY2Vzcy5lbnYuUE9SVCB8fCAzMDAwKTtcbmFwcC5zZXQoJ3ZpZXdzJywgcGF0aC5qb2luKF9fZGlybmFtZSwgJy4uL3ZpZXdzJykpO1xuYXBwLnNldCgndmlldyBlbmdpbmUnLCAncHVnJyk7XG5hcHAudXNlKGNvbXByZXNzaW9uKCkpO1xuYXBwLnVzZShsb2dnZXIoJ2RldicpKTtcbmFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xuYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoeyBleHRlbmRlZDogdHJ1ZSB9KSk7XG5hcHAudXNlKGV4cHJlc3NWYWxpZGF0b3IoKSk7XG5hcHAudXNlKHNlc3Npb24oe1xuICByZXNhdmU6IHRydWUsXG4gIHNhdmVVbmluaXRpYWxpemVkOiB0cnVlLFxuICBzZWNyZXQ6IHByb2Nlc3MuZW52LlNFU1NJT05fU0VDUkVULFxuICBjb29raWU6IHsgbWF4QWdlOiAxMjA5NjAwMDAwIH0sIC8vIHR3byB3ZWVrcyBpbiBtaWxsaXNlY29uZHNcbiAgc3RvcmU6IG5ldyBNb25nb1N0b3JlKHtcbiAgICB1cmw6IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJIHx8ICdtb25nb2RiOi8vbG9jYWxob3N0OjI3MDE3L2NyeXB0by1wYXknLFxuICAgIGF1dG9SZWNvbm5lY3Q6IHRydWUsXG4gIH0pXG59KSk7XG5hcHAudXNlKHBhc3Nwb3J0LmluaXRpYWxpemUoKSk7XG5hcHAudXNlKHBhc3Nwb3J0LnNlc3Npb24oKSk7XG5hcHAudXNlKGZsYXNoKCkpO1xuYXBwLnVzZShsdXNjYS54ZnJhbWUoJ1NBTUVPUklHSU4nKSk7XG5hcHAudXNlKGx1c2NhLnhzc1Byb3RlY3Rpb24odHJ1ZSkpO1xuYXBwLmRpc2FibGUoJ3gtcG93ZXJlZC1ieScpO1xuYXBwLnVzZSgocmVxLCByZXMsIG5leHQpID0+IHtcbiAgcmVzLmxvY2Fscy51c2VyID0gcmVxLnVzZXI7XG4gIG5leHQoKTtcbn0pO1xuYXBwLnVzZSgocmVxLCByZXMsIG5leHQpID0+IHtcbiAgLy8gQWZ0ZXIgc3VjY2Vzc2Z1bCBsb2dpbiwgcmVkaXJlY3QgYmFjayB0byB0aGUgaW50ZW5kZWQgcGFnZVxuICBpZiAoIXJlcS51c2VyXG4gICAgJiYgcmVxLnBhdGggIT09ICcvbG9naW4nXG4gICAgJiYgcmVxLnBhdGggIT09ICcvc2lnbnVwJ1xuICAgICYmICFyZXEucGF0aC5tYXRjaCgvXlxcL2F1dGgvKVxuICAgICYmICFyZXEucGF0aC5tYXRjaCgvXFwuLykpIHtcbiAgICByZXEuc2Vzc2lvbi5yZXR1cm5UbyA9IHJlcS5vcmlnaW5hbFVybDtcbiAgfSBlbHNlIGlmIChyZXEudXNlclxuICAgICYmIHJlcS5wYXRoID09PSAnL2FjY291bnQnKSB7XG4gICAgcmVxLnNlc3Npb24ucmV0dXJuVG8gPSByZXEub3JpZ2luYWxVcmw7XG4gIH1cbiAgbmV4dCgpO1xufSk7XG5hcHAudXNlKCcvJywgZXhwcmVzcy5zdGF0aWMocGF0aC5qb2luKF9fZGlybmFtZSwgJ3B1YmxpYycpLCB7IG1heEFnZTogMzE1NTc2MDAwMDAgfSkpO1xuXG4vKipcbiAqIFByaW1hcnkgYXBwIHJvdXRlcy5cbiAqL1xuYXBwLmdldCgnLycsIGhvbWVDb250cm9sbGVyLmhvbWUpO1xuYXBwLmdldCgnL2xvZ2luJywgdXNlckNvbnRyb2xsZXIuZ2V0TG9naW4pO1xuYXBwLnBvc3QoJy9sb2dpbicsIHVzZXJDb250cm9sbGVyLnBvc3RMb2dpbik7XG5hcHAuZ2V0KCcvbG9nb3V0JywgdXNlckNvbnRyb2xsZXIubG9nb3V0KTtcbmFwcC5nZXQoJy9mb3Jnb3QnLCB1c2VyQ29udHJvbGxlci5nZXRGb3Jnb3QpO1xuYXBwLnBvc3QoJy9mb3Jnb3QnLCB1c2VyQ29udHJvbGxlci5wb3N0Rm9yZ290KTtcbmFwcC5nZXQoJy9yZXNldC86dG9rZW4nLCB1c2VyQ29udHJvbGxlci5nZXRSZXNldCk7XG5hcHAucG9zdCgnL3Jlc2V0Lzp0b2tlbicsIHVzZXJDb250cm9sbGVyLnBvc3RSZXNldCk7XG5hcHAuZ2V0KCcvc2lnbnVwJywgdXNlckNvbnRyb2xsZXIuZ2V0U2lnbnVwKTtcbmFwcC5wb3N0KCcvc2lnbnVwJywgdXNlckNvbnRyb2xsZXIucG9zdFNpZ251cCk7XG5hcHAuZ2V0KCcvY29udGFjdCcsIGNvbnRhY3RDb250cm9sbGVyLmdldENvbnRhY3QpO1xuYXBwLnBvc3QoJy9jb250YWN0JywgY29udGFjdENvbnRyb2xsZXIucG9zdENvbnRhY3QpO1xuYXBwLmdldCgnL2FjY291bnQnLCBwYXNzcG9ydENvbmZpZy5pc0F1dGhlbnRpY2F0ZWQsIHVzZXJDb250cm9sbGVyLmdldEFjY291bnQpO1xuYXBwLnBvc3QoJy9hY2NvdW50L3Byb2ZpbGUnLCBwYXNzcG9ydENvbmZpZy5pc0F1dGhlbnRpY2F0ZWQsIHVzZXJDb250cm9sbGVyLnBvc3RVcGRhdGVQcm9maWxlKTtcbmFwcC5wb3N0KCcvYWNjb3VudC9wYXNzd29yZCcsIHBhc3Nwb3J0Q29uZmlnLmlzQXV0aGVudGljYXRlZCwgdXNlckNvbnRyb2xsZXIucG9zdFVwZGF0ZVBhc3N3b3JkKTtcbmFwcC5wb3N0KCcvYWNjb3VudC9kZWxldGUnLCBwYXNzcG9ydENvbmZpZy5pc0F1dGhlbnRpY2F0ZWQsIHVzZXJDb250cm9sbGVyLnBvc3REZWxldGVBY2NvdW50KTtcbmFwcC5nZXQoJy9hY2NvdW50L3VubGluay86cHJvdmlkZXInLCBwYXNzcG9ydENvbmZpZy5pc0F1dGhlbnRpY2F0ZWQsIHVzZXJDb250cm9sbGVyLmdldE9hdXRoVW5saW5rKTtcbmFwcC5nZXQoJy9iaXRjb2luJywgaG9tZUNvbnRyb2xsZXIuZ2V0UGF5Qml0Y29pbik7XG5hcHAucHV0KCcvYml0Y29pbicsIGhvbWVDb250cm9sbGVyLnB1dFBpenphQ291bnQpO1xuYXBwLmdldCgnL290aGVycycsIGhvbWVDb250cm9sbGVyLmdldFBheU90aGVycyk7XG5cbi8qKlxuICogT0F1dGggYXV0aGVudGljYXRpb24gcm91dGVzLiAoU2lnbiBpbilcbiAqL1xuYXBwLmdldCgnL2F1dGgvZmFjZWJvb2snLCBwYXNzcG9ydC5hdXRoZW50aWNhdGUoJ2ZhY2Vib29rJywgeyBzY29wZTogWydlbWFpbCcsICdwdWJsaWNfcHJvZmlsZSddIH0pKTtcbmFwcC5nZXQoJy9hdXRoL2ZhY2Vib29rL2NhbGxiYWNrJywgcGFzc3BvcnQuYXV0aGVudGljYXRlKCdmYWNlYm9vaycsIHsgZmFpbHVyZVJlZGlyZWN0OiAnL2xvZ2luJyB9KSwgKHJlcSwgcmVzKSA9PiB7XG4gIHJlcy5yZWRpcmVjdChyZXEuc2Vzc2lvbi5yZXR1cm5UbyB8fCAnLycpO1xufSk7XG5hcHAuZ2V0KCcvYXV0aC90d2l0dGVyJywgcGFzc3BvcnQuYXV0aGVudGljYXRlKCd0d2l0dGVyJykpO1xuYXBwLmdldCgnL2F1dGgvdHdpdHRlci9jYWxsYmFjaycsIHBhc3Nwb3J0LmF1dGhlbnRpY2F0ZSgndHdpdHRlcicsIHsgZmFpbHVyZVJlZGlyZWN0OiAnL2xvZ2luJyB9KSwgKHJlcSwgcmVzKSA9PiB7XG4gIHJlcy5yZWRpcmVjdChyZXEuc2Vzc2lvbi5yZXR1cm5UbyB8fCAnLycpO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGFwcDtcbiIsImltcG9ydCB7IHBheW1lbnRzLCBuZXR3b3JrcyB9IGZyb20gJ2JpdGNvaW5qcy1saWInO1xuaW1wb3J0ICogYXMgYmlwMzIgZnJvbSAnYmlwMzInO1xuXG4vLyBleGFtcGxlIGV4dFB1YmtleSBiYXNlNTggc3RyaW5nXG5leHBvcnQgY29uc3QgZXh0UHVia2V5czogc3RyaW5nW10gPSBbXG4gIHByb2Nlc3MuZW52LkVYVF9QVUJfS0VZX0JBU0U1OF8xLFxuICBwcm9jZXNzLmVudi5FWFRfUFVCX0tFWV9CQVNFNThfMixcbiAgcHJvY2Vzcy5lbnYuRVhUX1BVQl9LRVlfQkFTRTU4XzNcbl07XG5cbi8vIGdlbmVyYXRlIGRlcml2ZWQgY2hpbGQgZXh0ZW5kZWQgcHVibGljIGtleVxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlQ2hpbGRQdWJrZXlCdWZmZXIoZXh0S2V5U3RyOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpOiBCdWZmZXIge1xuICBjb25zdCBleHRrZXkgPSBiaXAzMi5mcm9tQmFzZTU4KGV4dEtleVN0ciwgbmV0d29ya3MudGVzdG5ldCk7XG4gIHJldHVybiBleHRrZXkuZGVyaXZlKGluZGV4KS5wdWJsaWNLZXk7XG59XG5cbi8vIGdlbmVyYXRlIGRlcml2ZWQgY2hpbGQgZXh0ZW5kZWQgcHVibGljIGtleVxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlQ2hpbGRQdWJrZXlCYXNlNTgoZXh0S2V5U3RyOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpOiBzdHJpbmcge1xuICBjb25zdCBleHRrZXkgPSBiaXAzMi5mcm9tQmFzZTU4KGV4dEtleVN0ciwgbmV0d29ya3MudGVzdG5ldCk7XG4gIHJldHVybiBleHRrZXkuZGVyaXZlKGluZGV4KS50b0Jhc2U1OCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVNdWx0aXNpZ0FkZHJlc3MobTogbnVtYmVyLCBwdWJrZXlzOiBCdWZmZXJbXSk6IHN0cmluZyB7XG4gIHJldHVybiBwYXltZW50cy5wMnNoKHtuZXR3b3JrOiBuZXR3b3Jrcy50ZXN0bmV0LFxuICAgIHJlZGVlbTogcGF5bWVudHMucDJ3c2goe25ldHdvcms6IG5ldHdvcmtzLnRlc3RuZXQsXG4gICAgICByZWRlZW06IHBheW1lbnRzLnAybXMoe25ldHdvcms6IG5ldHdvcmtzLnRlc3RuZXQsXG4gICAgICAgIG0sIHB1YmtleXMsXG4gICAgICB9KSxcbiAgICB9KSxcbiAgfSkuYWRkcmVzcztcbn1cbiIsImltcG9ydCBwYXNzcG9ydCBmcm9tICdwYXNzcG9ydCc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICdyZXF1ZXN0JztcbmltcG9ydCBwYXNzcG9ydExvY2FsIGZyb20gJ3Bhc3Nwb3J0LWxvY2FsJztcbmltcG9ydCBwYXNzcG9ydEZhY2Vib29rIGZyb20gJ3Bhc3Nwb3J0LWZhY2Vib29rJztcbmltcG9ydCBwYXNzcG9ydFR3aXR0ZXIgZnJvbSAncGFzc3BvcnQtdHdpdHRlcic7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyBkZWZhdWx0IGFzIFVzZXIgfSBmcm9tICcuLi9tb2RlbHMvVXNlcic7XG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSwgTmV4dEZ1bmN0aW9uIH0gZnJvbSAnZXhwcmVzcyc7XG5cbmNvbnN0IExvY2FsU3RyYXRlZ3kgPSBwYXNzcG9ydExvY2FsLlN0cmF0ZWd5O1xuY29uc3QgRmFjZWJvb2tTdHJhdGVneSA9IHBhc3Nwb3J0RmFjZWJvb2suU3RyYXRlZ3k7XG5jb25zdCBUd2l0dGVyU3RyYXRlZ3kgPSBwYXNzcG9ydFR3aXR0ZXIuU3RyYXRlZ3k7XG5cbnBhc3Nwb3J0LnNlcmlhbGl6ZVVzZXI8YW55LCBhbnk+KCh1c2VyLCBkb25lKSA9PiB7XG4gIGRvbmUodW5kZWZpbmVkLCB1c2VyLmlkKTtcbn0pO1xuXG5wYXNzcG9ydC5kZXNlcmlhbGl6ZVVzZXIoKGlkLCBkb25lKSA9PiB7XG4gIFVzZXIuZmluZEJ5SWQoaWQsIChlcnIsIHVzZXIpID0+IHtcbiAgICBkb25lKGVyciwgdXNlcik7XG4gIH0pO1xufSk7XG5cbi8qKlxuICogU2lnbiBpbiB1c2luZyBFbWFpbCBhbmQgUGFzc3dvcmQuXG4gKi9cbnBhc3Nwb3J0LnVzZShuZXcgTG9jYWxTdHJhdGVneSh7IHVzZXJuYW1lRmllbGQ6ICdlbWFpbCcgfSwgKGVtYWlsLCBwYXNzd29yZCwgZG9uZSkgPT4ge1xuICBVc2VyLmZpbmRPbmUoeyBlbWFpbDogZW1haWwudG9Mb3dlckNhc2UoKSB9LCAoZXJyLCB1c2VyOiBhbnkpID0+IHtcbiAgICBpZiAoZXJyKSB7IHJldHVybiBkb25lKGVycik7IH1cbiAgICBpZiAoIXVzZXIpIHtcbiAgICAgIHJldHVybiBkb25lKHVuZGVmaW5lZCwgZmFsc2UsIHsgbWVzc2FnZTogYEVtYWlsICR7ZW1haWx9IG5vdCBmb3VuZC5gIH0pO1xuICAgIH1cbiAgICB1c2VyLmNvbXBhcmVQYXNzd29yZChwYXNzd29yZCwgKGVycjogRXJyb3IsIGlzTWF0Y2g6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmIChlcnIpIHsgcmV0dXJuIGRvbmUoZXJyKTsgfVxuICAgICAgaWYgKGlzTWF0Y2gpIHtcbiAgICAgICAgcmV0dXJuIGRvbmUodW5kZWZpbmVkLCB1c2VyKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBkb25lKHVuZGVmaW5lZCwgZmFsc2UsIHsgbWVzc2FnZTogJ0ludmFsaWQgZW1haWwgb3IgcGFzc3dvcmQuJyB9KTtcbiAgICB9KTtcbiAgfSk7XG59KSk7XG5cbi8qKlxuICogT0F1dGggU3RyYXRlZ3kgT3ZlcnZpZXdcbiAqXG4gKiAtIFVzZXIgaXMgYWxyZWFkeSBsb2dnZWQgaW4uXG4gKiAgIC0gQ2hlY2sgaWYgdGhlcmUgaXMgYW4gZXhpc3RpbmcgYWNjb3VudCB3aXRoIGEgcHJvdmlkZXIgaWQuXG4gKiAgICAgLSBJZiB0aGVyZSBpcywgcmV0dXJuIGFuIGVycm9yIG1lc3NhZ2UuIChBY2NvdW50IG1lcmdpbmcgbm90IHN1cHBvcnRlZClcbiAqICAgICAtIEVsc2UgbGluayBuZXcgT0F1dGggYWNjb3VudCB3aXRoIGN1cnJlbnRseSBsb2dnZWQtaW4gdXNlci5cbiAqIC0gVXNlciBpcyBub3QgbG9nZ2VkIGluLlxuICogICAtIENoZWNrIGlmIGl0J3MgYSByZXR1cm5pbmcgdXNlci5cbiAqICAgICAtIElmIHJldHVybmluZyB1c2VyLCBzaWduIGluIGFuZCB3ZSBhcmUgZG9uZS5cbiAqICAgICAtIEVsc2UgY2hlY2sgaWYgdGhlcmUgaXMgYW4gZXhpc3RpbmcgYWNjb3VudCB3aXRoIHVzZXIncyBlbWFpbC5cbiAqICAgICAgIC0gSWYgdGhlcmUgaXMsIHJldHVybiBhbiBlcnJvciBtZXNzYWdlLlxuICogICAgICAgLSBFbHNlIGNyZWF0ZSBhIG5ldyBhY2NvdW50LlxuICovXG5cbi8qKlxuICogU2lnbiBpbiB3aXRoIEZhY2Vib29rLlxuICovXG5wYXNzcG9ydC51c2UobmV3IEZhY2Vib29rU3RyYXRlZ3koe1xuICBjbGllbnRJRDogcHJvY2Vzcy5lbnYuRkFDRUJPT0tfSUQsXG4gIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuRkFDRUJPT0tfU0VDUkVULFxuICBjYWxsYmFja1VSTDogJy9hdXRoL2ZhY2Vib29rL2NhbGxiYWNrJyxcbiAgcHJvZmlsZUZpZWxkczogWyduYW1lJywgJ2VtYWlsJywgJ2xpbmsnLCAnbG9jYWxlJywgJ3RpbWV6b25lJywgJ2dlbmRlciddLFxuICBwYXNzUmVxVG9DYWxsYmFjazogdHJ1ZVxufSwgKHJlcTogYW55LCBhY2Nlc3NUb2tlbiwgcmVmcmVzaFRva2VuLCBwcm9maWxlLCBkb25lKSA9PiB7XG4gIGlmIChyZXEudXNlcikge1xuICAgIFVzZXIuZmluZE9uZSh7IGZhY2Vib29rOiBwcm9maWxlLmlkIH0sIChlcnIsIGV4aXN0aW5nVXNlcikgPT4ge1xuICAgICAgaWYgKGVycikgeyByZXR1cm4gZG9uZShlcnIpOyB9XG4gICAgICBpZiAoZXhpc3RpbmdVc2VyKSB7XG4gICAgICAgIHJlcS5mbGFzaCgnZXJyb3JzJywgeyBtc2c6ICdUaGVyZSBpcyBhbHJlYWR5IGEgRmFjZWJvb2sgYWNjb3VudCB0aGF0IGJlbG9uZ3MgdG8geW91LiBTaWduIGluIHdpdGggdGhhdCBhY2NvdW50IG9yIGRlbGV0ZSBpdCwgdGhlbiBsaW5rIGl0IHdpdGggeW91ciBjdXJyZW50IGFjY291bnQuJyB9KTtcbiAgICAgICAgZG9uZShlcnIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgVXNlci5maW5kQnlJZChyZXEudXNlci5pZCwgKGVyciwgdXNlcikgPT4ge1xuICAgICAgICAgIGlmIChlcnIpIHsgcmV0dXJuIGRvbmUoZXJyKTsgfVxuICAgICAgICAgIHVzZXIuZmFjZWJvb2sgPSBwcm9maWxlLmlkO1xuICAgICAgICAgIHVzZXIudG9rZW5zLnB1c2goeyBraW5kOiAnZmFjZWJvb2snLCBhY2Nlc3NUb2tlbiB9KTtcbiAgICAgICAgICB1c2VyLnByb2ZpbGUubmFtZSA9IHVzZXIucHJvZmlsZS5uYW1lIHx8IGAke3Byb2ZpbGUubmFtZS5naXZlbk5hbWV9ICR7cHJvZmlsZS5uYW1lLmZhbWlseU5hbWV9YDtcbiAgICAgICAgICB1c2VyLnByb2ZpbGUuZ2VuZGVyID0gdXNlci5wcm9maWxlLmdlbmRlciB8fCBwcm9maWxlLl9qc29uLmdlbmRlcjtcbiAgICAgICAgICB1c2VyLnByb2ZpbGUucGljdHVyZSA9IHVzZXIucHJvZmlsZS5waWN0dXJlIHx8IGBodHRwczovL2dyYXBoLmZhY2Vib29rLmNvbS8ke3Byb2ZpbGUuaWR9L3BpY3R1cmU/dHlwZT1sYXJnZWA7XG4gICAgICAgICAgdXNlci5zYXZlKChlcnIpID0+IHtcbiAgICAgICAgICAgIHJlcS5mbGFzaCgnaW5mbycsIHsgbXNnOiAnRmFjZWJvb2sgYWNjb3VudCBoYXMgYmVlbiBsaW5rZWQuJyB9KTtcbiAgICAgICAgICAgIGRvbmUoZXJyLCB1c2VyKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgVXNlci5maW5kT25lKHsgZmFjZWJvb2s6IHByb2ZpbGUuaWQgfSwgKGVyciwgZXhpc3RpbmdVc2VyKSA9PiB7XG4gICAgICBpZiAoZXJyKSB7IHJldHVybiBkb25lKGVycik7IH1cbiAgICAgIGlmIChleGlzdGluZ1VzZXIpIHtcbiAgICAgICAgcmV0dXJuIGRvbmUodW5kZWZpbmVkLCBleGlzdGluZ1VzZXIpO1xuICAgICAgfVxuICAgICAgVXNlci5maW5kT25lKHsgZW1haWw6IHByb2ZpbGUuX2pzb24uZW1haWwgfSwgKGVyciwgZXhpc3RpbmdFbWFpbFVzZXIpID0+IHtcbiAgICAgICAgaWYgKGVycikgeyByZXR1cm4gZG9uZShlcnIpOyB9XG4gICAgICAgIGlmIChleGlzdGluZ0VtYWlsVXNlcikge1xuICAgICAgICAgIHJlcS5mbGFzaCgnZXJyb3JzJywgeyBtc2c6ICdUaGVyZSBpcyBhbHJlYWR5IGFuIGFjY291bnQgdXNpbmcgdGhpcyBlbWFpbCBhZGRyZXNzLiBTaWduIGluIHRvIHRoYXQgYWNjb3VudCBhbmQgbGluayBpdCB3aXRoIEZhY2Vib29rIG1hbnVhbGx5IGZyb20gQWNjb3VudCBTZXR0aW5ncy4nIH0pO1xuICAgICAgICAgIGRvbmUoZXJyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCB1c2VyID0gbmV3IFVzZXIoKTtcbiAgICAgICAgICB1c2VyLmVtYWlsID0gcHJvZmlsZS5fanNvbi5lbWFpbDtcbiAgICAgICAgICB1c2VyLmZhY2Vib29rID0gcHJvZmlsZS5pZDtcbiAgICAgICAgICB1c2VyLnRva2Vucy5wdXNoKHsga2luZDogJ2ZhY2Vib29rJywgYWNjZXNzVG9rZW4gfSk7XG4gICAgICAgICAgdXNlci5wcm9maWxlLm5hbWUgPSBgJHtwcm9maWxlLm5hbWUuZ2l2ZW5OYW1lfSAke3Byb2ZpbGUubmFtZS5mYW1pbHlOYW1lfWA7XG4gICAgICAgICAgdXNlci5wcm9maWxlLmdlbmRlciA9IHByb2ZpbGUuX2pzb24uZ2VuZGVyO1xuICAgICAgICAgIHVzZXIucHJvZmlsZS5waWN0dXJlID0gYGh0dHBzOi8vZ3JhcGguZmFjZWJvb2suY29tLyR7cHJvZmlsZS5pZH0vcGljdHVyZT90eXBlPWxhcmdlYDtcbiAgICAgICAgICB1c2VyLnByb2ZpbGUubG9jYXRpb24gPSAocHJvZmlsZS5fanNvbi5sb2NhdGlvbikgPyBwcm9maWxlLl9qc29uLmxvY2F0aW9uLm5hbWUgOiAnJztcbiAgICAgICAgICB1c2VyLnNhdmUoKGVycikgPT4ge1xuICAgICAgICAgICAgZG9uZShlcnIsIHVzZXIpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufSkpO1xuXG4vKipcbiAqIFNpZ24gaW4gd2l0aCBUd2l0dGVyLlxuICovXG5wYXNzcG9ydC51c2UobmV3IFR3aXR0ZXJTdHJhdGVneSh7XG4gIGNvbnN1bWVyS2V5OiBwcm9jZXNzLmVudi5UV0lUVEVSX0tFWSxcbiAgY29uc3VtZXJTZWNyZXQ6IHByb2Nlc3MuZW52LlRXSVRURVJfU0VDUkVULFxuICBjYWxsYmFja1VSTDogJy9hdXRoL3R3aXR0ZXIvY2FsbGJhY2snLFxuICBwYXNzUmVxVG9DYWxsYmFjazogdHJ1ZVxufSwgKHJlcTogYW55LCBhY2Nlc3NUb2tlbiwgdG9rZW5TZWNyZXQsIHByb2ZpbGUsIGRvbmUpID0+IHtcbiAgaWYgKHJlcS51c2VyKSB7XG4gICAgVXNlci5maW5kT25lKHsgdHdpdHRlcjogcHJvZmlsZS5pZCB9LCAoZXJyLCBleGlzdGluZ1VzZXIpID0+IHtcbiAgICAgIGlmIChlcnIpIHsgcmV0dXJuIGRvbmUoZXJyKTsgfVxuICAgICAgaWYgKGV4aXN0aW5nVXNlcikge1xuICAgICAgICByZXEuZmxhc2goJ2Vycm9ycycsIHsgbXNnOiAnVGhlcmUgaXMgYWxyZWFkeSBhIFR3aXR0ZXIgYWNjb3VudCB0aGF0IGJlbG9uZ3MgdG8geW91LiBTaWduIGluIHdpdGggdGhhdCBhY2NvdW50IG9yIGRlbGV0ZSBpdCwgdGhlbiBsaW5rIGl0IHdpdGggeW91ciBjdXJyZW50IGFjY291bnQuJyB9KTtcbiAgICAgICAgZG9uZShlcnIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgVXNlci5maW5kQnlJZChyZXEudXNlci5pZCwgKGVyciwgdXNlcikgPT4ge1xuICAgICAgICAgIGlmIChlcnIpIHsgcmV0dXJuIGRvbmUoZXJyKTsgfVxuICAgICAgICAgIHVzZXIudHdpdHRlciA9IHByb2ZpbGUuaWQ7XG4gICAgICAgICAgdXNlci50b2tlbnMucHVzaCh7IGtpbmQ6ICd0d2l0dGVyJywgYWNjZXNzVG9rZW4sIHRva2VuU2VjcmV0IH0pO1xuICAgICAgICAgIHVzZXIucHJvZmlsZS5uYW1lID0gdXNlci5wcm9maWxlLm5hbWUgfHwgcHJvZmlsZS5kaXNwbGF5TmFtZTtcbiAgICAgICAgICB1c2VyLnByb2ZpbGUubG9jYXRpb24gPSB1c2VyLnByb2ZpbGUubG9jYXRpb24gfHwgcHJvZmlsZS5fanNvbi5sb2NhdGlvbjtcbiAgICAgICAgICB1c2VyLnByb2ZpbGUucGljdHVyZSA9IHVzZXIucHJvZmlsZS5waWN0dXJlIHx8IHByb2ZpbGUuX2pzb24ucHJvZmlsZV9pbWFnZV91cmxfaHR0cHM7XG4gICAgICAgICAgdXNlci5zYXZlKChlcnIpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHsgcmV0dXJuIGRvbmUoZXJyKTsgfVxuICAgICAgICAgICAgcmVxLmZsYXNoKCdpbmZvJywgeyBtc2c6ICdUd2l0dGVyIGFjY291bnQgaGFzIGJlZW4gbGlua2VkLicgfSk7XG4gICAgICAgICAgICBkb25lKGVyciwgdXNlcik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIFVzZXIuZmluZE9uZSh7IHR3aXR0ZXI6IHByb2ZpbGUuaWQgfSwgKGVyciwgZXhpc3RpbmdVc2VyKSA9PiB7XG4gICAgICBpZiAoZXJyKSB7IHJldHVybiBkb25lKGVycik7IH1cbiAgICAgIGlmIChleGlzdGluZ1VzZXIpIHtcbiAgICAgICAgcmV0dXJuIGRvbmUodW5kZWZpbmVkLCBleGlzdGluZ1VzZXIpO1xuICAgICAgfVxuICAgICAgY29uc3QgdXNlciA9IG5ldyBVc2VyKCk7XG4gICAgICAvLyBUd2l0dGVyIHdpbGwgbm90IHByb3ZpZGUgYW4gZW1haWwgYWRkcmVzcy4gIFBlcmlvZC5cbiAgICAgIC8vIEJ1dCBhIHBlcnNvbuKAmXMgdHdpdHRlciB1c2VybmFtZSBpcyBndWFyYW50ZWVkIHRvIGJlIHVuaXF1ZVxuICAgICAgLy8gc28gd2UgY2FuIFwiZmFrZVwiIGEgdHdpdHRlciBlbWFpbCBhZGRyZXNzIGFzIGZvbGxvd3M6XG4gICAgICB1c2VyLmVtYWlsID0gYCR7cHJvZmlsZS51c2VybmFtZX1AdHdpdHRlci5jb21gO1xuICAgICAgdXNlci50d2l0dGVyID0gcHJvZmlsZS5pZDtcbiAgICAgIHVzZXIudG9rZW5zLnB1c2goeyBraW5kOiAndHdpdHRlcicsIGFjY2Vzc1Rva2VuLCB0b2tlblNlY3JldCB9KTtcbiAgICAgIHVzZXIucHJvZmlsZS5uYW1lID0gcHJvZmlsZS5kaXNwbGF5TmFtZTtcbiAgICAgIHVzZXIucHJvZmlsZS5sb2NhdGlvbiA9IHByb2ZpbGUuX2pzb24ubG9jYXRpb247XG4gICAgICB1c2VyLnByb2ZpbGUucGljdHVyZSA9IHByb2ZpbGUuX2pzb24ucHJvZmlsZV9pbWFnZV91cmxfaHR0cHM7XG4gICAgICB1c2VyLnNhdmUoKGVycikgPT4ge1xuICAgICAgICBkb25lKGVyciwgdXNlcik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufSkpO1xuXG4vKipcbiAqIExvZ2luIFJlcXVpcmVkIG1pZGRsZXdhcmUuXG4gKi9cbmV4cG9ydCBsZXQgaXNBdXRoZW50aWNhdGVkID0gKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKSA9PiB7XG4gIGlmIChyZXEuaXNBdXRoZW50aWNhdGVkKCkpIHtcbiAgICByZXR1cm4gbmV4dCgpO1xuICB9XG4gIHJlcy5yZWRpcmVjdCgnL2xvZ2luJyk7XG59O1xuXG4vKipcbiAqIEF1dGhvcml6YXRpb24gUmVxdWlyZWQgbWlkZGxld2FyZS5cbiAqL1xuZXhwb3J0IGxldCBpc0F1dGhvcml6ZWQgPSAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pID0+IHtcbiAgY29uc3QgcHJvdmlkZXIgPSByZXEucGF0aC5zcGxpdCgnLycpLnNsaWNlKC0xKVswXTtcbiAgaWYgKF8uZmluZChyZXEudXNlci50b2tlbnMsIHsga2luZDogcHJvdmlkZXIgfSkpIHtcbiAgICBuZXh0KCk7XG4gIH0gZWxzZSB7XG4gICAgcmVzLnJlZGlyZWN0KGAvYXV0aC8ke3Byb3ZpZGVyfWApO1xuICB9XG59O1xuIiwiaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCBub2RlbWFpbGVyIGZyb20gJ25vZGVtYWlsZXInO1xuXG4vKipcbiAqIEdFVCAvY29udGFjdFxuICogQ29udGFjdCBmb3JtIHBhZ2UuXG4gKi9cbmV4cG9ydCBsZXQgZ2V0Q29udGFjdCA9IChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcbiAgY29uc3QgdW5rbm93blVzZXIgPSAhKHJlcS51c2VyKTtcbiAgcmVzLnJlbmRlcignY29udGFjdCcsIHtcbiAgICB0aXRsZTogJ+OBiuWVj+WQiOOBmycsXG4gICAgdW5rbm93blVzZXJcbiAgfSk7XG59O1xuXG4vKipcbiAqIFBPU1QgL2NvbnRhY3RcbiAqIFNlbmQgYSBjb250YWN0IGZvcm0gdmlhIE5vZGVtYWlsZXIuXG4gKi9cbmV4cG9ydCBsZXQgcG9zdENvbnRhY3QgPSAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG4gIGxldCBmcm9tTmFtZTtcbiAgbGV0IGZyb21FbWFpbDtcbiAgaWYgKCFyZXEudXNlcikge1xuICAgIHJlcS5jaGVjaygnbmFtZScpLm5vdCgpLmlzRW1wdHkoKS53aXRoTWVzc2FnZSgnTmFtZSBjYW5ub3QgYmUgYmxhbmsnKTtcbiAgICByZXEuY2hlY2soJ2VtYWlsJykuaXNFbWFpbCgpLndpdGhNZXNzYWdlKCdFbWFpbCBpcyBub3QgdmFsaWQnKTtcbiAgfVxuICByZXEuY2hlY2soJ21lc3NhZ2UnKS5ub3RFbXB0eSgpLndpdGhNZXNzYWdlKCdNZXNzYWdlIGNhbm5vdCBiZSBibGFuaycpO1xuXG4gIGNvbnN0IGVycm9ycyA9IHJlcS52YWxpZGF0aW9uRXJyb3JzKCk7XG5cbiAgaWYgKGVycm9ycykge1xuICAgIHJlcS5mbGFzaCgnZXJyb3JzJywgZXJyb3JzKTtcbiAgICByZXR1cm4gcmVzLnJlZGlyZWN0KCcvY29udGFjdCcpO1xuICB9XG5cbiAgaWYgKCFyZXEudXNlcikge1xuICAgIGZyb21OYW1lID0gcmVxLmJvZHkubmFtZTtcbiAgICBmcm9tRW1haWwgPSByZXEuYm9keS5lbWFpbDtcbiAgfSBlbHNlIHtcbiAgICBmcm9tTmFtZSA9IHJlcS51c2VyLnByb2ZpbGUubmFtZSB8fCAnJztcbiAgICBmcm9tRW1haWwgPSByZXEudXNlci5lbWFpbDtcbiAgfVxuXG4gIGxldCB0cmFuc3BvcnRlciA9IG5vZGVtYWlsZXIuY3JlYXRlVHJhbnNwb3J0KHtcbiAgICBzZXJ2aWNlOiAnU2VuZEdyaWQnLFxuICAgIGF1dGg6IHtcbiAgICAgIHVzZXI6IHByb2Nlc3MuZW52LlNFTkRHUklEX1VTRVIsXG4gICAgICBwYXNzOiBwcm9jZXNzLmVudi5TRU5ER1JJRF9QQVNTV09SRFxuICAgIH1cbiAgfSk7XG4gIGNvbnN0IG1haWxPcHRpb25zID0ge1xuICAgIHRvOiAneW91ckBlbWFpbC5jb20nLFxuICAgIGZyb206IGAke2Zyb21OYW1lfSA8JHtmcm9tRW1haWx9PmAsXG4gICAgc3ViamVjdDogJ0NvbnRhY3QgRm9ybSB8IENyeXB0byBQYXknLFxuICAgIHRleHQ6IHJlcS5ib2R5Lm1lc3NhZ2VcbiAgfTtcbiAgcmV0dXJuIHRyYW5zcG9ydGVyLnNlbmRNYWlsKG1haWxPcHRpb25zKVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgIHJlcS5mbGFzaCgnc3VjY2VzcycsIHsgbXNnOiAnRW1haWwgaGFzIGJlZW4gc2VudCBzdWNjZXNzZnVsbHkhJyB9KTtcbiAgICAgIHJlcy5yZWRpcmVjdCgnL2NvbnRhY3QnKTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICBpZiAoZXJyLm1lc3NhZ2UgPT09ICdzZWxmIHNpZ25lZCBjZXJ0aWZpY2F0ZSBpbiBjZXJ0aWZpY2F0ZSBjaGFpbicpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1dBUk5JTkc6IFNlbGYgc2lnbmVkIGNlcnRpZmljYXRlIGluIGNlcnRpZmljYXRlIGNoYWluLicgK1xuICAgICAgICAgICcgUmV0cnlpbmcgd2l0aCB0aGUgc2VsZiBzaWduZWQgY2VydGlmaWNhdGUuIFVzZSBhIHZhbGlkIGNlcnRpZmljYXRlIGlmIGluIHByb2R1Y3Rpb24uJyk7XG4gICAgICAgIHRyYW5zcG9ydGVyID0gbm9kZW1haWxlci5jcmVhdGVUcmFuc3BvcnQoe1xuICAgICAgICAgIHNlcnZpY2U6ICdTZW5kR3JpZCcsXG4gICAgICAgICAgYXV0aDoge1xuICAgICAgICAgICAgdXNlcjogcHJvY2Vzcy5lbnYuU0VOREdSSURfVVNFUixcbiAgICAgICAgICAgIHBhc3M6IHByb2Nlc3MuZW52LlNFTkRHUklEX1BBU1NXT1JEXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0bHM6IHtcbiAgICAgICAgICAgIHJlamVjdFVuYXV0aG9yaXplZDogZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdHJhbnNwb3J0ZXIuc2VuZE1haWwobWFpbE9wdGlvbnMpO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coJ0VSUk9SOiBDb3VsZCBub3Qgc2VuZCBjb250YWN0IGVtYWlsIGFmdGVyIHNlY3VyaXR5IGRvd25ncmFkZS5cXG4nLCBlcnIpO1xuICAgICAgcmVxLmZsYXNoKCdlcnJvcnMnLCB7IG1zZzogJ0Vycm9yIHNlbmRpbmcgdGhlIG1lc3NhZ2UuIFBsZWFzZSB0cnkgYWdhaW4gc2hvcnRseS4nIH0pO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pXG4gICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICByZXEuZmxhc2goJ3N1Y2Nlc3MnLCB7IG1zZzogJ0VtYWlsIGhhcyBiZWVuIHNlbnQgc3VjY2Vzc2Z1bGx5IScgfSk7XG4gICAgICAgIHJldHVybiByZXMucmVkaXJlY3QoJy9jb250YWN0Jyk7XG4gICAgICB9XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ0VSUk9SOiBDb3VsZCBub3Qgc2VuZCBjb250YWN0IGVtYWlsLlxcbicsIGVycik7XG4gICAgICByZXEuZmxhc2goJ2Vycm9ycycsIHsgbXNnOiAnRXJyb3Igc2VuZGluZyB0aGUgbWVzc2FnZS4gUGxlYXNlIHRyeSBhZ2FpbiBzaG9ydGx5LicgfSk7XG4gICAgICByZXR1cm4gcmVzLnJlZGlyZWN0KCcvY29udGFjdCcpO1xuICAgIH0pO1xufTtcbiIsImltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIFVzZXIsIFVzZXJNb2RlbCwgSVVzZXJEb2N1bWVudCB9IGZyb20gJy4uL21vZGVscy9Vc2VyJztcblxuY29uc3QgbGliID0gcmVxdWlyZSgnLi4vYml0Y29pbi9saWInKTtcblxuaW50ZXJmYWNlIEludW0ge1xuICBwcmljZTogbnVtYmVyW107XG4gIGNvdW50OiBudW1iZXJbXTtcbiAgYW1vdW50OiBudW1iZXJbXTtcbiAgYWRkcmVzczogc3RyaW5nW107XG59XG5cbi8qKlxuICogR0VUIC9cbiAqIEhvbWUgcGFnZS5cbiAqL1xuZXhwb3J0IGxldCBob21lID0gKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuICByZXMucmVuZGVyKCdob21lJywge1xuICAgIHRpdGxlOiAn44Ob44O844OgJ1xuICB9KTtcbn07XG5cbmV4cG9ydCBsZXQgZ2V0UGF5Qml0Y29pbiA9IChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcbiAgaWYgKCFyZXEudXNlcikge1xuICAgIHJldHVybiByZXMucmVkaXJlY3QoJy8nKTtcbiAgfVxuICBjb25zdCB0YnRjOiBJbnVtID0ge1xuICAgIHByaWNlOiBbMC4wMDUsIDAuMDAzLCAwLjAwMV0sXG4gICAgY291bnQ6IFswLCAwLCAwXSxcbiAgICBhbW91bnQ6IFswLCAwLCAwXSxcbiAgICBhZGRyZXNzOiBbJ2xhcmdlJywgJ21pZGRsZScsICdzbWFsbCddXG4gIH07XG4gIGNvbnN0IHsgaWQgfSA9IHJlcS51c2VyO1xuICBVc2VyLmZpbmQoeyBfaWQ6IGlkIH0sIChmaW5kRXJyLCB1c2VyOiBJVXNlckRvY3VtZW50KSA9PiB7XG4gICAgaWYgKGZpbmRFcnIpIHJlcy5zdGF0dXMoNTAwKTtcbiAgICBlbHNlIHtcbiAgICAgIHJlcy5zdGF0dXMoMjAwKTtcbiAgICAgIHRidGMuY291bnRbMF0gPSB1c2VyWzBdLmxhcmdlQ291bnQ7XG4gICAgICB0YnRjLmNvdW50WzFdID0gdXNlclswXS5taWRkbGVDb3VudDtcbiAgICAgIHRidGMuY291bnRbMl0gPSB1c2VyWzBdLnNtYWxsQ291bnQ7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgICB0YnRjLmFtb3VudFtpXSA9IHRidGMucHJpY2VbaV0gKiB0YnRjLmNvdW50W2ldO1xuICAgICAgICBjb25zdCBwdWJLZXlzQmFzZTU4OiBzdHJpbmdbXSA9IFtdO1xuICAgICAgICAvLyDnkrDlooPlpInmlbDjgavjgYLjgotwdWJrZXlzIC0+IGN1c3RvbWVyTnVtYmVy44Gr44KI44KL5a2Q5ouh5by15YWs6ZaL6Y21IC0+IOODlOOCtuOBruOCteOCpOOCuuOBq+OCiOOCi+WtkOaLoeW8teWFrOmWi+mNteOCkueUn+aIkFxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDM7IGorKylcbiAgICAgICAgICBwdWJLZXlzQmFzZTU4LnB1c2gobGliLmdlbmVyYXRlQ2hpbGRQdWJrZXlCYXNlNTgodXNlclswXS5leHRQdWJLZXlbal0sIGkpKTtcbiAgICAgICAgY29uc3QgcHViS2V5czogQnVmZmVyW10gPSBbXTtcbiAgICAgICAgLy8g55Kw5aKD5aSJ5pWw44Gr44GC44KLcHVia2V5cyAtPiBjdXN0b21lck51bWJlcuOBq+OCiOOCi+WtkOaLoeW8teWFrOmWi+mNtSAtPiDjg5Tjgrbjga7jgrXjgqTjgrrjgavjgojjgovlrZDmi6HlvLXlhazplovpjbUgLT4g44OU44K244Gu5YCL5pWw44Gr44KI44KL5a2Q5ouh5by15YWs6ZaL6Y2144KS55Sf5oiQXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMzsgaisrKVxuICAgICAgICAgIHB1YktleXMucHVzaChsaWIuZ2VuZXJhdGVDaGlsZFB1YmtleUJ1ZmZlcihwdWJLZXlzQmFzZTU4W2pdLCBOdW1iZXIodGJ0Yy5jb3VudFtpXSkpKTtcbiAgICAgICAgdGJ0Yy5hZGRyZXNzW2ldID0gbGliLmdlbmVyYXRlTXVsdGlzaWdBZGRyZXNzKDMsIHB1YktleXMpO1xuICAgICAgICBjb25zb2xlLmxvZyh0YnRjLmFtb3VudFtpXSwgdGJ0Yy5jb3VudFtpXSwgdGJ0Yy5hZGRyZXNzW2ldKTtcbiAgICAgIH1cbiAgICAgIHJlcy5yZW5kZXIoJ3BheS9iaXRjb2luJywge1xuICAgICAgICB0aXRsZTogJ0JpdGNvaW4gUGF5JyxcbiAgICAgICAgdGJ0Y1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCBsZXQgcHV0UGl6emFDb3VudCA9IChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcbiAgY29uc3QgeyBpZCB9ID0gcmVxLnVzZXI7IC8vIG1vbmdvZGLjgafkuIDmhI/jgavkuI7jgYjjgonjgozjgovjg6bjg7zjgrbjg7zjga5pZOOCkuWPluW+l1xuICBjb25zdCBjb3VudDogbnVtYmVyID0gcmVxLmJvZHkuZGF0YS5jb3VudDsgLy8g5L2V5YCL44Ga44Gk5aKX44KE44GX44Gf44KK5rib44KJ44GX44Gf44KK44GZ44KL44GL44Gu5YCL5pWwXG4gIGNvbnN0IHNpemU6IG51bWJlciA9IHJlcS5ib2R5LmRhdGEuc2l6ZTtcbiAgaWYgKHNpemUgPT0gMCkge1xuICAgIFVzZXIuZmluZEJ5SWQoaWQsIChlcnIsIHVzZXI6IElVc2VyRG9jdW1lbnQpID0+IHtcbiAgICAgIGlmIChlcnIpIHJlcy5zdGF0dXMoNTAwKS5zZW5kKCk7XG4gICAgICBlbHNlIHtcbiAgICAgICAgaWYgKCh1c2VyLmxhcmdlQ291bnQgPj0gMCAmJiBjb3VudCA9PSAxKSB8fCAodXNlci5sYXJnZUNvdW50ID4gMCAmJiBjb3VudCA9PSAtMSkpIHsgLy8gdXNlcuOBr29iamVjdOOBp+i/lOOBo+OBpuOBjeOBpuOCi1xuICAgICAgICAgIFVzZXIuZmluZEJ5SWRBbmRVcGRhdGUoaWQsIHsgJGluYzoge2xhcmdlQ291bnQ6IGNvdW50fSB9LCBlcnIgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikgcmVzLnN0YXR1cyg1MDApLnNlbmQoKTtcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICBVc2VyLmZpbmQoeyBfaWQ6IGlkIH0sIChmaW5kRXJyLCB1c2VyOiBJVXNlckRvY3VtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGZpbmRFcnIpIHJlcy5zdGF0dXMoNTAwKS5zZW5kKCk7XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBwdWJLZXlzQmFzZTU4OiBzdHJpbmdbXSA9IFtdO1xuICAgICAgICAgICAgICAgICAgLy8g55Kw5aKD5aSJ5pWw44Gr44GC44KLcHVia2V5cyAtPiBjdXN0b21lck51bWJlcuOBq+OCiOOCi+WtkOaLoeW8teWFrOmWi+mNtSAtPiDjg5Tjgrbjga7jgrXjgqTjgrrjgavjgojjgovlrZDmi6HlvLXlhazplovpjbXjgpLnlJ/miJBcbiAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKVxuICAgICAgICAgICAgICAgICAgICBwdWJLZXlzQmFzZTU4LnB1c2gobGliLmdlbmVyYXRlQ2hpbGRQdWJrZXlCYXNlNTgodXNlclswXS5leHRQdWJLZXlbaV0sIDApKTtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHB1YktleXM6IEJ1ZmZlcltdID0gW107XG4gICAgICAgICAgICAgICAgICAvLyDnkrDlooPlpInmlbDjgavjgYLjgotwdWJrZXlzIC0+IGN1c3RvbWVyTnVtYmVy44Gr44KI44KL5a2Q5ouh5by15YWs6ZaL6Y21IC0+IOODlOOCtuOBruOCteOCpOOCuuOBq+OCiOOCi+WtkOaLoeW8teWFrOmWi+mNtSAtPiDjg5Tjgrbjga7lgIvmlbDjgavjgojjgovlrZDmi6HlvLXlhazplovpjbXjgpLnlJ/miJBcbiAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKVxuICAgICAgICAgICAgICAgICAgICBwdWJLZXlzLnB1c2gobGliLmdlbmVyYXRlQ2hpbGRQdWJrZXlCdWZmZXIocHViS2V5c0Jhc2U1OFtpXSwgTnVtYmVyKHVzZXJbMF0ubGFyZ2VDb3VudCkpKTtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGFkZHJlc3M6IHN0cmluZyA9IGxpYi5nZW5lcmF0ZU11bHRpc2lnQWRkcmVzcygzLCBwdWJLZXlzKTtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFkZHJlc3MpO1xuICAgICAgICAgICAgICAgICAgY29uc3QgYW1vdW50OiBudW1iZXIgPSAwLjAwNSAqIHVzZXJbMF0ubGFyZ2VDb3VudDtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3M6IGBodHRwczovL2NoYXJ0LmFwaXMuZ29vZ2xlLmNvbS9jaGFydD9jaHQ9cXImY2hzPTMwMHgzMDAmY2hsPWJpdGNvaW46JHthZGRyZXNzfT9hbW91bnQ9JHthbW91bnR9YCxcbiAgICAgICAgICAgICAgICAgICAgY291bnQ6IHVzZXJbMF0ubGFyZ2VDb3VudCwgLy8gdXNlcuOBr+mFjeWIl+OBruS4reOBrm9iamVjdOOBp+i/lOOBo+OBpuOBjeOBpuOCi1xuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfSBlbHNlIGlmIChzaXplID09IDEpIHtcbiAgICBVc2VyLmZpbmRCeUlkKGlkLCAoZXJyLCB1c2VyOiBJVXNlckRvY3VtZW50KSA9PiB7XG4gICAgICBpZiAoZXJyKSByZXMuc3RhdHVzKDUwMCkuc2VuZCgpO1xuICAgICAgZWxzZSB7XG4gICAgICAgIGlmICgodXNlci5taWRkbGVDb3VudCA+PSAwICYmIGNvdW50ID09IDEpIHx8ICh1c2VyLm1pZGRsZUNvdW50ID4gMCAmJiBjb3VudCA9PSAtMSkpIHsgLy8gdXNlcuOBr29iamVjdOOBp+i/lOOBo+OBpuOBjeOBpuOCi1xuICAgICAgICAgIFVzZXIuZmluZEJ5SWRBbmRVcGRhdGUoaWQsIHsgJGluYzoge21pZGRsZUNvdW50OiBjb3VudH0gfSwgZXJyID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHJlcy5zdGF0dXMoNTAwKS5zZW5kKCk7XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgVXNlci5maW5kKHsgX2lkOiBpZCB9LCAoZmluZEVyciwgdXNlcjogSVVzZXJEb2N1bWVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChmaW5kRXJyKSByZXMuc3RhdHVzKDUwMCkuc2VuZCgpO1xuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgY29uc3QgcHViS2V5c0Jhc2U1ODogc3RyaW5nW10gPSBbXTtcbiAgICAgICAgICAgICAgICAgIC8vIOeSsOWig+WkieaVsOOBq+OBguOCi3B1YmtleXMgLT4gY3VzdG9tZXJOdW1iZXLjgavjgojjgovlrZDmi6HlvLXlhazplovpjbUgLT4g44OU44K244Gu44K144Kk44K644Gr44KI44KL5a2Q5ouh5by15YWs6ZaL6Y2144KS55Sf5oiQXG4gICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKylcbiAgICAgICAgICAgICAgICAgICAgcHViS2V5c0Jhc2U1OC5wdXNoKGxpYi5nZW5lcmF0ZUNoaWxkUHVia2V5QmFzZTU4KHVzZXJbMF0uZXh0UHViS2V5W2ldLCAxKSk7XG4gICAgICAgICAgICAgICAgICBjb25zdCBwdWJLZXlzOiBCdWZmZXJbXSA9IFtdO1xuICAgICAgICAgICAgICAgICAgLy8g55Kw5aKD5aSJ5pWw44Gr44GC44KLcHVia2V5cyAtPiBjdXN0b21lck51bWJlcuOBq+OCiOOCi+WtkOaLoeW8teWFrOmWi+mNtSAtPiDjg5Tjgrbjga7jgrXjgqTjgrrjgavjgojjgovlrZDmi6HlvLXlhazplovpjbUgLT4g44OU44K244Gu5YCL5pWw44Gr44KI44KL5a2Q5ouh5by15YWs6ZaL6Y2144KS55Sf5oiQXG4gICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKylcbiAgICAgICAgICAgICAgICAgICAgcHViS2V5cy5wdXNoKGxpYi5nZW5lcmF0ZUNoaWxkUHVia2V5QnVmZmVyKHB1YktleXNCYXNlNThbaV0sIE51bWJlcih1c2VyWzBdLm1pZGRsZUNvdW50KSkpO1xuICAgICAgICAgICAgICAgICAgY29uc3QgYWRkcmVzczogc3RyaW5nID0gbGliLmdlbmVyYXRlTXVsdGlzaWdBZGRyZXNzKDMsIHB1YktleXMpO1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYWRkcmVzcyk7XG4gICAgICAgICAgICAgICAgICBjb25zdCBhbW91bnQ6IG51bWJlciA9IDAuMDAzICogdXNlclswXS5taWRkbGVDb3VudDtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3M6IGBodHRwczovL2NoYXJ0LmFwaXMuZ29vZ2xlLmNvbS9jaGFydD9jaHQ9cXImY2hzPTMwMHgzMDAmY2hsPWJpdGNvaW46JHthZGRyZXNzfT9hbW91bnQ9JHthbW91bnR9YCxcbiAgICAgICAgICAgICAgICAgICAgY291bnQ6IHVzZXJbMF0ubWlkZGxlQ291bnQsIC8vIHVzZXLjga/phY3liJfjga7kuK3jga5vYmplY3Tjgafov5TjgaPjgabjgY3jgabjgotcbiAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZChkYXRhKTsgLy8gdXNlcuOBr+mFjeWIl+OBruS4reOBq29iamVjdOOBjOWFpeOBo+OBpuOCi1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfSBlbHNlIGlmIChzaXplID09IDIpIHtcbiAgICBVc2VyLmZpbmRCeUlkKGlkLCAoZXJyLCB1c2VyOiBJVXNlckRvY3VtZW50KSA9PiB7XG4gICAgICBpZiAoZXJyKSByZXMuc3RhdHVzKDUwMCkuc2VuZCgpO1xuICAgICAgZWxzZSB7XG4gICAgICAgIGlmICgodXNlci5zbWFsbENvdW50ID49IDAgJiYgY291bnQgPT0gMSkgfHwgKHVzZXIuc21hbGxDb3VudCA+IDAgJiYgY291bnQgPT0gLTEpKSB7IC8vIHVzZXLjga9vYmplY3Tjgafov5TjgaPjgabjgY3jgabjgotcbiAgICAgICAgICBVc2VyLmZpbmRCeUlkQW5kVXBkYXRlKGlkLCB7ICRpbmM6IHtzbWFsbENvdW50OiBjb3VudH0gfSwgZXJyID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHJlcy5zdGF0dXMoNTAwKS5zZW5kKCk7XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgVXNlci5maW5kKHsgX2lkOiBpZCB9LCAoZmluZEVyciwgdXNlcjogSVVzZXJEb2N1bWVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChmaW5kRXJyKSByZXMuc3RhdHVzKDUwMCkuc2VuZCgpO1xuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgY29uc3QgcHViS2V5c0Jhc2U1ODogc3RyaW5nW10gPSBbXTtcbiAgICAgICAgICAgICAgICAgIC8vIOeSsOWig+WkieaVsOOBq+OBguOCi3B1YmtleXMgLT4gY3VzdG9tZXJOdW1iZXLjgavjgojjgovlrZDmi6HlvLXlhazplovpjbUgLT4g44OU44K244Gu44K144Kk44K644Gr44KI44KL5a2Q5ouh5by15YWs6ZaL6Y2144KS55Sf5oiQXG4gICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKylcbiAgICAgICAgICAgICAgICAgICAgcHViS2V5c0Jhc2U1OC5wdXNoKGxpYi5nZW5lcmF0ZUNoaWxkUHVia2V5QmFzZTU4KHVzZXJbMF0uZXh0UHViS2V5W2ldLCAxKSk7XG4gICAgICAgICAgICAgICAgICBjb25zdCBwdWJLZXlzOiBCdWZmZXJbXSA9IFtdO1xuICAgICAgICAgICAgICAgICAgLy8g55Kw5aKD5aSJ5pWw44Gr44GC44KLcHVia2V5cyAtPiBjdXN0b21lck51bWJlcuOBq+OCiOOCi+WtkOaLoeW8teWFrOmWi+mNtSAtPiDjg5Tjgrbjga7jgrXjgqTjgrrjgavjgojjgovlrZDmi6HlvLXlhazplovpjbUgLT4g44OU44K244Gu5YCL5pWw44Gr44KI44KL5a2Q5ouh5by15YWs6ZaL6Y2144KS55Sf5oiQXG4gICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKylcbiAgICAgICAgICAgICAgICAgICAgcHViS2V5cy5wdXNoKGxpYi5nZW5lcmF0ZUNoaWxkUHVia2V5QnVmZmVyKHB1YktleXNCYXNlNThbaV0sIE51bWJlcih1c2VyWzBdLnNtYWxsQ291bnQpKSk7XG4gICAgICAgICAgICAgICAgICBjb25zdCBhZGRyZXNzOiBzdHJpbmcgPSBsaWIuZ2VuZXJhdGVNdWx0aXNpZ0FkZHJlc3MoMywgcHViS2V5cyk7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhZGRyZXNzKTtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGFtb3VudDogbnVtYmVyID0gMC4wMDEgKiB1c2VyWzBdLnNtYWxsQ291bnQ7XG4gICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzOiBgaHR0cHM6Ly9jaGFydC5hcGlzLmdvb2dsZS5jb20vY2hhcnQ/Y2h0PXFyJmNocz0zMDB4MzAwJmNobD1iaXRjb2luOiR7YWRkcmVzc30/YW1vdW50PSR7YW1vdW50fWAsXG4gICAgICAgICAgICAgICAgICAgIGNvdW50OiB1c2VyWzBdLnNtYWxsQ291bnQsIC8vIHVzZXLjga/phY3liJfjga7kuK3jga5vYmplY3Tjgafov5TjgaPjgabjgY3jgabjgotcbiAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZChkYXRhKTsgLy8gdXNlcuOBr+mFjeWIl+OBruS4reOBq29iamVjdOOBjOWFpeOBo+OBpuOCi1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGxldCBnZXRQYXlPdGhlcnMgPSAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG4gIHJlcy5yZW5kZXIoJ3BheS9vdGhlcnMnLCB7XG4gICAgdGl0bGU6ICdPdGhlcnMgUGF5J1xuICB9KTtcbn07XG4iLCJpbXBvcnQgY3J5cHRvIGZyb20gJ2NyeXB0byc7XG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSwgTmV4dEZ1bmN0aW9uIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBXcml0ZUVycm9yIH0gZnJvbSAnbW9uZ29kYic7XG5pbXBvcnQgbm9kZW1haWxlciBmcm9tICdub2RlbWFpbGVyJztcbmltcG9ydCBwYXNzcG9ydCBmcm9tICdwYXNzcG9ydCc7XG5pbXBvcnQgeyBJVmVyaWZ5T3B0aW9ucyB9IGZyb20gJ3Bhc3Nwb3J0LWxvY2FsJztcbmltcG9ydCB7IHByb21pc2lmeSB9IGZyb20gJ3V0aWwnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBVc2VyLCBVc2VyTW9kZWwsIEF1dGhUb2tlbiB9IGZyb20gJy4uL21vZGVscy9Vc2VyJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgQ291bnQgfSBmcm9tICcuLi9tb2RlbHMvQ291bnQnO1xuXG5jb25zdCBsaWIgPSByZXF1aXJlKCcuLi9iaXRjb2luL2xpYicpO1xuY29uc3QgcmFuZG9tQnl0ZXNBc3luYyA9IHByb21pc2lmeShjcnlwdG8ucmFuZG9tQnl0ZXMpO1xuXG4vKipcbiAqIEdFVCAvbG9naW5cbiAqIExvZ2luIHBhZ2UuXG4gKi9cbmV4cG9ydCBsZXQgZ2V0TG9naW4gPSAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG4gIGlmIChyZXEudXNlcikge1xuICAgIHJldHVybiByZXMucmVkaXJlY3QoJy8nKTtcbiAgfVxuICByZXMucmVuZGVyKCdhY2NvdW50L2xvZ2luJywge1xuICAgIHRpdGxlOiAn44Ot44Kw44Kk44OzJ1xuICB9KTtcbn07XG5cbi8qKlxuICogUE9TVCAvbG9naW5cbiAqIFNpZ24gaW4gdXNpbmcgZW1haWwgYW5kIHBhc3N3b3JkLlxuICovXG5leHBvcnQgbGV0IHBvc3RMb2dpbiA9IChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikgPT4ge1xuICByZXEuYXNzZXJ0KCdlbWFpbCcsICfnhKHlirnjgarjg6Hjg7zjg6vjgqLjg4njg6zjgrnjgafjgZkuJykuaXNFbWFpbCgpO1xuICByZXEuYXNzZXJ0KCdwYXNzd29yZCcsICfjg5Hjgrnjg6/jg7zjg4njgpLnqbrnmb3jgavjgZnjgovjgZPjgajjga/jgafjgY3jgb7jgZvjgpMuJykubm90RW1wdHkoKTtcbiAgcmVxLnNhbml0aXplKCdlbWFpbCcpLm5vcm1hbGl6ZUVtYWlsKHsgZ21haWxfcmVtb3ZlX2RvdHM6IGZhbHNlIH0pO1xuXG4gIGNvbnN0IGVycm9ycyA9IHJlcS52YWxpZGF0aW9uRXJyb3JzKCk7XG5cbiAgaWYgKGVycm9ycykge1xuICAgIHJlcS5mbGFzaCgnZXJyb3JzJywgZXJyb3JzKTtcbiAgICByZXR1cm4gcmVzLnJlZGlyZWN0KCcvbG9naW4nKTtcbiAgfVxuXG4gIHBhc3Nwb3J0LmF1dGhlbnRpY2F0ZSgnbG9jYWwnLCAoZXJyOiBFcnJvciwgdXNlcjogVXNlck1vZGVsLCBpbmZvOiBJVmVyaWZ5T3B0aW9ucykgPT4ge1xuICAgIGlmIChlcnIpIHsgcmV0dXJuIG5leHQoZXJyKTsgfVxuICAgIGlmICghdXNlcikge1xuICAgICAgcmVxLmZsYXNoKCdlcnJvcnMnLCBpbmZvKTtcbiAgICAgIHJldHVybiByZXMucmVkaXJlY3QoJy9sb2dpbicpO1xuICAgIH1cbiAgICByZXEubG9nSW4odXNlciwgKGVycikgPT4ge1xuICAgICAgaWYgKGVycikgeyByZXR1cm4gbmV4dChlcnIpOyB9XG4gICAgICByZXEuZmxhc2goJ3N1Y2Nlc3MnLCB7IG1zZzogJ+ODreOCsOOCpOODs+OBq+aIkOWKn+OBl+OBvuOBl+OBny4nIH0pO1xuICAgICAgcmVzLnJlZGlyZWN0KHJlcS5zZXNzaW9uLnJldHVyblRvIHx8ICcvJyk7XG4gICAgfSk7XG4gIH0pKHJlcSwgcmVzLCBuZXh0KTtcbn07XG5cbi8qKlxuICogR0VUIC9sb2dvdXRcbiAqIExvZyBvdXQuXG4gKi9cbmV4cG9ydCBsZXQgbG9nb3V0ID0gKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuICByZXEubG9nb3V0KCk7XG4gIHJlcS5zZXNzaW9uLmRlc3Ryb3koKGVycikgPT4ge1xuICAgIGlmIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdFcnJvciA6IEZhaWxlZCB0byBkZXN0cm95IHRoZSBzZXNzaW9uIGR1cmluZyBsb2dvdXQuJywgZXJyKTtcbiAgICB9XG4gICAgcmVxLnVzZXIgPSB1bmRlZmluZWQ7XG4gICAgcmVzLnJlZGlyZWN0KCcvJyk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBHRVQgL3NpZ251cFxuICogU2lnbnVwIHBhZ2UuXG4gKi9cbmV4cG9ydCBsZXQgZ2V0U2lnbnVwID0gKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuICBpZiAocmVxLnVzZXIpIHtcbiAgICByZXR1cm4gcmVzLnJlZGlyZWN0KCcvJyk7XG4gIH1cbiAgcmVzLnJlbmRlcignYWNjb3VudC9zaWdudXAnLCB7XG4gICAgdGl0bGU6ICfjgqLjgqvjgqbjg7Pjg4jkvZzmiJAnXG4gIH0pO1xufTtcblxuLyoqXG4gKiBQT1NUIC9zaWdudXBcbiAqIENyZWF0ZSBhIG5ldyBsb2NhbCBhY2NvdW50LlxuICovXG5leHBvcnQgbGV0IHBvc3RTaWdudXAgPSAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pID0+IHtcbiAgcmVxLmFzc2VydCgnZW1haWwnLCAn54Sh5Yq544Gq44Oh44O844Or44Ki44OJ44Os44K544Gn44GZLicpLmlzRW1haWwoKTtcbiAgcmVxLmFzc2VydCgncGFzc3dvcmQnLCAn44OR44K544Ov44O844OJ44GvNOaWh+Wtl+S7peS4iuOBq+OBl+OBpuOBj+OBoOOBleOBhC4nKS5sZW4oeyBtaW46IDQgfSk7XG4gIHJlcS5hc3NlcnQoJ2NvbmZpcm1QYXNzd29yZCcsICfjg5Hjgrnjg6/jg7zjg4njgYzkuIDoh7TjgZfjgb7jgZvjgpMuJykuZXF1YWxzKHJlcS5ib2R5LnBhc3N3b3JkKTtcbiAgcmVxLnNhbml0aXplKCdlbWFpbCcpLm5vcm1hbGl6ZUVtYWlsKHsgZ21haWxfcmVtb3ZlX2RvdHM6IGZhbHNlIH0pO1xuXG4gIGNvbnN0IGVycm9ycyA9IHJlcS52YWxpZGF0aW9uRXJyb3JzKCk7XG5cbiAgaWYgKGVycm9ycykge1xuICAgIHJlcS5mbGFzaCgnZXJyb3JzJywgZXJyb3JzKTtcbiAgICByZXR1cm4gcmVzLnJlZGlyZWN0KCcvc2lnbnVwJyk7XG4gIH1cblxuICAvLyDpoaflrqLjga7jgqvjgqbjg7Pjgr/jg7zjgpLkv53lrZjjgZfjgabjgotcbiAgQ291bnQuZmluZE9uZSh7bmFtZTogJ3NvbGEnfSwgKGVyciwgY291bnQpID0+IHtcbiAgICBpZiAoZXJyKSB7IHJldHVybiBuZXh0KGVycik7IH1cbiAgICBpZiAoIWNvdW50KSB7XG4gICAgICBjb25zdCBjb3VudCA9IG5ldyBDb3VudCh7XG4gICAgICAgIG5hbWU6ICdzb2xhJyxcbiAgICAgICAgY3VzdG9tZXJDb3VudDogMFxuICAgICAgfSk7XG4gICAgICBjb3VudC5zYXZlKChlcnIpID0+IHtcbiAgICAgICAgaWYgKGVycikgeyByZXR1cm4gbmV4dChlcnIpOyB9XG4gICAgICB9KTtcbiAgICB9IGVsc2UgY29uc29sZS5sb2coJ0NvdW50ZXIgZXhpc3QuJyk7XG4gIH0pO1xuXG4gIC8vIOmhp+WuouOBrmpzb27jgpLmlrDopo/kvZzmiJBcbiAgY29uc3QgdXNlciA9IG5ldyBVc2VyKHtcbiAgICBlbWFpbDogcmVxLmJvZHkuZW1haWwsXG4gICAgcGFzc3dvcmQ6IHJlcS5ib2R5LnBhc3N3b3JkLFxuICAgIGxhcmdlQ291bnQ6IDAsXG4gICAgbWlkZGxlQ291bnQ6IDAsXG4gICAgc21hbGxDb3VudDogMCxcbiAgICBjdXN0b21lck51bWJlcjogMCxcbiAgICBleHRQdWJLZXk6IFsnYScsICdiJywgJ2MnXVxuICB9KTtcblxuICBVc2VyLmZpbmRPbmUoeyBlbWFpbDogcmVxLmJvZHkuZW1haWwgfSwgKGVyciwgZXhpc3RpbmdVc2VyKSA9PiB7XG4gICAgaWYgKGVycikgeyByZXR1cm4gbmV4dChlcnIpOyB9XG4gICAgaWYgKGV4aXN0aW5nVXNlcikge1xuICAgICAgcmVxLmZsYXNoKCdlcnJvcnMnLCB7IG1zZzogJ+OBk+OBruODoeODvOODq+OCouODieODrOOCueOBruOCouOCq+OCpuODs+ODiOOBr+OBmeOBp+OBq+WtmOWcqOOBl+OBpuOBhOOBvuOBmS4nIH0pO1xuICAgICAgcmV0dXJuIHJlcy5yZWRpcmVjdCgnL3NpZ251cCcpO1xuICAgIH1cbiAgICAvLyDpoaflrqLjga7jgqvjgqbjg7Pjg4jjgpIx44Gk5aKX44KE44GX44Gm5L+d5a2Y44GX44Gm44KLXG4gICAgQ291bnQuZmluZE9uZUFuZFVwZGF0ZSh7bmFtZTogJ3NvbGEnfSwgeyRpbmM6IHsnY3VzdG9tZXJDb3VudCc6IDF9fSwge25ldzogdHJ1ZX0sIChlcnIsIGNvdW50KSA9PiB7XG4gICAgICBpZiAoZXJyKSB7IHJldHVybiBuZXh0KGVycik7IH1cbiAgICAgIGNvbnNvbGUubG9nKGNvdW50LmN1c3RvbWVyQ291bnQpO1xuICAgICAgdXNlci5jdXN0b21lck51bWJlciA9IE51bWJlcihjb3VudC5jdXN0b21lckNvdW50KTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgIHVzZXIuZXh0UHViS2V5W2ldID0gbGliLmdlbmVyYXRlQ2hpbGRQdWJrZXlCYXNlNTgobGliLmV4dFB1YmtleXNbaV0sIE51bWJlcih1c2VyLmN1c3RvbWVyTnVtYmVyKSk7XG4gICAgICB9XG4gICAgICB1c2VyLnNhdmUoKGVycikgPT4ge1xuICAgICAgICBpZiAoZXJyKSB7IHJldHVybiBuZXh0KGVycik7IH1cbiAgICAgICAgcmVxLmxvZ0luKHVzZXIsIChlcnIpID0+IHtcbiAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV4dChlcnIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXMucmVkaXJlY3QoJy8nKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIEdFVCAvZm9yZ290XG4gKiBGb3Jnb3QgUGFzc3dvcmQgcGFnZS5cbiAqL1xuZXhwb3J0IGxldCBnZXRGb3Jnb3QgPSAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG4gIGlmIChyZXEuaXNBdXRoZW50aWNhdGVkKCkpIHtcbiAgICByZXR1cm4gcmVzLnJlZGlyZWN0KCcvJyk7XG4gIH1cbiAgcmVzLnJlbmRlcignYWNjb3VudC9mb3Jnb3QnLCB7XG4gICAgdGl0bGU6ICfjg5Hjgrnjg6/jg7zjg4njgpLjgYrlv5jjgozjga7mlrnjgbgnXG4gIH0pO1xufTtcblxuLyoqXG4gKiBQT1NUIC9mb3Jnb3RcbiAqIENyZWF0ZSBhIHJhbmRvbSB0b2tlbiwgdGhlbiB0aGUgc2VuZCB1c2VyIGFuIGVtYWlsIHdpdGggYSByZXNldCBsaW5rLlxuICovXG5leHBvcnQgbGV0IHBvc3RGb3Jnb3QgPSAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pID0+IHtcbiAgcmVxLmFzc2VydCgnZW1haWwnLCAn5pyJ5Yq544Gq44Oh44O844Or44Ki44OJ44Os44K544KS5YWl5Yqb44GX44Gm44GP44Gg44GV44GELicpLmlzRW1haWwoKTtcbiAgcmVxLnNhbml0aXplKCdlbWFpbCcpLm5vcm1hbGl6ZUVtYWlsKHsgZ21haWxfcmVtb3ZlX2RvdHM6IGZhbHNlIH0pO1xuXG4gIGNvbnN0IGVycm9ycyA9IHJlcS52YWxpZGF0aW9uRXJyb3JzKCk7XG5cbiAgaWYgKGVycm9ycykge1xuICAgIHJlcS5mbGFzaCgnZXJyb3JzJywgZXJyb3JzKTtcbiAgICByZXR1cm4gcmVzLnJlZGlyZWN0KCcvZm9yZ290Jyk7XG4gIH1cblxuICBjb25zdCBjcmVhdGVSYW5kb21Ub2tlbiA9IHJhbmRvbUJ5dGVzQXN5bmMoMTYpXG4gICAgLnRoZW4oYnVmID0+IGJ1Zi50b1N0cmluZygnaGV4JykpO1xuXG4gIGNvbnN0IHNldFJhbmRvbVRva2VuID0gKHRva2VuOiBzdHJpbmcpID0+XG4gICAgVXNlclxuICAgICAgLmZpbmRPbmUoeyBlbWFpbDogcmVxLmJvZHkuZW1haWwgfSlcbiAgICAgIC50aGVuKCh1c2VyOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKCF1c2VyKSB7XG4gICAgICAgICAgcmVxLmZsYXNoKCdlcnJvcnMnLCB7IG1zZzogJ+OBk+OBruODoeODvOODq+OCouODieODrOOCueOBruOCouOCq+OCpuODs+ODiOOBr+WtmOWcqOOBl+OBvuOBm+OCky4nIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHVzZXIucGFzc3dvcmRSZXNldFRva2VuID0gdG9rZW47XG4gICAgICAgICAgdXNlci5wYXNzd29yZFJlc2V0RXhwaXJlcyA9IERhdGUubm93KCkgKyAzNjAwMDAwOyAvLyAxIGhvdXJcbiAgICAgICAgICB1c2VyID0gdXNlci5zYXZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVzZXI7XG4gICAgICB9KTtcblxuICBjb25zdCBzZW5kRm9yZ290UGFzc3dvcmRFbWFpbCA9ICh1c2VyOiBVc2VyTW9kZWwpID0+IHtcbiAgICBpZiAoIXVzZXIpIHsgcmV0dXJuOyB9XG4gICAgY29uc3QgdG9rZW4gPSB1c2VyLnBhc3N3b3JkUmVzZXRUb2tlbjtcbiAgICBsZXQgdHJhbnNwb3J0ZXIgPSBub2RlbWFpbGVyLmNyZWF0ZVRyYW5zcG9ydCh7XG4gICAgICBzZXJ2aWNlOiAnU2VuZEdyaWQnLFxuICAgICAgYXV0aDoge1xuICAgICAgICB1c2VyOiBwcm9jZXNzLmVudi5TRU5ER1JJRF9VU0VSLFxuICAgICAgICBwYXNzOiBwcm9jZXNzLmVudi5TRU5ER1JJRF9QQVNTV09SRFxuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IG1haWxPcHRpb25zID0ge1xuICAgICAgdG86IHVzZXIuZW1haWwsXG4gICAgICBmcm9tOiAnY3J5cHRvQHBheS5jb20nLFxuICAgICAgc3ViamVjdDogJ0NyeXB0byBQYXnjga7jg5Hjgrnjg6/jg7zjg4njg6rjgrvjg4Pjg4gnLFxuICAgICAgdGV4dDogYFlvdSBhcmUgcmVjZWl2aW5nIHRoaXMgZW1haWwgYmVjYXVzZSB5b3UgKG9yIHNvbWVvbmUgZWxzZSkgaGF2ZSByZXF1ZXN0ZWQgdGhlIHJlc2V0IG9mIHRoZSBwYXNzd29yZCBmb3IgeW91ciBhY2NvdW50LlxcblxcblxuICAgICAgICBQbGVhc2UgY2xpY2sgb24gdGhlIGZvbGxvd2luZyBsaW5rLCBvciBwYXN0ZSB0aGlzIGludG8geW91ciBicm93c2VyIHRvIGNvbXBsZXRlIHRoZSBwcm9jZXNzOlxcblxcblxuICAgICAgICBodHRwOi8vJHtyZXEuaGVhZGVycy5ob3N0fS9yZXNldC8ke3Rva2VufVxcblxcblxuICAgICAgICBJZiB5b3UgZGlkIG5vdCByZXF1ZXN0IHRoaXMsIHBsZWFzZSBpZ25vcmUgdGhpcyBlbWFpbCBhbmQgeW91ciBwYXNzd29yZCB3aWxsIHJlbWFpbiB1bmNoYW5nZWQuXFxuYFxuICAgIH07XG4gICAgcmV0dXJuIHRyYW5zcG9ydGVyLnNlbmRNYWlsKG1haWxPcHRpb25zKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICByZXEuZmxhc2goJ2luZm8nLCB7IG1zZzogYEFuIGUtbWFpbCBoYXMgYmVlbiBzZW50IHRvICR7dXNlci5lbWFpbH0gd2l0aCBmdXJ0aGVyIGluc3RydWN0aW9ucy5gIH0pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGlmIChlcnIubWVzc2FnZSA9PT0gJ3NlbGYgc2lnbmVkIGNlcnRpZmljYXRlIGluIGNlcnRpZmljYXRlIGNoYWluJykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdXQVJOSU5HOiBTZWxmIHNpZ25lZCBjZXJ0aWZpY2F0ZSBpbiBjZXJ0aWZpY2F0ZSBjaGFpbi4nICtcbiAgICAgICAgICAgICcgUmV0cnlpbmcgd2l0aCB0aGUgc2VsZiBzaWduZWQgY2VydGlmaWNhdGUuIFVzZSBhIHZhbGlkIGNlcnRpZmljYXRlIGlmIGluIHByb2R1Y3Rpb24uJyk7XG4gICAgICAgICAgdHJhbnNwb3J0ZXIgPSBub2RlbWFpbGVyLmNyZWF0ZVRyYW5zcG9ydCh7XG4gICAgICAgICAgICBzZXJ2aWNlOiAnU2VuZEdyaWQnLFxuICAgICAgICAgICAgYXV0aDoge1xuICAgICAgICAgICAgICB1c2VyOiBwcm9jZXNzLmVudi5TRU5ER1JJRF9VU0VSLFxuICAgICAgICAgICAgICBwYXNzOiBwcm9jZXNzLmVudi5TRU5ER1JJRF9QQVNTV09SRFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRsczoge1xuICAgICAgICAgICAgICByZWplY3RVbmF1dGhvcml6ZWQ6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIHRyYW5zcG9ydGVyLnNlbmRNYWlsKG1haWxPcHRpb25zKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICByZXEuZmxhc2goJ2luZm8nLCB7IG1zZzogYEFuIGUtbWFpbCBoYXMgYmVlbiBzZW50IHRvICR7dXNlci5lbWFpbH0gd2l0aCBmdXJ0aGVyIGluc3RydWN0aW9ucy5gIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SOiBDb3VsZCBub3Qgc2VuZCBmb3Jnb3QgcGFzc3dvcmQgZW1haWwgYWZ0ZXIgc2VjdXJpdHkgZG93bmdyYWRlLlxcbicsIGVycik7XG4gICAgICAgIHJlcS5mbGFzaCgnZXJyb3JzJywgeyBtc2c6ICdFcnJvciBzZW5kaW5nIHRoZSBwYXNzd29yZCByZXNldCBtZXNzYWdlLiBQbGVhc2UgdHJ5IGFnYWluIHNob3J0bHkuJyB9KTtcbiAgICAgICAgcmV0dXJuIGVycjtcbiAgICAgIH0pO1xuICB9O1xuXG4gIGNyZWF0ZVJhbmRvbVRva2VuXG4gICAgLnRoZW4oc2V0UmFuZG9tVG9rZW4pXG4gICAgLnRoZW4oc2VuZEZvcmdvdFBhc3N3b3JkRW1haWwpXG4gICAgLnRoZW4oKCkgPT4gcmVzLnJlZGlyZWN0KCcvZm9yZ290JykpXG4gICAgLmNhdGNoKG5leHQpO1xufTtcblxuLyoqXG4gKiBHRVQgL3Jlc2V0Lzp0b2tlblxuICogUmVzZXQgUGFzc3dvcmQgcGFnZS5cbiAqL1xuZXhwb3J0IGxldCBnZXRSZXNldCA9IChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikgPT4ge1xuICBpZiAocmVxLmlzQXV0aGVudGljYXRlZCgpKSB7XG4gICAgcmV0dXJuIHJlcy5yZWRpcmVjdCgnLycpO1xuICB9XG4gIFVzZXJcbiAgICAuZmluZE9uZSh7IHBhc3N3b3JkUmVzZXRUb2tlbjogcmVxLnBhcmFtcy50b2tlbiB9KVxuICAgIC53aGVyZSgncGFzc3dvcmRSZXNldEV4cGlyZXMnKS5ndChEYXRlLm5vdygpKVxuICAgIC5leGVjKChlcnIsIHVzZXIpID0+IHtcbiAgICAgIGlmIChlcnIpIHsgcmV0dXJuIG5leHQoZXJyKTsgfVxuICAgICAgaWYgKCF1c2VyKSB7XG4gICAgICAgIHJlcS5mbGFzaCgnZXJyb3JzJywgeyBtc2c6ICfjg5Hjgrnjg6/jg7zjg4njg6rjgrvjg4Pjg4jjg4jjg7zjgq/jg7PjgYznhKHlirnjgYvmnJ/pmZDliIfjgozjgafjgZkuJyB9KTtcbiAgICAgICAgcmV0dXJuIHJlcy5yZWRpcmVjdCgnL2ZvcmdvdCcpO1xuICAgICAgfVxuICAgICAgcmVzLnJlbmRlcignYWNjb3VudC9yZXNldCcsIHtcbiAgICAgICAgdGl0bGU6ICfjg5Hjgrnjg6/jg7zjg4njg6rjgrvjg4Pjg4gnXG4gICAgICB9KTtcbiAgICB9KTtcbn07XG5cbi8qKlxuICogUE9TVCAvcmVzZXQvOnRva2VuXG4gKiBQcm9jZXNzIHRoZSByZXNldCBwYXNzd29yZCByZXF1ZXN0LlxuICovXG5leHBvcnQgbGV0IHBvc3RSZXNldCA9IChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikgPT4ge1xuICByZXEuYXNzZXJ0KCdwYXNzd29yZCcsICfjg5Hjgrnjg6/jg7zjg4njga805paH5a2X5Lul5LiK44Gr44GX44Gm44GP44Gg44GV44GELicpLmxlbih7IG1pbjogNCB9KTtcbiAgcmVxLmFzc2VydCgnY29uZmlybScsICfjg5Hjgrnjg6/jg7zjg4njgYzkuIDoh7TjgZfjgb7jgZvjgpMuJykuZXF1YWxzKHJlcS5ib2R5LnBhc3N3b3JkKTtcblxuICBjb25zdCBlcnJvcnMgPSByZXEudmFsaWRhdGlvbkVycm9ycygpO1xuXG4gIGlmIChlcnJvcnMpIHtcbiAgICByZXEuZmxhc2goJ2Vycm9ycycsIGVycm9ycyk7XG4gICAgcmV0dXJuIHJlcy5yZWRpcmVjdCgnYmFjaycpO1xuICB9XG5cbiAgY29uc3QgcmVzZXRQYXNzd29yZCA9ICgpID0+XG4gICAgVXNlclxuICAgICAgLmZpbmRPbmUoeyBwYXNzd29yZFJlc2V0VG9rZW46IHJlcS5wYXJhbXMudG9rZW4gfSlcbiAgICAgIC53aGVyZSgncGFzc3dvcmRSZXNldEV4cGlyZXMnKS5ndChEYXRlLm5vdygpKVxuICAgICAgLnRoZW4oKHVzZXIpID0+IHtcbiAgICAgICAgaWYgKCF1c2VyKSB7XG4gICAgICAgICAgcmVxLmZsYXNoKCdlcnJvcnMnLCB7IG1zZzogJ+ODkeOCueODr+ODvOODieODquOCu+ODg+ODiOODiOODvOOCr+ODs+OBjOeEoeWKueOBi+acn+mZkOWIh+OCjOOBp+OBmS4nIH0pO1xuICAgICAgICAgIHJldHVybiByZXMucmVkaXJlY3QoJ2JhY2snKTtcbiAgICAgICAgfVxuICAgICAgICB1c2VyLnBhc3N3b3JkID0gcmVxLmJvZHkucGFzc3dvcmQ7XG4gICAgICAgIHVzZXIucGFzc3dvcmRSZXNldFRva2VuID0gdW5kZWZpbmVkO1xuICAgICAgICB1c2VyLnBhc3N3b3JkUmVzZXRFeHBpcmVzID0gdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm4gdXNlci5zYXZlKCkudGhlbigoKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgcmVxLmxvZ0luKHVzZXIsIChlcnIpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHsgcmV0dXJuIHJlamVjdChlcnIpOyB9XG4gICAgICAgICAgICByZXNvbHZlKHVzZXIpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KSk7XG4gICAgICB9KTtcblxuICBjb25zdCBzZW5kUmVzZXRQYXNzd29yZEVtYWlsID0gKHVzZXI6IFVzZXJNb2RlbCkgPT4ge1xuICAgIGlmICghdXNlcikgeyByZXR1cm47IH1cbiAgICBsZXQgdHJhbnNwb3J0ZXIgPSBub2RlbWFpbGVyLmNyZWF0ZVRyYW5zcG9ydCh7XG4gICAgICBzZXJ2aWNlOiAnU2VuZEdyaWQnLFxuICAgICAgYXV0aDoge1xuICAgICAgICB1c2VyOiBwcm9jZXNzLmVudi5TRU5ER1JJRF9VU0VSLFxuICAgICAgICBwYXNzOiBwcm9jZXNzLmVudi5TRU5ER1JJRF9QQVNTV09SRFxuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IG1haWxPcHRpb25zID0ge1xuICAgICAgdG86IHVzZXIuZW1haWwsXG4gICAgICBmcm9tOiAndGVzdEBleGFtcGxlLmNvbScsXG4gICAgICBzdWJqZWN0OiAnQ3J5cHRvIFBheeOBruODkeOCueODr+ODvOODieOCkuWkieabtOOBl+OBvuOBl+OBny4nLFxuICAgICAgdGV4dDogYEhlbGxvLFxcblxcblRoaXMgaXMgYSBjb25maXJtYXRpb24gdGhhdCB0aGUgcGFzc3dvcmQgZm9yIHlvdXIgYWNjb3VudCAke3VzZXIuZW1haWx9IGhhcyBqdXN0IGJlZW4gY2hhbmdlZC5cXG5gXG4gICAgfTtcbiAgICByZXR1cm4gdHJhbnNwb3J0ZXIuc2VuZE1haWwobWFpbE9wdGlvbnMpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHJlcS5mbGFzaCgnc3VjY2VzcycsIHsgbXNnOiAn44OR44K544Ov44O844OJ5aSJ5pu044Gr5oiQ5Yqf44GX44G+44GX44GfLicgfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgaWYgKGVyci5tZXNzYWdlID09PSAnc2VsZiBzaWduZWQgY2VydGlmaWNhdGUgaW4gY2VydGlmaWNhdGUgY2hhaW4nKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ1dBUk5JTkc6IFNlbGYgc2lnbmVkIGNlcnRpZmljYXRlIGluIGNlcnRpZmljYXRlIGNoYWluLiBSZXRyeWluZyB3aXRoIHRoZSBzZWxmIHNpZ25lZCBjZXJ0aWZpY2F0ZS4gVXNlIGEgdmFsaWQgY2VydGlmaWNhdGUgaWYgaW4gcHJvZHVjdGlvbi4nKTtcbiAgICAgICAgICB0cmFuc3BvcnRlciA9IG5vZGVtYWlsZXIuY3JlYXRlVHJhbnNwb3J0KHtcbiAgICAgICAgICAgIHNlcnZpY2U6ICdTZW5kR3JpZCcsXG4gICAgICAgICAgICBhdXRoOiB7XG4gICAgICAgICAgICAgIHVzZXI6IHByb2Nlc3MuZW52LlNFTkRHUklEX1VTRVIsXG4gICAgICAgICAgICAgIHBhc3M6IHByb2Nlc3MuZW52LlNFTkRHUklEX1BBU1NXT1JEXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGxzOiB7XG4gICAgICAgICAgICAgIHJlamVjdFVuYXV0aG9yaXplZDogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gdHJhbnNwb3J0ZXIuc2VuZE1haWwobWFpbE9wdGlvbnMpXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgIHJlcS5mbGFzaCgnc3VjY2VzcycsIHsgbXNnOiAn44OR44K544Ov44O844OJ5aSJ5pu044Gr5oiQ5Yqf44GX44G+44GX44GfLicgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZygnRVJST1I6IENvdWxkIG5vdCBzZW5kIHBhc3N3b3JkIHJlc2V0IGNvbmZpcm1hdGlvbiBlbWFpbCBhZnRlciBzZWN1cml0eSBkb3duZ3JhZGUuXFxuJywgZXJyKTtcbiAgICAgICAgcmVxLmZsYXNoKCd3YXJuaW5nJywgeyBtc2c6ICdZb3VyIHBhc3N3b3JkIGhhcyBiZWVuIGNoYW5nZWQsIGhvd2V2ZXIgd2Ugd2VyZSB1bmFibGUgdG8gc2VuZCB5b3UgYSBjb25maXJtYXRpb24gZW1haWwuIFdlIHdpbGwgYmUgbG9va2luZyBpbnRvIGl0IHNob3J0bHkuJyB9KTtcbiAgICAgICAgcmV0dXJuIGVycjtcbiAgICAgIH0pO1xuICB9O1xuXG4gIHJlc2V0UGFzc3dvcmQoKVxuICAgIC50aGVuKHNlbmRSZXNldFBhc3N3b3JkRW1haWwpXG4gICAgLnRoZW4oKCkgPT4geyBpZiAoIXJlcy5maW5pc2hlZCkgcmVzLnJlZGlyZWN0KCcvJyk7IH0pXG4gICAgLmNhdGNoKGVyciA9PiBuZXh0KGVycikpO1xufTtcblxuLyoqXG4gKiBHRVQgL2FjY291bnRcbiAqIFByb2ZpbGUgcGFnZS5cbiAqL1xuZXhwb3J0IGxldCBnZXRBY2NvdW50ID0gKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuICByZXMucmVuZGVyKCdhY2NvdW50L3Byb2ZpbGUnLCB7XG4gICAgdGl0bGU6ICdBY2NvdW50IE1hbmFnZW1lbnQnXG4gIH0pO1xufTtcblxuLyoqXG4gKiBQT1NUIC9hY2NvdW50L3Byb2ZpbGVcbiAqIFVwZGF0ZSBwcm9maWxlIGluZm9ybWF0aW9uLlxuICovXG5leHBvcnQgbGV0IHBvc3RVcGRhdGVQcm9maWxlID0gKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKSA9PiB7XG4gIHJlcS5hc3NlcnQoJ2VtYWlsJywgJ+acieWKueOBquODoeODvOODq+OCouODieODrOOCueOCkuWFpeWKm+OBl+OBpuOBj+OBoOOBleOBhC4nKS5pc0VtYWlsKCk7XG4gIHJlcS5zYW5pdGl6ZSgnZW1haWwnKS5ub3JtYWxpemVFbWFpbCh7IGdtYWlsX3JlbW92ZV9kb3RzOiBmYWxzZSB9KTtcblxuICBjb25zdCBlcnJvcnMgPSByZXEudmFsaWRhdGlvbkVycm9ycygpO1xuXG4gIGlmIChlcnJvcnMpIHtcbiAgICByZXEuZmxhc2goJ2Vycm9ycycsIGVycm9ycyk7XG4gICAgcmV0dXJuIHJlcy5yZWRpcmVjdCgnL2FjY291bnQnKTtcbiAgfVxuXG4gIFVzZXIuZmluZEJ5SWQocmVxLnVzZXIuaWQsIChlcnIsIHVzZXIpID0+IHtcbiAgICBpZiAoZXJyKSB7IHJldHVybiBuZXh0KGVycik7IH1cbiAgICB1c2VyLmVtYWlsID0gcmVxLmJvZHkuZW1haWwgfHwgJyc7XG4gICAgdXNlci5wcm9maWxlLm5hbWUgPSByZXEuYm9keS5uYW1lIHx8ICcnO1xuICAgIHVzZXIucHJvZmlsZS5nZW5kZXIgPSByZXEuYm9keS5nZW5kZXIgfHwgJyc7XG4gICAgdXNlci5wcm9maWxlLmxvY2F0aW9uID0gcmVxLmJvZHkubG9jYXRpb24gfHwgJyc7XG4gICAgdXNlci5wcm9maWxlLndlYnNpdGUgPSByZXEuYm9keS53ZWJzaXRlIHx8ICcnO1xuICAgIHVzZXIuc2F2ZSgoZXJyKSA9PiB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIGlmIChlcnIuY29kZSA9PT0gMTEwMDApIHtcbiAgICAgICAgICByZXEuZmxhc2goJ2Vycm9ycycsIHsgbXNnOiAn5YWl5Yqb44GV44KM44Gf44Oh44O844Or44Ki44OJ44Os44K544Gv44GZ44Gn44Gr5a2Y5Zyo44GX44Gm44GE44G+44GZLicgfSk7XG4gICAgICAgICAgcmV0dXJuIHJlcy5yZWRpcmVjdCgnL2FjY291bnQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV4dChlcnIpO1xuICAgICAgfVxuICAgICAgcmVxLmZsYXNoKCdzdWNjZXNzJywgeyBtc2c6ICfjg5fjg63jg5XjgqPjg7zjg6vmg4XloLHjgpLmm7TmlrDjgZfjgb7jgZfjgZ8uJyB9KTtcbiAgICAgIHJlcy5yZWRpcmVjdCgnL2FjY291bnQnKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIFBPU1QgL2FjY291bnQvcGFzc3dvcmRcbiAqIFVwZGF0ZSBjdXJyZW50IHBhc3N3b3JkLlxuICovXG5leHBvcnQgbGV0IHBvc3RVcGRhdGVQYXNzd29yZCA9IChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikgPT4ge1xuICByZXEuYXNzZXJ0KCdwYXNzd29yZCcsICfjg5Hjgrnjg6/jg7zjg4njga805paH5a2X5Lul5LiK44Gr44GX44Gm44GP44Gg44GV44GELicpLmxlbih7IG1pbjogNCB9KTtcbiAgcmVxLmFzc2VydCgnY29uZmlybVBhc3N3b3JkJywgJ+ODkeOCueODr+ODvOODieOBjOS4gOiHtOOBl+OBvuOBm+OCky4nKS5lcXVhbHMocmVxLmJvZHkucGFzc3dvcmQpO1xuXG4gIGNvbnN0IGVycm9ycyA9IHJlcS52YWxpZGF0aW9uRXJyb3JzKCk7XG5cbiAgaWYgKGVycm9ycykge1xuICAgIHJlcS5mbGFzaCgnZXJyb3JzJywgZXJyb3JzKTtcbiAgICByZXR1cm4gcmVzLnJlZGlyZWN0KCcvYWNjb3VudCcpO1xuICB9XG5cbiAgVXNlci5maW5kQnlJZChyZXEudXNlci5pZCwgKGVyciwgdXNlcikgPT4ge1xuICAgIGlmIChlcnIpIHsgcmV0dXJuIG5leHQoZXJyKTsgfVxuICAgIHVzZXIucGFzc3dvcmQgPSByZXEuYm9keS5wYXNzd29yZDtcbiAgICB1c2VyLnNhdmUoKGVycikgPT4ge1xuICAgICAgaWYgKGVycikgeyByZXR1cm4gbmV4dChlcnIpOyB9XG4gICAgICByZXEuZmxhc2goJ3N1Y2Nlc3MnLCB7IG1zZzogJ+ODkeOCueODr+ODvOODieOCkuWkieabtOOBl+OBvuOBl+OBny4nIH0pO1xuICAgICAgcmVzLnJlZGlyZWN0KCcvYWNjb3VudCcpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbi8qKlxuICogUE9TVCAvYWNjb3VudC9kZWxldGVcbiAqIERlbGV0ZSB1c2VyIGFjY291bnQuXG4gKi9cbmV4cG9ydCBsZXQgcG9zdERlbGV0ZUFjY291bnQgPSAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pID0+IHtcbiAgVXNlci5kZWxldGVPbmUoeyBfaWQ6IHJlcS51c2VyLmlkIH0sIChlcnIpID0+IHtcbiAgICBpZiAoZXJyKSB7IHJldHVybiBuZXh0KGVycik7IH1cbiAgICByZXEubG9nb3V0KCk7XG4gICAgcmVxLmZsYXNoKCdpbmZvJywgeyBtc2c6ICfjgqLjgqvjgqbjg7Pjg4jjgpLliYrpmaTjgZfjgb7jgZfjgZ8uJyB9KTtcbiAgICByZXMucmVkaXJlY3QoJy8nKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIEdFVCAvYWNjb3VudC91bmxpbmsvOnByb3ZpZGVyXG4gKiBVbmxpbmsgT0F1dGggcHJvdmlkZXIuXG4gKi9cbmV4cG9ydCBsZXQgZ2V0T2F1dGhVbmxpbmsgPSAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pID0+IHtcbiAgY29uc3QgeyBwcm92aWRlciB9ID0gcmVxLnBhcmFtcztcbiAgVXNlci5maW5kQnlJZChyZXEudXNlci5pZCwgKGVyciwgdXNlcjogYW55KSA9PiB7XG4gICAgaWYgKGVycikgeyByZXR1cm4gbmV4dChlcnIpOyB9XG4gICAgdXNlcltwcm92aWRlcl0gPSB1bmRlZmluZWQ7XG4gICAgdXNlci50b2tlbnMgPSB1c2VyLnRva2Vucy5maWx0ZXIoKHRva2VuOiBBdXRoVG9rZW4pID0+IHRva2VuLmtpbmQgIT09IHByb3ZpZGVyKTtcbiAgICB1c2VyLnNhdmUoKGVycjogV3JpdGVFcnJvcikgPT4ge1xuICAgICAgaWYgKGVycikgeyByZXR1cm4gbmV4dChlcnIpOyB9XG4gICAgICByZXEuZmxhc2goJ2luZm8nLCB7IG1zZzogYCR7cHJvdmlkZXJ944Ki44Kr44Km44Oz44OI44Go44Gu6YCj5pC644KS6Kej6Zmk44GX44G+44GX44GfLmAgfSk7XG4gICAgICByZXMucmVkaXJlY3QoJy9hY2NvdW50Jyk7XG4gICAgfSk7XG4gIH0pO1xufTtcbiIsImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5cbmludGVyZmFjZSBJQ291bnQgZXh0ZW5kcyBtb25nb29zZS5Eb2N1bWVudCB7XG4gIG5hbWU6IFN0cmluZztcbiAgY3VzdG9tZXJDb3VudDogTnVtYmVyO1xufVxuXG5jb25zdCBjb3VudFNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICBuYW1lOiBTdHJpbmcsXG4gIGN1c3RvbWVyQ291bnQ6IE51bWJlclxufSk7XG5cbmNvbnN0IENvdW50ID0gbW9uZ29vc2UubW9kZWw8SUNvdW50PignQ291bnQnLCBjb3VudFNjaGVtYSk7XG5cbmV4cG9ydCBkZWZhdWx0IENvdW50O1xuIiwiaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHQtbm9kZWpzJztcbmltcG9ydCBjcnlwdG8gZnJvbSAnY3J5cHRvJztcbmltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSwgTmV4dEZ1bmN0aW9uIH0gZnJvbSAnZXhwcmVzcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVVzZXJEb2N1bWVudCBleHRlbmRzIG1vbmdvb3NlLkRvY3VtZW50IHtcbiAgZW1haWw6IFN0cmluZztcbiAgcGFzc3dvcmQ6IFN0cmluZztcbiAgcGFzc3dvcmRSZXNldFRva2VuOiBTdHJpbmc7XG4gIHBhc3N3b3JkUmVzZXRFeHBpcmVzOiBEYXRlO1xuICBsYXJnZUNvdW50OiBOdW1iZXI7XG4gIG1pZGRsZUNvdW50OiBOdW1iZXI7XG4gIHNtYWxsQ291bnQ6IE51bWJlcjtcbiAgY3VzdG9tZXJOdW1iZXI6IE51bWJlcjtcbiAgZXh0UHViS2V5OiBBcnJheTxTdHJpbmc+O1xuICBbaW5kZXg6IHN0cmluZ106IGFueTtcblxuICBmYWNlYm9vazogU3RyaW5nO1xuICB0d2l0dGVyOiBTdHJpbmc7XG4gIHRva2VuczogQXJyYXk8e30+O1xuXG4gIHByb2ZpbGU6IHtcbiAgICBuYW1lOiBTdHJpbmcsXG4gICAgZ2VuZGVyOiBTdHJpbmcsXG4gICAgbG9jYXRpb246IFN0cmluZyxcbiAgICB3ZWJzaXRlOiBTdHJpbmcsXG4gICAgcGljdHVyZTogU3RyaW5nXG4gIH07XG5cbiAgY29tcGFyZVBhc3N3b3JkKGFyZzA6IFN0cmluZywgYXJnMTogQm9vbGVhbik6IHZvaWQ7XG59XG5cbmV4cG9ydCB0eXBlIFVzZXJNb2RlbCA9IG1vbmdvb3NlLkRvY3VtZW50ICYge1xuICBlbWFpbDogc3RyaW5nO1xuICBwYXNzd29yZDogc3RyaW5nO1xuICBwYXNzd29yZFJlc2V0VG9rZW46IHN0cmluZztcbiAgcGFzc3dvcmRSZXNldEV4cGlyZXM6IERhdGU7XG4gIGxhcmdlQ291bnQ6IG51bWJlcjtcbiAgbWlkZGxlQ291bnQ6IG51bWJlcjtcbiAgc21hbGxDb3VudDogbnVtYmVyO1xuICBjdXN0b21lck51bWJlcjogbnVtYmVyO1xuICBleHRQdWJLZXk6IHN0cmluZ1tdO1xuICBbaW5kZXg6IHN0cmluZ106IGFueTtcblxuICBmYWNlYm9vazogc3RyaW5nO1xuICB0d2l0dGVyOiBzdHJpbmcsXG4gIHRva2VuczogQXV0aFRva2VuW107XG5cbiAgcHJvZmlsZToge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBnZW5kZXI6IHN0cmluZztcbiAgICBsb2NhdGlvbjogc3RyaW5nO1xuICAgIHdlYnNpdGU6IHN0cmluZztcbiAgICBwaWN0dXJlOiBzdHJpbmc7XG4gIH07XG5cbiAgY29tcGFyZVBhc3N3b3JkOiBjb21wYXJlUGFzc3dvcmRGdW5jdGlvbjtcbiAgZ3JhdmF0YXIoc2l6ZTogbnVtYmVyKTogc3RyaW5nO1xuICAvLyBncmF2YXRhcjogKHNpemU6IG51bWJlcikgPT4gc3RyaW5nO1xufTtcblxudHlwZSBjb21wYXJlUGFzc3dvcmRGdW5jdGlvbiA9IChjYW5kaWRhdGVQYXNzd29yZDogc3RyaW5nLCBjYjogKGVycjogYW55LCBpc01hdGNoOiBhbnkpID0+IHt9KSA9PiB2b2lkO1xuXG5leHBvcnQgdHlwZSBBdXRoVG9rZW4gPSB7XG4gIGFjY2Vzc1Rva2VuOiBzdHJpbmc7XG4gIGtpbmQ6IHN0cmluZztcbn07XG5cbmNvbnN0IHVzZXJTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcbiAgZW1haWw6IHsgdHlwZTogU3RyaW5nLCB1bmlxdWU6IHRydWUgfSxcbiAgcGFzc3dvcmQ6IFN0cmluZyxcbiAgcGFzc3dvcmRSZXNldFRva2VuOiBTdHJpbmcsXG4gIHBhc3N3b3JkUmVzZXRFeHBpcmVzOiBEYXRlLFxuICBsYXJnZUNvdW50OiBOdW1iZXIsXG4gIG1pZGRsZUNvdW50OiBOdW1iZXIsXG4gIHNtYWxsQ291bnQ6IE51bWJlcixcbiAgY3VzdG9tZXJOdW1iZXI6IE51bWJlcixcbiAgZXh0UHViS2V5OiBBcnJheSxcblxuICBmYWNlYm9vazogU3RyaW5nLFxuICB0d2l0dGVyOiBTdHJpbmcsXG4gIHRva2VuczogQXJyYXksXG5cbiAgcHJvZmlsZToge1xuICAgIG5hbWU6IFN0cmluZyxcbiAgICBnZW5kZXI6IFN0cmluZyxcbiAgICBsb2NhdGlvbjogU3RyaW5nLFxuICAgIHdlYnNpdGU6IFN0cmluZyxcbiAgICBwaWN0dXJlOiBTdHJpbmdcbiAgfVxufSwgeyB0aW1lc3RhbXBzOiB0cnVlIH0pO1xuXG4vKipcbiAqIFBhc3N3b3JkIGhhc2ggbWlkZGxld2FyZS5cbiAqL1xudXNlclNjaGVtYS5wcmUoJ3NhdmUnLCBmdW5jdGlvbiBzYXZlKG5leHQ6IE5leHRGdW5jdGlvbikge1xuICBjb25zdCB1c2VyID0gdGhpcztcbiAgaWYgKCF1c2VyLmlzTW9kaWZpZWQoJ3Bhc3N3b3JkJykpIHsgcmV0dXJuIG5leHQoKTsgfVxuICBiY3J5cHQuZ2VuU2FsdCgxMCwgKGVyciwgc2FsdCkgPT4ge1xuICAgIGlmIChlcnIpIHsgcmV0dXJuIG5leHQoZXJyKTsgfVxuICAgIGJjcnlwdC5oYXNoKHVzZXIucGFzc3dvcmQsIHNhbHQsIHVuZGVmaW5lZCwgKGVyciwgaGFzaCkgPT4ge1xuICAgICAgaWYgKGVycikgeyByZXR1cm4gbmV4dChlcnIpOyB9XG4gICAgICB1c2VyLnBhc3N3b3JkID0gaGFzaDtcbiAgICAgIG5leHQoKTtcbiAgICB9KTtcbiAgfSk7XG59KTtcblxuLyoqXG4gKiBIZWxwZXIgbWV0aG9kIGZvciB2YWxpZGF0aW5nIHVzZXIncyBwYXNzd29yZC5cbiAqL1xudXNlclNjaGVtYS5tZXRob2RzLmNvbXBhcmVQYXNzd29yZCA9IGZ1bmN0aW9uIGNvbXBhcmVQYXNzd29yZChjYW5kaWRhdGVQYXNzd29yZDogc3RyaW5nLCBjYjogKGVycjogYW55LCBpc01hdGNoOiBhbnkpID0+IHt9KSB7XG4gIGJjcnlwdC5jb21wYXJlKGNhbmRpZGF0ZVBhc3N3b3JkLCB0aGlzLnBhc3N3b3JkLCAoZXJyLCBpc01hdGNoKSA9PiB7XG4gICAgY2IoZXJyLCBpc01hdGNoKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIEhlbHBlciBtZXRob2QgZm9yIGdldHRpbmcgdXNlcidzIGdyYXZhdGFyLlxuICovXG51c2VyU2NoZW1hLm1ldGhvZHMuZ3JhdmF0YXIgPSBmdW5jdGlvbiBncmF2YXRhcihzaXplOiBudW1iZXIpIHtcbiAgaWYgKCFzaXplKSB7XG4gICAgc2l6ZSA9IDIwMDtcbiAgfVxuICBpZiAoIXRoaXMuZW1haWwpIHtcbiAgICByZXR1cm4gYGh0dHBzOi8vZ3JhdmF0YXIuY29tL2F2YXRhci8/cz0ke3NpemV9JmQ9cmV0cm9gO1xuICB9XG4gIGNvbnN0IG1kNSA9IGNyeXB0by5jcmVhdGVIYXNoKCdtZDUnKS51cGRhdGUodGhpcy5lbWFpbCkuZGlnZXN0KCdoZXgnKTtcbiAgcmV0dXJuIGBodHRwczovL2dyYXZhdGFyLmNvbS9hdmF0YXIvJHttZDV9P3M9JHtzaXplfSZkPXJldHJvYDtcbn07XG5cbmNvbnN0IFVzZXIgPSBtb25nb29zZS5tb2RlbDxJVXNlckRvY3VtZW50PignVXNlcicsIHVzZXJTY2hlbWEpO1xuXG5leHBvcnQgZGVmYXVsdCBVc2VyO1xuIiwiaW1wb3J0IGNoYWxrIGZyb20gJ2NoYWxrJztcbmltcG9ydCBkb3RlbnYgZnJvbSAnZG90ZW52JztcbmltcG9ydCBlcnJvckhhbmRsZXIgZnJvbSAnZXJyb3JoYW5kbGVyJztcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlLCBOZXh0RnVuY3Rpb24gfSBmcm9tICdleHByZXNzJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuXG5kb3RlbnYuY29uZmlnKHsgcGF0aDogJy5lbnYuZXhhbXBsZScgfSk7XG5cbmltcG9ydCBhcHAgZnJvbSAnLi9hcHAnO1xuXG4vKipcbiAqIEVycm9yIEhhbmRsZXIuXG4gKi9cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAvLyBvbmx5IHVzZSBpbiBkZXZlbG9wbWVudFxuICBhcHAudXNlKGVycm9ySGFuZGxlcigpKTtcbn0gZWxzZSB7XG4gIGFwcC51c2UoKGVycjogRXJyb3IsIHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKSA9PiB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHJlcy5zdGF0dXMoNTAwKS5zZW5kKCdTZXJ2ZXIgRXJyb3InKTtcbiAgfSk7XG59XG5cbi8qKlxuICogU3RhcnQgRXhwcmVzcyBzZXJ2ZXIuXG4gKi9cbmNvbnN0IHNlcnZlciA9IGFwcC5saXN0ZW4oYXBwLmdldCgncG9ydCcpLCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKFxuICAgICclcyBodHRwOi8vbG9jYWxob3N0OiVkIOOBp+WLleOBhOOBpuOBhOOBvuOBmS4nLFxuICAgIGNoYWxrLmdyZWVuKCfinJMnKSxcbiAgICBhcHAuZ2V0KCdwb3J0JylcbiAgKTtcbiAgY29uc29sZS5sb2coXG4gICAgJyVzICVz44Oi44O844OJ44Gn44GZLicsXG4gICAgY2hhbGsuZ3JlZW4oJ+KckycpLFxuICAgIGFwcC5nZXQoJ2VudicpXG4gICk7XG4gIGNvbnNvbGUubG9nKFxuICAgICclcyBDVFJMLUMg44Gn5YGc5q2i44GX44G+44GZLicsXG4gICAgY2hhbGsuZ3JlZW4oJ+KckycpXG4gICk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgc2VydmVyO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmNyeXB0LW5vZGVqc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiaXAzMlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiaXRjb2luanMtbGliXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJvZHktcGFyc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNoYWxrXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvbXByZXNzaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvbm5lY3QtbW9uZ29cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY3J5cHRvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRvdGVudlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJlcnJvcmhhbmRsZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzLWZsYXNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3Mtc2Vzc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzLXZhbGlkYXRvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibHVzY2FcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9yZ2FuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vZGVtYWlsZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGFzc3BvcnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGFzc3BvcnQtZmFjZWJvb2tcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGFzc3BvcnQtbG9jYWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGFzc3BvcnQtdHdpdHRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInV0aWxcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==