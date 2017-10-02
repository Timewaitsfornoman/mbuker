
var login = require('./login.js');
var others = require('./others.js');

module.exports = function(app) {
    login.registerRoutes(app);
    others.registerRoutes(app);
};