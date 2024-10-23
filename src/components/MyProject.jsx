import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddProject from "./AddProject";
import EditProject from "./EditProject";
import { deleteProjectApi, getUserProjects } from "../sevices/allApi";
import { addProjectResponseContext, editprojectResponseContext } from "../context/ContextShare";

function MyProject() {
  const [userProject,setuserProject]=useState([]);
  const {editprojectReaponse,setEditprojectResponse}= useContext(editprojectResponseContext)
  const {addProjectResponse,setAddProjectResponse} = useContext(addProjectResponseContext)
  const getUserProject= async()=>{
    const token = sessionStorage.getItem("token");
    const reqHeader= {
      'Content-Type':'application/json',
      'Authorization':`Beare ${token}`
    }
    const result = await getUserProjects(reqHeader);
    console.log("user project");
    console.log(result)
    setuserProject(result.data)
    
    
  }
  useEffect(()=>{
    getUserProject()
  },[addProjectResponse,editprojectReaponse])
  const handleDelect = async (id)=>{
    
    const token = sessionStorage.getItem("token");
    const reqHeader= {
      'Content-Type':'application/json',
      'Authorization':`Beare ${token}`
    }
   const result = await deleteProjectApi (id,reqHeader)
   console.log("delect response");
   console.log(result);
   if(result.status===200){
    alert("Project delected succecssully");
    getUserProject()
   }
   else{
    alert("something went wrong")
   }  
   
  }
  return (
    <>
      <div className="shadow p-5 mb-5">
        <div className="d-flex mt-4">
          <h5 className="text-center me-auto text-dark">My Project</h5>
          <AddProject />
          </div>

         {
          userProject?.length > 0?
          userProject.map((item)=>(
            <div className="p-3 mt-4 rounded-2 d-flex bg-light">
          <h5 className="mt-3">{item.title}</h5>

          <div className="d-flex ms-auto align-items-center">
            <p className="me-3 mt-3"><EditProject project={item} /></p>
          
          <Link>
            <i class="fa-solid fa-link text-info me-3"></i>
          </Link>

          <Link>
            <i class="fa-brands fa-github text-success"></i>
          </Link>

          <button className="btn" onClick={()=>handleDelect(item._id)}>
              
          <i class="fa-solid fa-trash ms-3 text-danger"></i>
          </button>
          
          </div>

        </div>


          ))
          :
          <p>No project found</p>
         }

      
      </div>
    </>
  );
}

export default MyProject;
