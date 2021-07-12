'use strict';

const jobsSchema=require ('../Models/jobs.model');
const infoModal2= require('../Models/seedingJob.model');

const postReq2 = (req,res)=>{
    const{
    email,
    companyName,
    jobTitle,
    description
    }=req.body;
    console.log('req.body',req.body);
    infoModal2.findOne({email:email},(error,user)=>{
        if(error){
            res.send('user not found')
        }else{
            const newData={
                    companyName:companyName,
                    jobTitle:jobTitle,
                    description:description,
            }
            user.data.push(newData);
            console.log('user.data',user.data)
            console.log('newData',newData);
            user.save();
            res.json(user.data)
        }
    })
}

module.exports={
    postReq2, 
}