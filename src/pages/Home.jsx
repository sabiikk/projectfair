import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import home_image from "../assets/imageproject.png";
import ProjectCard from "../components/ProjectCard";
import { getHomeProject } from "../sevices/allApi";

function Home() {

  const [isLogin,setIsLogin] = useState(false)
  const [homeProject,setHomeProject]=useState([])

  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setIsLogin(true)
    }
    getHomeProjectsitems()
  },[])


  const getHomeProjectsitems = async()=>{
    const result = await getHomeProject()
    console.log("home projrcts")
    console.log(result)
    setHomeProject(result.data)
  }
  return (
    <>
      <div
        className="container-fluid bg-dark p-4 mb-4 "
        style={{ width: "100%", height: "100vh", color: "white" }}
      >
        <Row>
          <Col
            md={6}
            className="d-flex justify-content-center align-items-center flex-column"
          >
            <div>
              <h3>Project fair</h3>
              <h6>One step destination for any software projects</h6>
            </div>

            {
              isLogin ? 
              <Link
              to="/dashboard"
              style={{ textDecoration: "none", color: "white" }}
              className="mt-4"
            >
              <button className="btn btn-outline-light ">
                {" "}
                MANAGE PROJECTS <i class="fa-solid fa-arrow-right ms-3"></i>
              </button>
            </Link>

            :

            <Link
            to="/login"
            style={{ textDecoration: "none", color: "white" }}
            className="mt-4"
          >
            <button className="btn btn-outline-light ">
              {" "}
              GET STARTED <i class="fa-solid fa-arrow-right ms-3"></i>
            </button>
          </Link>


            }

            
          </Col>
          <Col
            md={6}
            className="d-flex justofy-content-center align-items-center flex-column mt-5"
          >
            <img width={"700px"} src={home_image} alt="" />
          </Col>
        </Row>
      </div>

      <div className="container-fluid">
        <h2 className="text-center my-5">Explore Our Projects</h2>


        <marquee behavior="" direction="" scrollAmount={16}>

        <Row>
          {
            homeProject?.length>0?
            homeProject.map((item)=>(
              <div className="col-md-4 justify-content-center d-flex p-4">
              <ProjectCard    project={item} />
            </div>
            )):
            <p>No project found</p>
          }
          

          {/* <div className="col-md-4 justify-content-center d-flex p-4">
            <ProjectCard />
          </div>

          <div className="col-md-4 justify-content-center d-flex p-4">
            <ProjectCard />
          </div> */}
        </Row>
        </marquee>
        

        <Link to={'/project'} className="text-info m-5" >
        <h5 className="text-center">See More projects</h5>
        </Link>
      </div>
    </>
  );
}

export default Home;
