import React from "react";
import imageSrc from "./Image.png";
import { Link } from "react-router-dom";

const DiscountProduct = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "80%",
        maxWidth: "400px",
        margin: "auto",
      }}
    >
      <div
        style={{
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          paddingBottom: "100%", // This maintains the aspect ratio of the image
          position: "relative",
        }}
      >
        <div
          className="card text-center"
          style={{
            position: "absolute",
            bottom: "10%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "80%",
            height: "50%",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            padding: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          <div className="card-body">
            <h5 className="card-title">Glass</h5>
            <p className="card-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem,
              nam!
            </p>
          </div>

          <Link className="btn btn-dark m-1" to="/buy">
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DiscountProduct;
