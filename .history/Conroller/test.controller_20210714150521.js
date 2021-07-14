// 'use strict';

// const muntherSeed=require('../Models/seeding.model');
const JobSeed=require('../Models/seedingJob.model');
const {eradaSeed}=require('../Models/seeding.model')




// const testController = (req,res)=>{
//     // res.send('hello')
//     const userObj=muntherSeed();
//     res.json(userObj)
// }


const testControllerJobs = (req, res)=>{
    const userObj=eradaSeed();
    res.json(userObj)
}
module.exports=testControllerJobs;

