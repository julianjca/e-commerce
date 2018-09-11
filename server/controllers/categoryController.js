const Category = require('../models/categoryModel');
const mongodb = require('mongodb');
const jwt = require('jsonwebtoken');

module.exports = {
  create : function(req,res){
    Category.create(req.body)
    .then(data=>{
      res.status(200).json({
        msg : 'success adding data',
        data : data
      });
    })
    .catch(err=>{
      res.status(500).json({
        err
      });
    });
  },

  read : function(req,res){
    Category.find({})
    .then(data=>{
      res.status(200).json({
        msg : 'success finding data',
        data : data
      });
    })
    .catch(err=>{
      res.status(500).json({
        err
      });
    });
  },

  remove : function(req,res){
    Category.deleteOne({ _id: new mongodb.ObjectId(req.params.id) })
    .then(data=>{
      res.status(200).json({
        msg : 'success deleting data',
        data : data
      });
    })
    .catch(err=>{
      res.status(500).json({
        err
      });
    });
  },

  update : function(req,res){
    Category.findOneAndUpdate({ _id: new mongodb.ObjectId(req.params.id) },
    { $set: {
      name: req.body.name,
      price : req.body.price,
      description : req.body.description
    }})
    .then(data=>{
      res.status(200).json({
        msg : 'success updating data',
        data : data
      });
    })
    .catch(err=>{
      res.status(500).json({
        err
      });
    });
  },
};