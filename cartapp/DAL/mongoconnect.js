const mongoose = require('mongoose');
const config = require('../config');

var mongoconnect = {};

mongoconnect.connect = function (dbName) {
    let connectionName = config.connectionDetails.connectionName;
    if (dbName != undefined && dbName != null) {
        connectionName = connectionName + dbName;
    }
    mongoose.connect(connectionName);
    console.log('connected Successfully');
};


module.exports = mongoconnect;