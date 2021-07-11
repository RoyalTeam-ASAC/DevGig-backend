'use strict';
const mongoose = require('mongoose');

const freelanceSchema = new mongoose.Schema({
    name: {type:String},
    skills: {type:String},
    
});

module.exports=freelanceSchema;