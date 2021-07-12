'use strict';

const mongoose = require('mongoose');

 const websiteSchema = new mongoose.Schema({
    url: {
        wbe1: mongoose.SchemaTypes.Url,
        web2: mongoose.SchemaTypes.Url,
        web3: mongoose.SchemaTypes.Url,
        image: mongoose.SchemaTypes.Url
    }
 });

 module.exports=websiteSchema;