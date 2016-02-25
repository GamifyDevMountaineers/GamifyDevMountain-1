/** Dependants */
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoose = require('mongoose');
var cors = require('cors');
var passport = require('passport');
var local = require('passport-local');

/* Controllers */
var badgesCtrl = require('./controllers/badgesCtrl');
var cardsCtrl = require('./controllers/cardsCtrl');
var catsCtrl = require('./controllers/catsCtrl');
var cohortsCtrl = require('./controllers/cohortsCtrl');
var currsCtrl = require('./controllers/currsCtrl');
var usersCtrl = require('./controllers/usersCtrl');

/** Policies */
var isAuthed = function (req, res, next) {
    if (!req.isAuthenticated()) return res.status(401).send();
    return next();
    console.log('Function: isAuthed');
};

var SESSION_SECRET = 'gweriwrb-erfawrg45-oasWsd';
var __dirname;

/** Express */
var app = express();

require('./services/passport.js')(passport);

/** Passport Application */
app.use(passport.initialize());
app.use(passport.session());

/** Connect to Front-End */
app.use(express.static(__dirname + './../public'));
app.use(session({ secret: SESSION_SECRET }));
app.use(bodyParser.json());
app.use(cors());

/** Services */
require('./services/passport');

/** Log In */
app.post('/api/login',
    passport.authenticate('local', {
        failureRedirect: false
    }), function (req, res) {
        console.log("Not Happening");
        res.send({Login: true});
        console.log('Function: authenticate');
    }
);
    
/** Log Out */
app.get('/api/logout', function (req, res) {
    req.logout();
    return res.redirect('/#/login');
    console.log('Running Function: logout');
});

/* Users End Points */
app.post('/api/register', usersCtrl.createUser);
app.get('/api/users', usersCtrl.getUser);
app.get('/api/currentUser', usersCtrl.getCurrentUser);
app.put('/api/users/:id', usersCtrl.updateUser);
app.delete('/api/users/:id', usersCtrl.deleteUser);

/* Curriculums End Points */
app.post('/api/curriculums', currsCtrl.createCurriculum);
app.get('/api/curriculums', currsCtrl.getCurriculum);
app.put('/api/curriculums/:id', currsCtrl.updateCurriculum);
app.delete('/api/curriculums/:id', currsCtrl.deleteCurriculum);

/* Cohorts End Points */
app.post('/api/cohorts', cohortsCtrl.createCohort);
app.get('/api/cohorts', cohortsCtrl.getCohort);
app.put('/api/cohorts/:id', cohortsCtrl.updateCohort);
app.delete('/api/cohorts/:id', cohortsCtrl.deleteCohort);

/* Cards End Points */
app.post('/api/cards', cardsCtrl.createCard);
app.get('/api/cards', cardsCtrl.getCard);
app.put('/api/cards/:id', cardsCtrl.updateCard);
app.delete('/api/cards/:id', cardsCtrl.deleteCard);

/* Badges End Points */
app.post('/api/badges', badgesCtrl.createBadge);
app.get('/api/badges', badgesCtrl.getBadge);
app.put('/api/badges/:id', badgesCtrl.updateBadge);
app.delete('/api/badges/:id', badgesCtrl.deleteBadge);

/** Connections */
var nodePort = 4000;
app.listen(nodePort, function () {
    console.log('Running nodemon://localhost:' + nodePort);
});

SESSION_SECRET: 'gweriwrb-erfawrg45-oasWsd';

var mongoURI = 'mongodb://localhost:27017/GamifyDevMountain';
mongoose.connect(mongoURI);
mongoose.connection.once('open', function (err) {
    if (err) { throw err; }
    else { console.log('Running ' + mongoURI); }
});