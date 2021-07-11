'use strict';
const mongoose = require('mongoose');
// const websiteSchema=require('./website.model')

const freelanceSchema = new mongoose.Schema({
    name: {type:String},
    skills: {type:String},
    bio: {type:String},
    // website:[websiteSchema],
    phone:{type:String},
    // websiteUrl:{type:String}
});


module.exports=freelanceSchema;