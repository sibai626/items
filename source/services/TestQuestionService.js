var settings = require('../../settings');
var logger = require('../commons/logging').logger;
var redis = require("../commons/redis");
var Service = {};


var genAllTestQuestionsKey = function(){
    return 'tq:all';
};
Service.listTestQuestions = function(callback) {
    redis.lrange(genAllTestQuestionsKey(), 0, -1, function(err, list){
        if(err){
            logger.error('Fail to list test questions:' + err);
            callback(err, null);
            return;
        }
        if(list){
            callback(null, list);
        }
        else{
            callback(null, []);
        }
    });
};

module.exports = Service;