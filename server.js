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
const testController=require('./Conroller/test.controller');
var MongoClient = require('mongodb').MongoClient
const{
    getting,
    postReq,
    // userDelete,

}=require('./Conroller/freelance.controller')

//mongo
// mongoose.connect('mongodb://localhost:27017/freelance',
//     { useNewUrlParser: true, useUnifiedTopology: true }
// );


app.get('/',(req,res)=>{
    res.send('Hello World')
})

//API request
app.get('/findJobs', findJobs);

//Post request
app.get('/Notifies',testController)
// app.post('/test',testController)
// app.get('/freelance',testController)
// app.get('/freelance',getting)
app.post('/freelance',postReq)
// app.delete('/freelance/:free_idx',userDelete)


app.get('/Notifies', function (req, res) {
    // BAD! Creates a new connection pool for every request
    console.log('connected');
    mongoose.connect('mongodb://127.0.0.1:27017/freelance', function (err, db) {
    if (err) throw err;
    var coll = db.collection('datas');
    coll.find({}).toArray(function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(JSON.stringify(result));
        }
    })
});
   
        
});



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
