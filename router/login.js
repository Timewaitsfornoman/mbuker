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

        app.get('/register', function(req, res, next) {
            res.render('register');
        });

        app.get('/main', function(req, res, next) {
            res.render('main', {
                layout: 'mainmobile'
            });
        });

        app.get('/twitem', function(req, res, next) {
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