import "./login.scss";

import logo from "../../assets/logo.png";
import Footer from "../Footer/footer";

const Login = () => {
  return (
    <>
      <div className="login">
        <div className="login-card">
          <div className="img-div">
            <img src={logo} alt="" />
          </div>

          <div className="text-div">
            <h3 className="h3-b">
              Welcome to <h3 className="h3-o">GO Buddy Goo</h3>{" "}
            </h3>
            <p>Sign in or Register to explore more</p>
          </div>

          <div className="textarea-div">
            <label htmlFor="">Mobile</label>
            <input type="number" placeholder="+977**********" />
          </div>

          <div className="textarea-div">
            <label htmlFor="">Password</label>
            <input type="text" placeholder="********" />
          </div>

          <div className="btn-div">
            <button>Login</button>
            <h5>Use OTP Insted?</h5>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
