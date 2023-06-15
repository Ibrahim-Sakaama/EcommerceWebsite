import "../Auth/signup.css"
import AuthService from "../../service/AuthService";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const [data, setData] = useState({});
  const OnChangeHandler=(e)=>{
    setData({
        ...data,[e.target.name]:e.target.value,
    });
    console.log(data)
  }

  const navigate = useNavigate();
  const OnSubmitHandler=(e)=>{
    e.preventDefault();
    AuthService.signup(data)
    .then((res)=>{
      console.log(res)
      navigate('/')
    })
    .catch((err)=>{
      console.log(err)
    })
  }

    return(
<div className="signup-form">
  <form action="/examples/actions/confirmation.php" method="post" onSubmit={OnSubmitHandler}>
    <h2>Sign Up</h2>
    <p>Please fill in this form to create an account!</p>
    <hr />
    <div className="form-group">
      <div className="input-group-form">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <span className="fa fa-user" />
          </span>
        </div>
        <input type="text" className="form-control" name="name" placeholder="Name" required="required" onChange={OnChangeHandler}/>
      </div>
    </div>

    <div className="form-group">
      <div className="input-group-form">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <span className="fa fa-user" />
          </span>
        </div>
        <input type="text" className="form-control" name="username" placeholder="Username" required="required" onChange={OnChangeHandler}/>
      </div>
    </div>


    <div className="form-group">
      <div className="input-group-form">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i className="fa fa-paper-plane" />
          </span>
        </div>
        <input type="email" className="form-control" name="email" placeholder="Email Address" required="required" onChange={OnChangeHandler}/>
      </div>
    </div>



    <div className="form-group">
      <div className="input-group-form">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i className="fa fa-lock" />
          </span>
        </div>
        <input type="password" className="form-control" name="password" placeholder="Password" required="required" onChange={OnChangeHandler}/>
      </div>
    </div>


    <div className="form-group">
      <div className="input-group-form">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i className="fa fa-lock" />
            <i className="fa fa-check" />
          </span>
        </div>
        <input type="password" className="form-control" name="confirm_password" placeholder="Confirm Password" required="required" onChange={OnChangeHandler}/>
      </div>
    </div>

    <div className="form-group">
      <div className="input-group-form">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <span class="fa fa-map-marker"></span>
          </span>
        </div>
        <input type="text" className="form-control" name="address" placeholder="Address" required="required" onChange={OnChangeHandler}/>
      </div>
    </div>


    <div className="form-group">
      <label className="form-check-label"><input type="checkbox" required="required" /> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></label>
    </div>
    <div className="form-group">
      <button type="submit" className="btn btn-primary btn-lg">Sign Up</button>
    </div>
  </form>
  <div className="text-center">Already have an account? <a href="#">Login here</a></div>
</div>


    )
}

export default Signup