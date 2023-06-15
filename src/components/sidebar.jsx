import { Link } from "react-router-dom"

const Sidebar = () => {
    return (
        <div className="page-sidebar">
        {/* START X-NAVIGATION */}
        <ul className="x-navigation">
          <li className="xn-logo">
            <a href="index.html">Ibrahim</a>
            <a href="#" className="x-navigation-control" />
          </li>
          <li className="xn-profile">
            <a href="#" className="profile-mini">
              <img src="assets/images/users/ibra.png" alt="Ibrahim" />
            </a>
            <div className="profile">
              <div className="profile-image">
                <img src="assets/images/users/ibra.png" alt="Ibrahim" />
              </div>
              <div className="profile-data">
                <div className="profile-data-name">Ibrahim</div>
                <div className="profile-data-title">Web Developer/Designer</div>
              </div>
              <div className="profile-controls">
                <a href="pages-profile.html" className="profile-control-left"><span className="fa fa-info" /></a>
                <a href="pages-messages.html" className="profile-control-right"><span className="fa fa-envelope" /></a>
              </div>
            </div>                                                                        
          </li>
          <li className="xn-title">Navigation</li>
          <li className="active">
            <a href="index.html"><span className="fa fa-desktop" /> <span className="xn-text">Dashboard</span></a>                        
          </li>
          <li className="xn-title">
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{width:"100px", backgroundColor:"#1caf9a", color:"#fff"}}>
              Category
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li><Link class="dropdown-item" to="/home/listCategory">List Category</Link></li>
              <li><Link class="dropdown-item" to="/home/addCategory">Add Category</Link></li>
            </div>
          </div>

          
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{margin:"5%", backgroundColor:"#1caf9a", color:"#fff"}}>
              SubCategory
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li><Link class="dropdown-item" to="/home/listSubcategory">List SubCategory</Link></li>
              <li><Link class="dropdown-item" to="/home/addSubcategory">Add SubCategory</Link></li>
            </div>
          </div>


          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{margin:"5%", backgroundColor:"#1caf9a", color:"#fff"}}>
              Products
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li><Link class="dropdown-item" to="/home/listProduct">List Product</Link></li>
              <li><Link class="dropdown-item" to="/home/addProduct">Add Product</Link></li>
            </div>
          </div>
          </li>                 
          
          <li className="xn-title">Components</li>                   
          <li class="dropdown-item">
            <Link to="/home/profile"><span className="glyphicon glyphicon-user xn-text">Profile</span></Link>
          </li>              
        </ul>
        {/* END X-NAVIGATION */}
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    )
}

export default Sidebar