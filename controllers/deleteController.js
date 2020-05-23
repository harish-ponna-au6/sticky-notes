var User = require("../models/User");
var Note = require("../models/Note");

module.exports={
    async logout(req, res) {
        try {
            req.session.destroy();
            return res.redirect("/");
        } catch (error) {
            console.log(error)
        }
    },
    async deleteSticky(req, res) {
        try {
            await Note.findByIdAndDelete(req.params.id)
            return res.redirect("/dashboard");
        } catch (error) {
            console.log(error)
        }
    },
    async deleteStickyFetch(req, res) {
        try {
            await Note.findByIdAndDelete(req.params.id)
            return res.send("Deleted sticky successfully");
        } catch (error) {
            console.log(error)
        }
    },

}