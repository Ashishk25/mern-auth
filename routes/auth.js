const express = require('express');
const User = require('../model/User');
const authRouter = express.Router();


authRouter.post('/googlelogin', (req, res) => {
    User.findOne({ userID: req.body.data.userID }, (err, user) => {
        if (user == null) {
            const user = new User(req.body.data);
            user.save()
                .then((result) => {
                    console.log('user saved');
                })
                .catch((err) => {
                    console.log(err);
                });
        } else
            console.log('user already exist');
    })

})

module.exports = authRouter;