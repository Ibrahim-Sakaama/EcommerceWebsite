import "../Auth/signin.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthService from "../../service/AuthService";

const Signin = ()=>{
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
      AuthService.signin(data)
      .then((res)=>{
        console.log(res)
        localStorage.setItem("user",JSON.stringify(res.data)) //Sauvegarde
        navigate('/home')
      })
      .catch((err)=>{
        console.log(err)
      })
    }


    return(
<div className="wrapper">
  <div className="logo">
    <img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png" alt />
  </div>
  <div className="text-center mt-4 name">
    Twitter
  </div>
  <form className="p-3 mt-3" onSubmit={OnSubmitHandler}>
    <div className="form-field d-flex align-items-center">
        <span class="fa fa-user" style={{color:"black"}}></span>
      <input type="text" name="username" id="userName" placeholder="Username" onChange={OnChangeHandler}/>
    </div>
    <div className="form-field d-flex align-items-center">
        <span class="fa fa-lock" style={{color:"black"}}></span>
      <input type="password" name="password" id="pwd" placeholder="Password" onChange={OnChangeHandler}/>
    </div>
    <button className="btn mt-3">Login</button>
  </form>
  <div className="text-center fs-6">
    <a href="#">Forget password?</a> or <a href="#">Sign up</a>
  </div>
</div>

    )
}

export default Signin