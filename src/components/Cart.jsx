import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { delCart } from "../redux/action";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  console.log(state);
  const dispatch = useDispatch();

  const handleClose = (item) => {
    dispatch(delCart(item));
  };

  const cartItems = (cartItem) => {
    return (
      <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
        <div className="container py-4">
          <button
            className="btn-close float-end"
            aria-label="Close"
            onClick={() => handleClose(cartItem)}
          ></button>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img
                src={cartItem.img_url}
                alt={cartItem.name}
                height="300px"
                width="280px"
              />
            </div>
            <div className="col-md-4">
              <h3>
                {cartItem.name}
                <div className="ml-2">
                  {cartItem.isVeg && (
                    <span className="badge bg-success">Veg</span>
                  )}
                  {!cartItem.isVeg && (
                    <span className="badge bg-danger">Non-Veg</span>
                  )}
                </div>
              </h3>
              <p className="lead fw-bold">{cartItem.description}</p>
              <div class="row">
                <div class="col">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label class="form-check-label" for="flexRadioDefault1">
                      Regular
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      checked
                    />
                    <label class="form-check-label" for="flexRadioDefault2">
                      Medium
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      checked
                    />
                    <label class="form-check-label" for="flexRadioDefault2">
                      Large
                    </label>
                  </div>
                </div>
                <div class="col">
                  <div class="dropdown">
                    <a
                      class="btn btn-warning dropdown-toggle btn-group"
                      href="#"
                      role="button group"
                      id="dropdownMenuLink"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      aria-label="Basic checkbox toggle button group"
                    >
                      choose topping(s)
                    </a>

                    <ul
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuLink"
                    >
                      <li>
                        <a class="dropdown-item" href="#">
                          <input
                            type="checkbox"
                            class="btn-check"
                            id="btncheck1"
                            autocomplete="off"
                          />
                          <label
                            class="btn btn-outline-primary"
                            for="btncheck1"
                          >
                            Red Pepper
                          </label>
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          <input
                            type="checkbox"
                            class="btn-check"
                            id="btncheck2"
                            autocomplete="off"
                          />
                          <label
                            class="btn btn-outline-primary"
                            for="btncheck2"
                          >
                            Onion
                          </label>
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          <input
                            type="checkbox"
                            class="btn-check"
                            id="btncheck3"
                            autocomplete="off"
                          />
                          <label
                            class="btn btn-outline-primary"
                            for="btncheck3"
                          >
                            Grilled Mushroom
                          </label>
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          <input
                            type="checkbox"
                            class="btn-check"
                            id="btncheck4"
                            autocomplete="off"
                          />
                          <label
                            class="btn btn-outline-primary"
                            for="btncheck4"
                          >
                            Extra Cheese
                          </label>
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          <input
                            type="checkbox"
                            class="btn-check"
                            id="btncheck5"
                            autocomplete="off"
                          />
                          <label
                            class="btn btn-outline-primary"
                            for="btncheck5"
                          >
                            Black Olive
                          </label>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <p className="lead fw-bold">₹{cartItem.price}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row">
            <h3>Your Cart is empty</h3>
          </div>
        </div>
      </div>
    );
  };

  const button = () => {
    return (
      <div className="container">
        <div className="row">
          <NavLink to="/checkout" className="btn btn-outline-dark mb-5">
            Proceed to checkout
          </NavLink>
        </div>
      </div>
    );
  };
  return (
    <div>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && button()}
    </div>
  );
};

export default Cart;
