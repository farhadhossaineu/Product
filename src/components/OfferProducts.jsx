import React from "react";
import DiscountProduct from "./DiscountProduct";
import "bootstrap/dist/css/bootstrap.min.css";

const OfferProducts = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <DiscountProduct />
        </div>
        <div className="col-md-6">
          <DiscountProduct />
        </div>
        <div className="col-md-6">
          <DiscountProduct />
        </div>
        <div className="col-md-6">
          <DiscountProduct />
        </div>
      </div>
    </div>
  );
};

export default OfferProducts;
