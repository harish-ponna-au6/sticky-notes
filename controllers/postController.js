var User = require("../models/User");
var Note = require("../models/Note");
var {hash,compare} = require("bcryptjs");

module.exports = {
    async postRegister(req, res) {
        try {
            var user = new User({ ...req.body });
            const hashed = await hash(user.password, 10)
            user.password=hashed
            await user.save()
            req.session.userId = user._id;
            req.session.userName = user.name;
            res.redirect("/dashboard");
        } catch (error) {
            console.log(error)
        }
    },

    async postLogin(req, res) {
        try {
            var email = req.body.email;
            var password = req.body.password;
            if (!email || !password) return res.status(400).send("Enter all fields");
            const user = await User.findOne({ email: email })
            if (!user) throw("Incorrect credentials");
            const isMatched = compare(password, user.password);
            if (!isMatched) throw ("Incorrect credentials");
            req.session.userId = user._id;
            req.session.userName = user.name;
            res.redirect("/dashboard")
        } catch (error) {
            console.log(error)
            res.redirect("/");
        }
    },
    async postCreateSticky(req,res){
        try {
            const note = new Note({...req.body})
            note.userId=req.session.userId
            await note.save()
            res.redirect("/dashboard")
        } catch (error) {
            console.log(error)
        }
    },
  
 
};
