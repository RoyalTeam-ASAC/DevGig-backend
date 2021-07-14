// 'use strict';

// const muntherSeed=require('../Models/seeding.model');
const JobSeed=require('../Models/seedingJob.model');
const muntherSeed=require('../Models/seeding.model')


// const testController = (req,res)=>{
//     // res.send('hello')
//     const userObj=muntherSeed();
//     res.json(userObj)
// }


const testControllerJobs = (req, res)=>{
    const userObj=JobSeed();
    res.json(userObj)
}
module.exports=testControllerJobs;

