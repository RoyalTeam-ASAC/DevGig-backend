'use strict';
const express = require('express');
const app = express();
const axios = require("axios");
// require mongoose
const mongoose = require('mongoose');

app.use(express.json());

require('dotenv').config();
const PORT = process.env.PORT;
const cors = require('cors');
app.use(cors());

const jwt = require('jsonwebtoken');
const jwksClient = require('jwks-rsa');

const findJobs = require('./Conroller/findJobs');
const testController=require('./Conroller/test.controller');
const{
    postReq
}=require('./Conroller/freelance.controller')

//mongo
mongoose.connect('mongodb://localhost:27017/freelance',
    { useNewUrlParser: true, useUnifiedTopology: true }
);

//API request
app.get('/findJobs', findJobs);

//Post request
app.get('/test',testController)
// app.post('/test',testController)
// app.post('/freelance',postReq)
app.get('/freelance',postReq)

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
