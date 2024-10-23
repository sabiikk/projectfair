import axios from 'axios'
 //httpReqType : type od http call (GET POST PUT DELETE)
export const commonApi = async(httpReqType,url,reqBody,reqHeader) =>{
    const reqConfig = {
        method:httpReqType,
        url:url,
        data:reqBody,
        headers:reqHeader?reqHeader:{'Content-Type':'application/json'}
    }

    return await axios(reqConfig).then((result)=>{
        return result;
    }).catch((err)=>{
        return err;
    })


}