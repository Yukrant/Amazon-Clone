import React from "react";
// import "./Product.css";

function Product({ title, description, price, rating, thumbnail }) {
  return (
    <div className="container my-3 product">
      <div className="card" style={{ width: "20rem" }}>
        <img src={thumbnail} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">⭐{rating}</p>
          <p className="card-text">
            <small>Rs</small>
            <strong> {price}</strong>
          </p>
          <a href="/" className="btn btn-warning btn-sm">
            Add to Basket
          </a>
        </div>
      </div>
    </div>
  );
}

export default Product;
