// 'use strict';

// const muntherSeed=require('../Models/seeding.model');
const JobSeed=require('../Models/seedingJob.model');
const muntherSeed=require('../Models/seeding.model')
const razanSeed=require('../Models/seeding.model')
const muntherSeed=require('../Models/seeding.model')
const muntherSeed=require('../Models/seeding.model')



// const testController = (req,res)=>{
//     // res.send('hello')
//     const userObj=muntherSeed();
//     res.json(userObj)
// }


const testControllerJobs = (req, res)=>{
    const userObj=muntherSeed();
    res.json(userObj)
}
module.exports=testControllerJobs;

