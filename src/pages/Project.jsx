import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import ProjectCard from "../components/ProjectCard";
import { getALlprojects } from "../sevices/allApi";
import { Link } from "react-router-dom";

function Project() {
  const [allProject,setAllproject]= useState([])
  const [searchKey,setSearchKey]=useState("");
  const[isToken,setIsToken]=useState(false)


  const getAllProjrct = async()=>{
    console.log('search Key',searchKey);
    
    if (sessionStorage.getItem("token")){
      const token = sessionStorage.getItem("token");
      const reqHeader={
        "Content-Type":"application/json",
        Authorization:`Bearer ${token}`
      }
      const result = await getALlprojects(reqHeader,searchKey)
      console.log("all project");
      console.log(result)
      setAllproject(result.data)

      
      
    }
  }

  useEffect(()=>{
    getAllProjrct()
  },[searchKey])

  useEffect(()=>{
  if(sessionStorage.getItem("token")){
    setIsToken(true)
  }
  },[])







  return (
    <>
      <Header />
      <div className="container-fluid">
        <h3 className="text-center mt-5"> All project </h3>
      </div>
      {
        isToken ?
        <div>
        <div className="row mt-4">
          <div className="col-md-4"></div>
          <div className="col-md-4 d-flex">
            <input
              type="text"
              className="form-control mb-5"
              placeholder="search by Technology"
              onChange={(e)=>setSearchKey(e.target.value)}
              
              />
            <i
              class="fa-solid fa-magnifying-glass mt-2 "
              style={{ marginLeft: "-35px", fontSize: "17px" }}
            ></i>
  
          </div>
          <div className="col-md-4"></div>
  
        </div>
        
        <div className="container row my-5 ms-5 " style={{width:'300'}}>
        
  
            {
              allProject?.length>0?
              allProject.map((item)=>(
                <div className="col-md-3" >
                  <ProjectCard project={item}/>
                </div>
  
              )
  
              )
              :
              <p>no projects to disoklay</p>
            }
            {/* <ProjectCard /> */}
         
        </div>
        </div>:
        <div className="d-flex justify-center align-items-center flex-column">
          <img src="https://img.freepik.com/premium-vector/forgot-password_203633-484.jpg" alt=""  height="400px" width="400px" />
         
         <p className="m-5">Please<Link className="text-danger ms-3" to={'/login'} style={{textDecoration:'none',color:'blue'}}>Login</Link>To View All project</p>
        </div>
      }

  
    </>
  );
}

export default Project;
