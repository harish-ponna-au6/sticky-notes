var User = require("../models/User");
var Note = require("../models/Note");



module.exports = {
    async updateSticky(req, res) {
        try {
            await Note.findByIdAndUpdate(req.params.id,{title:req.body.title,body:req.body.body})
            res.redirect("/dashboard")
        } catch (error) {
            console.log(error)
        }
    },
}