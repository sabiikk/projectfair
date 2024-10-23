import React from "react";
import Card from "react-bootstrap/Card";
import medaiplayerimage from "../assets/mediaplayeriage.jpeg";

import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BASE_URL } from "../sevices/baseUrl";
function ProjectCard({project}) {

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card style={{ width: "18rem" }} onClick={handleShow}>
        <Card.Img variant="top" src={`${BASE_URL}/uploads/${project.projectimage}`} />
        <Card.Body>
          <Card.Title>{project.title}</Card.Title>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{project.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row >
                <Col md={6}>
                <img src={`${BASE_URL}/uploads/${project.projectimage}`} alt="" width={'100%'} height={''}/>
                </Col>
                <Col md={6} >
                <h4>Description : </h4>
                <p>{project.overview}</p>
                <h4>Technologied </h4>
                <p>{project.language}</p>
                </Col>
            </Row>
        </Modal.Body>
        <div className="d-flex mt-4 mb-4 ">

            <Link style={{textDecoration:'none'}} className="text-info"> 
            <i class="fa-solid fa-link ms-4"></i>
            
            </Link>
            <Link style={{textDecoration:'none'}} className="text-info"> 
            <i class="fa-brands fa-github ms-3"></i>
            
            </Link>
        </div>
       
      </Modal>
    </>
  );
}

export default ProjectCard;
