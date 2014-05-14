module.exports = {
    id: 'items',
    name: '互动教学',
    creator: 'Henry Leu',
    secretKey: 'quick',
    mysql:{
//        host: '192.168.1.100',
        host: 'localhost',
        user: 'items',
        password: 'items',
        database:'items',
        port: 3306
    },
    redis:{
        host: 'localhost',
        port: 6379
    },
    session: {
        storeType: 'redis',
        expires: 60 // minutes
    },
    logging: {
        reloadSecs: 0, //INFO: set 0 could let nodeunit tests which use log4js exit properly
        level: 'DEBUG'
    },
    resources: {
        appName: '互动教学',
        appTitle: '互动教学',
        appCreator: '新东方',
        errorUnknown: '不好意思，系统出了点小问题'
    }
}
;
