'use strict';

const mongoose = require('mongoose');
const freelanceSchema = require('./freelance.model');

const data = new mongoose.Schema({
    email:{type:String},
    data:[freelanceSchema]
})
const infoModal = mongoose.model('data',data);

const muntherSeed = ()=>{
    const muntherData={
        name:'munther',
        skills: 'javaScript,Css,Html,NoSQL',
        bio:'Full stack Web developer',
        phone:'000-000-000',
        // websiteUrl:'https://github.com/muntherabdlrahman'
    }
    const munther = new infoModal({
        email:'munther.abdlrahman@gmail.com',
        data:[muntherData]
    })
    munther.save();
    console.log('munther data',munther);
    return (munther)
}

module.exports=muntherSeed;