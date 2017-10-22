var usercenter = require('../data/usecenter.json');

var router = {

    registergetRoutes: function(app) {
        app.get('/address', function(req, res, next) {
            res.render('address');
        });

        app.get('/usercenter', function(req, res, next) {
            res.render('usercenter', {
                data: usercenter,
                layout: 'mainmobile'
            });
        });

        app.get('/detail', function(req, res, next) {
            res.render('detail', {
                layout: 'mainmobile'
            });
        });
    },

    registerpostRoutes: function(app) {

    },

    registerRoutes: function(app) {
        this.registergetRoutes(app);
        this.registerpostRoutes(app);
    }
};

module.exports = router;