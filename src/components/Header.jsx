import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  const handlelogout = () => {
    if (sessionStorage.getItem("token")) {
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("loggeduser");
      navigate("/");
    }
  };
  return (
    <>
      <Navbar className="bg-dark">
        <Container>
          <Navbar.Brand href="#home">
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              <i
                class="fa-brands fa-stack-overflow  me-3"
                style={{ color: "", fontSize: "30px" }}
              ></i>{" "}
              PROJECT FAIR
            </Link>
          </Navbar.Brand>
          <button
            className="ms-3 btn btn "
            style={{ color: "#772953", backgroundColor: "white" }}
            onClick={handlelogout}
          >
            <i class="fa-solid fa-power-off me-3"></i>LOG OUT
          </button>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
