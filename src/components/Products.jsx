/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Products = () => {
  const [data, setData] = useState([]);
  const [vegPizza, setVegPizza] = useState([]);
  const productBelow400 = [];
  const [nonVegPizza, setNonVegPizza] = useState([]);
  const [below400, setBelow400] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

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
  const productsBelow400 = (b400) => {
    console.log("Below 400", b400);

    if (b400 <= 400) {
      return productBelow400.push(b400);
    } else {
      return 0;
    }
  };

  // const vegFilter = (vegPizza) => {
  //   data.filter((item) => {
  //     if (vegPizza.isVeg === true) {
  //       return vegProducts.push(item);
  //     } else {
  //       return 0;
  //     }
  //   });
  //   let vProducts = [...new Set(vegProducts)];
  // };

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
              if (filterProduct("isVeg") === true) {
                return console.log("first");
              } else {
                return console.log("no return");
              }
            }}
          >
            Veg Pizzas
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => {
              filterProduct("women's clothing");
            }}
          >
            Non-Veg Pizzas
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => {
              productsBelow400("price");
            }}
          >
            ₹200 - ₹400
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => {
              filterProduct("electronics");
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
                    <h5 className="card-title mb-0">{product.name}...</h5>
                    <p className="card-text lead fw-bold">₹{product.price}</p>
                    <a
                      href={`/products/${product.id}`}
                      className="btn btn-outline-dark"
                    >
                      Buy Now
                    </a>
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
