const fetching = async(id) =>{
    const res =  await fetch(id);
    const data = res.json;
}