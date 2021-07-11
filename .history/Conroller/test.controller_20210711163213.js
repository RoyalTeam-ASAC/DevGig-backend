'use strict';

const infoModal=require('../Models/seeding.model');

const testController = (req,res)=>{
    // res.send('hello')
    const userObj=infoModal();
    res.json(userObj)
}

module.exports=testController;