import React from "react";
import Products from "./Products";
import asset from'../images/bg.jpg';

const Home = () => {
  return (
    <div>
      <div className="card bg-dark text-white border-0">
        <img
          src={asset}
          className="card-img"
          alt="BackGround"
          height="80%"
        />
        <div className="card-img-overlay">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">
              NEW SEASON ARRIVALS
            </h5>
            <p className="card-text leads fs-2">CHECK OUT ALL THE TRENDS</p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};
export default Home;
