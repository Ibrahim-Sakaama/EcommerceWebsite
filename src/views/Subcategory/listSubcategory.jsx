import SubcategoryService from "../../service/SubcategoryService";
import { useState, useEffect } from "react"; // pour affichage
import { useNavigate, Link } from "react-router-dom";
import "../../subcat.css";
import Swal from "sweetalert2";

const ListSubcategory = () => {
    const [Subcategories, SetSubcategories] = useState();
    const navigate = useNavigate();
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
          SubcategoryService.remove(id).then((res)=>{
            GetAllSubcat();
            navigate("/home/listSubcategory")
            //alert("Item has been removed succefully!!")
          });
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })


    }
    return(
        <div>
            {/* START RESPONSIVE TABLES */}
<div className="row">
  <div className="col-md-12">
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panell">Listing Subcategory</h3>
      </div>
      <div className="panel-body panel-body-table">
        <div className="table-responsive">
          <table className="table table-bordered table-striped table-actions">
            <thead>
              <tr>
                <th width={10}>id</th>
                <th>name</th>
                <th width={100}>Description</th>
                <th width={100}>Category</th>
                <th width={100}>actions</th>
              </tr>
            </thead>
            <tbody>
                {Subcategories?.map((item)=>{
                    return(
                        <tr style={{border_color: "black"}} id="trow_1">
                        <td className="text-center">{item._id}</td>
                        <td style={{width:"100px"}}>{item.name}</td>
                        <td><span>{item.description}</span></td>
                        <td>{item.categoryId?.name}</td>
                        <td>
                          <Link to={`/home/updateSubcategory/${item._id}`}>
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

export default ListSubcategory