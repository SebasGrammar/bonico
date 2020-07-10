const Product = require("./models/product")

Product.deleteMany({})
    .exec()
    .then(() => {
        console.log("Subscriber data is empty!");
    });