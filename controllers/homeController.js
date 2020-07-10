const Product = require("../models/product");

let products = [
    {
        name: "Mais Cachos",
        picture: "/images/products/Kids.png"
    }
]

module.exports = {
    index(req, res) {
        res.render("index");
    },

    products(req, res, next) {
        res.render("products", {
            products
        })
    },

    test(req, res) {
        Product.find({}) // a promise containing all elements associated to the Product model.
            .then(products => {
                console.log(`Products: ${products[0]}`)
                res.render("../views/products", {
                    products
                })
            })
            .catch(error => {
                console.log(`Error fetching users: ${error.message}`)
                res.redirect("/");
            });
    }


    // products(req, res) {
    //     res.render("products")
    // }
};
