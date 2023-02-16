const { Router } = require("express")
const isLoggedIn = require("../middleware/isLoggedIn")
const isLoggedOut = require("../middleware/isLoggedOut")
const router = Router()
const Product = require("../models/Product.model")

function isAdmin (currentUser) {
    if(currentUser.role === "admin") {
        return true
    } else {
        return false
    }
}

router.get("/cats", (req, res, next) => {
    Product
    .find({target:"Cat"})
    .then((Product) => {
        if ( req.session.currentUser) {
        res.render("products/cats", {product: Product, admin:isAdmin(req.session.currentUser)})
        } else {
            res.render("products/cats", {product: Product})
        }
    }) 
    .catch(err => next(err))
})

router.get("/dogs", (req, res, next) => {
    Product
    .find({target:"Dog"})
    .then((Product) => {
        if (req.session.currentUser) {
            res.render("products/dogs", {product: Product, admin:isAdmin(req.session.currentUser)})
        } else {
            res.render("products/dogs", {product:Product})
        }
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

router.get("/editProduct/:id", (req,res, next) => {
    const { id } = req.params

    Product
    .findById(id)
    .then(Product => {
        res.render('products/editProduct', {product:Product})
    })
    .catch(err => next(err))
})

router.post('/editProduct/:id', (req,res, next) => {
    const { id } = req.params
    const { name, price, description, category, quantity, photo, target} = req.body
    console.log (req.body) 
    Product
    .findByIdAndUpdate(id, { name, price, description, category, quantity, photo, target } , { new:true })
    .then((updatedProduct) => {
        console.log (updatedProduct) 
        res.redirect("/")
    })
    .catch(err => next(err))
})

router.post("/editProduct/delete/:id" , (req,res,next) => {
    const { id } = req.params
    console.log ("product", id)   
    Product
    .findByIdAndDelete(id)
    .then(() => {
        res.json(JSON.stringify({deletedProduct: true}))
    })
    .catch(err => {
        next(err)
    })
  })


module.exports = router