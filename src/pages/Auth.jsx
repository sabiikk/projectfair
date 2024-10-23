import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { loginApi, registerApi } from "../sevices/allApi";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
function Auth({ register }) {
  const registerForm = register ? true : false;

  const navigate = useNavigate(); //use navigate hook is useedd to refirect ro a particular path
  const [userData, setUserdata] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    const { username, email, password } = userData;
    if (!username || !email || !password) {
      toast.warning("please fill the form completely");
    } else {
      const result = await registerApi(userData);
      if (result.status === 201) {
        setUserdata({
          username: "",
          email: "",
          password: "",
        });
        toast.success(`${username} resgistered successfull`);
        //navigate to user loginpage after the registration is succesfull
        navigate("/login");
      }
      // else if(result.status === 400){
      //   toast.error(result)

      // }
      else {
        toast.error("something went erong");
      }
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = userData;
    if (!email || !password) {
      toast.warning("please fill the form completely");
    } else {
      const result = await loginApi(userData);
      console.log(result);
      if (result.status === 200) {
        sessionStorage.setItem("loggeduser", JSON.stringify(result.data.data));
        sessionStorage.setItem("token", result.data.token);
        toast.success(`${result.data.data.username} Logged in successfully`);
        navigate("/");

        setUserdata({
          email: "",
          password: "",
        });
      } else if (result.status === 401) {
        toast.error("invalid email or password");
      } else {
        toast.error("something went wrong");
      }
    }
  };
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="container w-75">
          <h5 style={{ fontWeight: "bolder" }}>
            <Link
              to={"/"}
              className="text-warning"
              style={{ textDecoration: "none" }}
            >
              <i class="fa-solid fa-arrow-left me-2"></i> BACK TO HOME
            </Link>
          </h5>

          <div>
            <Row>
              <Col
                md={6}
                className="p-4 d-flex justify-content-center align-items-center"
              >
                <img
                  src="https://intellectualcoin.io/icon/login.jpg"
                  width={"100%"}
                  alt=""
                />
              </Col>
              <Col md={6} className="mt-5 p-5 d-flex justify-content-center ">
                <form className="w-100 border border-secondary p-4 rounded">
                  <h3 className="text-center">
                    {" "}
                    <i className="fa-brands fa-stack-overflow me-3"></i> Project
                    Fair
                  </h3>

                  {registerForm ? (
                    <>
                      <h4 className="text-center mb-3 mt-3">
                        sign up to your account
                      </h4>
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Name "
                        className="form-control "
                        value={userData.username}
                        onChange={(e) =>
                          setUserdata({ ...userData, username: e.target.value })
                        }
                      />
                    </>
                  ) : (
                    <>
                      <h4 className="text-center mt-3 mb-3">
                        sign in your account
                      </h4>
                    </>
                  )}

                  <div className="mb-3 mt-3">
                    <input
                      type="email"
                      placeholder="email id"
                      className="form-control rounded"
                      value={userData.email}
                      onChange={(e) =>
                        setUserdata({ ...userData, email: e.target.value })
                      }
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      placeholder="password"
                      className="form-control rounded"
                      value={userData.password}
                      onChange={(e) =>
                        setUserdata({ ...userData, password: e.target.value })
                      }
                    />
                  </div>

                  {registerForm ? (
                    <div>
                      <button
                        className="btn btn-warning w-100 rounded"
                        onClick={handleRegister}
                      >
                        REGISTER
                      </button>
                      <p className="mt-3">
                        already a user? click here to{" "}
                        <Link
                          to={"/login"}
                          className="ms-2 text-info"
                          style={{ textDecoration: "" }}
                        >
                          {" "}
                          LOGIN
                        </Link>
                      </p>
                    </div>
                  ) : (
                    <div>
                      <button
                        className="btn btn-warning w-100 rounded"
                        onClick={handleLogin}
                      >
                        LOGIN
                      </button>
                      <p className="mt-3">
                        Not registerde yet? click here to{" "}
                        <Link
                          to={"/register"}
                          className="ms-2 text-info"
                          style={{ textDecoration: "" }}
                        >
                          {" "}
                          REGISTER
                        </Link>
                      </p>
                    </div>
                  )}
                </form>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Auth;
