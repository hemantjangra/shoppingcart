//var express = require('express')
const mongoose = require('mongoose');

const mongoconnect = require('../DAL/mongoconnect');

const config = require('../config');

require('../models/cartmodel');
const cartdata = mongoose.model('cartData');
let mongocontroller = {};

mongocontroller.getdata = function (req, res, next) {
    console.log('route found');
    let db;
    if(mongoose.connection.readyState){
    }else{
        mongoconnect.connect(config.connectionDetails.dbName);
    }
    db = mongoose.connection;
    cartdata.find(function(err, cartInformation){
        if(err){
            return console.error(err);
        }
        console.log(cartInformation);
        res.send(cartInformation);
    });
};

module.exports = mongocontroller;