'use strict';

const mongoose = require('mongoose');
const freelanceSchema = require('./freelance.model');

const testData = new mongoose.Schema({
    test:[freelanceSchema]
})