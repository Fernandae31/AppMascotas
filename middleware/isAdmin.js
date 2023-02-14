module.exports = (req, res, next) => {
    //el role viene en req.session.role
    console.log(req.session)
    if (req.session.currentUser.role === "admin") {
        next()
        return
    }

    return res.redirect("/")
}