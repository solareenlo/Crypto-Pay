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
            for (let i = 0; i < 3; i++)
                tbtc.amount[i] = tbtc.price[i] * tbtc.count[i];
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
                                    const data = {
                                        address: `https://chart.apis.google.com/chart?cht=qr&chs=300x300&chl=bitcoin:?amount=${user[0].largeCount}`,
                                        count: user[0].largeCount,
                                        amount: 0.005
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
                                    const data = {
                                        address: `https://chart.apis.google.com/chart?cht=qr&chs=300x300&chl=bitcoin:?amount=${user[0].middleCount}`,
                                        count: user[0].middleCount,
                                        amount: 0.003
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
                                    const data = {
                                        address: `https://chart.apis.google.com/chart?cht=qr&chs=300x300&chl=bitcoin:?amount=${user[0].smallCount}`,
                                        count: user[0].smallCount,
                                        amount: 0.001
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
        customerNumber: 0
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL3Bhc3Nwb3J0LnRzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVycy9jb250YWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVycy9ob21lLnRzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVycy91c2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvQ291bnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9Vc2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmNyeXB0LW5vZGVqc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJvZHktcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2hhbGtcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb21wcmVzc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvbm5lY3QtbW9uZ29cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjcnlwdG9cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkb3RlbnZcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJlcnJvcmhhbmRsZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzcy1mbGFzaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3Mtc2Vzc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3MtdmFsaWRhdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibHVzY2FcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vcmdhblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5vZGVtYWlsZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXNzcG9ydFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhc3Nwb3J0LWZhY2Vib29rXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGFzc3BvcnQtbG9jYWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXNzcG9ydC10d2l0dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInV0aWxcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBOztHQUVHO0FBQ0gsNkZBQXFDO0FBQ3JDLDJFQUEwQjtBQUMxQiw2RkFBc0M7QUFDdEMsOEVBQTRCO0FBQzVCLGlGQUE4QjtBQUM5QixtR0FBa0M7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LGVBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQ2pCLENBQUM7QUFDSixDQUFDLENBQUMsQ0FBQztBQUVILGtCQUFlLE1BQU0sQ0FBQzs7Ozs7Ozs7Ozs7O0FDM0N0QiwwQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxpQyIsImZpbGUiOiJzZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9zZXJ2ZXIudHNcIik7XG4iLCIvKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cbmltcG9ydCBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJztcbmltcG9ydCBjaGFsayBmcm9tICdjaGFsayc7XG5pbXBvcnQgY29tcHJlc3Npb24gZnJvbSAnY29tcHJlc3Npb24nO1xuaW1wb3J0IGRvdGVudiBmcm9tICdkb3RlbnYnO1xuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgZmxhc2ggZnJvbSAnZXhwcmVzcy1mbGFzaCc7XG5pbXBvcnQgc2Vzc2lvbiBmcm9tICdleHByZXNzLXNlc3Npb24nO1xuaW1wb3J0IGV4cHJlc3NWYWxpZGF0b3IgZnJvbSAnZXhwcmVzcy12YWxpZGF0b3InO1xuaW1wb3J0IHsgY2hlY2ssIGJvZHksIHF1ZXJ5LCBwYXJhbSwgdmFsaWRhdGlvblJlc3VsdCB9IGZyb20gJ2V4cHJlc3MtdmFsaWRhdG9yL2NoZWNrJztcbmltcG9ydCBsdXNjYSBmcm9tICdsdXNjYSc7XG5pbXBvcnQgbW9uZ28gZnJvbSAnY29ubmVjdC1tb25nbyc7XG5pbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuaW1wb3J0IGxvZ2dlciBmcm9tICdtb3JnYW4nO1xuaW1wb3J0IHBhc3Nwb3J0IGZyb20gJ3Bhc3Nwb3J0JztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuXG5jb25zdCBNb25nb1N0b3JlID0gbW9uZ28oc2Vzc2lvbik7XG5cbmRvdGVudi5jb25maWcoeyBwYXRoOiAnLmVudi5leGFtcGxlJyB9KTtcblxuLyoqXG4gKiBDb250cm9sbGVycyAocm91dGUgaGFuZGxlcnMpLlxuICovXG5pbXBvcnQgKiBhcyBjb250YWN0Q29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXJzL2NvbnRhY3QnO1xuaW1wb3J0ICogYXMgaG9tZUNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVycy9ob21lJztcbmltcG9ydCAqIGFzIHVzZXJDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcnMvdXNlcic7XG5cbi8qKlxuICogQVBJIGtleXMgYW5kIFBhc3Nwb3J0IGNvbmZpZ3VyYXRpb24uXG4gKi9cbmNvbnN0IHBhc3Nwb3J0Q29uZmlnID0gcmVxdWlyZSgnLi9jb25maWcvcGFzc3BvcnQnKTtcblxuLyoqXG4gKiBDcmVhdGUgRXhwcmVzcyBzZXJ2ZXIuXG4gKi9cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcblxuLyoqXG4gKiBDb25uZWN0IHRvIE1vbmdvREIuXG4gKi9cbm1vbmdvb3NlLnNldCgndXNlRmluZEFuZE1vZGlmeScsIGZhbHNlKTtcbm1vbmdvb3NlLnNldCgndXNlQ3JlYXRlSW5kZXgnLCB0cnVlKTtcbm1vbmdvb3NlLnNldCgndXNlTmV3VXJsUGFyc2VyJywgdHJ1ZSk7XG5tb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJIHx8ICdtb25nb2RiOi8vbG9jYWxob3N0OjI3MDE3L2NyeXB0by1wYXknKTtcbm1vbmdvb3NlLmNvbm5lY3Rpb24ub24oJ2Vycm9yJywgKGVycikgPT4ge1xuICBjb25zb2xlLmVycm9yKGVycik7XG4gIGNvbnNvbGUubG9nKFxuICAgICclcyBNb25nb0RCIGNvbm5lY3Rpb24gZXJyb3IuIFBsZWFzZSBtYWtlIHN1cmUgTW9uZ29EQiBpcyBydW5uaW5nLicsXG4gICAgY2hhbGsucmVkKCfinJcnKVxuICApO1xuICBwcm9jZXNzLmV4aXQoKTtcbn0pO1xuXG4vKipcbiAqIEV4cHJlc3MgY29uZmlndXJhdGlvbi5cbiAqL1xuYXBwLnNldCgncG9ydCcsIHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMCk7XG5hcHAuc2V0KCd2aWV3cycsIHBhdGguam9pbihfX2Rpcm5hbWUsICcuLi92aWV3cycpKTtcbmFwcC5zZXQoJ3ZpZXcgZW5naW5lJywgJ3B1ZycpO1xuYXBwLnVzZShjb21wcmVzc2lvbigpKTtcbmFwcC51c2UobG9nZ2VyKCdkZXYnKSk7XG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcbmFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IHRydWUgfSkpO1xuYXBwLnVzZShleHByZXNzVmFsaWRhdG9yKCkpO1xuYXBwLnVzZShzZXNzaW9uKHtcbiAgcmVzYXZlOiB0cnVlLFxuICBzYXZlVW5pbml0aWFsaXplZDogdHJ1ZSxcbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5TRVNTSU9OX1NFQ1JFVCxcbiAgY29va2llOiB7IG1heEFnZTogMTIwOTYwMDAwMCB9LCAvLyB0d28gd2Vla3MgaW4gbWlsbGlzZWNvbmRzXG4gIHN0b3JlOiBuZXcgTW9uZ29TdG9yZSh7XG4gICAgdXJsOiBwcm9jZXNzLmVudi5NT05HT0RCX1VSSSB8fCAnbW9uZ29kYjovL2xvY2FsaG9zdDoyNzAxNy9jcnlwdG8tcGF5JyxcbiAgICBhdXRvUmVjb25uZWN0OiB0cnVlLFxuICB9KVxufSkpO1xuYXBwLnVzZShwYXNzcG9ydC5pbml0aWFsaXplKCkpO1xuYXBwLnVzZShwYXNzcG9ydC5zZXNzaW9uKCkpO1xuYXBwLnVzZShmbGFzaCgpKTtcbmFwcC51c2UobHVzY2EueGZyYW1lKCdTQU1FT1JJR0lOJykpO1xuYXBwLnVzZShsdXNjYS54c3NQcm90ZWN0aW9uKHRydWUpKTtcbmFwcC5kaXNhYmxlKCd4LXBvd2VyZWQtYnknKTtcbmFwcC51c2UoKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIHJlcy5sb2NhbHMudXNlciA9IHJlcS51c2VyO1xuICBuZXh0KCk7XG59KTtcbmFwcC51c2UoKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIC8vIEFmdGVyIHN1Y2Nlc3NmdWwgbG9naW4sIHJlZGlyZWN0IGJhY2sgdG8gdGhlIGludGVuZGVkIHBhZ2VcbiAgaWYgKCFyZXEudXNlclxuICAgICYmIHJlcS5wYXRoICE9PSAnL2xvZ2luJ1xuICAgICYmIHJlcS5wYXRoICE9PSAnL3NpZ251cCdcbiAgICAmJiAhcmVxLnBhdGgubWF0Y2goL15cXC9hdXRoLylcbiAgICAmJiAhcmVxLnBhdGgubWF0Y2goL1xcLi8pKSB7XG4gICAgcmVxLnNlc3Npb24ucmV0dXJuVG8gPSByZXEub3JpZ2luYWxVcmw7XG4gIH0gZWxzZSBpZiAocmVxLnVzZXJcbiAgICAmJiByZXEucGF0aCA9PT0gJy9hY2NvdW50Jykge1xuICAgIHJlcS5zZXNzaW9uLnJldHVyblRvID0gcmVxLm9yaWdpbmFsVXJsO1xuICB9XG4gIG5leHQoKTtcbn0pO1xuYXBwLnVzZSgnLycsIGV4cHJlc3Muc3RhdGljKHBhdGguam9pbihfX2Rpcm5hbWUsICdwdWJsaWMnKSwgeyBtYXhBZ2U6IDMxNTU3NjAwMDAwIH0pKTtcblxuLyoqXG4gKiBQcmltYXJ5IGFwcCByb3V0ZXMuXG4gKi9cbmFwcC5nZXQoJy8nLCBob21lQ29udHJvbGxlci5ob21lKTtcbmFwcC5nZXQoJy9sb2dpbicsIHVzZXJDb250cm9sbGVyLmdldExvZ2luKTtcbmFwcC5wb3N0KCcvbG9naW4nLCB1c2VyQ29udHJvbGxlci5wb3N0TG9naW4pO1xuYXBwLmdldCgnL2xvZ291dCcsIHVzZXJDb250cm9sbGVyLmxvZ291dCk7XG5hcHAuZ2V0KCcvZm9yZ290JywgdXNlckNvbnRyb2xsZXIuZ2V0Rm9yZ290KTtcbmFwcC5wb3N0KCcvZm9yZ290JywgdXNlckNvbnRyb2xsZXIucG9zdEZvcmdvdCk7XG5hcHAuZ2V0KCcvcmVzZXQvOnRva2VuJywgdXNlckNvbnRyb2xsZXIuZ2V0UmVzZXQpO1xuYXBwLnBvc3QoJy9yZXNldC86dG9rZW4nLCB1c2VyQ29udHJvbGxlci5wb3N0UmVzZXQpO1xuYXBwLmdldCgnL3NpZ251cCcsIHVzZXJDb250cm9sbGVyLmdldFNpZ251cCk7XG5hcHAucG9zdCgnL3NpZ251cCcsIHVzZXJDb250cm9sbGVyLnBvc3RTaWdudXApO1xuYXBwLmdldCgnL2NvbnRhY3QnLCBjb250YWN0Q29udHJvbGxlci5nZXRDb250YWN0KTtcbmFwcC5wb3N0KCcvY29udGFjdCcsIGNvbnRhY3RDb250cm9sbGVyLnBvc3RDb250YWN0KTtcbmFwcC5nZXQoJy9hY2NvdW50JywgcGFzc3BvcnRDb25maWcuaXNBdXRoZW50aWNhdGVkLCB1c2VyQ29udHJvbGxlci5nZXRBY2NvdW50KTtcbmFwcC5wb3N0KCcvYWNjb3VudC9wcm9maWxlJywgcGFzc3BvcnRDb25maWcuaXNBdXRoZW50aWNhdGVkLCB1c2VyQ29udHJvbGxlci5wb3N0VXBkYXRlUHJvZmlsZSk7XG5hcHAucG9zdCgnL2FjY291bnQvcGFzc3dvcmQnLCBwYXNzcG9ydENvbmZpZy5pc0F1dGhlbnRpY2F0ZWQsIHVzZXJDb250cm9sbGVyLnBvc3RVcGRhdGVQYXNzd29yZCk7XG5hcHAucG9zdCgnL2FjY291bnQvZGVsZXRlJywgcGFzc3BvcnRDb25maWcuaXNBdXRoZW50aWNhdGVkLCB1c2VyQ29udHJvbGxlci5wb3N0RGVsZXRlQWNjb3VudCk7XG5hcHAuZ2V0KCcvYWNjb3VudC91bmxpbmsvOnByb3ZpZGVyJywgcGFzc3BvcnRDb25maWcuaXNBdXRoZW50aWNhdGVkLCB1c2VyQ29udHJvbGxlci5nZXRPYXV0aFVubGluayk7XG5hcHAuZ2V0KCcvYml0Y29pbicsIGhvbWVDb250cm9sbGVyLmdldFBheUJpdGNvaW4pO1xuYXBwLnB1dCgnL2JpdGNvaW4nLCBob21lQ29udHJvbGxlci5wdXRQaXp6YUNvdW50KTtcbmFwcC5nZXQoJy9vdGhlcnMnLCBob21lQ29udHJvbGxlci5nZXRQYXlPdGhlcnMpO1xuXG4vKipcbiAqIE9BdXRoIGF1dGhlbnRpY2F0aW9uIHJvdXRlcy4gKFNpZ24gaW4pXG4gKi9cbmFwcC5nZXQoJy9hdXRoL2ZhY2Vib29rJywgcGFzc3BvcnQuYXV0aGVudGljYXRlKCdmYWNlYm9vaycsIHsgc2NvcGU6IFsnZW1haWwnLCAncHVibGljX3Byb2ZpbGUnXSB9KSk7XG5hcHAuZ2V0KCcvYXV0aC9mYWNlYm9vay9jYWxsYmFjaycsIHBhc3Nwb3J0LmF1dGhlbnRpY2F0ZSgnZmFjZWJvb2snLCB7IGZhaWx1cmVSZWRpcmVjdDogJy9sb2dpbicgfSksIChyZXEsIHJlcykgPT4ge1xuICByZXMucmVkaXJlY3QocmVxLnNlc3Npb24ucmV0dXJuVG8gfHwgJy8nKTtcbn0pO1xuYXBwLmdldCgnL2F1dGgvdHdpdHRlcicsIHBhc3Nwb3J0LmF1dGhlbnRpY2F0ZSgndHdpdHRlcicpKTtcbmFwcC5nZXQoJy9hdXRoL3R3aXR0ZXIvY2FsbGJhY2snLCBwYXNzcG9ydC5hdXRoZW50aWNhdGUoJ3R3aXR0ZXInLCB7IGZhaWx1cmVSZWRpcmVjdDogJy9sb2dpbicgfSksIChyZXEsIHJlcykgPT4ge1xuICByZXMucmVkaXJlY3QocmVxLnNlc3Npb24ucmV0dXJuVG8gfHwgJy8nKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBhcHA7XG4iLCJpbXBvcnQgcGFzc3BvcnQgZnJvbSAncGFzc3BvcnQnO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAncmVxdWVzdCc7XG5pbXBvcnQgcGFzc3BvcnRMb2NhbCBmcm9tICdwYXNzcG9ydC1sb2NhbCc7XG5pbXBvcnQgcGFzc3BvcnRGYWNlYm9vayBmcm9tICdwYXNzcG9ydC1mYWNlYm9vayc7XG5pbXBvcnQgcGFzc3BvcnRUd2l0dGVyIGZyb20gJ3Bhc3Nwb3J0LXR3aXR0ZXInO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHsgZGVmYXVsdCBhcyBVc2VyIH0gZnJvbSAnLi4vbW9kZWxzL1VzZXInO1xuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UsIE5leHRGdW5jdGlvbiB9IGZyb20gJ2V4cHJlc3MnO1xuXG5jb25zdCBMb2NhbFN0cmF0ZWd5ID0gcGFzc3BvcnRMb2NhbC5TdHJhdGVneTtcbmNvbnN0IEZhY2Vib29rU3RyYXRlZ3kgPSBwYXNzcG9ydEZhY2Vib29rLlN0cmF0ZWd5O1xuY29uc3QgVHdpdHRlclN0cmF0ZWd5ID0gcGFzc3BvcnRUd2l0dGVyLlN0cmF0ZWd5O1xuXG5wYXNzcG9ydC5zZXJpYWxpemVVc2VyPGFueSwgYW55PigodXNlciwgZG9uZSkgPT4ge1xuICBkb25lKHVuZGVmaW5lZCwgdXNlci5pZCk7XG59KTtcblxucGFzc3BvcnQuZGVzZXJpYWxpemVVc2VyKChpZCwgZG9uZSkgPT4ge1xuICBVc2VyLmZpbmRCeUlkKGlkLCAoZXJyLCB1c2VyKSA9PiB7XG4gICAgZG9uZShlcnIsIHVzZXIpO1xuICB9KTtcbn0pO1xuXG4vKipcbiAqIFNpZ24gaW4gdXNpbmcgRW1haWwgYW5kIFBhc3N3b3JkLlxuICovXG5wYXNzcG9ydC51c2UobmV3IExvY2FsU3RyYXRlZ3koeyB1c2VybmFtZUZpZWxkOiAnZW1haWwnIH0sIChlbWFpbCwgcGFzc3dvcmQsIGRvbmUpID0+IHtcbiAgVXNlci5maW5kT25lKHsgZW1haWw6IGVtYWlsLnRvTG93ZXJDYXNlKCkgfSwgKGVyciwgdXNlcjogYW55KSA9PiB7XG4gICAgaWYgKGVycikgeyByZXR1cm4gZG9uZShlcnIpOyB9XG4gICAgaWYgKCF1c2VyKSB7XG4gICAgICByZXR1cm4gZG9uZSh1bmRlZmluZWQsIGZhbHNlLCB7IG1lc3NhZ2U6IGBFbWFpbCAke2VtYWlsfSBub3QgZm91bmQuYCB9KTtcbiAgICB9XG4gICAgdXNlci5jb21wYXJlUGFzc3dvcmQocGFzc3dvcmQsIChlcnI6IEVycm9yLCBpc01hdGNoOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoZXJyKSB7IHJldHVybiBkb25lKGVycik7IH1cbiAgICAgIGlmIChpc01hdGNoKSB7XG4gICAgICAgIHJldHVybiBkb25lKHVuZGVmaW5lZCwgdXNlcik7XG4gICAgICB9XG4gICAgICByZXR1cm4gZG9uZSh1bmRlZmluZWQsIGZhbHNlLCB7IG1lc3NhZ2U6ICdJbnZhbGlkIGVtYWlsIG9yIHBhc3N3b3JkLicgfSk7XG4gICAgfSk7XG4gIH0pO1xufSkpO1xuXG4vKipcbiAqIE9BdXRoIFN0cmF0ZWd5IE92ZXJ2aWV3XG4gKlxuICogLSBVc2VyIGlzIGFscmVhZHkgbG9nZ2VkIGluLlxuICogICAtIENoZWNrIGlmIHRoZXJlIGlzIGFuIGV4aXN0aW5nIGFjY291bnQgd2l0aCBhIHByb3ZpZGVyIGlkLlxuICogICAgIC0gSWYgdGhlcmUgaXMsIHJldHVybiBhbiBlcnJvciBtZXNzYWdlLiAoQWNjb3VudCBtZXJnaW5nIG5vdCBzdXBwb3J0ZWQpXG4gKiAgICAgLSBFbHNlIGxpbmsgbmV3IE9BdXRoIGFjY291bnQgd2l0aCBjdXJyZW50bHkgbG9nZ2VkLWluIHVzZXIuXG4gKiAtIFVzZXIgaXMgbm90IGxvZ2dlZCBpbi5cbiAqICAgLSBDaGVjayBpZiBpdCdzIGEgcmV0dXJuaW5nIHVzZXIuXG4gKiAgICAgLSBJZiByZXR1cm5pbmcgdXNlciwgc2lnbiBpbiBhbmQgd2UgYXJlIGRvbmUuXG4gKiAgICAgLSBFbHNlIGNoZWNrIGlmIHRoZXJlIGlzIGFuIGV4aXN0aW5nIGFjY291bnQgd2l0aCB1c2VyJ3MgZW1haWwuXG4gKiAgICAgICAtIElmIHRoZXJlIGlzLCByZXR1cm4gYW4gZXJyb3IgbWVzc2FnZS5cbiAqICAgICAgIC0gRWxzZSBjcmVhdGUgYSBuZXcgYWNjb3VudC5cbiAqL1xuXG4vKipcbiAqIFNpZ24gaW4gd2l0aCBGYWNlYm9vay5cbiAqL1xucGFzc3BvcnQudXNlKG5ldyBGYWNlYm9va1N0cmF0ZWd5KHtcbiAgY2xpZW50SUQ6IHByb2Nlc3MuZW52LkZBQ0VCT09LX0lELFxuICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkZBQ0VCT09LX1NFQ1JFVCxcbiAgY2FsbGJhY2tVUkw6ICcvYXV0aC9mYWNlYm9vay9jYWxsYmFjaycsXG4gIHByb2ZpbGVGaWVsZHM6IFsnbmFtZScsICdlbWFpbCcsICdsaW5rJywgJ2xvY2FsZScsICd0aW1lem9uZScsICdnZW5kZXInXSxcbiAgcGFzc1JlcVRvQ2FsbGJhY2s6IHRydWVcbn0sIChyZXE6IGFueSwgYWNjZXNzVG9rZW4sIHJlZnJlc2hUb2tlbiwgcHJvZmlsZSwgZG9uZSkgPT4ge1xuICBpZiAocmVxLnVzZXIpIHtcbiAgICBVc2VyLmZpbmRPbmUoeyBmYWNlYm9vazogcHJvZmlsZS5pZCB9LCAoZXJyLCBleGlzdGluZ1VzZXIpID0+IHtcbiAgICAgIGlmIChlcnIpIHsgcmV0dXJuIGRvbmUoZXJyKTsgfVxuICAgICAgaWYgKGV4aXN0aW5nVXNlcikge1xuICAgICAgICByZXEuZmxhc2goJ2Vycm9ycycsIHsgbXNnOiAnVGhlcmUgaXMgYWxyZWFkeSBhIEZhY2Vib29rIGFjY291bnQgdGhhdCBiZWxvbmdzIHRvIHlvdS4gU2lnbiBpbiB3aXRoIHRoYXQgYWNjb3VudCBvciBkZWxldGUgaXQsIHRoZW4gbGluayBpdCB3aXRoIHlvdXIgY3VycmVudCBhY2NvdW50LicgfSk7XG4gICAgICAgIGRvbmUoZXJyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIFVzZXIuZmluZEJ5SWQocmVxLnVzZXIuaWQsIChlcnIsIHVzZXIpID0+IHtcbiAgICAgICAgICBpZiAoZXJyKSB7IHJldHVybiBkb25lKGVycik7IH1cbiAgICAgICAgICB1c2VyLmZhY2Vib29rID0gcHJvZmlsZS5pZDtcbiAgICAgICAgICB1c2VyLnRva2Vucy5wdXNoKHsga2luZDogJ2ZhY2Vib29rJywgYWNjZXNzVG9rZW4gfSk7XG4gICAgICAgICAgdXNlci5wcm9maWxlLm5hbWUgPSB1c2VyLnByb2ZpbGUubmFtZSB8fCBgJHtwcm9maWxlLm5hbWUuZ2l2ZW5OYW1lfSAke3Byb2ZpbGUubmFtZS5mYW1pbHlOYW1lfWA7XG4gICAgICAgICAgdXNlci5wcm9maWxlLmdlbmRlciA9IHVzZXIucHJvZmlsZS5nZW5kZXIgfHwgcHJvZmlsZS5fanNvbi5nZW5kZXI7XG4gICAgICAgICAgdXNlci5wcm9maWxlLnBpY3R1cmUgPSB1c2VyLnByb2ZpbGUucGljdHVyZSB8fCBgaHR0cHM6Ly9ncmFwaC5mYWNlYm9vay5jb20vJHtwcm9maWxlLmlkfS9waWN0dXJlP3R5cGU9bGFyZ2VgO1xuICAgICAgICAgIHVzZXIuc2F2ZSgoZXJyKSA9PiB7XG4gICAgICAgICAgICByZXEuZmxhc2goJ2luZm8nLCB7IG1zZzogJ0ZhY2Vib29rIGFjY291bnQgaGFzIGJlZW4gbGlua2VkLicgfSk7XG4gICAgICAgICAgICBkb25lKGVyciwgdXNlcik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIFVzZXIuZmluZE9uZSh7IGZhY2Vib29rOiBwcm9maWxlLmlkIH0sIChlcnIsIGV4aXN0aW5nVXNlcikgPT4ge1xuICAgICAgaWYgKGVycikgeyByZXR1cm4gZG9uZShlcnIpOyB9XG4gICAgICBpZiAoZXhpc3RpbmdVc2VyKSB7XG4gICAgICAgIHJldHVybiBkb25lKHVuZGVmaW5lZCwgZXhpc3RpbmdVc2VyKTtcbiAgICAgIH1cbiAgICAgIFVzZXIuZmluZE9uZSh7IGVtYWlsOiBwcm9maWxlLl9qc29uLmVtYWlsIH0sIChlcnIsIGV4aXN0aW5nRW1haWxVc2VyKSA9PiB7XG4gICAgICAgIGlmIChlcnIpIHsgcmV0dXJuIGRvbmUoZXJyKTsgfVxuICAgICAgICBpZiAoZXhpc3RpbmdFbWFpbFVzZXIpIHtcbiAgICAgICAgICByZXEuZmxhc2goJ2Vycm9ycycsIHsgbXNnOiAnVGhlcmUgaXMgYWxyZWFkeSBhbiBhY2NvdW50IHVzaW5nIHRoaXMgZW1haWwgYWRkcmVzcy4gU2lnbiBpbiB0byB0aGF0IGFjY291bnQgYW5kIGxpbmsgaXQgd2l0aCBGYWNlYm9vayBtYW51YWxseSBmcm9tIEFjY291bnQgU2V0dGluZ3MuJyB9KTtcbiAgICAgICAgICBkb25lKGVycik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgdXNlciA9IG5ldyBVc2VyKCk7XG4gICAgICAgICAgdXNlci5lbWFpbCA9IHByb2ZpbGUuX2pzb24uZW1haWw7XG4gICAgICAgICAgdXNlci5mYWNlYm9vayA9IHByb2ZpbGUuaWQ7XG4gICAgICAgICAgdXNlci50b2tlbnMucHVzaCh7IGtpbmQ6ICdmYWNlYm9vaycsIGFjY2Vzc1Rva2VuIH0pO1xuICAgICAgICAgIHVzZXIucHJvZmlsZS5uYW1lID0gYCR7cHJvZmlsZS5uYW1lLmdpdmVuTmFtZX0gJHtwcm9maWxlLm5hbWUuZmFtaWx5TmFtZX1gO1xuICAgICAgICAgIHVzZXIucHJvZmlsZS5nZW5kZXIgPSBwcm9maWxlLl9qc29uLmdlbmRlcjtcbiAgICAgICAgICB1c2VyLnByb2ZpbGUucGljdHVyZSA9IGBodHRwczovL2dyYXBoLmZhY2Vib29rLmNvbS8ke3Byb2ZpbGUuaWR9L3BpY3R1cmU/dHlwZT1sYXJnZWA7XG4gICAgICAgICAgdXNlci5wcm9maWxlLmxvY2F0aW9uID0gKHByb2ZpbGUuX2pzb24ubG9jYXRpb24pID8gcHJvZmlsZS5fanNvbi5sb2NhdGlvbi5uYW1lIDogJyc7XG4gICAgICAgICAgdXNlci5zYXZlKChlcnIpID0+IHtcbiAgICAgICAgICAgIGRvbmUoZXJyLCB1c2VyKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn0pKTtcblxuLyoqXG4gKiBTaWduIGluIHdpdGggVHdpdHRlci5cbiAqL1xucGFzc3BvcnQudXNlKG5ldyBUd2l0dGVyU3RyYXRlZ3koe1xuICBjb25zdW1lcktleTogcHJvY2Vzcy5lbnYuVFdJVFRFUl9LRVksXG4gIGNvbnN1bWVyU2VjcmV0OiBwcm9jZXNzLmVudi5UV0lUVEVSX1NFQ1JFVCxcbiAgY2FsbGJhY2tVUkw6ICcvYXV0aC90d2l0dGVyL2NhbGxiYWNrJyxcbiAgcGFzc1JlcVRvQ2FsbGJhY2s6IHRydWVcbn0sIChyZXE6IGFueSwgYWNjZXNzVG9rZW4sIHRva2VuU2VjcmV0LCBwcm9maWxlLCBkb25lKSA9PiB7XG4gIGlmIChyZXEudXNlcikge1xuICAgIFVzZXIuZmluZE9uZSh7IHR3aXR0ZXI6IHByb2ZpbGUuaWQgfSwgKGVyciwgZXhpc3RpbmdVc2VyKSA9PiB7XG4gICAgICBpZiAoZXJyKSB7IHJldHVybiBkb25lKGVycik7IH1cbiAgICAgIGlmIChleGlzdGluZ1VzZXIpIHtcbiAgICAgICAgcmVxLmZsYXNoKCdlcnJvcnMnLCB7IG1zZzogJ1RoZXJlIGlzIGFscmVhZHkgYSBUd2l0dGVyIGFjY291bnQgdGhhdCBiZWxvbmdzIHRvIHlvdS4gU2lnbiBpbiB3aXRoIHRoYXQgYWNjb3VudCBvciBkZWxldGUgaXQsIHRoZW4gbGluayBpdCB3aXRoIHlvdXIgY3VycmVudCBhY2NvdW50LicgfSk7XG4gICAgICAgIGRvbmUoZXJyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIFVzZXIuZmluZEJ5SWQocmVxLnVzZXIuaWQsIChlcnIsIHVzZXIpID0+IHtcbiAgICAgICAgICBpZiAoZXJyKSB7IHJldHVybiBkb25lKGVycik7IH1cbiAgICAgICAgICB1c2VyLnR3aXR0ZXIgPSBwcm9maWxlLmlkO1xuICAgICAgICAgIHVzZXIudG9rZW5zLnB1c2goeyBraW5kOiAndHdpdHRlcicsIGFjY2Vzc1Rva2VuLCB0b2tlblNlY3JldCB9KTtcbiAgICAgICAgICB1c2VyLnByb2ZpbGUubmFtZSA9IHVzZXIucHJvZmlsZS5uYW1lIHx8IHByb2ZpbGUuZGlzcGxheU5hbWU7XG4gICAgICAgICAgdXNlci5wcm9maWxlLmxvY2F0aW9uID0gdXNlci5wcm9maWxlLmxvY2F0aW9uIHx8IHByb2ZpbGUuX2pzb24ubG9jYXRpb247XG4gICAgICAgICAgdXNlci5wcm9maWxlLnBpY3R1cmUgPSB1c2VyLnByb2ZpbGUucGljdHVyZSB8fCBwcm9maWxlLl9qc29uLnByb2ZpbGVfaW1hZ2VfdXJsX2h0dHBzO1xuICAgICAgICAgIHVzZXIuc2F2ZSgoZXJyKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7IHJldHVybiBkb25lKGVycik7IH1cbiAgICAgICAgICAgIHJlcS5mbGFzaCgnaW5mbycsIHsgbXNnOiAnVHdpdHRlciBhY2NvdW50IGhhcyBiZWVuIGxpbmtlZC4nIH0pO1xuICAgICAgICAgICAgZG9uZShlcnIsIHVzZXIpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBVc2VyLmZpbmRPbmUoeyB0d2l0dGVyOiBwcm9maWxlLmlkIH0sIChlcnIsIGV4aXN0aW5nVXNlcikgPT4ge1xuICAgICAgaWYgKGVycikgeyByZXR1cm4gZG9uZShlcnIpOyB9XG4gICAgICBpZiAoZXhpc3RpbmdVc2VyKSB7XG4gICAgICAgIHJldHVybiBkb25lKHVuZGVmaW5lZCwgZXhpc3RpbmdVc2VyKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHVzZXIgPSBuZXcgVXNlcigpO1xuICAgICAgLy8gVHdpdHRlciB3aWxsIG5vdCBwcm92aWRlIGFuIGVtYWlsIGFkZHJlc3MuICBQZXJpb2QuXG4gICAgICAvLyBCdXQgYSBwZXJzb27igJlzIHR3aXR0ZXIgdXNlcm5hbWUgaXMgZ3VhcmFudGVlZCB0byBiZSB1bmlxdWVcbiAgICAgIC8vIHNvIHdlIGNhbiBcImZha2VcIiBhIHR3aXR0ZXIgZW1haWwgYWRkcmVzcyBhcyBmb2xsb3dzOlxuICAgICAgdXNlci5lbWFpbCA9IGAke3Byb2ZpbGUudXNlcm5hbWV9QHR3aXR0ZXIuY29tYDtcbiAgICAgIHVzZXIudHdpdHRlciA9IHByb2ZpbGUuaWQ7XG4gICAgICB1c2VyLnRva2Vucy5wdXNoKHsga2luZDogJ3R3aXR0ZXInLCBhY2Nlc3NUb2tlbiwgdG9rZW5TZWNyZXQgfSk7XG4gICAgICB1c2VyLnByb2ZpbGUubmFtZSA9IHByb2ZpbGUuZGlzcGxheU5hbWU7XG4gICAgICB1c2VyLnByb2ZpbGUubG9jYXRpb24gPSBwcm9maWxlLl9qc29uLmxvY2F0aW9uO1xuICAgICAgdXNlci5wcm9maWxlLnBpY3R1cmUgPSBwcm9maWxlLl9qc29uLnByb2ZpbGVfaW1hZ2VfdXJsX2h0dHBzO1xuICAgICAgdXNlci5zYXZlKChlcnIpID0+IHtcbiAgICAgICAgZG9uZShlcnIsIHVzZXIpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn0pKTtcblxuLyoqXG4gKiBMb2dpbiBSZXF1aXJlZCBtaWRkbGV3YXJlLlxuICovXG5leHBvcnQgbGV0IGlzQXV0aGVudGljYXRlZCA9IChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikgPT4ge1xuICBpZiAocmVxLmlzQXV0aGVudGljYXRlZCgpKSB7XG4gICAgcmV0dXJuIG5leHQoKTtcbiAgfVxuICByZXMucmVkaXJlY3QoJy9sb2dpbicpO1xufTtcblxuLyoqXG4gKiBBdXRob3JpemF0aW9uIFJlcXVpcmVkIG1pZGRsZXdhcmUuXG4gKi9cbmV4cG9ydCBsZXQgaXNBdXRob3JpemVkID0gKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKSA9PiB7XG4gIGNvbnN0IHByb3ZpZGVyID0gcmVxLnBhdGguc3BsaXQoJy8nKS5zbGljZSgtMSlbMF07XG4gIGlmIChfLmZpbmQocmVxLnVzZXIudG9rZW5zLCB7IGtpbmQ6IHByb3ZpZGVyIH0pKSB7XG4gICAgbmV4dCgpO1xuICB9IGVsc2Uge1xuICAgIHJlcy5yZWRpcmVjdChgL2F1dGgvJHtwcm92aWRlcn1gKTtcbiAgfVxufTtcbiIsImltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgbm9kZW1haWxlciBmcm9tICdub2RlbWFpbGVyJztcblxuLyoqXG4gKiBHRVQgL2NvbnRhY3RcbiAqIENvbnRhY3QgZm9ybSBwYWdlLlxuICovXG5leHBvcnQgbGV0IGdldENvbnRhY3QgPSAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG4gIGNvbnN0IHVua25vd25Vc2VyID0gIShyZXEudXNlcik7XG4gIHJlcy5yZW5kZXIoJ2NvbnRhY3QnLCB7XG4gICAgdGl0bGU6ICfjgYrllY/lkIjjgZsnLFxuICAgIHVua25vd25Vc2VyXG4gIH0pO1xufTtcblxuLyoqXG4gKiBQT1NUIC9jb250YWN0XG4gKiBTZW5kIGEgY29udGFjdCBmb3JtIHZpYSBOb2RlbWFpbGVyLlxuICovXG5leHBvcnQgbGV0IHBvc3RDb250YWN0ID0gKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuICBsZXQgZnJvbU5hbWU7XG4gIGxldCBmcm9tRW1haWw7XG4gIGlmICghcmVxLnVzZXIpIHtcbiAgICByZXEuY2hlY2soJ25hbWUnKS5ub3QoKS5pc0VtcHR5KCkud2l0aE1lc3NhZ2UoJ05hbWUgY2Fubm90IGJlIGJsYW5rJyk7XG4gICAgcmVxLmNoZWNrKCdlbWFpbCcpLmlzRW1haWwoKS53aXRoTWVzc2FnZSgnRW1haWwgaXMgbm90IHZhbGlkJyk7XG4gIH1cbiAgcmVxLmNoZWNrKCdtZXNzYWdlJykubm90RW1wdHkoKS53aXRoTWVzc2FnZSgnTWVzc2FnZSBjYW5ub3QgYmUgYmxhbmsnKTtcblxuICBjb25zdCBlcnJvcnMgPSByZXEudmFsaWRhdGlvbkVycm9ycygpO1xuXG4gIGlmIChlcnJvcnMpIHtcbiAgICByZXEuZmxhc2goJ2Vycm9ycycsIGVycm9ycyk7XG4gICAgcmV0dXJuIHJlcy5yZWRpcmVjdCgnL2NvbnRhY3QnKTtcbiAgfVxuXG4gIGlmICghcmVxLnVzZXIpIHtcbiAgICBmcm9tTmFtZSA9IHJlcS5ib2R5Lm5hbWU7XG4gICAgZnJvbUVtYWlsID0gcmVxLmJvZHkuZW1haWw7XG4gIH0gZWxzZSB7XG4gICAgZnJvbU5hbWUgPSByZXEudXNlci5wcm9maWxlLm5hbWUgfHwgJyc7XG4gICAgZnJvbUVtYWlsID0gcmVxLnVzZXIuZW1haWw7XG4gIH1cblxuICBsZXQgdHJhbnNwb3J0ZXIgPSBub2RlbWFpbGVyLmNyZWF0ZVRyYW5zcG9ydCh7XG4gICAgc2VydmljZTogJ1NlbmRHcmlkJyxcbiAgICBhdXRoOiB7XG4gICAgICB1c2VyOiBwcm9jZXNzLmVudi5TRU5ER1JJRF9VU0VSLFxuICAgICAgcGFzczogcHJvY2Vzcy5lbnYuU0VOREdSSURfUEFTU1dPUkRcbiAgICB9XG4gIH0pO1xuICBjb25zdCBtYWlsT3B0aW9ucyA9IHtcbiAgICB0bzogJ3lvdXJAZW1haWwuY29tJyxcbiAgICBmcm9tOiBgJHtmcm9tTmFtZX0gPCR7ZnJvbUVtYWlsfT5gLFxuICAgIHN1YmplY3Q6ICdDb250YWN0IEZvcm0gfCBDcnlwdG8gUGF5JyxcbiAgICB0ZXh0OiByZXEuYm9keS5tZXNzYWdlXG4gIH07XG4gIHJldHVybiB0cmFuc3BvcnRlci5zZW5kTWFpbChtYWlsT3B0aW9ucylcbiAgICAudGhlbigoKSA9PiB7XG4gICAgICByZXEuZmxhc2goJ3N1Y2Nlc3MnLCB7IG1zZzogJ0VtYWlsIGhhcyBiZWVuIHNlbnQgc3VjY2Vzc2Z1bGx5IScgfSk7XG4gICAgICByZXMucmVkaXJlY3QoJy9jb250YWN0Jyk7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgaWYgKGVyci5tZXNzYWdlID09PSAnc2VsZiBzaWduZWQgY2VydGlmaWNhdGUgaW4gY2VydGlmaWNhdGUgY2hhaW4nKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdXQVJOSU5HOiBTZWxmIHNpZ25lZCBjZXJ0aWZpY2F0ZSBpbiBjZXJ0aWZpY2F0ZSBjaGFpbi4nICtcbiAgICAgICAgICAnIFJldHJ5aW5nIHdpdGggdGhlIHNlbGYgc2lnbmVkIGNlcnRpZmljYXRlLiBVc2UgYSB2YWxpZCBjZXJ0aWZpY2F0ZSBpZiBpbiBwcm9kdWN0aW9uLicpO1xuICAgICAgICB0cmFuc3BvcnRlciA9IG5vZGVtYWlsZXIuY3JlYXRlVHJhbnNwb3J0KHtcbiAgICAgICAgICBzZXJ2aWNlOiAnU2VuZEdyaWQnLFxuICAgICAgICAgIGF1dGg6IHtcbiAgICAgICAgICAgIHVzZXI6IHByb2Nlc3MuZW52LlNFTkRHUklEX1VTRVIsXG4gICAgICAgICAgICBwYXNzOiBwcm9jZXNzLmVudi5TRU5ER1JJRF9QQVNTV09SRFxuICAgICAgICAgIH0sXG4gICAgICAgICAgdGxzOiB7XG4gICAgICAgICAgICByZWplY3RVbmF1dGhvcml6ZWQ6IGZhbHNlXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRyYW5zcG9ydGVyLnNlbmRNYWlsKG1haWxPcHRpb25zKTtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKCdFUlJPUjogQ291bGQgbm90IHNlbmQgY29udGFjdCBlbWFpbCBhZnRlciBzZWN1cml0eSBkb3duZ3JhZGUuXFxuJywgZXJyKTtcbiAgICAgIHJlcS5mbGFzaCgnZXJyb3JzJywgeyBtc2c6ICdFcnJvciBzZW5kaW5nIHRoZSBtZXNzYWdlLiBQbGVhc2UgdHJ5IGFnYWluIHNob3J0bHkuJyB9KTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KVxuICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgcmVxLmZsYXNoKCdzdWNjZXNzJywgeyBtc2c6ICdFbWFpbCBoYXMgYmVlbiBzZW50IHN1Y2Nlc3NmdWxseSEnIH0pO1xuICAgICAgICByZXR1cm4gcmVzLnJlZGlyZWN0KCcvY29udGFjdCcpO1xuICAgICAgfVxuICAgIH0pXG4gICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdFUlJPUjogQ291bGQgbm90IHNlbmQgY29udGFjdCBlbWFpbC5cXG4nLCBlcnIpO1xuICAgICAgcmVxLmZsYXNoKCdlcnJvcnMnLCB7IG1zZzogJ0Vycm9yIHNlbmRpbmcgdGhlIG1lc3NhZ2UuIFBsZWFzZSB0cnkgYWdhaW4gc2hvcnRseS4nIH0pO1xuICAgICAgcmV0dXJuIHJlcy5yZWRpcmVjdCgnL2NvbnRhY3QnKTtcbiAgICB9KTtcbn07XG4iLCJpbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBVc2VyLCBVc2VyTW9kZWwsIElVc2VyRG9jdW1lbnQgfSBmcm9tICcuLi9tb2RlbHMvVXNlcic7XG5cbmludGVyZmFjZSBJbnVtIHtcbiAgcHJpY2U6IG51bWJlcltdO1xuICBjb3VudDogbnVtYmVyW107XG4gIGFtb3VudDogbnVtYmVyW107XG4gIGFkZHJlc3M6IHN0cmluZ1tdO1xufVxuXG4vKipcbiAqIEdFVCAvXG4gKiBIb21lIHBhZ2UuXG4gKi9cbmV4cG9ydCBsZXQgaG9tZSA9IChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcbiAgcmVzLnJlbmRlcignaG9tZScsIHtcbiAgICB0aXRsZTogJ+ODm+ODvOODoCdcbiAgfSk7XG59O1xuXG5leHBvcnQgbGV0IGdldFBheUJpdGNvaW4gPSAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG4gIGlmICghcmVxLnVzZXIpIHtcbiAgICByZXR1cm4gcmVzLnJlZGlyZWN0KCcvJyk7XG4gIH1cbiAgY29uc3QgdGJ0YzogSW51bSA9IHtcbiAgICBwcmljZTogWzAuMDA1LCAwLjAwMywgMC4wMDFdLFxuICAgIGNvdW50OiBbMCwgMCwgMF0sXG4gICAgYW1vdW50OiBbMCwgMCwgMF0sXG4gICAgYWRkcmVzczogWydsYXJnZScsICdtaWRkbGUnLCAnc21hbGwnXVxuICB9O1xuICBjb25zdCB7IGlkIH0gPSByZXEudXNlcjtcbiAgVXNlci5maW5kKHsgX2lkOiBpZCB9LCAoZmluZEVyciwgdXNlcjogSVVzZXJEb2N1bWVudCkgPT4ge1xuICAgIGlmIChmaW5kRXJyKSByZXMuc3RhdHVzKDUwMCk7XG4gICAgZWxzZSB7XG4gICAgICByZXMuc3RhdHVzKDIwMCk7XG4gICAgICB0YnRjLmNvdW50WzBdID0gdXNlclswXS5sYXJnZUNvdW50O1xuICAgICAgdGJ0Yy5jb3VudFsxXSA9IHVzZXJbMF0ubWlkZGxlQ291bnQ7XG4gICAgICB0YnRjLmNvdW50WzJdID0gdXNlclswXS5zbWFsbENvdW50O1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspXG4gICAgICAgIHRidGMuYW1vdW50W2ldID0gdGJ0Yy5wcmljZVtpXSAqIHRidGMuY291bnRbaV07XG4gICAgICByZXMucmVuZGVyKCdwYXkvYml0Y29pbicsIHtcbiAgICAgICAgdGl0bGU6ICdCaXRjb2luIFBheScsXG4gICAgICAgIHRidGNcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQgbGV0IHB1dFBpenphQ291bnQgPSAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG4gIGNvbnN0IHsgaWQgfSA9IHJlcS51c2VyOyAvLyBtb25nb2Ri44Gn5LiA5oSP44Gr5LiO44GI44KJ44KM44KL44Om44O844K244O844GuaWTjgpLlj5blvpdcbiAgY29uc3QgY291bnQ6IG51bWJlciA9IHJlcS5ib2R5LmRhdGEuY291bnQ7IC8vIOS9leWAi+OBmuOBpOWil+OChOOBl+OBn+OCiua4m+OCieOBl+OBn+OCiuOBmeOCi+OBi+OBruWAi+aVsFxuICBjb25zdCBzaXplOiBudW1iZXIgPSByZXEuYm9keS5kYXRhLnNpemU7XG4gIGlmIChzaXplID09IDApIHtcbiAgICBVc2VyLmZpbmRCeUlkKGlkLCAoZXJyLCB1c2VyOiBJVXNlckRvY3VtZW50KSA9PiB7XG4gICAgICBpZiAoZXJyKSByZXMuc3RhdHVzKDUwMCkuc2VuZCgpO1xuICAgICAgZWxzZSB7XG4gICAgICAgIGlmICgodXNlci5sYXJnZUNvdW50ID49IDAgJiYgY291bnQgPT0gMSkgfHwgKHVzZXIubGFyZ2VDb3VudCA+IDAgJiYgY291bnQgPT0gLTEpKSB7IC8vIHVzZXLjga9vYmplY3Tjgafov5TjgaPjgabjgY3jgabjgotcbiAgICAgICAgICBVc2VyLmZpbmRCeUlkQW5kVXBkYXRlKGlkLCB7ICRpbmM6IHtsYXJnZUNvdW50OiBjb3VudH0gfSwgZXJyID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHJlcy5zdGF0dXMoNTAwKS5zZW5kKCk7XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgVXNlci5maW5kKHsgX2lkOiBpZCB9LCAoZmluZEVyciwgdXNlcjogSVVzZXJEb2N1bWVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChmaW5kRXJyKSByZXMuc3RhdHVzKDUwMCkuc2VuZCgpO1xuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzczogYGh0dHBzOi8vY2hhcnQuYXBpcy5nb29nbGUuY29tL2NoYXJ0P2NodD1xciZjaHM9MzAweDMwMCZjaGw9Yml0Y29pbjo/YW1vdW50PSR7dXNlclswXS5sYXJnZUNvdW50fWAsXG4gICAgICAgICAgICAgICAgICAgIGNvdW50OiB1c2VyWzBdLmxhcmdlQ291bnQsIC8vIHVzZXLjga/phY3liJfjga7kuK3jga5vYmplY3Tjgafov5TjgaPjgabjgY3jgabjgotcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50OiAwLjAwNVxuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfSBlbHNlIGlmIChzaXplID09IDEpIHtcbiAgICBVc2VyLmZpbmRCeUlkKGlkLCAoZXJyLCB1c2VyOiBJVXNlckRvY3VtZW50KSA9PiB7XG4gICAgICBpZiAoZXJyKSByZXMuc3RhdHVzKDUwMCkuc2VuZCgpO1xuICAgICAgZWxzZSB7XG4gICAgICAgIGlmICgodXNlci5taWRkbGVDb3VudCA+PSAwICYmIGNvdW50ID09IDEpIHx8ICh1c2VyLm1pZGRsZUNvdW50ID4gMCAmJiBjb3VudCA9PSAtMSkpIHsgLy8gdXNlcuOBr29iamVjdOOBp+i/lOOBo+OBpuOBjeOBpuOCi1xuICAgICAgICAgIFVzZXIuZmluZEJ5SWRBbmRVcGRhdGUoaWQsIHsgJGluYzoge21pZGRsZUNvdW50OiBjb3VudH0gfSwgZXJyID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHJlcy5zdGF0dXMoNTAwKS5zZW5kKCk7XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgVXNlci5maW5kKHsgX2lkOiBpZCB9LCAoZmluZEVyciwgdXNlcjogSVVzZXJEb2N1bWVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChmaW5kRXJyKSByZXMuc3RhdHVzKDUwMCkuc2VuZCgpO1xuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzczogYGh0dHBzOi8vY2hhcnQuYXBpcy5nb29nbGUuY29tL2NoYXJ0P2NodD1xciZjaHM9MzAweDMwMCZjaGw9Yml0Y29pbjo/YW1vdW50PSR7dXNlclswXS5taWRkbGVDb3VudH1gLFxuICAgICAgICAgICAgICAgICAgICBjb3VudDogdXNlclswXS5taWRkbGVDb3VudCxcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50OiAwLjAwM1xuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGRhdGEpOyAvLyB1c2Vy44Gv6YWN5YiX44Gu5Lit44Grb2JqZWN044GM5YWl44Gj44Gm44KLXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9IGVsc2UgaWYgKHNpemUgPT0gMikge1xuICAgIFVzZXIuZmluZEJ5SWQoaWQsIChlcnIsIHVzZXI6IElVc2VyRG9jdW1lbnQpID0+IHtcbiAgICAgIGlmIChlcnIpIHJlcy5zdGF0dXMoNTAwKS5zZW5kKCk7XG4gICAgICBlbHNlIHtcbiAgICAgICAgaWYgKCh1c2VyLnNtYWxsQ291bnQgPj0gMCAmJiBjb3VudCA9PSAxKSB8fCAodXNlci5zbWFsbENvdW50ID4gMCAmJiBjb3VudCA9PSAtMSkpIHsgLy8gdXNlcuOBr29iamVjdOOBp+i/lOOBo+OBpuOBjeOBpuOCi1xuICAgICAgICAgIFVzZXIuZmluZEJ5SWRBbmRVcGRhdGUoaWQsIHsgJGluYzoge3NtYWxsQ291bnQ6IGNvdW50fSB9LCBlcnIgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikgcmVzLnN0YXR1cyg1MDApLnNlbmQoKTtcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICBVc2VyLmZpbmQoeyBfaWQ6IGlkIH0sIChmaW5kRXJyLCB1c2VyOiBJVXNlckRvY3VtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGZpbmRFcnIpIHJlcy5zdGF0dXMoNTAwKS5zZW5kKCk7XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzOiBgaHR0cHM6Ly9jaGFydC5hcGlzLmdvb2dsZS5jb20vY2hhcnQ/Y2h0PXFyJmNocz0zMDB4MzAwJmNobD1iaXRjb2luOj9hbW91bnQ9JHt1c2VyWzBdLnNtYWxsQ291bnR9YCxcbiAgICAgICAgICAgICAgICAgICAgY291bnQ6IHVzZXJbMF0uc21hbGxDb3VudCxcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50OiAwLjAwMVxuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGRhdGEpOyAvLyB1c2Vy44Gv6YWN5YiX44Gu5Lit44Grb2JqZWN044GM5YWl44Gj44Gm44KLXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG5leHBvcnQgbGV0IGdldFBheU90aGVycyA9IChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcbiAgcmVzLnJlbmRlcigncGF5L290aGVycycsIHtcbiAgICB0aXRsZTogJ090aGVycyBQYXknXG4gIH0pO1xufTtcbiIsImltcG9ydCBjcnlwdG8gZnJvbSAnY3J5cHRvJztcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlLCBOZXh0RnVuY3Rpb24gfSBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IFdyaXRlRXJyb3IgfSBmcm9tICdtb25nb2RiJztcbmltcG9ydCBub2RlbWFpbGVyIGZyb20gJ25vZGVtYWlsZXInO1xuaW1wb3J0IHBhc3Nwb3J0IGZyb20gJ3Bhc3Nwb3J0JztcbmltcG9ydCB7IElWZXJpZnlPcHRpb25zIH0gZnJvbSAncGFzc3BvcnQtbG9jYWwnO1xuaW1wb3J0IHsgcHJvbWlzaWZ5IH0gZnJvbSAndXRpbCc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIFVzZXIsIFVzZXJNb2RlbCwgQXV0aFRva2VuIH0gZnJvbSAnLi4vbW9kZWxzL1VzZXInO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBDb3VudCB9IGZyb20gJy4uL21vZGVscy9Db3VudCc7XG5cbmNvbnN0IHJhbmRvbUJ5dGVzQXN5bmMgPSBwcm9taXNpZnkoY3J5cHRvLnJhbmRvbUJ5dGVzKTtcblxuLyoqXG4gKiBHRVQgL2xvZ2luXG4gKiBMb2dpbiBwYWdlLlxuICovXG5leHBvcnQgbGV0IGdldExvZ2luID0gKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuICBpZiAocmVxLnVzZXIpIHtcbiAgICByZXR1cm4gcmVzLnJlZGlyZWN0KCcvJyk7XG4gIH1cbiAgcmVzLnJlbmRlcignYWNjb3VudC9sb2dpbicsIHtcbiAgICB0aXRsZTogJ+ODreOCsOOCpOODsydcbiAgfSk7XG59O1xuXG4vKipcbiAqIFBPU1QgL2xvZ2luXG4gKiBTaWduIGluIHVzaW5nIGVtYWlsIGFuZCBwYXNzd29yZC5cbiAqL1xuZXhwb3J0IGxldCBwb3N0TG9naW4gPSAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pID0+IHtcbiAgcmVxLmFzc2VydCgnZW1haWwnLCAn54Sh5Yq544Gq44Oh44O844Or44Ki44OJ44Os44K544Gn44GZLicpLmlzRW1haWwoKTtcbiAgcmVxLmFzc2VydCgncGFzc3dvcmQnLCAn44OR44K544Ov44O844OJ44KS56m655m944Gr44GZ44KL44GT44Go44Gv44Gn44GN44G+44Gb44KTLicpLm5vdEVtcHR5KCk7XG4gIHJlcS5zYW5pdGl6ZSgnZW1haWwnKS5ub3JtYWxpemVFbWFpbCh7IGdtYWlsX3JlbW92ZV9kb3RzOiBmYWxzZSB9KTtcblxuICBjb25zdCBlcnJvcnMgPSByZXEudmFsaWRhdGlvbkVycm9ycygpO1xuXG4gIGlmIChlcnJvcnMpIHtcbiAgICByZXEuZmxhc2goJ2Vycm9ycycsIGVycm9ycyk7XG4gICAgcmV0dXJuIHJlcy5yZWRpcmVjdCgnL2xvZ2luJyk7XG4gIH1cblxuICBwYXNzcG9ydC5hdXRoZW50aWNhdGUoJ2xvY2FsJywgKGVycjogRXJyb3IsIHVzZXI6IFVzZXJNb2RlbCwgaW5mbzogSVZlcmlmeU9wdGlvbnMpID0+IHtcbiAgICBpZiAoZXJyKSB7IHJldHVybiBuZXh0KGVycik7IH1cbiAgICBpZiAoIXVzZXIpIHtcbiAgICAgIHJlcS5mbGFzaCgnZXJyb3JzJywgaW5mbyk7XG4gICAgICByZXR1cm4gcmVzLnJlZGlyZWN0KCcvbG9naW4nKTtcbiAgICB9XG4gICAgcmVxLmxvZ0luKHVzZXIsIChlcnIpID0+IHtcbiAgICAgIGlmIChlcnIpIHsgcmV0dXJuIG5leHQoZXJyKTsgfVxuICAgICAgcmVxLmZsYXNoKCdzdWNjZXNzJywgeyBtc2c6ICfjg63jgrDjgqTjg7PjgavmiJDlip/jgZfjgb7jgZfjgZ8uJyB9KTtcbiAgICAgIHJlcy5yZWRpcmVjdChyZXEuc2Vzc2lvbi5yZXR1cm5UbyB8fCAnLycpO1xuICAgIH0pO1xuICB9KShyZXEsIHJlcywgbmV4dCk7XG59O1xuXG4vKipcbiAqIEdFVCAvbG9nb3V0XG4gKiBMb2cgb3V0LlxuICovXG5leHBvcnQgbGV0IGxvZ291dCA9IChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcbiAgcmVxLmxvZ291dCgpO1xuICByZXEuc2Vzc2lvbi5kZXN0cm95KChlcnIpID0+IHtcbiAgICBpZiAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZygnRXJyb3IgOiBGYWlsZWQgdG8gZGVzdHJveSB0aGUgc2Vzc2lvbiBkdXJpbmcgbG9nb3V0LicsIGVycik7XG4gICAgfVxuICAgIHJlcS51c2VyID0gdW5kZWZpbmVkO1xuICAgIHJlcy5yZWRpcmVjdCgnLycpO1xuICB9KTtcbn07XG5cbi8qKlxuICogR0VUIC9zaWdudXBcbiAqIFNpZ251cCBwYWdlLlxuICovXG5leHBvcnQgbGV0IGdldFNpZ251cCA9IChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcbiAgaWYgKHJlcS51c2VyKSB7XG4gICAgcmV0dXJuIHJlcy5yZWRpcmVjdCgnLycpO1xuICB9XG4gIHJlcy5yZW5kZXIoJ2FjY291bnQvc2lnbnVwJywge1xuICAgIHRpdGxlOiAn44Ki44Kr44Km44Oz44OI5L2c5oiQJ1xuICB9KTtcbn07XG5cbi8qKlxuICogUE9TVCAvc2lnbnVwXG4gKiBDcmVhdGUgYSBuZXcgbG9jYWwgYWNjb3VudC5cbiAqL1xuZXhwb3J0IGxldCBwb3N0U2lnbnVwID0gKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKSA9PiB7XG4gIHJlcS5hc3NlcnQoJ2VtYWlsJywgJ+eEoeWKueOBquODoeODvOODq+OCouODieODrOOCueOBp+OBmS4nKS5pc0VtYWlsKCk7XG4gIHJlcS5hc3NlcnQoJ3Bhc3N3b3JkJywgJ+ODkeOCueODr+ODvOODieOBrzTmloflrZfku6XkuIrjgavjgZfjgabjgY/jgaDjgZXjgYQuJykubGVuKHsgbWluOiA0IH0pO1xuICByZXEuYXNzZXJ0KCdjb25maXJtUGFzc3dvcmQnLCAn44OR44K544Ov44O844OJ44GM5LiA6Ie044GX44G+44Gb44KTLicpLmVxdWFscyhyZXEuYm9keS5wYXNzd29yZCk7XG4gIHJlcS5zYW5pdGl6ZSgnZW1haWwnKS5ub3JtYWxpemVFbWFpbCh7IGdtYWlsX3JlbW92ZV9kb3RzOiBmYWxzZSB9KTtcblxuICBjb25zdCBlcnJvcnMgPSByZXEudmFsaWRhdGlvbkVycm9ycygpO1xuXG4gIGlmIChlcnJvcnMpIHtcbiAgICByZXEuZmxhc2goJ2Vycm9ycycsIGVycm9ycyk7XG4gICAgcmV0dXJuIHJlcy5yZWRpcmVjdCgnL3NpZ251cCcpO1xuICB9XG5cbiAgLy8g6aGn5a6i44Gu44Kr44Km44Oz44K/44O844KS5L+d5a2Y44GX44Gm44KLXG4gIENvdW50LmZpbmRPbmUoe25hbWU6ICdzb2xhJ30sIChlcnIsIGNvdW50KSA9PiB7XG4gICAgaWYgKGVycikgeyByZXR1cm4gbmV4dChlcnIpOyB9XG4gICAgaWYgKCFjb3VudCkge1xuICAgICAgY29uc3QgY291bnQgPSBuZXcgQ291bnQoe1xuICAgICAgICBuYW1lOiAnc29sYScsXG4gICAgICAgIGN1c3RvbWVyQ291bnQ6IDBcbiAgICAgIH0pO1xuICAgICAgY291bnQuc2F2ZSgoZXJyKSA9PiB7XG4gICAgICAgIGlmIChlcnIpIHsgcmV0dXJuIG5leHQoZXJyKTsgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIGNvbnNvbGUubG9nKCdDb3VudGVyIGV4aXN0LicpO1xuICB9KTtcblxuICAvLyDpoaflrqLjga5qc29u44KS5paw6KaP5L2c5oiQXG4gIGNvbnN0IHVzZXIgPSBuZXcgVXNlcih7XG4gICAgZW1haWw6IHJlcS5ib2R5LmVtYWlsLFxuICAgIHBhc3N3b3JkOiByZXEuYm9keS5wYXNzd29yZCxcbiAgICBsYXJnZUNvdW50OiAwLFxuICAgIG1pZGRsZUNvdW50OiAwLFxuICAgIHNtYWxsQ291bnQ6IDAsXG4gICAgY3VzdG9tZXJOdW1iZXI6IDBcbiAgfSk7XG5cbiAgVXNlci5maW5kT25lKHsgZW1haWw6IHJlcS5ib2R5LmVtYWlsIH0sIChlcnIsIGV4aXN0aW5nVXNlcikgPT4ge1xuICAgIGlmIChlcnIpIHsgcmV0dXJuIG5leHQoZXJyKTsgfVxuICAgIGlmIChleGlzdGluZ1VzZXIpIHtcbiAgICAgIHJlcS5mbGFzaCgnZXJyb3JzJywgeyBtc2c6ICfjgZPjga7jg6Hjg7zjg6vjgqLjg4njg6zjgrnjga7jgqLjgqvjgqbjg7Pjg4jjga/jgZnjgafjgavlrZjlnKjjgZfjgabjgYTjgb7jgZkuJyB9KTtcbiAgICAgIHJldHVybiByZXMucmVkaXJlY3QoJy9zaWdudXAnKTtcbiAgICB9XG4gICAgLy8g6aGn5a6i44Gu44Kr44Km44Oz44OI44KSMeOBpOWil+OChOOBl+OBpuS/neWtmOOBl+OBpuOCi1xuICAgIENvdW50LmZpbmRPbmVBbmRVcGRhdGUoe25hbWU6ICdzb2xhJ30sIHskaW5jOiB7J2N1c3RvbWVyQ291bnQnOiAxfX0sIHtuZXc6IHRydWV9LCAoZXJyLCBjb3VudCkgPT4ge1xuICAgICAgaWYgKGVycikgeyByZXR1cm4gbmV4dChlcnIpOyB9XG4gICAgICBjb25zb2xlLmxvZyhjb3VudC5jdXN0b21lckNvdW50KTtcbiAgICAgIHVzZXIuY3VzdG9tZXJOdW1iZXIgPSBOdW1iZXIoY291bnQuY3VzdG9tZXJDb3VudCk7XG4gICAgICB1c2VyLnNhdmUoKGVycikgPT4ge1xuICAgICAgICBpZiAoZXJyKSB7IHJldHVybiBuZXh0KGVycik7IH1cbiAgICAgICAgcmVxLmxvZ0luKHVzZXIsIChlcnIpID0+IHtcbiAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV4dChlcnIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXMucmVkaXJlY3QoJy8nKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIEdFVCAvZm9yZ290XG4gKiBGb3Jnb3QgUGFzc3dvcmQgcGFnZS5cbiAqL1xuZXhwb3J0IGxldCBnZXRGb3Jnb3QgPSAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG4gIGlmIChyZXEuaXNBdXRoZW50aWNhdGVkKCkpIHtcbiAgICByZXR1cm4gcmVzLnJlZGlyZWN0KCcvJyk7XG4gIH1cbiAgcmVzLnJlbmRlcignYWNjb3VudC9mb3Jnb3QnLCB7XG4gICAgdGl0bGU6ICfjg5Hjgrnjg6/jg7zjg4njgpLjgYrlv5jjgozjga7mlrnjgbgnXG4gIH0pO1xufTtcblxuLyoqXG4gKiBQT1NUIC9mb3Jnb3RcbiAqIENyZWF0ZSBhIHJhbmRvbSB0b2tlbiwgdGhlbiB0aGUgc2VuZCB1c2VyIGFuIGVtYWlsIHdpdGggYSByZXNldCBsaW5rLlxuICovXG5leHBvcnQgbGV0IHBvc3RGb3Jnb3QgPSAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pID0+IHtcbiAgcmVxLmFzc2VydCgnZW1haWwnLCAn5pyJ5Yq544Gq44Oh44O844Or44Ki44OJ44Os44K544KS5YWl5Yqb44GX44Gm44GP44Gg44GV44GELicpLmlzRW1haWwoKTtcbiAgcmVxLnNhbml0aXplKCdlbWFpbCcpLm5vcm1hbGl6ZUVtYWlsKHsgZ21haWxfcmVtb3ZlX2RvdHM6IGZhbHNlIH0pO1xuXG4gIGNvbnN0IGVycm9ycyA9IHJlcS52YWxpZGF0aW9uRXJyb3JzKCk7XG5cbiAgaWYgKGVycm9ycykge1xuICAgIHJlcS5mbGFzaCgnZXJyb3JzJywgZXJyb3JzKTtcbiAgICByZXR1cm4gcmVzLnJlZGlyZWN0KCcvZm9yZ290Jyk7XG4gIH1cblxuICBjb25zdCBjcmVhdGVSYW5kb21Ub2tlbiA9IHJhbmRvbUJ5dGVzQXN5bmMoMTYpXG4gICAgLnRoZW4oYnVmID0+IGJ1Zi50b1N0cmluZygnaGV4JykpO1xuXG4gIGNvbnN0IHNldFJhbmRvbVRva2VuID0gKHRva2VuOiBzdHJpbmcpID0+XG4gICAgVXNlclxuICAgICAgLmZpbmRPbmUoeyBlbWFpbDogcmVxLmJvZHkuZW1haWwgfSlcbiAgICAgIC50aGVuKCh1c2VyOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKCF1c2VyKSB7XG4gICAgICAgICAgcmVxLmZsYXNoKCdlcnJvcnMnLCB7IG1zZzogJ+OBk+OBruODoeODvOODq+OCouODieODrOOCueOBruOCouOCq+OCpuODs+ODiOOBr+WtmOWcqOOBl+OBvuOBm+OCky4nIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHVzZXIucGFzc3dvcmRSZXNldFRva2VuID0gdG9rZW47XG4gICAgICAgICAgdXNlci5wYXNzd29yZFJlc2V0RXhwaXJlcyA9IERhdGUubm93KCkgKyAzNjAwMDAwOyAvLyAxIGhvdXJcbiAgICAgICAgICB1c2VyID0gdXNlci5zYXZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVzZXI7XG4gICAgICB9KTtcblxuICBjb25zdCBzZW5kRm9yZ290UGFzc3dvcmRFbWFpbCA9ICh1c2VyOiBVc2VyTW9kZWwpID0+IHtcbiAgICBpZiAoIXVzZXIpIHsgcmV0dXJuOyB9XG4gICAgY29uc3QgdG9rZW4gPSB1c2VyLnBhc3N3b3JkUmVzZXRUb2tlbjtcbiAgICBsZXQgdHJhbnNwb3J0ZXIgPSBub2RlbWFpbGVyLmNyZWF0ZVRyYW5zcG9ydCh7XG4gICAgICBzZXJ2aWNlOiAnU2VuZEdyaWQnLFxuICAgICAgYXV0aDoge1xuICAgICAgICB1c2VyOiBwcm9jZXNzLmVudi5TRU5ER1JJRF9VU0VSLFxuICAgICAgICBwYXNzOiBwcm9jZXNzLmVudi5TRU5ER1JJRF9QQVNTV09SRFxuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IG1haWxPcHRpb25zID0ge1xuICAgICAgdG86IHVzZXIuZW1haWwsXG4gICAgICBmcm9tOiAnY3J5cHRvQHBheS5jb20nLFxuICAgICAgc3ViamVjdDogJ0NyeXB0byBQYXnjga7jg5Hjgrnjg6/jg7zjg4njg6rjgrvjg4Pjg4gnLFxuICAgICAgdGV4dDogYFlvdSBhcmUgcmVjZWl2aW5nIHRoaXMgZW1haWwgYmVjYXVzZSB5b3UgKG9yIHNvbWVvbmUgZWxzZSkgaGF2ZSByZXF1ZXN0ZWQgdGhlIHJlc2V0IG9mIHRoZSBwYXNzd29yZCBmb3IgeW91ciBhY2NvdW50LlxcblxcblxuICAgICAgICBQbGVhc2UgY2xpY2sgb24gdGhlIGZvbGxvd2luZyBsaW5rLCBvciBwYXN0ZSB0aGlzIGludG8geW91ciBicm93c2VyIHRvIGNvbXBsZXRlIHRoZSBwcm9jZXNzOlxcblxcblxuICAgICAgICBodHRwOi8vJHtyZXEuaGVhZGVycy5ob3N0fS9yZXNldC8ke3Rva2VufVxcblxcblxuICAgICAgICBJZiB5b3UgZGlkIG5vdCByZXF1ZXN0IHRoaXMsIHBsZWFzZSBpZ25vcmUgdGhpcyBlbWFpbCBhbmQgeW91ciBwYXNzd29yZCB3aWxsIHJlbWFpbiB1bmNoYW5nZWQuXFxuYFxuICAgIH07XG4gICAgcmV0dXJuIHRyYW5zcG9ydGVyLnNlbmRNYWlsKG1haWxPcHRpb25zKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICByZXEuZmxhc2goJ2luZm8nLCB7IG1zZzogYEFuIGUtbWFpbCBoYXMgYmVlbiBzZW50IHRvICR7dXNlci5lbWFpbH0gd2l0aCBmdXJ0aGVyIGluc3RydWN0aW9ucy5gIH0pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGlmIChlcnIubWVzc2FnZSA9PT0gJ3NlbGYgc2lnbmVkIGNlcnRpZmljYXRlIGluIGNlcnRpZmljYXRlIGNoYWluJykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdXQVJOSU5HOiBTZWxmIHNpZ25lZCBjZXJ0aWZpY2F0ZSBpbiBjZXJ0aWZpY2F0ZSBjaGFpbi4nICtcbiAgICAgICAgICAgICcgUmV0cnlpbmcgd2l0aCB0aGUgc2VsZiBzaWduZWQgY2VydGlmaWNhdGUuIFVzZSBhIHZhbGlkIGNlcnRpZmljYXRlIGlmIGluIHByb2R1Y3Rpb24uJyk7XG4gICAgICAgICAgdHJhbnNwb3J0ZXIgPSBub2RlbWFpbGVyLmNyZWF0ZVRyYW5zcG9ydCh7XG4gICAgICAgICAgICBzZXJ2aWNlOiAnU2VuZEdyaWQnLFxuICAgICAgICAgICAgYXV0aDoge1xuICAgICAgICAgICAgICB1c2VyOiBwcm9jZXNzLmVudi5TRU5ER1JJRF9VU0VSLFxuICAgICAgICAgICAgICBwYXNzOiBwcm9jZXNzLmVudi5TRU5ER1JJRF9QQVNTV09SRFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRsczoge1xuICAgICAgICAgICAgICByZWplY3RVbmF1dGhvcml6ZWQ6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIHRyYW5zcG9ydGVyLnNlbmRNYWlsKG1haWxPcHRpb25zKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICByZXEuZmxhc2goJ2luZm8nLCB7IG1zZzogYEFuIGUtbWFpbCBoYXMgYmVlbiBzZW50IHRvICR7dXNlci5lbWFpbH0gd2l0aCBmdXJ0aGVyIGluc3RydWN0aW9ucy5gIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SOiBDb3VsZCBub3Qgc2VuZCBmb3Jnb3QgcGFzc3dvcmQgZW1haWwgYWZ0ZXIgc2VjdXJpdHkgZG93bmdyYWRlLlxcbicsIGVycik7XG4gICAgICAgIHJlcS5mbGFzaCgnZXJyb3JzJywgeyBtc2c6ICdFcnJvciBzZW5kaW5nIHRoZSBwYXNzd29yZCByZXNldCBtZXNzYWdlLiBQbGVhc2UgdHJ5IGFnYWluIHNob3J0bHkuJyB9KTtcbiAgICAgICAgcmV0dXJuIGVycjtcbiAgICAgIH0pO1xuICB9O1xuXG4gIGNyZWF0ZVJhbmRvbVRva2VuXG4gICAgLnRoZW4oc2V0UmFuZG9tVG9rZW4pXG4gICAgLnRoZW4oc2VuZEZvcmdvdFBhc3N3b3JkRW1haWwpXG4gICAgLnRoZW4oKCkgPT4gcmVzLnJlZGlyZWN0KCcvZm9yZ290JykpXG4gICAgLmNhdGNoKG5leHQpO1xufTtcblxuLyoqXG4gKiBHRVQgL3Jlc2V0Lzp0b2tlblxuICogUmVzZXQgUGFzc3dvcmQgcGFnZS5cbiAqL1xuZXhwb3J0IGxldCBnZXRSZXNldCA9IChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikgPT4ge1xuICBpZiAocmVxLmlzQXV0aGVudGljYXRlZCgpKSB7XG4gICAgcmV0dXJuIHJlcy5yZWRpcmVjdCgnLycpO1xuICB9XG4gIFVzZXJcbiAgICAuZmluZE9uZSh7IHBhc3N3b3JkUmVzZXRUb2tlbjogcmVxLnBhcmFtcy50b2tlbiB9KVxuICAgIC53aGVyZSgncGFzc3dvcmRSZXNldEV4cGlyZXMnKS5ndChEYXRlLm5vdygpKVxuICAgIC5leGVjKChlcnIsIHVzZXIpID0+IHtcbiAgICAgIGlmIChlcnIpIHsgcmV0dXJuIG5leHQoZXJyKTsgfVxuICAgICAgaWYgKCF1c2VyKSB7XG4gICAgICAgIHJlcS5mbGFzaCgnZXJyb3JzJywgeyBtc2c6ICfjg5Hjgrnjg6/jg7zjg4njg6rjgrvjg4Pjg4jjg4jjg7zjgq/jg7PjgYznhKHlirnjgYvmnJ/pmZDliIfjgozjgafjgZkuJyB9KTtcbiAgICAgICAgcmV0dXJuIHJlcy5yZWRpcmVjdCgnL2ZvcmdvdCcpO1xuICAgICAgfVxuICAgICAgcmVzLnJlbmRlcignYWNjb3VudC9yZXNldCcsIHtcbiAgICAgICAgdGl0bGU6ICfjg5Hjgrnjg6/jg7zjg4njg6rjgrvjg4Pjg4gnXG4gICAgICB9KTtcbiAgICB9KTtcbn07XG5cbi8qKlxuICogUE9TVCAvcmVzZXQvOnRva2VuXG4gKiBQcm9jZXNzIHRoZSByZXNldCBwYXNzd29yZCByZXF1ZXN0LlxuICovXG5leHBvcnQgbGV0IHBvc3RSZXNldCA9IChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikgPT4ge1xuICByZXEuYXNzZXJ0KCdwYXNzd29yZCcsICfjg5Hjgrnjg6/jg7zjg4njga805paH5a2X5Lul5LiK44Gr44GX44Gm44GP44Gg44GV44GELicpLmxlbih7IG1pbjogNCB9KTtcbiAgcmVxLmFzc2VydCgnY29uZmlybScsICfjg5Hjgrnjg6/jg7zjg4njgYzkuIDoh7TjgZfjgb7jgZvjgpMuJykuZXF1YWxzKHJlcS5ib2R5LnBhc3N3b3JkKTtcblxuICBjb25zdCBlcnJvcnMgPSByZXEudmFsaWRhdGlvbkVycm9ycygpO1xuXG4gIGlmIChlcnJvcnMpIHtcbiAgICByZXEuZmxhc2goJ2Vycm9ycycsIGVycm9ycyk7XG4gICAgcmV0dXJuIHJlcy5yZWRpcmVjdCgnYmFjaycpO1xuICB9XG5cbiAgY29uc3QgcmVzZXRQYXNzd29yZCA9ICgpID0+XG4gICAgVXNlclxuICAgICAgLmZpbmRPbmUoeyBwYXNzd29yZFJlc2V0VG9rZW46IHJlcS5wYXJhbXMudG9rZW4gfSlcbiAgICAgIC53aGVyZSgncGFzc3dvcmRSZXNldEV4cGlyZXMnKS5ndChEYXRlLm5vdygpKVxuICAgICAgLnRoZW4oKHVzZXIpID0+IHtcbiAgICAgICAgaWYgKCF1c2VyKSB7XG4gICAgICAgICAgcmVxLmZsYXNoKCdlcnJvcnMnLCB7IG1zZzogJ+ODkeOCueODr+ODvOODieODquOCu+ODg+ODiOODiOODvOOCr+ODs+OBjOeEoeWKueOBi+acn+mZkOWIh+OCjOOBp+OBmS4nIH0pO1xuICAgICAgICAgIHJldHVybiByZXMucmVkaXJlY3QoJ2JhY2snKTtcbiAgICAgICAgfVxuICAgICAgICB1c2VyLnBhc3N3b3JkID0gcmVxLmJvZHkucGFzc3dvcmQ7XG4gICAgICAgIHVzZXIucGFzc3dvcmRSZXNldFRva2VuID0gdW5kZWZpbmVkO1xuICAgICAgICB1c2VyLnBhc3N3b3JkUmVzZXRFeHBpcmVzID0gdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm4gdXNlci5zYXZlKCkudGhlbigoKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgcmVxLmxvZ0luKHVzZXIsIChlcnIpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHsgcmV0dXJuIHJlamVjdChlcnIpOyB9XG4gICAgICAgICAgICByZXNvbHZlKHVzZXIpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KSk7XG4gICAgICB9KTtcblxuICBjb25zdCBzZW5kUmVzZXRQYXNzd29yZEVtYWlsID0gKHVzZXI6IFVzZXJNb2RlbCkgPT4ge1xuICAgIGlmICghdXNlcikgeyByZXR1cm47IH1cbiAgICBsZXQgdHJhbnNwb3J0ZXIgPSBub2RlbWFpbGVyLmNyZWF0ZVRyYW5zcG9ydCh7XG4gICAgICBzZXJ2aWNlOiAnU2VuZEdyaWQnLFxuICAgICAgYXV0aDoge1xuICAgICAgICB1c2VyOiBwcm9jZXNzLmVudi5TRU5ER1JJRF9VU0VSLFxuICAgICAgICBwYXNzOiBwcm9jZXNzLmVudi5TRU5ER1JJRF9QQVNTV09SRFxuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IG1haWxPcHRpb25zID0ge1xuICAgICAgdG86IHVzZXIuZW1haWwsXG4gICAgICBmcm9tOiAndGVzdEBleGFtcGxlLmNvbScsXG4gICAgICBzdWJqZWN0OiAnQ3J5cHRvIFBheeOBruODkeOCueODr+ODvOODieOCkuWkieabtOOBl+OBvuOBl+OBny4nLFxuICAgICAgdGV4dDogYEhlbGxvLFxcblxcblRoaXMgaXMgYSBjb25maXJtYXRpb24gdGhhdCB0aGUgcGFzc3dvcmQgZm9yIHlvdXIgYWNjb3VudCAke3VzZXIuZW1haWx9IGhhcyBqdXN0IGJlZW4gY2hhbmdlZC5cXG5gXG4gICAgfTtcbiAgICByZXR1cm4gdHJhbnNwb3J0ZXIuc2VuZE1haWwobWFpbE9wdGlvbnMpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHJlcS5mbGFzaCgnc3VjY2VzcycsIHsgbXNnOiAn44OR44K544Ov44O844OJ5aSJ5pu044Gr5oiQ5Yqf44GX44G+44GX44GfLicgfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgaWYgKGVyci5tZXNzYWdlID09PSAnc2VsZiBzaWduZWQgY2VydGlmaWNhdGUgaW4gY2VydGlmaWNhdGUgY2hhaW4nKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ1dBUk5JTkc6IFNlbGYgc2lnbmVkIGNlcnRpZmljYXRlIGluIGNlcnRpZmljYXRlIGNoYWluLiBSZXRyeWluZyB3aXRoIHRoZSBzZWxmIHNpZ25lZCBjZXJ0aWZpY2F0ZS4gVXNlIGEgdmFsaWQgY2VydGlmaWNhdGUgaWYgaW4gcHJvZHVjdGlvbi4nKTtcbiAgICAgICAgICB0cmFuc3BvcnRlciA9IG5vZGVtYWlsZXIuY3JlYXRlVHJhbnNwb3J0KHtcbiAgICAgICAgICAgIHNlcnZpY2U6ICdTZW5kR3JpZCcsXG4gICAgICAgICAgICBhdXRoOiB7XG4gICAgICAgICAgICAgIHVzZXI6IHByb2Nlc3MuZW52LlNFTkRHUklEX1VTRVIsXG4gICAgICAgICAgICAgIHBhc3M6IHByb2Nlc3MuZW52LlNFTkRHUklEX1BBU1NXT1JEXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGxzOiB7XG4gICAgICAgICAgICAgIHJlamVjdFVuYXV0aG9yaXplZDogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gdHJhbnNwb3J0ZXIuc2VuZE1haWwobWFpbE9wdGlvbnMpXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgIHJlcS5mbGFzaCgnc3VjY2VzcycsIHsgbXNnOiAn44OR44K544Ov44O844OJ5aSJ5pu044Gr5oiQ5Yqf44GX44G+44GX44GfLicgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZygnRVJST1I6IENvdWxkIG5vdCBzZW5kIHBhc3N3b3JkIHJlc2V0IGNvbmZpcm1hdGlvbiBlbWFpbCBhZnRlciBzZWN1cml0eSBkb3duZ3JhZGUuXFxuJywgZXJyKTtcbiAgICAgICAgcmVxLmZsYXNoKCd3YXJuaW5nJywgeyBtc2c6ICdZb3VyIHBhc3N3b3JkIGhhcyBiZWVuIGNoYW5nZWQsIGhvd2V2ZXIgd2Ugd2VyZSB1bmFibGUgdG8gc2VuZCB5b3UgYSBjb25maXJtYXRpb24gZW1haWwuIFdlIHdpbGwgYmUgbG9va2luZyBpbnRvIGl0IHNob3J0bHkuJyB9KTtcbiAgICAgICAgcmV0dXJuIGVycjtcbiAgICAgIH0pO1xuICB9O1xuXG4gIHJlc2V0UGFzc3dvcmQoKVxuICAgIC50aGVuKHNlbmRSZXNldFBhc3N3b3JkRW1haWwpXG4gICAgLnRoZW4oKCkgPT4geyBpZiAoIXJlcy5maW5pc2hlZCkgcmVzLnJlZGlyZWN0KCcvJyk7IH0pXG4gICAgLmNhdGNoKGVyciA9PiBuZXh0KGVycikpO1xufTtcblxuLyoqXG4gKiBHRVQgL2FjY291bnRcbiAqIFByb2ZpbGUgcGFnZS5cbiAqL1xuZXhwb3J0IGxldCBnZXRBY2NvdW50ID0gKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuICByZXMucmVuZGVyKCdhY2NvdW50L3Byb2ZpbGUnLCB7XG4gICAgdGl0bGU6ICdBY2NvdW50IE1hbmFnZW1lbnQnXG4gIH0pO1xufTtcblxuLyoqXG4gKiBQT1NUIC9hY2NvdW50L3Byb2ZpbGVcbiAqIFVwZGF0ZSBwcm9maWxlIGluZm9ybWF0aW9uLlxuICovXG5leHBvcnQgbGV0IHBvc3RVcGRhdGVQcm9maWxlID0gKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKSA9PiB7XG4gIHJlcS5hc3NlcnQoJ2VtYWlsJywgJ+acieWKueOBquODoeODvOODq+OCouODieODrOOCueOCkuWFpeWKm+OBl+OBpuOBj+OBoOOBleOBhC4nKS5pc0VtYWlsKCk7XG4gIHJlcS5zYW5pdGl6ZSgnZW1haWwnKS5ub3JtYWxpemVFbWFpbCh7IGdtYWlsX3JlbW92ZV9kb3RzOiBmYWxzZSB9KTtcblxuICBjb25zdCBlcnJvcnMgPSByZXEudmFsaWRhdGlvbkVycm9ycygpO1xuXG4gIGlmIChlcnJvcnMpIHtcbiAgICByZXEuZmxhc2goJ2Vycm9ycycsIGVycm9ycyk7XG4gICAgcmV0dXJuIHJlcy5yZWRpcmVjdCgnL2FjY291bnQnKTtcbiAgfVxuXG4gIFVzZXIuZmluZEJ5SWQocmVxLnVzZXIuaWQsIChlcnIsIHVzZXIpID0+IHtcbiAgICBpZiAoZXJyKSB7IHJldHVybiBuZXh0KGVycik7IH1cbiAgICB1c2VyLmVtYWlsID0gcmVxLmJvZHkuZW1haWwgfHwgJyc7XG4gICAgdXNlci5wcm9maWxlLm5hbWUgPSByZXEuYm9keS5uYW1lIHx8ICcnO1xuICAgIHVzZXIucHJvZmlsZS5nZW5kZXIgPSByZXEuYm9keS5nZW5kZXIgfHwgJyc7XG4gICAgdXNlci5wcm9maWxlLmxvY2F0aW9uID0gcmVxLmJvZHkubG9jYXRpb24gfHwgJyc7XG4gICAgdXNlci5wcm9maWxlLndlYnNpdGUgPSByZXEuYm9keS53ZWJzaXRlIHx8ICcnO1xuICAgIHVzZXIuc2F2ZSgoZXJyKSA9PiB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIGlmIChlcnIuY29kZSA9PT0gMTEwMDApIHtcbiAgICAgICAgICByZXEuZmxhc2goJ2Vycm9ycycsIHsgbXNnOiAn5YWl5Yqb44GV44KM44Gf44Oh44O844Or44Ki44OJ44Os44K544Gv44GZ44Gn44Gr5a2Y5Zyo44GX44Gm44GE44G+44GZLicgfSk7XG4gICAgICAgICAgcmV0dXJuIHJlcy5yZWRpcmVjdCgnL2FjY291bnQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV4dChlcnIpO1xuICAgICAgfVxuICAgICAgcmVxLmZsYXNoKCdzdWNjZXNzJywgeyBtc2c6ICfjg5fjg63jg5XjgqPjg7zjg6vmg4XloLHjgpLmm7TmlrDjgZfjgb7jgZfjgZ8uJyB9KTtcbiAgICAgIHJlcy5yZWRpcmVjdCgnL2FjY291bnQnKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIFBPU1QgL2FjY291bnQvcGFzc3dvcmRcbiAqIFVwZGF0ZSBjdXJyZW50IHBhc3N3b3JkLlxuICovXG5leHBvcnQgbGV0IHBvc3RVcGRhdGVQYXNzd29yZCA9IChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikgPT4ge1xuICByZXEuYXNzZXJ0KCdwYXNzd29yZCcsICfjg5Hjgrnjg6/jg7zjg4njga805paH5a2X5Lul5LiK44Gr44GX44Gm44GP44Gg44GV44GELicpLmxlbih7IG1pbjogNCB9KTtcbiAgcmVxLmFzc2VydCgnY29uZmlybVBhc3N3b3JkJywgJ+ODkeOCueODr+ODvOODieOBjOS4gOiHtOOBl+OBvuOBm+OCky4nKS5lcXVhbHMocmVxLmJvZHkucGFzc3dvcmQpO1xuXG4gIGNvbnN0IGVycm9ycyA9IHJlcS52YWxpZGF0aW9uRXJyb3JzKCk7XG5cbiAgaWYgKGVycm9ycykge1xuICAgIHJlcS5mbGFzaCgnZXJyb3JzJywgZXJyb3JzKTtcbiAgICByZXR1cm4gcmVzLnJlZGlyZWN0KCcvYWNjb3VudCcpO1xuICB9XG5cbiAgVXNlci5maW5kQnlJZChyZXEudXNlci5pZCwgKGVyciwgdXNlcikgPT4ge1xuICAgIGlmIChlcnIpIHsgcmV0dXJuIG5leHQoZXJyKTsgfVxuICAgIHVzZXIucGFzc3dvcmQgPSByZXEuYm9keS5wYXNzd29yZDtcbiAgICB1c2VyLnNhdmUoKGVycikgPT4ge1xuICAgICAgaWYgKGVycikgeyByZXR1cm4gbmV4dChlcnIpOyB9XG4gICAgICByZXEuZmxhc2goJ3N1Y2Nlc3MnLCB7IG1zZzogJ+ODkeOCueODr+ODvOODieOCkuWkieabtOOBl+OBvuOBl+OBny4nIH0pO1xuICAgICAgcmVzLnJlZGlyZWN0KCcvYWNjb3VudCcpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbi8qKlxuICogUE9TVCAvYWNjb3VudC9kZWxldGVcbiAqIERlbGV0ZSB1c2VyIGFjY291bnQuXG4gKi9cbmV4cG9ydCBsZXQgcG9zdERlbGV0ZUFjY291bnQgPSAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pID0+IHtcbiAgVXNlci5kZWxldGVPbmUoeyBfaWQ6IHJlcS51c2VyLmlkIH0sIChlcnIpID0+IHtcbiAgICBpZiAoZXJyKSB7IHJldHVybiBuZXh0KGVycik7IH1cbiAgICByZXEubG9nb3V0KCk7XG4gICAgcmVxLmZsYXNoKCdpbmZvJywgeyBtc2c6ICfjgqLjgqvjgqbjg7Pjg4jjgpLliYrpmaTjgZfjgb7jgZfjgZ8uJyB9KTtcbiAgICByZXMucmVkaXJlY3QoJy8nKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIEdFVCAvYWNjb3VudC91bmxpbmsvOnByb3ZpZGVyXG4gKiBVbmxpbmsgT0F1dGggcHJvdmlkZXIuXG4gKi9cbmV4cG9ydCBsZXQgZ2V0T2F1dGhVbmxpbmsgPSAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pID0+IHtcbiAgY29uc3QgeyBwcm92aWRlciB9ID0gcmVxLnBhcmFtcztcbiAgVXNlci5maW5kQnlJZChyZXEudXNlci5pZCwgKGVyciwgdXNlcjogYW55KSA9PiB7XG4gICAgaWYgKGVycikgeyByZXR1cm4gbmV4dChlcnIpOyB9XG4gICAgdXNlcltwcm92aWRlcl0gPSB1bmRlZmluZWQ7XG4gICAgdXNlci50b2tlbnMgPSB1c2VyLnRva2Vucy5maWx0ZXIoKHRva2VuOiBBdXRoVG9rZW4pID0+IHRva2VuLmtpbmQgIT09IHByb3ZpZGVyKTtcbiAgICB1c2VyLnNhdmUoKGVycjogV3JpdGVFcnJvcikgPT4ge1xuICAgICAgaWYgKGVycikgeyByZXR1cm4gbmV4dChlcnIpOyB9XG4gICAgICByZXEuZmxhc2goJ2luZm8nLCB7IG1zZzogYCR7cHJvdmlkZXJ944Ki44Kr44Km44Oz44OI44Go44Gu6YCj5pC644KS6Kej6Zmk44GX44G+44GX44GfLmAgfSk7XG4gICAgICByZXMucmVkaXJlY3QoJy9hY2NvdW50Jyk7XG4gICAgfSk7XG4gIH0pO1xufTtcbiIsImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5cbmludGVyZmFjZSBJQ291bnQgZXh0ZW5kcyBtb25nb29zZS5Eb2N1bWVudCB7XG4gIG5hbWU6IFN0cmluZztcbiAgY3VzdG9tZXJDb3VudDogTnVtYmVyO1xufVxuXG5jb25zdCBjb3VudFNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICBuYW1lOiBTdHJpbmcsXG4gIGN1c3RvbWVyQ291bnQ6IE51bWJlclxufSk7XG5cbmNvbnN0IENvdW50ID0gbW9uZ29vc2UubW9kZWw8SUNvdW50PignQ291bnQnLCBjb3VudFNjaGVtYSk7XG5cbmV4cG9ydCBkZWZhdWx0IENvdW50O1xuIiwiaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHQtbm9kZWpzJztcbmltcG9ydCBjcnlwdG8gZnJvbSAnY3J5cHRvJztcbmltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSwgTmV4dEZ1bmN0aW9uIH0gZnJvbSAnZXhwcmVzcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVVzZXJEb2N1bWVudCBleHRlbmRzIG1vbmdvb3NlLkRvY3VtZW50IHtcbiAgZW1haWw6IFN0cmluZztcbiAgcGFzc3dvcmQ6IFN0cmluZztcbiAgcGFzc3dvcmRSZXNldFRva2VuOiBTdHJpbmc7XG4gIHBhc3N3b3JkUmVzZXRFeHBpcmVzOiBEYXRlO1xuICBsYXJnZUNvdW50OiBOdW1iZXI7XG4gIG1pZGRsZUNvdW50OiBOdW1iZXI7XG4gIHNtYWxsQ291bnQ6IE51bWJlcjtcbiAgY3VzdG9tZXJOdW1iZXI6IE51bWJlcjtcbiAgW2luZGV4OiBzdHJpbmddOiBhbnk7XG5cbiAgZmFjZWJvb2s6IFN0cmluZztcbiAgdHdpdHRlcjogU3RyaW5nO1xuICB0b2tlbnM6IEFycmF5PHt9PjtcblxuICBwcm9maWxlOiB7XG4gICAgbmFtZTogU3RyaW5nLFxuICAgIGdlbmRlcjogU3RyaW5nLFxuICAgIGxvY2F0aW9uOiBTdHJpbmcsXG4gICAgd2Vic2l0ZTogU3RyaW5nLFxuICAgIHBpY3R1cmU6IFN0cmluZ1xuICB9O1xuXG4gIGNvbXBhcmVQYXNzd29yZChhcmcwOiBTdHJpbmcsIGFyZzE6IEJvb2xlYW4pOiB2b2lkO1xufVxuXG5leHBvcnQgdHlwZSBVc2VyTW9kZWwgPSBtb25nb29zZS5Eb2N1bWVudCAmIHtcbiAgZW1haWw6IHN0cmluZztcbiAgcGFzc3dvcmQ6IHN0cmluZztcbiAgcGFzc3dvcmRSZXNldFRva2VuOiBzdHJpbmc7XG4gIHBhc3N3b3JkUmVzZXRFeHBpcmVzOiBEYXRlO1xuICBsYXJnZUNvdW50OiBudW1iZXI7XG4gIG1pZGRsZUNvdW50OiBudW1iZXI7XG4gIHNtYWxsQ291bnQ6IG51bWJlcjtcbiAgY3VzdG9tZXJOdW1iZXI6IG51bWJlcjtcbiAgW2luZGV4OiBzdHJpbmddOiBhbnk7XG5cbiAgZmFjZWJvb2s6IHN0cmluZztcbiAgdHdpdHRlcjogc3RyaW5nLFxuICB0b2tlbnM6IEF1dGhUb2tlbltdO1xuXG4gIHByb2ZpbGU6IHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgZ2VuZGVyOiBzdHJpbmc7XG4gICAgbG9jYXRpb246IHN0cmluZztcbiAgICB3ZWJzaXRlOiBzdHJpbmc7XG4gICAgcGljdHVyZTogc3RyaW5nO1xuICB9O1xuXG4gIGNvbXBhcmVQYXNzd29yZDogY29tcGFyZVBhc3N3b3JkRnVuY3Rpb247XG4gIGdyYXZhdGFyKHNpemU6IG51bWJlcik6IHN0cmluZztcbiAgLy8gZ3JhdmF0YXI6IChzaXplOiBudW1iZXIpID0+IHN0cmluZztcbn07XG5cbnR5cGUgY29tcGFyZVBhc3N3b3JkRnVuY3Rpb24gPSAoY2FuZGlkYXRlUGFzc3dvcmQ6IHN0cmluZywgY2I6IChlcnI6IGFueSwgaXNNYXRjaDogYW55KSA9PiB7fSkgPT4gdm9pZDtcblxuZXhwb3J0IHR5cGUgQXV0aFRva2VuID0ge1xuICBhY2Nlc3NUb2tlbjogc3RyaW5nO1xuICBraW5kOiBzdHJpbmc7XG59O1xuXG5jb25zdCB1c2VyU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gIGVtYWlsOiB7IHR5cGU6IFN0cmluZywgdW5pcXVlOiB0cnVlIH0sXG4gIHBhc3N3b3JkOiBTdHJpbmcsXG4gIHBhc3N3b3JkUmVzZXRUb2tlbjogU3RyaW5nLFxuICBwYXNzd29yZFJlc2V0RXhwaXJlczogRGF0ZSxcbiAgbGFyZ2VDb3VudDogTnVtYmVyLFxuICBtaWRkbGVDb3VudDogTnVtYmVyLFxuICBzbWFsbENvdW50OiBOdW1iZXIsXG4gIGN1c3RvbWVyTnVtYmVyOiBOdW1iZXIsXG5cbiAgZmFjZWJvb2s6IFN0cmluZyxcbiAgdHdpdHRlcjogU3RyaW5nLFxuICB0b2tlbnM6IEFycmF5LFxuXG4gIHByb2ZpbGU6IHtcbiAgICBuYW1lOiBTdHJpbmcsXG4gICAgZ2VuZGVyOiBTdHJpbmcsXG4gICAgbG9jYXRpb246IFN0cmluZyxcbiAgICB3ZWJzaXRlOiBTdHJpbmcsXG4gICAgcGljdHVyZTogU3RyaW5nXG4gIH1cbn0sIHsgdGltZXN0YW1wczogdHJ1ZSB9KTtcblxuLyoqXG4gKiBQYXNzd29yZCBoYXNoIG1pZGRsZXdhcmUuXG4gKi9cbnVzZXJTY2hlbWEucHJlKCdzYXZlJywgZnVuY3Rpb24gc2F2ZShuZXh0OiBOZXh0RnVuY3Rpb24pIHtcbiAgY29uc3QgdXNlciA9IHRoaXM7XG4gIGlmICghdXNlci5pc01vZGlmaWVkKCdwYXNzd29yZCcpKSB7IHJldHVybiBuZXh0KCk7IH1cbiAgYmNyeXB0LmdlblNhbHQoMTAsIChlcnIsIHNhbHQpID0+IHtcbiAgICBpZiAoZXJyKSB7IHJldHVybiBuZXh0KGVycik7IH1cbiAgICBiY3J5cHQuaGFzaCh1c2VyLnBhc3N3b3JkLCBzYWx0LCB1bmRlZmluZWQsIChlcnIsIGhhc2gpID0+IHtcbiAgICAgIGlmIChlcnIpIHsgcmV0dXJuIG5leHQoZXJyKTsgfVxuICAgICAgdXNlci5wYXNzd29yZCA9IGhhc2g7XG4gICAgICBuZXh0KCk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG5cbi8qKlxuICogSGVscGVyIG1ldGhvZCBmb3IgdmFsaWRhdGluZyB1c2VyJ3MgcGFzc3dvcmQuXG4gKi9cbnVzZXJTY2hlbWEubWV0aG9kcy5jb21wYXJlUGFzc3dvcmQgPSBmdW5jdGlvbiBjb21wYXJlUGFzc3dvcmQoY2FuZGlkYXRlUGFzc3dvcmQ6IHN0cmluZywgY2I6IChlcnI6IGFueSwgaXNNYXRjaDogYW55KSA9PiB7fSkge1xuICBiY3J5cHQuY29tcGFyZShjYW5kaWRhdGVQYXNzd29yZCwgdGhpcy5wYXNzd29yZCwgKGVyciwgaXNNYXRjaCkgPT4ge1xuICAgIGNiKGVyciwgaXNNYXRjaCk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBIZWxwZXIgbWV0aG9kIGZvciBnZXR0aW5nIHVzZXIncyBncmF2YXRhci5cbiAqL1xudXNlclNjaGVtYS5tZXRob2RzLmdyYXZhdGFyID0gZnVuY3Rpb24gZ3JhdmF0YXIoc2l6ZTogbnVtYmVyKSB7XG4gIGlmICghc2l6ZSkge1xuICAgIHNpemUgPSAyMDA7XG4gIH1cbiAgaWYgKCF0aGlzLmVtYWlsKSB7XG4gICAgcmV0dXJuIGBodHRwczovL2dyYXZhdGFyLmNvbS9hdmF0YXIvP3M9JHtzaXplfSZkPXJldHJvYDtcbiAgfVxuICBjb25zdCBtZDUgPSBjcnlwdG8uY3JlYXRlSGFzaCgnbWQ1JykudXBkYXRlKHRoaXMuZW1haWwpLmRpZ2VzdCgnaGV4Jyk7XG4gIHJldHVybiBgaHR0cHM6Ly9ncmF2YXRhci5jb20vYXZhdGFyLyR7bWQ1fT9zPSR7c2l6ZX0mZD1yZXRyb2A7XG59O1xuXG5jb25zdCBVc2VyID0gbW9uZ29vc2UubW9kZWw8SVVzZXJEb2N1bWVudD4oJ1VzZXInLCB1c2VyU2NoZW1hKTtcblxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcbiIsImltcG9ydCBjaGFsayBmcm9tICdjaGFsayc7XG5pbXBvcnQgZG90ZW52IGZyb20gJ2RvdGVudic7XG5pbXBvcnQgZXJyb3JIYW5kbGVyIGZyb20gJ2Vycm9yaGFuZGxlcic7XG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSwgTmV4dEZ1bmN0aW9uIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcblxuZG90ZW52LmNvbmZpZyh7IHBhdGg6ICcuZW52LmV4YW1wbGUnIH0pO1xuXG5pbXBvcnQgYXBwIGZyb20gJy4vYXBwJztcblxuLyoqXG4gKiBFcnJvciBIYW5kbGVyLlxuICovXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgLy8gb25seSB1c2UgaW4gZGV2ZWxvcG1lbnRcbiAgYXBwLnVzZShlcnJvckhhbmRsZXIoKSk7XG59IGVsc2Uge1xuICBhcHAudXNlKChlcnI6IEVycm9yLCByZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICByZXMuc3RhdHVzKDUwMCkuc2VuZCgnU2VydmVyIEVycm9yJyk7XG4gIH0pO1xufVxuXG4vKipcbiAqIFN0YXJ0IEV4cHJlc3Mgc2VydmVyLlxuICovXG5jb25zdCBzZXJ2ZXIgPSBhcHAubGlzdGVuKGFwcC5nZXQoJ3BvcnQnKSwgKCkgPT4ge1xuICBjb25zb2xlLmxvZyhcbiAgICAnJXMgaHR0cDovL2xvY2FsaG9zdDolZCDjgafli5XjgYTjgabjgYTjgb7jgZkuJyxcbiAgICBjaGFsay5ncmVlbign4pyTJyksXG4gICAgYXBwLmdldCgncG9ydCcpXG4gICk7XG4gIGNvbnNvbGUubG9nKFxuICAgICclcyAlc+ODouODvOODieOBp+OBmS4nLFxuICAgIGNoYWxrLmdyZWVuKCfinJMnKSxcbiAgICBhcHAuZ2V0KCdlbnYnKVxuICApO1xuICBjb25zb2xlLmxvZyhcbiAgICAnJXMgQ1RSTC1DIOOBp+WBnOatouOBl+OBvuOBmS4nLFxuICAgIGNoYWxrLmdyZWVuKCfinJMnKVxuICApO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHNlcnZlcjtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJjcnlwdC1ub2RlanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2hhbGtcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29tcHJlc3Npb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29ubmVjdC1tb25nb1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjcnlwdG9cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZG90ZW52XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImVycm9yaGFuZGxlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3MtZmxhc2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzcy1zZXNzaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3MtdmFsaWRhdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsdXNjYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb3JnYW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9kZW1haWxlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXNzcG9ydFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXNzcG9ydC1mYWNlYm9va1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXNzcG9ydC1sb2NhbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXNzcG9ydC10d2l0dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXRpbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9