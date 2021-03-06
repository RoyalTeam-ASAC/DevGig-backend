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
        email:'munther.abdlrahman@gmail.com',
        data:[muntherData]
    })
    munther.save();
    console.log('munther data',munther);
    return (munther)
}
const razanSeed = ()=>{
    const razanData={
        name:'razan ',
        skills: 'css',
        bio:'css',
        phone:'7777777777777777777',
        websiteUrl:'https://en.wikipedia.org/wiki/Johnny_Depp'
    }
    const razan = new infoModal({
        email:'razanalamleh@gmail.com',
        data:[razanData]
    })
    razan.save();
    console.log('munther data',razan);
    return (razan)
}
const yazanSeed = ()=>{
    const yazanData={
        name:'johny deep',
        skills: 'arting',
        bio:'charactor',
        phone:'9999999999000',
        websiteUrl:'https://en.wikipedia.org/wiki/Johnny_Depp'
    }
    const yazan = new infoModal({
        email:'razanalamleh@gmail.com',
        data:[yazanData]
    })
    yazan.save();
    console.log('munther data',yazan);
    return (yazan)
}
const eradaSeed = ()=>{
    const eradaData={
        name:'johny deep',
        skills: 'arting',
        bio:'charactor',
        phone:'9999999999000',
        websiteUrl:'https://en.wikipedia.org/wiki/Johnny_Depp'
    }
    const erada = new infoModal({
        email:'razanalamleh@gmail.com',
        data:[eradaData]
    })
    erada.save();
    console.log('munther data',erada);
    return (erada)
}

module.exports={infoModal,
    muntherSeed,
    razanSeed,
    yazanSeed,
    eradaSeed
 }