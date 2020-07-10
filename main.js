const express = require("express"),
    app = express(),
    router = express.Router(),
    mongoose = require("mongoose"),
    methodOverride = require("method-override"),
    layouts = require("express-ejs-layouts"),
    errorController = require("./controllers/errorController"),
    homeController = require("./controllers/homeController"),
    Product = require("./models/product");

mongoose.Promise = global.Promise;

mongoose.connect(
    "mongodb://localhost:27017/bonico",
    { useNewUrlParser: true }
);
mongoose.set("useCreateIndex", true);

const db = mongoose.connection;

db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");
app.use("/", router);

app.use(express.static("public"));
app.use(layouts);
app.use(
    express.urlencoded({
        extended: false
    })
);

app.use(
    methodOverride("_method", {
        methods: ["POST", "GET"]
    })
);

app.use(express.json());
// app.use(homeController.logRequestPaths);

Product.deleteMany({}) // not doing anything

// https://www.tutorialkart.com/mongodb/mongodb-delete-database/

Product.create({
    name: "Dona",
    picture: "/images/products/Dona.png"
})

router.get("/products/:id", homeController.show, homeController.showView);

// app.get("/", function(req, res) {
//     res.render("index")
// });

app.get("/", homeController.index);

//app.get("/products", homeController.products)

app.get("/products", homeController.test)


// app.get("/", homeController.index);

//app.get("/", homeController.index);

app.use(errorController.logErrors);
app.use(errorController.respondNoResourceFound);
app.use(errorController.respondInternalError);

app.use("/", router); // THIS ROUTER SHIT IS GIVING ME MORE TROUBLE THAN THE LEARNING BIT ITSELF! FUCK THIS SHIT!

app.listen(app.get("port"), () => {
    console.log(`Server running at http://localhost:${app.get("port")}`);
});
