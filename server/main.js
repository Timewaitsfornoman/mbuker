/**
 * @synopsis 登录
 * @param fn, 回调
 */

var data = require('./maindata.json');

var main = function(req, res) {
    res.json(data);
};

module.exports = main;