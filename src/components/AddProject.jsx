import React, { useContext, useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Row, Col } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import { addProjectApi } from "../sevices/allApi";
import { addProjectResponseContext } from "../context/ContextShare";

function AddProject() {
  const [token, setToken] = useState("");
  //useContext
  const {addProjectResponse,setAddProjectResponse}=useContext(addProjectResponseContext);
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"));
    }
  }, []);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [projectDetails, setaprojectdetails] = useState({
    title: "",
    language: "",
    github: "",
    website: "",
    overview: "",
    projectimage: "",
  });

  //state for showing preview image
  const [preview, setPreview] = useState("");
  useEffect(() => {
    if (projectDetails.projectimage) {
      setPreview(URL.createObjectURL(projectDetails.projectimage));
    }
  }, [projectDetails.projectimage]);

  const handleAddProject = async (e) => {
    e.preventDefault();
    const { title, language, github, website, overview, projectimage } =
      projectDetails;
    if (
      !title ||
      !language ||
      !github ||
      !website ||
      !overview ||
      !projectimage
    ) {
      toast.warning("please fill the form completely");
    } else {
      //here we are also uploading a file so we should sent body in the form of FormData

      const reqBody = new FormData();
      reqBody.append("title", title);
      reqBody.append("language", language);
      reqBody.append("github", github);
      reqBody.append("website", website);
      reqBody.append("overview", overview);
      reqBody.append("projectimage", projectimage);

      // here content type we are passing is multipart form data, so specific req header needed

      const reqHeader = {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      };

      const result = await addProjectApi(reqBody, reqHeader);
      if (result.status === 200) {
        setAddProjectResponse(result.data)
        toast.success(`${title} uploaded successfully`);
        setaprojectdetails({
          title: "",
          language: "",
          github: "",
          website: "",
          overview: "",
          projectimage: "",
        });
        handleClose();
      } else if (result.status === 409) {
        toast.warning(`${title} project is already exists`);
      } else {
        toast.error("upload faild");
      }
    }
  };

  const handleClose1 = () => {
    handleClose();
    setaprojectdetails({
      title: "",
      language: "",
      github: "",
      website: "",
      overview: "",
      projectimage: "",
    });
    setPreview("");
  };
  return (
    <>
      <button className="btn btn-dark" onClick={handleShow}>
        ADD PROJECT
      </button>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title className="text-dark">ADD PROJECT</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6}>
              <label htmlFor="projectImg">
                <input
                  type="file"
                  id="projectImg"
                  style={{ display: "none" }}
                  //files={projectDetails.projectimage}
                  onChange={(e) =>
                    setaprojectdetails({
                      ...projectDetails,
                      projectimage: e.target.files[0],
                    })
                  }
                />
                <img
                  src={
                    preview
                      ? preview
                      : "https://cdn.prod.website-files.com/6209ea9aee1f965d7fce7c19/64a3f1e5fd3c8f9b2788b39b_upload.svg"
                  }
                  width={"70%"}
                  alt=""
                />
              </label>
            </Col>

            <Col md={6}>
              <div>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Project Title"
                  className="form-control mb-3 mt-3 "
                  value={projectDetails.title}
                  onChange={(e) =>
                    setaprojectdetails({
                      ...projectDetails,
                      title: e.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder=" language used"
                  className="form-control mb-3"
                  value={projectDetails.language}
                  onChange={(e) =>
                    setaprojectdetails({
                      ...projectDetails,
                      language: e.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder=" git hub link"
                  className="form-control mb-3"
                  value={projectDetails.github}
                  onChange={(e) =>
                    setaprojectdetails({
                      ...projectDetails,
                      github: e.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="  website link"
                  className="form-control mb-3"
                  value={projectDetails.website}
                  onChange={(e) =>
                    setaprojectdetails({
                      ...projectDetails,
                      website: e.target.value,
                    })
                  }
                />
                <textarea
                  name=""
                  id=""
                  placeholder="Project overview"
                  className="form-control mb-3"
                  value={projectDetails.overview}
                  onChange={(e) =>
                    setaprojectdetails({
                      ...projectDetails,
                      overview: e.target.value,
                    })
                  }
                ></textarea>
              </div>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
          <Button variant="dark" onClick={handleAddProject}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </>
  );
}

export default AddProject;
