export const  getSearchJObApi =async({page})=>{

    const body = JSON.stringify({
        "limit": 10,
        "offset": page
       });
       
       const requestOptions = {
        method: "POST",
       
        body
       };
       
      const result=await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
      return result.json()
        
}




   