import React from "react";
import Products from "./Products";

const Home = () => {
  const banner_img_url =
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.retA0cao-zwlPMPf4IqPZgHaE8%26pid%3DApi&f=1";
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img
          src={banner_img_url}
          className="card-img"
          alt="Background"
          height="550px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">
              NEW PIZZA ARRIVALS
            </h5>
            <p className="card-text lead fs-2">
              {/* This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer. */}
              Check Out All Pizzas
            </p>
            {/* <p className="card-text">Last updated 3 mins ago</p> */}
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default Home;
