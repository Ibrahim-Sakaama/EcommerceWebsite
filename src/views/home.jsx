import Sidebar from "../components/sidebar"
import Header from "../components/header"
import { Outlet } from "react-router-dom" //ya3mel routage

const Home = () => {
    // fi wost return bech ysir fih l'affichage
    return (
    <div>


  {/* START PAGE CONTAINER */}
  <div className="page-container">
    {/* START PAGE SIDEBAR */}
    <Sidebar></Sidebar>
    {/* END PAGE SIDEBAR */}
    {/* PAGE CONTENT */}
    <div className="page-content">
      {/* START X-NAVIGATION VERTICAL */}
      <Header></Header>
      {/* END X-NAVIGATION VERTICAL */}                     
      {/* START BREADCRUMB */}
      <Outlet></Outlet>
      {/* END PAGE CONTENT WRAPPER */}                                
    </div>            
    {/* END PAGE CONTENT */}
  </div>
  {/* END PAGE CONTAINER */}
</div>
 )
}

export default Home