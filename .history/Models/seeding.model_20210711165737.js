'use strict';

const mongoose = require('mongoose');
const freelanceSchema = require('../Models/freelance.model');

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
        url:[
            'https://github.com/muntherabdlrahman',
            'https://github.com/muntherabdlrahman',
            'https://github.com/muntherabdlrahman',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png'],
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

module.exports=infoModal;