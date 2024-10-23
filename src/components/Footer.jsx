import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center  bg-dark text-light ">
        <div className="footer d-flex align-items-center-evenly p-4">
          <div style={{ width: "400px" }}>
            <Link to='/' style={{textDecoration:'none',color:'white'}}>
            <h5>
              
              <i
                class="fa-brands fa-stack-overflow  me-3"
                style={{ color: "", fontSize: "30px" }}
              ></i>{" "}
              <b>PROJECT FAIR</b>
            </h5>
            
            </Link>
            
            <p style={{ textAlign: "justify" }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
              non maiores suscipit aut, eaque recusandae, consequuntur
              laudantium vitae id libero dicta vero voluptatem pariatur
              quibusdam perspiciatis eum hic velit? Ipsam!
            </p>
          </div>
          <div className="d-flex flex-column ms-5 ">
            <h4>Links</h4>

            <Link to="/" style={{ textDecoration: "none",color:'white'  }}>
              Home
            </Link>
            <Link to="/dashboard" style={{ textDecoration: "none",color:'white'  }}>
              Dashboard
            </Link>
            <Link to="/project" style={{ textDecoration: "none",color:'white'  }}>
              {" "}
              Projects{" "}
            </Link>
          </div>
          <div className="d-flex flex-column ms-5">
            <h4>Guides</h4>
            <Link
              to="https://react.dev/"
              target="_blank"
              style={{ textDecoration: "none" ,color:'white' }}
            >
              react
            </Link>
            <Link
              to="https://react-bootstrap.netlify.app/"
              target="_blank"
              style={{ textDecoration: "none",color:'white'  }}
            >
              {" "}
              react bootstrap{" "}
            </Link>
            <Link
              to="https://www.npmjs.com/package/json-server"
              target="_blank"
              style={{ textDecoration: "none",color:'white'  }}
            >
              json server{" "}
            </Link>
          </div>

          {/* contact us  */}

          <div className="contactUs ms-5">
            <h4>Contact us</h4>
            <div className="d-flex">
              <input
                type="text"
                className="form-control"
                placeholder="enter your email id"
              />
              <button className="ms-3 btn  " style={{color:'#772953',backgroundColor:'white'}}>SUBSCRIBE</button>
            </div>
            <div className="d-flex justify-content-evenly align-item-center mt-4 ">
              <Link
                className=""
                style={{ textDecoration: "none", fontSize: "30px",color:'white' }}
              >
                <i class="fa-brands fa-instagram"></i>
              </Link>
              <Link
                className=""
                style={{ textDecoration: "none", fontSize: "30px",color:'white'  }}
              >
                <i class="fa-brands fa-twitter"></i>
              </Link>
              <Link
                className=""
                style={{ textDecoration: "none", fontSize: "30px",color:'white'  }}
              >
                {" "}
                <i class="fa-brands fa-facebook"></i>
              </Link>
              <Link
                className=""
                style={{ textDecoration: "none", fontSize: "30px",color:'white'  }}
              >
                <i class="fa-brands fa-reddit"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
