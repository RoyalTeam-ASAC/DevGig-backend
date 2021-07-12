'use strict';

const freelanceSchema=require ('../Models/freelance.model');
const infoModal= require('../Models/seeding.model');








const postReq = (req,res)=>{
    const{
    email,
    name,
    skills,
    bio,
    phone,
    websiteUrl
    }=req.body;
    console.log('req.body',req.body);
    infoModal.findOne({email:email},(error,user)=>{
        if(error){
            res.send('user not found')
        }else{
            const newData={
                name:name,
                skills:skills,
                bio:bio,
                phone:phone,
                websiteUrl:websiteUrl
            }
            user.data.push(newData);
            console.log('user.data',user.data)
            // console.log('newData',newData);
            user.save();
            res.json(user.data)
        }
    })

}



// const userDelete=(req,res)=>{
//     const deleteIndex = Number(req.params.free_idx);
//     const {email}=req.query
//     infoModal.findOne({email:email}),(error,user)=>{
//         // if(error){
//         //     res.send(error.message);

//         // }else{
//         //     user.data.splice(deleteIndex,1);
//         //     console.log('deleteIndex',deleteIndex)
//         //     console.log('user.data',user.data)
//         //     user.save();
//         //     res.send(user.data)

//         // }


//         const newDelete=user.data.filter((element,idx)=>{
//             return idx !== free_idx
//         })
//         user.data=newDelete user
//     }

    
// }






module.exports={
    postReq,
    
}