import { commonApi } from "./commonApi"
import { BASE_URL} from './baseUrl'


//register api
export const registerApi = async(userDetails) =>{
    return await commonApi("POST", `${BASE_URL}/user/register`,userDetails,'')
}

//login api
export const loginApi = async(userDetails) =>{
    return await commonApi("POST",`${BASE_URL}/user/login`,userDetails,'')
}


//add project api
export const addProjectApi = async(projectdetails,reqHeader) =>{
    console.log("----------");
    console.log(reqHeader)
    return await commonApi("POST",`${BASE_URL}/project/addProject`,projectdetails,reqHeader)
}

//get home projects 3 nos api 

export const getHomeProject = async()=>{
    return await commonApi("GET",`${BASE_URL}/project/homeProjects`,"","")
}

//get all projects 

export const getALlprojects = async(reqHeader,searchKey)=>{
    return await commonApi("GET",`${BASE_URL}/project/getallproject?search=${searchKey}`,"",reqHeader)
}

//get user projects 

export const getUserProjects = async(reqHeader)=>{
    return await commonApi("GET",`${BASE_URL}/project/userprojects`,"",reqHeader)
}

//update project
export const editUserProjectApi = async (projectId,reqBody,reqHeader)=>{
    return await commonApi('PUT',`${BASE_URL}/project/editproject/${projectId}`,reqBody,reqHeader)
}

//delectProjrct
export const deleteProjectApi = async(projectId,reqHeader)=>{
    return await commonApi('DELETE',`${BASE_URL}/project/delete/${projectId}`,{},reqHeader)
}