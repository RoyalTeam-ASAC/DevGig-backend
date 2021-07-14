'use strict';
require('dotenv').config();
const express = require('express');
const app = express();
const axios = require("axios");
const mongoose = require('mongoose');
app.use(express.json());
const PORT = process.env.PORT;
const cors = require('cors');
app.use(cors());
const jwt = require('jsonwebtoken');
const jwksClient = require('jwks-rsa');

////////////////////////////////////////
const findJobs = require('./Conroller/findJobs');
// const testController=require('./Conroller/test.controller');
// var MongoClient = require('mongodb').MongoClient
const{
    gettingReq,
    postReq,
    userDelete,
    updateFreelance

}=require('./Conroller/freelance.controller')
//////////////////////////////////////////////////////////////

mongoose.connect('mongodb://localhost:27017/userfreelance',
{ useNewUrlParser: true, useUnifiedTopology: true }
);

const userModel = require('./Models/user.model');
const infoModal2 = require('./Models/seedingJob.model');
const findJobs = require('./Conroller/findJobs');
const testControllerJobs=require('./Conroller/test.controller');
const{postReq}=require('./Conroller/freelance.controller')
const{postReq2}=require('./Conroller/jobs.controller')
const{getReq}=require('./Conroller/jobs.controller')
const{delReq}=require('./Conroller/jobs.controller')
const{updateReq}=require('./Conroller/jobs.controller')

//mongo
mongoose.connect('mongodb://localhost:27017/jobs',

    { useNewUrlParser: true, useUnifiedTopology: true }
);



app.get('/userfreelance',gettingReq)
app.post('/userfreelance',postReq)
app.delete('/userfreelance/:free_idx',userDelete)
// app.put('/up-userfreelance/:free_idx', updateFreelance)
app.put('/userfreelance/:index', updateFreelance)

app.get('/',(req,res)=>{
    res.send('Hello World')
})
app.get('/jobs', getReq)
app.delete('/jobs/:index', delReq)
app.put('/jobs/:index', updateReq)
app.post('/jobs',postReq2)

app.get('/findJobs', findJobs);


app.get('/test')

 



const client = jwksClient({
    // this url comes from your app on the auth0 dashboard 
    jwksUri: `https://dev-rxdxwsv9.eu.auth0.com/.well-known/jwks.json`
});





// this is a ready to use function
const getKey = (header, callback) => {
    client.getSigningKey(header.kid, function (err, key) {
        const signingKey = key.publicKey || key.rsaPublicKey;
        callback(null, signingKey);
    });
}

// 'Bearer ;alsdkj;laskd;lkasd;lkl'
app.get('/authorize', (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, getKey, {}, (err, user) => {
        if (err) {
            res.send('invalid token');
        }
        res.send(user)
    })
    res.send(token);
});


app.listen(PORT, () => {
    console.log(`listening to port: ${PORT}`);
})
//
