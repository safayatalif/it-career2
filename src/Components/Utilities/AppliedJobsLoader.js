import { getAppliedJob } from "./fakeDb";

const AppliedJobsLoader =async()=>{
    const loaderJobs = await fetch ('/jobs.json');
    const jobs = await loaderJobs.json();
    const appliedJob = getAppliedJob();
    const appliedJobSave = [];
    for(const id in appliedJob){
        const addedJobs = jobs.find(pd => pd.id === id);
        if(addedJobs){
            const quantity = appliedJob[id];
            addedJobs.quantity = quantity;
            appliedJobSave.push(addedJobs);
        }
    }
    return appliedJobSave;
}
export default AppliedJobsLoader ;