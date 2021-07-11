'use strict';

// const freelanceSchema=require ('../Models/freelance.model');
const muntherSeed=require('../Models/freelance.model');

const postReq = (req,res)=>{
    const userObj = muntherSeed();
    res.json(userObj)
}

module.exports={
    postReq,
}