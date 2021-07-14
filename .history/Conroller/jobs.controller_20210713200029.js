'use strict';

const jobsSchema=require ('../Models/jobs.model');
const infoModal2= require('../Models/seedingJob.model');

const getReq= (req,res) =>{
    const email=req.query.email
    
    infoModal2.findOne({email:email}, (error, result)=>{
        if (error){
            res.send(error.message)
        }
        // console.log(result.data)
        res.send(result.data);

     
    });
    
  }

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

const delReq = (req, res)=> {
 
    const index = Number(req.params.index);
    // console.log(index)
    const { email} = req.query;
    
    infoModal2.findOne({email: email}, (err, result) => {
        
        const newdelete=result.data.filter((bok,idx)=>
        {
          return idx !==index
        }); 
        result.data=newdelete;
      
       result.save();
        res.send(result.data)
    });
}

const updateReq = (req, res)=> {


    const index=Number(req.params.index)
  
  const{companyName,jobTitle, description, email}=req.body;
  
  infoModal2.findOne({email:email},(error,result)=>{
    result.data.splice(index,1,{
        companyName:companyName,
        jobTitle:jobTitle,
        description:description
  }
  
  )
  result.save();
  res.send(result.data)
  })
  
  };

module.exports={
    postReq2, getReq, delReq, updateReq
}