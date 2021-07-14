'use strict';

const freelanceSchema = require('../Models/freelance.model');
const infoModal = require('../Models/seeding.model');
const muntherSeed = require('../Models/seeding.model');





// const getting = (req,res)=>{
//     // res.send('hello')
//     const userObj=muntherSeed();
//     res.json(userObj)
// }


const gettingReq = (req, res) => {

    const searchQ = req.query.email;
    console.log('req.query.email', req.query.email)
    infoModal.findOne({ email: searchQ }, (error, user) => {

        if (error) {
            res.send(error.message);
        }
        // console.log(user.books)
        res.json(user.data);
        // }
    })
}




const postReq = (req, res) => {
    const {
        email,
        name,
        skills,
        bio,
        phone,
        websiteUrl
    } = req.body;
    console.log('req.body', req.body);
    infoModal.findOne({ email: email }, (error, user) => {
        if (error) {
            res.send('user not found')
        } else {
            const newData = {
                name: name,
                skills: skills,
                bio: bio,
                phone: phone,
                websiteUrl: websiteUrl
            }
            user.data.push(newData);
            console.log('user.data', user.data)
            // console.log('newData',newData);
            user.save();
            res.json(user.data)

        }
    })

}
const userDelete = (req, res) => {
    const deleteIndex = Number(req.params.free_idx);
    const searchQ = req.query.email;
    infoModal.findOne({ email: searchQ }, (error, data) => {
        const deleteNow = data.data.filter((dta, idx) => {
            return idx !== deleteIndex
        })
        data.data = deleteNow;
        data.save();
        res.send('User deleted')
    })

}
// const updateFreelance=(req,res)=>{
//     const {
//         email,
//         name,
//         skills,
//         bio,
//         phone,
//         websiteUrl

//     }=req.body;
//     const newArrAfterUp=Number(req.params.free_idx);
//     infoModal.findOne({email:email},(error,user)=>{
//         // if (error) {
//         //     res.send('user not found');
//         // }
//         // else{
//             user.data.splice(newArrAfterUp,1,{name:name,skills:skills,bio:bio,phone:phone,websiteUrl:websiteUrl});
//             user.save();
//             res.send(user.data)
//         // }
//     })
// }

const updateFreelance = (req, res) => {


    const index = Number(req.params.index)

    const {
        name,
        skills,
        bio,
        phone,
        websiteUrl,
        email
    } = req.body;

    infoModal.findOne({ email: email }, (error, result) => {
        result.data.splice(index, 1, {
            name:name,
            skills:skills,
            bio:bio,
            phone:phone,
            websiteUrl:websiteUrl
           
        }

        )
        result.save();
        res.send(result.data)
    })

};







module.exports = {
    gettingReq,
    postReq,
    userDelete,
    updateFreelance,
    muntherSeed

}