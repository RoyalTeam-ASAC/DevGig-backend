'use strict';
const mongoose = require('mongoose');
// const websiteSchema=require('./website.model')

const freelanceSchema = new mongoose.Schema({
    name: {type:String},
    skills: {type:String},
    bio: {type:String},
    // website:[websiteSchema],
    phone:{type:String},
    websiteUrl:{type:String}
});

const data = new mongoose.Schema({
    email:{type:String},
    data:[freelanceSchema]
})
const infoModal = mongoose.model('freelanceSchema',freelanceSchema);

const muntherSeed = ()=>{
    const muntherData={
        name:'munther',
        skills: 'javaScript,Css,Html,NoSQL',
        bio:'Full stack Web developer',
        phone:'000-000-000',
        websiteUrl:'https://github.com/muntherabdlrahman'
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
// module.exports=freelanceSchema;