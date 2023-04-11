// use local storage to manage cart data
const addToDb = id => {
    let appliedJob = getAppliedJob();
    // add quantity
    const quantity = appliedJob[id];
    if (!quantity) {
        appliedJob[id] = 1;
    }
    else {
       alert("already applied")
    }
    localStorage.setItem('applied-job', JSON.stringify(appliedJob));
}

const removeFromDb = id => {
    const appliedJob = getAppliedJob();
    if (id in appliedJob) {
        delete appliedJob[id];
        localStorage.setItem('applied-job', JSON.stringify(appliedJob));
    }
}

const getAppliedJob = () => {
    let appliedJob = {};
    const appliedJobToDb = localStorage.getItem('applied-job');
    if (appliedJobToDb) {
        appliedJob = JSON.parse(appliedJobToDb);
    }
    return appliedJob;
}

const deleteAppliedJob = () => {
    localStorage.removeItem('applied-job');
}

export {
    addToDb,
    removeFromDb,
    getAppliedJob,
    deleteAppliedJob
}
