var login = require('../server/login.js');
var main = require('../server/main.js');

module.exports = {

    registergetRoutes: function(app) {

        app.get('/', function(req, res, next) {
            res.render('login', {
                layout: 'mainmobile'
            });
        });

        app.get('/forgetpass', function(req, res, next) {
            res.render('forgetpass', {
                layout: 'mainmobile'
            });
        });

        app.get('/resetpass', function(req, res, next) {
            res.render('resetpass', {
                layout: 'mainmobile'
            });
        });

        app.get('/home', function(req, res, next) {
            res.render('home', {
                layout: 'mainmobile'
            });
        });

        app.get('/settings', function(req, res, next) {
            res.render('settings', {
                layout: 'mainmobile'
            });
        });

        app.get('/usersettings', function(req, res, next) {
            res.render('usersettings', {
                layout: 'mainmobile'
            });
        });

        app.get('/register', function(req, res, next) {
            res.render('register');
        });

        app.get('/main', function(req, res, next) {
            res.render('main', {
                layout: 'mainmobile'
            });
        });

        app.get('/detail', function(req, res, next) {
            res.render('twitem', {
                layout: 'mainmobile'
            });
        });
    },

    registerpostRoutes: function(app) {
        app.post('/api/user/login', function(req, res, next) {
            res.json({
                success: true,
                msg: '登录成功'
            });;
        });

        app.post('/api/main', function(req, res, next) {
            main(req, res, next);
        });

        app.post('/api/user/regist', function(req, res, next) {});
    },

    registerRoutes: function(app) {
        this.registergetRoutes(app);
        this.registerpostRoutes(app);
    }
};