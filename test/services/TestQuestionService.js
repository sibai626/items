var service = require('../../source/services/TestQuestionService');
var logger = require('../../source/commons/logging').logger;

exports.setUp = function(done){
//    setTimeout(function(){done();}, 500);
    console.info('test is starting');
    done();
};
exports.tearDown = function(done){
    console.info('done;');
    done();
};
exports.testListTestQuestions = function(test){
    service.listTestQuestions(function(err, questions){
        if(err){
            console.error('Fail to list all test questions: '+err);
        }
        else{
            test.ok(questions);
            test.equal(questions.length, 0);
            console.debug('Succeed to list all test questions: ' + JSON.stringify(questions));
        }
        test.done();
    });
};