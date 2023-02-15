const { Router } = require("express")
const router = Router()
const Product = require("../models/Product.model")

function isAdmin (currentUser) {
    if(currentUser.role === "admin") {
        return true
    } else {
        return false
    }
}

router.get("/cats", (req, res) => {
    Product
    .find({target:"Cat"})
    .then((Product) => {
        console.log(Product)
        console.log (isAdmin(req.session.currentUser)) 
        res.render("products/cats", {product: Product, admin:isAdmin(req.session.currentUser)})
    })
    .catch(err => next(err))
})

router.get("/dogs", (req, res, next) => {
    Product
    .find({target:"Dog"})
    .then((Product) => {
        console.log(Product)
        res.render("products/dogs", {product: Product})
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
        res.redirect("/")
    })
    .catch((err) => next(err))
})

// router.get("/editProduct/:id", (req,res) => {
//     const { id } = req.params
//     const { }
//     res.render('products/editProduct')
// })


module.exports = router