var Util = require('../commons/util');


var User = function (){};
User.create = function(json){
    var o = new User();
    if(json) {
        Util.extend(o, json);
    }
    return o;
};

User.prototype = {

};

module.exports = User;