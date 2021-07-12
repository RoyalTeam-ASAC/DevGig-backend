'use strict';
const mongoose = require('mongoose');
const websiteSchema=require('../Models/website.model')

const freelanceSchema = new mongoose.Schema({
    name: {type:String},
    skills: {type:String},
    bio: {type:String},
    url:[{websiteSchema}],
    phone:{type:String},
    websiteUrl:{type:String}
});


module.exports=freelanceSchema;