const mongoose = require("mongoose"),
    { Schema } = mongoose,
    productSchema = new Schema({
        name: {
            type: String,
            unique: true
        },
        picture: String,
        description: String,
        price: Number
    });


module.exports = mongoose.model("Product", productSchema);