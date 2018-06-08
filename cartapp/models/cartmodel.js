const mongoose = require('mongoose');
const config = require('../config');

let Schema = mongoose.Schema;

const CartData = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    sku_Id: String,
    item_Name: String,
    item_Description: String,
    price: Number,
    currency: String,
    total_Quantity: Number,
    type: String,
    classification: String,
    discount: Number,
    imageName: String,
    size_Available: {
        S: {
            isAvailable: Boolean,
            size: String
        },
        M: {
            isAvailable: Boolean,
            size: String
        },
        L: {
            isAvailable: Boolean,
            size: String
        },
        XL: {
            isAvailable: Boolean,
            size: String
        }
    },
    color: String,
    default_Quantity: Number,
    currency:{
        name:String,
        symbol: String
    }
}, { collection: config.connectionDetails.collectionName });

mongoose.model('cartData', CartData);