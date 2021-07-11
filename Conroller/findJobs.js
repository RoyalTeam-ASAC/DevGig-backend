'use strict';
const axios = require('axios');
const { response } = require('express');
const jobData = require('../Models/jobData');



//api for jobs
const findJobs = async (req, res) => {
    let jobList = [];
    let url = `https://remotive.io/api/remote-jobs?category=software-dev&limit=10`
    await axios.get(url).then(response => {
        let jobList =response.data.jobs.map(item =>{
            return new jobData (item);
        })
        res.json(jobList)
    }).catch(error => {
        res.send(error.message);
    })

}


module.exports = findJobs