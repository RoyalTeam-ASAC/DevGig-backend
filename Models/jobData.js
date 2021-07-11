

//information for jobs
class jobData {
constructor (jobRequest){
this.title=jobRequest.title 
this.job_type=jobRequest.job_type 
this.company_name=jobRequest.company_name 
this.publication_date=jobRequest.publication_date 
// this.description=jobRequest.description 
}
}

module.exports=jobData;