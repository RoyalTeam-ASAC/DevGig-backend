'use strict';

const mongoose = require('mongoose');
const jobsSchema = require('../Models/jobs.model');

const jobsData = new mongoose.Schema({
    email:{type:String},
    data:[jobsSchema]
})

const infoModal2 = mongoose.model('jobsdata',jobsData);

const JobSeed = ()=>{
    const muntherData={
        companyName:'Amazon',
        jobTitle: 'javaScript,Css,Html,NoSQL',
        description:'Full stack Web developer',
    }
    const munther = new infoModal2({
        email:'softwaredohanow@gmail.com',
        data:[muntherData]
    })
    munther.save();
    console.log('munther data',munther);
    return (munther)
}

module.exports=infoModal2;