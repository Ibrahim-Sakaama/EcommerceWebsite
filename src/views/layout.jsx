import SubcategoryService from "../service/SubcategoryService";
import ProductService from "../service/ProductService";
import CategoryService from "../service/CategoryService";
import { useState } from "react";
import { useEffect } from "react";
/* import { Chart } from "react-chartjs-2"; */
import {Bar, Line, Doughnut, Radar, PolarArea} from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const Layout = () => {
  const [Products, SetProducts] = useState();
  const [Subcategories, SetSubcategories] = useState({});
  const [Categories, SetCategories] = useState({});

  // Get all category
  const GetAllcat = () =>{
    CategoryService
        .GetAll()
        .then((res)=>{
            console.log(res);
            SetCategories(res.data.data);
        })

        .catch((err) => {
            console.log(err);
        });
};

useEffect(() =>{
    GetAllcat();
}, []);


// Get all Subcat

const GetAllSubcat = () =>{
  SubcategoryService
  .GetAll()
  .then((res)=>{
      console.log(res);
      SetSubcategories(res.data.data);
  })

  .catch((err)=>{
      console.log(err);
  });
};

useEffect(()=>{
  GetAllSubcat();
}, []);


// Get all products
const GetAllProducts = () =>{
  ProductService
  .GetAll()
  .then((res)=>{
      console.log(res);
      SetProducts(res.data.data);
  })

  .catch((err)=>{
      console.log(err);
  });
};


  useEffect(()=>{
    GetAllProducts();
  }, []);



    var d = new Date();
    var date = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
    console.log(date);
    var d = new Date();
    var hours = d.getHours() + ":" + d.getMinutes();
    console.log(hours);

    return ( <div>
        <ul className="breadcrumb">
        <li><a href="#">Home</a></li>                    
        <li className="active">Dashboard</li>
      </ul>
      {/* END BREADCRUMB */}                       
      {/* PAGE CONTENT WRAPPER */}
      <div className="page-content-wrap">
        {/* START WIDGETS */}                    
        <div className="row">
          <div className="col-md-3">
            {/* START WIDGET SLIDER */}
            <div className="widget widget-default widget-carousel">
              <div className="owl-carousel" id="owl-example">
                <div>                                    
                  <div className="widget-title">Total Visitors</div>                                                                        
                  <div className="widget-subtitle">27/08/2014 15:23</div>
                  <div className="widget-int">3,548</div>
                </div>
                <div>                                    
                  <div className="widget-title">Returned</div>
                  <div className="widget-subtitle">Visitors</div>
                  <div className="widget-int">1,695</div>
                </div>
                <div>                                    
                  <div className="widget-title">New</div>
                  <div className="widget-subtitle">Visitors</div>
                  <div className="widget-int">1,977</div>
                </div>
              </div>                            
              <div className="widget-controls">                                
                <a href="#" className="widget-control-right widget-remove" data-toggle="tooltip" data-placement="top" title="Remove Widget"><span className="fa fa-times" /></a>
                <div className="widget-int num-count">{Subcategories?.length}</div>
                <div className="widget-title">Subcategories</div>
                <div className="widget-subtitle">In your website</div>
              </div>                             
            </div>         
            {/* END WIDGET SLIDER */}
          </div>
          <div className="col-md-3">
            {/* START WIDGET PRODUCTS */}
            <div className="widget widget-default widget-item-icon" onclick="location.href='pages-messages.html';">
              <div className="widget-item-left">
                  <span class="glyphicon glyphicon-shopping-cart"></span>
              </div>                             
              <div className="widget-data">
                <div className="widget-int num-count">{Products?.length}</div>
                <div className="widget-title">Products</div>
                <div className="widget-subtitle">In your website</div>
              </div>      
              <div className="widget-controls">                                
                <a href="#" className="widget-control-right widget-remove" data-toggle="tooltip" data-placement="top" title="Remove Widget"><span className="fa fa-times" /></a>
              </div>
            </div>                            
            {/* END WIDGET MESSAGES */}
          </div>
          <div className="col-md-3">
            {/* START WIDGET REGISTRED */}
            <div className="widget widget-default widget-item-icon" onclick="location.href='pages-address-book.html';">
              <div className="widget-item-left">
                <span className="fa fa-user" />
              </div>
              <div className="widget-data">
                <div className="widget-int num-count">{Categories?.length}</div>
                <div className="widget-title">Categories</div>
                <div className="widget-subtitle">On your website</div>
              </div>
              <div className="widget-controls">                                
                <a href="#" className="widget-control-right widget-remove" data-toggle="tooltip" data-placement="top" title="Remove Widget"><span className="fa fa-times" /></a>
              </div>                            
            </div>                            
            {/* END WIDGET REGISTRED */}
          </div>
          <div className="col-md-3">
            {/* START WIDGET CLOCK */}
            <div className="widget widget-info widget-padding-sm">
              <div className="widget-big-int plugin-clock">{hours}</div>                            
              <div className="widget-subtitle plugin-date">{date}</div>
              <div className="widget-controls">                                
                <a href="#" className="widget-control-right widget-remove" data-toggle="tooltip" data-placement="left" title="Remove Widget"><span className="fa fa-times" /></a>
              </div>                            
              <div className="widget-buttons widget-c3">
                <div className="col">
                  <a href="#"><span className="fa fa-clock-o" /></a>
                </div>
                <div className="col">
                  <a href="#"><span className="fa fa-bell" /></a>
                </div>
                <div className="col">
                  <a href="#"><span className="fa fa-calendar" /></a>
                </div>
              </div>                            
            </div>                        
            {/* END WIDGET CLOCK */}
          </div>
        </div>
        {/* END WIDGETS */}                    
        <div className="row">
          <div className="col-md-4">
            {/* START USERS ACTIVITY BLOCK */}
            <div className="panel panel-default">
              <div className="panel-heading">
                <div className="panel-title-box">
                  <h3>Products</h3>
{/*                   <span>Users vs returning</span> */}
                </div>                                    
                <ul className="panel-controls" style={{marginTop: 2}}>
                  <li><a href="#" className="panel-fullscreen"><span className="fa fa-expand" /></a></li>
                  <li><a href="#" className="panel-refresh"><span className="fa fa-refresh" /></a></li>
                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown"><span className="fa fa-cog" /></a>                                        
                    <ul className="dropdown-menu">
                      <li><a href="#" className="panel-collapse"><span className="fa fa-angle-down" /> Collapse</a></li>
                      <li><a href="#" className="panel-remove"><span className="fa fa-times" /> Remove</a></li>
                    </ul>                                        
                  </li>                                        
                </ul>                                    
              </div>                                
              <div className="panel-body padding-0">
              <Doughnut
                  data={{
                    labels: Products?.map((x) => x.name),
                    datasets: [
                      {
                        label: "# of Votes",
                        data: Products?.map((x) => x.quantity),
                        backgroundColor: [
                          "rgba(250, 10, 132, 0.8)",
                          "rgba(54, 162, 235, 0.5)",
                          "rgba(255, 206, 86, 0.8)",
                          "rgba(75, 192, 192, 0.7)",
                          "rgba(153, 102, 255, 0.8)",
                          "rgba(255, 159, 64, 0.7)",
                        ],
                        borderColor: [
                          "rgba(255, 99, 132, 1)",
                          "rgba(54, 162, 235, 1)",
                          "rgba(255, 206, 86, 1)",
                          "rgba(75, 192, 192, 1)",
                          "rgba(153, 102, 255, 1)",
                          "rgba(255, 159, 64, 1)",
                        ],
                        borderWidth: 1,
                      },
                    ],
                  }}
                  options={{
                    scales: {
                      y: {
                        beginAtZero: true,
                      },
                    },
                  }}
                />
              </div>                                    
            </div>
            {/* END USERS ACTIVITY BLOCK */}
          </div>
          <div className="col-md-4">
            {/* START VISITORS BLOCK */}
            <div className="panel panel-default">
              <div className="panel-heading">
                <div className="panel-title-box">
                  <h3>Price</h3>
                  <span>Products vs Price</span>
                </div>
                <ul className="panel-controls" style={{marginTop: 2}}>
                  <li><a href="#" className="panel-fullscreen"><span className="fa fa-expand" /></a></li>
                  <li><a href="#" className="panel-refresh"><span className="fa fa-refresh" /></a></li>
                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown"><span className="fa fa-cog" /></a>                                        
                    <ul className="dropdown-menu">
                      <li><a href="#" className="panel-collapse"><span className="fa fa-angle-down" /> Collapse</a></li>
                      <li><a href="#" className="panel-remove"><span className="fa fa-times" /> Remove</a></li>
                    </ul>                                        
                  </li>                                        
                </ul>
              </div>
              <div className="panel-body padding-0">
              <Line
                  data={{
                    labels: Products?.map((x) => x.name),
                    datasets: [
                      {
                        label: "# of Votes",
                        data: Products?.map((x) => x.quantity),
                        backgroundColor: [
                          "rgba(250, 10, 132, 0.8)",
                          "rgba(54, 162, 235, 0.5)",
                          "rgba(255, 206, 86, 0.8)",
                          "rgba(75, 192, 192, 0.7)",
                          "rgba(153, 102, 255, 0.8)",
                          "rgba(255, 159, 64, 0.7)",
                        ],
                        borderColor: [
                          "rgba(255, 99, 132, 1)",
                          "rgba(54, 162, 235, 1)",
                          "rgba(255, 206, 86, 1)",
                          "rgba(75, 192, 192, 1)",
                          "rgba(153, 102, 255, 1)",
                          "rgba(255, 159, 64, 1)",
                        ],
                        borderWidth: 1,
                      },
                    ],
                  }}
                  options={{
                    scales: {
                      y: {
                        beginAtZero: true,
                      },
                    },
                  }}
                />
              </div>
            </div>
            {/* END VISITORS BLOCK */}
          </div>
          <div className="col-md-4">
            {/* START PROJECTS BLOCK */}
            <div className="panel panel-default">
              <div className="panel-heading">
                <div className="panel-title-box">
                  <h3>Products</h3>
                  <span>Projects activity</span>
                </div>                                    
                <ul className="panel-controls" style={{marginTop: 2}}>
                  <li><a href="#" className="panel-fullscreen"><span className="fa fa-expand" /></a></li>
                  <li><a href="#" className="panel-refresh"><span className="fa fa-refresh" /></a></li>
                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown"><span className="fa fa-cog" /></a>                                        
                    <ul className="dropdown-menu">
                      <li><a href="#" className="panel-collapse"><span className="fa fa-angle-down" /> Collapse</a></li>
                      <li><a href="#" className="panel-remove"><span className="fa fa-times" /> Remove</a></li>
                    </ul>                                        
                  </li>                                        
                </ul>
              </div>
              <div className="panel-body padding-0">
              <PolarArea
                  data={{
                    labels: Products?.map((x) => x.name),
                    datasets: [
                      {
                        label: "# of Votes",
                        data: Products?.map((x) => x.quantity),
                        backgroundColor: [
                          "rgba(250, 10, 132, 0.8)",
                          "rgba(54, 162, 235, 0.5)",
                          "rgba(255, 206, 86, 0.8)",
                          "rgba(75, 192, 192, 0.7)",
                          "rgba(153, 102, 255, 0.8)",
                          "rgba(255, 159, 64, 0.7)",
                        ],
                        borderColor: [
                          "rgba(255, 99, 132, 1)",
                          "rgba(54, 162, 235, 1)",
                          "rgba(255, 206, 86, 1)",
                          "rgba(75, 192, 192, 1)",
                          "rgba(153, 102, 255, 1)",
                          "rgba(255, 159, 64, 1)",
                        ],
                        borderWidth: 1,
                      },
                    ],
                  }}
                  options={{
                    scales: {
                      y: {
                        beginAtZero: true,
                      },
                    },
                  }}
                />
              </div>
            </div>
            {/* END PROJECTS BLOCK */}
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            {/* START SALES BLOCK */}
            <div className="panel panel-default">
              <div className="panel-heading">
                <div className="panel-title-box">
                  <h3>Sales</h3>
                  <span>Sales activity by period you selected</span>
                </div>                                     
                <ul className="panel-controls panel-controls-title">                                        
                  <li>
                    <div id="reportrange" className="dtrange">                                            
                      <span /><b className="caret" />
                    </div>                                     
                  </li>                                
                  <li><a href="#" className="panel-fullscreen rounded"><span className="fa fa-expand" /></a></li>
                </ul>                                    
              </div>
              <div className="panel-body">                                    
                <div className="row stacked">
                  <div className="col-md-4">                                            
                    <div className="progress-list">                                               
                      <div className="pull-left"><strong>In Queue</strong></div>
                      <div className="pull-right">75%</div>                                                
                      <div className="progress progress-small progress-striped active">
                        <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{width: '75%'}}>75%</div>
                      </div>
                    </div>
                    <div className="progress-list">                                               
                      <div className="pull-left"><strong>Shipped Products</strong></div>
                      <div className="pull-right">450/500</div>                                                
                      <div className="progress progress-small progress-striped active">
                        <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{width: '90%'}}>90%</div>
                      </div>
                    </div>
                    <div className="progress-list">                                               
                      <div className="pull-left"><strong className="text-danger">Returned Products</strong></div>
                      <div className="pull-right">25/500</div>                                                
                      <div className="progress progress-small progress-striped active">
                        <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{width: '5%'}}>5%</div>
                      </div>
                    </div>
                    <div className="progress-list">                                               
                      <div className="pull-left"><strong className="text-warning">Progress Today</strong></div>
                      <div className="pull-right">75/150</div>                                                
                      <div className="progress progress-small progress-striped active">
                        <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{width: '50%'}}>50%</div>
                      </div>
                    </div>
                    <p><span className="fa fa-warning" /> Data update in end of each hour. You can update it manual by pressign update button</p>
                  </div>
                  <div className="col-md-8">
                    <div id="dashboard-map-seles" style={{width: '100%', height: 200}} />
                  </div>
                </div>                                    
              </div>
            </div>
            {/* END SALES BLOCK */}
          </div>
          <div className="common-modal modal fade" id="common-Modal1" tabIndex={-1} role="dialog" aria-hidden="true">
            <div className="modal-content">
              <ul className="list-inline item-details">
                <li><a href="http://themifycloud.com/downloads/janux-premium-responsive-bootstrap-admin-dashboard-template/">Admin templates</a></li>
                <li><a href="http://themescloud.org">Bootstrap themes</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            {/* START SALES & EVENTS BLOCK */}
            <div className="panel panel-default">
              <div className="panel-heading">
                <div className="panel-title-box">
                  <h3>Maps and locations</h3>
                </div>
                <ul className="panel-controls" style={{marginTop: 2}}>
                  <li><a href="#" className="panel-fullscreen"><span className="fa fa-expand" /></a></li>
                  <li><a href="#" className="panel-refresh"><span className="fa fa-refresh" /></a></li>
                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown"><span className="fa fa-cog" /></a>                                        
                    <ul className="dropdown-menu">
                      <li><a href="#" className="panel-collapse"><span className="fa fa-angle-down" /> Collapse</a></li>
                      <li><a href="#" className="panel-remove"><span className="fa fa-times" /> Remove</a></li>
                    </ul>                                        
                  </li>                                        
                </ul>
              </div>
              <div className="panel-body padding-0">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8759.424285165009!2d10.607325218496307!3d35.848101945900986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130275845c84cf75%3A0xca0796721fcce97e!2sJAZ%20Tour%20KHALEF!5e0!3m2!1sen!2stn!4v1686320622359!5m2!1sen!2stn" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <div className="chart-holder" id="dashboard-line-1" />
              </div>
            </div>
            {/* END SALES & EVENTS BLOCK */}
          </div>
        </div>
        {/* START DASHBOARD CHART */}
        <div className="chart-holder" id="dashboard-area-1" style={{height: 200}} />
        <div className="block-full-width">
        </div>                    
        {/* END DASHBOARD CHART */}
      </div>
        {/* MESSAGE BOX*/}
    <div className="message-box animated fadeIn" data-sound="alert" id="mb-signout">
    <div className="mb-container">
        <div className="mb-middle">
        <div className="mb-title"><span className="fa fa-sign-out" /> Log <strong>Out</strong> ?</div>
        <div className="mb-content">
            <p>Are you sure you want to log out?</p>                    
            <p>Press No if youwant to continue work. Press Yes to logout current user.</p>
        </div>
        <div className="mb-footer">
            <div className="pull-right">
            <a href="pages-login.html" className="btn btn-success btn-lg">Yes</a>
            <button className="btn btn-default btn-lg mb-control-close">No</button>
            </div>
        </div>
        </div>
    </div>
    </div>
    {/* END MESSAGE BOX*/}
</div>
    )
}

export default Layout