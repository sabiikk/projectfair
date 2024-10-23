import React from "react";
import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
function Profile() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="shadow p-5 mb-5">
        <div className="d-flex">
          <h5>Profile</h5>
          <button
            className="ms-auto btn btn-dark"
            onClick={() => setOpen(!open)}
          >
            {
              open?
            <i class="fa-solid fa-angle-up"></i>:
            <i class="fa-solid fa-angle-down"></i>

            }
          </button>
        </div>

        <Collapse in={open}>
          <div>
            <div className="d-flex justify-content-center align-items-center">
              <label htmlFor="profileImg">

                <input type="file" id="profileImg" style={{display:'none'}} />
                <img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png" width={'150px'} alt="" />
                
              </label>
            </div>
            <div className="justify-content-center align-items-center text-center mt-4">
              <input type="text" name="" id="" placeholder="Git Hub Link" className="form-control mb-3" />
              <input type="text" name="" id="" placeholder="Linked-In Link" className="form-control mb-3" />
              <button className="btn btn-dark w-100">UPDATE</button>
              
            </div>
          </div>
        </Collapse>
      </div>
    </>
  );
}

export default Profile;
