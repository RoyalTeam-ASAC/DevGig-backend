'use strict';

// const freelanceSchema=require ('../Models/freelance.model');
const infoModal= require('../Modals/seeding.model');

const postReq = (req,res)=>{
    const{
    email,
    name,
    skills,
    bio,
    website,
    phone,
    websiteUrl
    }=req.body;
    console.log('req.body',req.body);
    infoModal.findOne({email:email},(error,user)=>{
        if(error){
            res.send('use not found')
        }else{
            const newData={
                name:name,
                skills:skills,
                bio:bio,
                website:website,
                phone:phone,
                websiteUrl:websiteUrl
            }
            user.
        }
    })
}

module.exports={
    postReq,
}