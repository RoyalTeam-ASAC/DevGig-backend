'use strict';

// const freelanceSchema=require ('../Models/freelance.model');
const muntherSeed=require('../Models/freelance.model')
const postReq = (req,res)=>{
    res.json(muntherSeed)
}

module.exports={
    postReq,
}