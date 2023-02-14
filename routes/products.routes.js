const { Router } = require("express")
const router = Router()

router.get("/cats", (req, res) => {
    res.render("products/cats")
})


module.exports = router