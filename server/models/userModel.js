const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type: String
    },
    email:{
        type: Number
    },
    password : {
        type : String
    },
    boughtProducts : [{
      type : mongoose.Schema.Types.ObjectId,
      ref : 'Product'
    }]
},{
    timestamps: true
});

const User = mongoose.model('User', userSchema);
module.exports = User;