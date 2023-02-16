module.exports = (req, res) => {
    //el role viene en req.session.role
    console.log(req.session)
    if (req.session.currentUser.role === "admin") {
        return true
    } else {
        return false
    }

}