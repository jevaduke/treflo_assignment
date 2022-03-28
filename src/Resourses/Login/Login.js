import React from "react";
import "./Login.css";
import pizzaImg from "../Assets/pizza1.jpg";
import gsignin from "../Assets/g-signin.png";

const Login = () => {
  const styles = {
    height: 0,
    backgroundImage: `url(${pizzaImg})`,
  };
  return (
    <div className="Login">
      <div className="Login-Left">
        <div className="content-login-left">
          <div className="Heading">
            <h1>Welcome to Tom's Pizzas</h1>
          </div>
          <div>
            <h5>Please Login to Continue</h5>
          </div>
          <div>
            <h5>or</h5>
          </div>
          <div>
            <div class="row">
              <div class="card ">
                <div class="card-body ">
                  <div class="col-md-12 text-dark bg-light mb-3">
                    {" "}
                    <img className="gsignin" src={gsignin} />
                  </div>
                </div>
              </div>
            </div>{" "}
            <br />
            <p class="text-inverse text-center">
              create a new account?{" "}
              <a
                href="<?= base_url() ?>auth/login"
                data-abc="true"
                className="signup-route"
              >
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="Login-Right" style={styles}>
        <section class="login-block">
          <div class="container-fluid">
            <div class="row">
              <div class="col-sm-12">
                <form
                  class="md-float-material form-material"
                  action="#"
                  method="POST"
                >
                  <div class="auth-box card">
                    <div class="card-block">
                      <div class="row">
                        <div class="col-md-12">
                          <h3 class="text-center heading">
                            <h1>Login</h1>
                          </h3>
                        </div>
                      </div>
                      <div class="form-group form-primary">
                        <input
                          type="text"
                          class="form-control"
                          name="email"
                          value=""
                          placeholder="Email"
                          id="email"
                        />
                      </div>
                      <div class="form-group form-primary">
                        <input
                          type="password"
                          class="form-control"
                          name="password"
                          placeholder="Password"
                          value=""
                          id="password"
                        />
                      </div>
                      <div class="form-group form-primary"> </div>
                      <div class="row">
                        <div class="col-md-12">
                          <button
                            type="button"
                            class="btn btn-primary btn-md btn-block waves-effect text-center m-b-20"
                          >
                            <i class="fa fa-lock"></i> Sign in
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
