var HelloService = require('../../source/services/HelloService');
var logger = require('../../source/commons/logging').logger;

exports.setUp = function(done){
    console.info('test is starting');
    done();
};
exports.tearDown = function(done){
    console.info('done;');
    done();
};

exports.hello_stepOne = function(test){
    HelloService.list(function(err, lists){
        if(err){
            console.error('Fail to list all targets: ' + err);
        }
        else{
            test.ok(lists);
            test.equal(lists.length, 8);
            console.debug('Succeed to list all lists: ' + JSON.stringify(lists));
        }
        test.done();
    });
};