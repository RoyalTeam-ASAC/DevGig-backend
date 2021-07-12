'use strict';

const mongoose = require('mongoose');

const websiteSchema = new mongoose.Schema({
    url: [{
        web1: mongoose.Schema.Types.Url,
        // web2: mongoose.SchemaTypes.Url,
        // web3: mongoose.SchemaTypes.Url,
        // image: mongoose.SchemaTypes.Url
    }]
});


 module.exports=websiteSchema;