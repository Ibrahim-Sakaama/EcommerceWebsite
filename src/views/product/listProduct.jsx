import ProductService from "../../service/ProductService";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";

const ListProduct = () =>{
    const[Products, SetProducts] = useState();
    const navigate = useNavigate();
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

    const OnDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                ProductService.remove(id).then((res)=>{
                    GetAllProducts();
                    navigate("/home/listProduct")
                })
              Swal.fire(
                'Deleted!',
                'Your Product has been deleted.',
                'success'
              )
            }
          })
    }

    return(<div>
        {/* START RESPONSIVE TABLES */}
            <div className="row">
            <div className="col-md-12">
                <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Products</h3>
                </div>
                <div className="panel-body panel-body-table">
                    <div className="table-responsive">
                    <table className="table table-bordered table-striped table-actions">
                        <thead>
                        <tr>
                            <th width={150}>id</th>
                            <th width={100}>name</th>
                            <th width={150}>Description</th>
                            <th width={50}>Quantity</th>
                            <th width={50}>Price</th>
                            <th width={100}>Images</th>
                            <th width={50}>Actions</th>
                        </tr>
                        </thead>
                        <tbody>  
                            {Products?.map((item, index) =>{
                                return(
                                    <tr id="trow_1">
                                        <td className="text-center">{item._id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.description}</td>
                                        <td>{item.quantity}</td>
                                        <td>{item.price}</td>
                                        <td>{item.images.map((i)=>{
                                            return( 
                                                <tr style={{display:"inline"}}>
                                                    <img src={"http://localhost:3000/file/product/"+i} style={{
                                                        width:"40px",
                                                        height:"40px",
                                                        boxShadow:
                                                        " 5px 5px #6B728E",
                                                        paddingLeft: "3px"

                                                        }}>
                                                    </img>
                                                </tr>
                                            )
                                        })}
                                        </td>
                                        
                                        <td>
                                            <Link to={`/home/updateProduct/${item._id}`}>
                                                <button className="btn btn-default btn-rounded btn-sm"><span className="fa fa-pencil" /></button>
                                            </Link>
                                            <button className="btn btn-danger btn-rounded btn-sm" onClick={(e) => OnDelete(item._id)}><span className="fa fa-times" /></button>
                                        </td>
                                    </tr>
                                )
                            })}                                          


                        
                        </tbody>
                    </table>
                    </div>                                
                </div>
                </div>                                                
            </div>
            </div>
            {/* END RESPONSIVE TABLES */}
    </div>
)
}

export default ListProduct