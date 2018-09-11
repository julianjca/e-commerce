const User = require('../models/userModel');
const mongodb = require('mongodb');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const axios = require('axios');

module.exports = {
  register : function(req,res){
    User.create({
      name : req.body.name,
      password : req.body.password,
      email : req.body.email
    })
    .then(data =>{
      res.status(200).json({
        data
      });
    })
    .catch(err=>{
      res.status(500).json({
        err
      });
    });
  },

  login : function(req,res){
    User.findOne({
      email : req.body.email
    })
    .then(user=>{
      let isPasswordValid = bcrypt.compareSync(req.body.password, user.password);
      if(isPasswordValid){
        jwt.sign({
          email : user.email,
          name : user.name
        }, process.env.JWT_SECRET,( err,token )=>{
          if( err ){
            res.status( 500 ).json({
              msg : err.message
            });
          }
          else{
            console.log(token);
            res.status( 200 ).json({
              mesg : 'login success',
              token : token,
              email : user.email,
              name : user.name
            });
          }
        });
      }
      else{
        res.status(401).json({
          error :err,
          message : "failed logging in"
        });
      }
    })
    .catch(err=>{
      res.status(401).json({
        message : "failed logging in"
      });
    });
  }
};