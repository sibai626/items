var settings = require('../../settings');
var logger = require('../commons/logging').logger;
var redis = require("../commons/redis");
var async = require("async");

var Service = {};

var genAllHelloKey = function () {
    return 'tq:all';
}

Service.insert = function (body, callback) {
//    redis.rpush(genAllHelloKey(), JSON.stringify({id: 'ABCD', name : 'sdfsdf'}));
    redis.rpush(genAllHelloKey(), JSON.stringify(body));
    callback(null, null);

}

Service.list = function (callback) {
    redis.lrange(genAllHelloKey(), 0, -1, function (err, list) {
        if (err) {
            logger.error('Fail to list heelo:' + err);
            callback(err, null);
            return;
        }
        if (list) {
            callback(null, list);
        } else {
            callback(null, []);
        }
    });
}

module.exports = Service;