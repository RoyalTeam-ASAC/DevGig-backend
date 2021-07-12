'use strict';

// const muntherSeed=require('../Models/seeding.model');
const muntherSeed=require('../Models/seedingJob.model');

const testController = (req,res)=>{
    // res.send('hello')
    const userObj=muntherSeed();
    res.json(userObj)
}

module.exports=testController;