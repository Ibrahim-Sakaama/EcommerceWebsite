import { useState } from "react";
import "../Auth/profile.css";
import { useNavigate, useParams } from "react-router-dom";
import AuthService from "../../service/AuthService";
import Swal from "sweetalert2";

const Profile = () => {

    const [Data, setData] = useState({});
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user)
    const id = user.user._id;
    const navigate = useNavigate();

    const OnChangeHandler = (e) => {
        setData({ ...Data, [e.target.name]: e.target.value});
        console.log(Data);
    };

    const OnSubmitHandler = (e) =>{
        e.preventDefault();

        Swal.fire({
            title: "Do you want to update your profile?",
            showDenyButton:true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`,
        }).then((result)=> {
            if (result.isConfirmed){
                AuthService
                    .update(id, Data)
                    .then((res) =>{
                        console.log(res);
                        navigate('/home/profile')
                    })
                    .catch((err) => {
                        console.log(err);
                    });
                Swal.fire("Saved!", "", "success");
            }else if (result.isDenied){
                Swal.fire("Changes are not saved", "", "info");
            }
        });
    };


    return(
<div>
  <div className="container">
    <div className="row gutters">
      <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12" style={{width:"75%"}}>
        <div className="card h-100">
          <div className="card-body">
            <div className="account-settings">
              <div className="user-profile">
                <div className="user-avatar">
                  <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Maxwell Admin" />
                </div>
                <h5 className="user-name" style={{fontSize:"18px"}}>{user.user.username}</h5>
                <h5 className="user-email">{user.user.email}</h5>
              </div>
              <div className="about">
                <h5>About</h5>
                <p>I'm {user.user.name}. Full Stack Designer I enjoy creating user-centric, delightful and human experiences.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12" style={{width:"100%"}}>
        <div className="card h-100">
          <div className="card-body">
            <div className="row gutters">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <h6 className="mb-2 texte-primary">Personal Details</h6>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-group">
                  <label htmlFor="fullName" style={{fontSize:"18px"}}>Full Name</label>
                  <input type="text" className="form-control" id="fullName" name="name" placeholder="Enter full name" onChange={OnChangeHandler} defaultValue={user.user.name} />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-group">
                  <label htmlFor="eMail" style={{fontSize:"18px"}}>Email</label>
                  <input type="email" className="form-control" id="eMail"  name="email" placeholder="Enter email" onChange={OnChangeHandler} defaultValue={user.user.email}/>
                </div>
              </div>

            </div>
            <div className="row gutters">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <h6 className="mt-3 mb-2 texte-primary">Address</h6>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-group">
                  <label htmlFor="Street" style={{fontSize:"18px"}}>Street</label>
                  <input type="text" className="form-control" id="Street" name="address" placeholder="Enter Street" onChange={OnChangeHandler} defaultValue={user.user.address}/>
                </div>
              </div>

            </div>
            <div className="row gutters">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="text-right">
                  <button type="button" id="submit" name="submit" className="btn btn-secondary">Cancel</button>
                  <button type="button" id="submit" name="submit" className="btn btn-primary" onClick={OnSubmitHandler}>Update</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


    )
}

export default Profile