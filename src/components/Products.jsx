/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { addCart } from "../redux/action";
import { useDispatch } from "react-redux";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  let componentMounted = true;

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch(
        "https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68"
      );

      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        // setVegpizza(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    console.log("Cat", cat);
    const updatedList = data.filter((item) => item.category === cat);
    setFilter(updatedList);
  };
  const productIsVeg = (isVeg) => {
    console.log(isVeg);
    const updatedList = data.filter((item) => item.isVeg === isVeg);
    console.log(updatedList);
    setFilter(updatedList);
  };
  const productsBelow400 = (x, y) => {
    console.log(x, y);
    const updatedList = data.filter(
      (item) => x <= item.price && item.price <= y
    );

    console.log(updatedList);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => {
              setFilter(data);
            }}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => {
              productIsVeg(true);
            }}
          >
            Veg Pizzas
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => {
              productIsVeg(false);
            }}
          >
            Non-Veg Pizzas
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => {
              productsBelow400(200, 400);
            }}
          >
            ₹200 - ₹400
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => {
              productsBelow400(400, 500);
            }}
          >
            ₹400 - ₹500
          </button>
        </div>
        {filter.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <div className="card h-100 text-center p-4" key={product.id}>
                  <img
                    src={product.img_url}
                    className="card-img-top"
                    alt={product.name}
                    height="250px"
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-0">
                      {product.name}
                      <div className="ml-2">
                        {product.isVeg && (
                          <span className="badge bg-success">Veg</span>
                        )}
                        {!product.isVeg && (
                          <span className="badge bg-danger">Non-Veg</span>
                        )}
                      </div>
                    </h5>
                    <p>{product.description}</p>
                    <p className="card-text lead fw-bold">₹{product.price}</p>

                    <button
                      className="btn btn-outline-dark px-4 py-2"
                      onClick={() => addProduct(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
          <div className="row justify-content-center">
            {loading ? <Loading /> : <ShowProducts />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
