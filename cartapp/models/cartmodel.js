const mongoose = require('mongoose');
const config = require('../config');

let Schema = mongoose.Schema;

const CartData = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    sku_Id: String,
    item_Name: String,
    item_Descripiton: String,
    price: Number,
    currency: String,
    total_Quantity: Number,
    type: String,
    classification: String,
    discount: Number,
    imageName: String,
    size_Available: {
        S: Boolean,
        M: Boolean,
        L: Boolean,
        XL: Boolean
    }
}, { collection: config.connectionDetails.collectionName });

mongoose.model('cartData', CartData);