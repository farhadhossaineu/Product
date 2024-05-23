import React from "react";
import placeholderImage from "./Image(1).png"; // Replace with your image path

const Main = () => {
  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="row gx-5">
        <div className="col-md-6 content-container d-flex flex-column justify-content-center align-items-center">
          <div className="heading-container mb-3">
            <h3>
              Personalized Eyeglass <span>Shopping</span>
            </h3>
          </div>
          <div className="button-container">
            <button type="button" class="btn btn-secondary">
              Buy Now
            </button>
          </div>
        </div>
        <div className="col-md-6 image-container">
          <img
            src={placeholderImage}
            alt="Placeholder"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
