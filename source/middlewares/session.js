var settings = require('../../settings');
var redis = require('./../commons/redis');

module.exports = function(express){
    var sessionStore = null;
    if(settings.session.storeType == 'redis'){
        var RedisStore = require('connect-redis')(express);
        sessionStore = new RedisStore({client : redis});
    }
    else{
        new Error('Do not support this type of Session Store: ' + settings.session.storeType);
    }

    var expires = 60000 * settings.session.expires;
    return express.session({
        store: sessionStore,
        cookie: {maxAge: expires},
        secret: settings.secretKey
    });
};
