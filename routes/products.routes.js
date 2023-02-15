const { Router } = require("express")
const router = Router()

router.get("/cats", (req, res) => {
    res.render("products/cats")
})

router.get("/dogs", (req, res) => {
    res.render("products/dogs")
})


module.exports = router