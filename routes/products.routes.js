const { Router } = require("express")
const router = Router()
const Product = require("../models/Product.model")

router.get("/cats", (req, res) => {
    Product
    .find()
    .then((Product) => {
        console.log(Product)
        res.render("products/cats", {product: Product})
    })
    .catch(err => next(err))
})

router.get("/dogs", (req, res) => {
    res.render("products/dogs")
})

router.get("/newProduct", (req, res) => {
    res.render("products/newProduct")
})

router.post('/newProduct', (req,res, next)  => {
    const { name, price, description, category, quantity, photo, target} = req.body
    Product
    .create({name, price, description, category, quantity, photo, target})
    .then((product) => {
        res.redirect("/products/cats")
    })
    .catch((err) => next(err))
})


module.exports = router