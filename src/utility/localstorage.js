const getstoredjobapplication = () =>{
    const storedjobapplication= localStorage .getItem("jobapplication")
    if (storedjobapplication) {
        return JSON.parse(storedjobapplication)
    }
    else{
        return [];
    }
}


const savejobapplication = (id) =>{
    const storedjobapplication =getstoredjobapplication();
    const existjob = storedjobapplication.find(jobid => jobid == id);
    if (!existjob){
        storedjobapplication.push(id);
        localStorage.setItem("jobapplication",JSON.stringify(storedjobapplication))
    }

}

export { getstoredjobapplication,savejobapplication }