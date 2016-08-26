const express = require('express');
const router = express.Router();

const User = require('../models/user')


router.post('/register', (req, res) => {
  User.register(req.body, (err, newUser)=>{
    res.status(err ? 400 : 200).send(err || newUser)
  })
})

router.post('/login', (req, res) => {
  User.authenticate(req.body, (err, token) => {
    if (err){
      res.status(400).send(err)
    } else {
      res.cookie('authtoken', token).send();
    }
  });
})

router.get('/profile', User.authMiddleware, (req, res) =>{
  res.send(req.user)
})

router.get('/logout', (req, res)=>{
  res.clearCookie('authtoken').send();
})

// router.put('/profile', User.authMiddleWare, (req, res) =>{
//   /*User.findByIdAndUpdate(req.user._id, {$set: req.body}, {new: true}, (err, user)=>{
//
//   })*/
//
//   // req.user.username = req.body.username
//   //req.user.save(err =>{
//   //   res.status(err ? 400: 200).send(err)
//   // })
// })

module.exports = router;
