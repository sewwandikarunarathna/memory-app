import React from "react";
import "../App.css";

const Home = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-3 col-md-4 col-sm-4 m-2 mb-sm-0">
          <div className="card">
            <img
              src="https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&w=300"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div className="d-flex justify-content-between">
              <button className="btn-read">
                  <i class="fa fa-eye"></i>
                </button>
                <button className="btn-edit">
                  <i class="fa fa-pencil"></i>
                </button>
                <button className="btn-delete">
                  <i class="fa fa-trash"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-4 m-2 mb-sm-0">
          <div className="card">
            <img
              src="https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&w=300"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div className="d-flex justify-content-between">
                <button className="btn-read">
                  <i class="fa fa-eye"></i>
                </button>
                <button className="btn-edit">
                  <i class="fa fa-pencil"></i>
                </button>
                <button className="btn-delete">
                  <i class="fa fa-trash"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-4 m-2 mb-sm-0">
          <div className="card">
            <img
              src="https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&w=300"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div className="d-flex justify-content-between">
              <button className="btn-read">
                  <i class="fa fa-eye"></i>
                </button>
                <button className="btn-edit">
                  <i class="fa fa-pencil"></i>
                </button>
                <button className="btn-delete">
                  <i class="fa fa-trash"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
