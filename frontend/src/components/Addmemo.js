import React from "react";
import addMemoImage from "../assets/addmemo.jpg";

const Addmemo = () => {
  return (
    <div className="d-flex justify-content-center mt-4">
      <div className="p-2 align-items-center col-lg-6 col-md-8  col-sm-8">
        <h2 className="">Add Your New Memory</h2>
        <form action="" className="">
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Memory Title
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Date of Memory
            </label>
            <input
              type="date"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <button className="addmemo-btn" type="submit">
            Create Memory
          </button>
        </form>
      </div>

        <div className="p-2 align-self-center">
          <img src={addMemoImage} alt="add memo" className="addmemo-img" />
        </div>
    </div>
  );
};

export default Addmemo;
