'use strict';
const mongoose = require('mongoose');


const jobsSchema = new mongoose.Schema({
    companyName: {type:String},
    jobTitle: {type:String},
    description: {type:String},
});


module.exports=jobsSchema;