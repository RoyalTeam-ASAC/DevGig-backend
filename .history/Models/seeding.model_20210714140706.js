'use strict';

const mongoose = require('mongoose');
const freelanceSchema = require('../Models/freelance.model');

const userdata = new mongoose.Schema({
    email:{type:String},
    data:[freelanceSchema]
})

const infoModal = mongoose.model('user',userdata);

const muntherSeed = ()=>{
    const muntherData={
        name:'johny deep',
        skills: 'arting',
        bio:'charactor',
        phone:'9999999999000',
        websiteUrl:'https://en.wikipedia.org/wiki/Johnny_Depp'
    }
    const munther = new infoModal({
        email:'razanalamleh@gmail.com',
        data:[muntherData]
    })
    munther.save();
    console.log('munther data',munther);
    return (munther)
}

module.exports=infoModal ;