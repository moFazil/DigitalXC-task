export const uploadCSV = async(file)=>{
    const formData = new FormData();
    formData.append("file",file);

    const response = await fetch("http://localhost:8080/api/santa/upload",{
        method:"POST",
        body:formData,
    });

    const data = await response.text();
    return data;
}