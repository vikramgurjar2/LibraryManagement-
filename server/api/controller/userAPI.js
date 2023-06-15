const passport = require("passport");
const userSchema = require("../models/user");
const bcrypt = require("bcryptjs");
const genUID = require("./generateUID")
exports.registerUser = async (req, res) => {
    try {
        const name = req.body.name;
        const username = req.body.username;
        // const password = req.body.password
        const password = await bcrypt.hash(req.body.password, 10);
        const userType = "user";
        const phone = req.body.phone;
        const uniqueId = genUID();;

        let doc = await userSchema.findOne({ username: username })
        if (!doc) {
            const user = new userSchema({
                name: name,
                username: username,
                password: password,
                userType: userType,
                phone: phone,
                uniqueId: uniqueId
            });
            await user.save();
            return res.status(200).json({ msg: "User Added SuccessFully" });

        } else if (doc) {
            return res.status(400).json({ msg: " User Already Exist" });
        }
    }
    catch (error) {
        throw error;
    }
};




exports.loginUser = (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
        // console.log(err);
        if (err) res.send({ status: "500", message: "Try Again Later" });
        else if (!user) return res.send({ status: "202", message: "wrong cred" });
        else {
            req.logIn(user, (err) => {
                if (err) throw err;
                res.send({ status: "200", message: "Autheticated " });
                // console.log(req.user.fullName);
            });
        }
    })(req, res, next);
};


exports.userDetails = (req, res) => {
    res.send(req.user); // The req.user stores the entire user that has been authenticated inside of it.
    console.log(req.user);
};
exports.logout = (req, res, nect) => {
    req.logout(function (err) {
        if (err) { return next(err); }
        else {
            res.status(200).json({ msg: "Logged Out" })
        }
    });
};





