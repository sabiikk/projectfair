import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Row,Col} from 'react-bootstrap'
import { BASE_URL } from '../sevices/baseUrl';
import { editUserProjectApi } from '../sevices/allApi';
import { editprojectResponseContext } from '../context/ContextShare';

function EditProject({project}) {
    const [show, setShow] = useState(false);
    const [preview,setPreview]= useState("")
    const {ditprojectReaponse,setEditprojectResponse} = useContext(editprojectResponseContext)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [projectDetails,setProjectDetails]= useState({
      id:project._id,
      title:project.title,
      language:project.language,
      github:project.github,
      website:project.website,
      overview:project.overview,
      projectimage:"",
      
    })
    const handleUpdate = async(e)=>{
      e.preventDefault();
      console.log("update values");
      console.log(projectDetails);
      const { title, language, github, website, overview, projectimage,id } = projectDetails;
      if (
        !title ||
        !language ||
        !github ||
        !website ||
        !overview ||
       !id
      ) {
        alert("please fill the form completely");
      }
      else{
        
      const reqBody = new FormData();
      reqBody.append("title", title);
      reqBody.append("language", language);
      reqBody.append("github", github);
      reqBody.append("website", website);
      reqBody.append("overview", overview);
      preview ? reqBody.append("projectimage",projectimage):
      reqBody.append("projectimage",project.projectimage)
      const token = sessionStorage.getItem("token");
      if(preview){
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        }
        const result = await editUserProjectApi(id,reqBody,reqHeader);
        console.log("==update project jsddjs result==");
        console.log(result);
        if(result.status === 200){
          handleClose()
          setEditprojectResponse(result)
        }
        
        
  
      }
      else{
        const reqHeader={
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        }
        const result = await editUserProjectApi(id,reqBody,reqHeader);
        console.log("===update project not result");
        console.log(result);
        if(result.status === 200){
          handleClose();
          setEditprojectResponse(result)
        }
        
        
      }
      }
      
      
    }
    useEffect(()=>{
      if(projectDetails.projectimage){
        setPreview(URL.createObjectURL(projectDetails.projectimage))
      }
    },[projectDetails.projectimage]);
    const handleClose1 = ()=>{
      handleClose();
      setProjectDetails({
        id:project._id,
        title:project.title,
        language:project.language,
        github:project.github,
        website:project.website,
        overview:project.overview,
        projectimage:"",
      })
      setPreview("")
    }
  return (
    <>
    <Link >
    <i class="fa-solid fa-pen-to-square text-primary" onClick={handleShow}></i>
    </Link>

    <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title className='text-dark'>EDIT PROJECT</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row >
                <Col md={6}>
                <label htmlFor="projectImg">

                <input type="file" id='projectImg' style={{display:'none'}}
                onChange={(e)=>setProjectDetails({...projectDetails,projectimage:e.target.files[0]})}
                />
                <img src={preview? preview:  `${BASE_URL}/uploads/${project?.projectimage}`} width={'70%'} alt="" />
                </label>
                </Col>

                <Col md={6} >
                <div>
                    <input type="text" value={projectDetails.title} name="" id="" placeholder='Project Title' className='form-control mb-3 mt-3 '
                    onChange={(e)=>setProjectDetails({...projectDetails,title:e.target.value})}
                    />
                    <input type="text" value={projectDetails.language} name="" id="" placeholder=' language used' className='form-control mb-3'
                    onChange={(e)=>setProjectDetails({...projectDetails,language:e.target.value})}
                    />
                    <input type="text" value={projectDetails.github} name="" id="" placeholder=' git hub link' className='form-control mb-3'
                    onChange={(e)=>setProjectDetails({...projectDetails,github:e.target.value})}
                    />
                    <input type="text" name=""value={projectDetails.website} id="" placeholder='  website link' className='form-control mb-3'
                    onChange={(e)=>setProjectDetails({...projectDetails,website:e.target.value})}
                    />
                    <textarea name="" id=""  value={projectDetails.overview} placeholder='Project overview' className='form-control mb-3'
                    onChange={(e)=>setProjectDetails({...projectDetails,overview:e.target.value})}
                    ></textarea>



                </div>
                
                </Col>
            </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
          <Button variant="dark" onClick={handleUpdate}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default EditProject
