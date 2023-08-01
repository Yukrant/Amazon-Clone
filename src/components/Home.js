import React, { useState, useEffect } from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    setProducts(data.products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://www.minhaoperadora.com.br/wp-content/uploads/2020/07/Amazon-Prime-V%C3%ADdeo-ter%C3%A1-perda-consider%C3%A1vel-nos-pr%C3%B3ximos-dias.jpg"
          alt="banner"
        />
      </div>
      <div className="container my-3 home_row">
        <div className="row">
          {products.map((element) => {
            return (
              <div className="col-md-4" key={element.id}>
                <Product
                  title={element.title}
                  description={element.description}
                  price={element.price}
                  rating={element.rating}
                  thumbnail={element.thumbnail}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
