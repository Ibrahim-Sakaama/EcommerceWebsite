import CategoryService from "../../service/CategoryService";
import { useState, useEffect } from "react"; // pour affichage
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2"


const ListCategory = () => {
        const [Categories, SetCategories] = useState();
        const navigate = useNavigate();
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
      CategoryService.remove(id).then((res)=>{
        GetAllcat();
        navigate("/home/listCategory")
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
    return ( <div>
{/* START RESPONSIVE TABLES */}
<div className="row">
  <div className="col-md-12">
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">List Category</h3>
      </div>
      <div className="panel-body panel-body-table">
        <div className="table-responsive">
          <table className="table table-bordered table-striped table-actions">
            <thead>
              <tr>
                <th width={50}>id</th>
                <th width={200}>name</th>
                <th width={300}>description</th>
                <th width={100}>file</th>
                <th width={200}>Subcategories</th>
                <th width={100}>Actions</th>
              </tr>
            </thead>
            <tbody>
                {Categories?.map((item, index) =>{
                    return (
                        <tr style={{border_color: "black"}}id="trow_1">
                            <td style={{font: "oblique"}}className="text-center">{item._id}</td>
                            <td style={{font: "blue"}}>{item.name}</td>
                            <td>{item.description}</td>
                            <td><img src={"http://localhost:3000/file/folder/"+item.file} style={{width:50}} alt="" /></td>
                            <td>{item.subcategoriess.map((i)=> {
                              return (
                                <tr>{i.name}</tr>
                              )
                            })}</td>
                            <td>
                                <Link to={`/home/updatecategory/${item._id}`}>
                                    <button className="btn btn-default btn-rounded btn-sm">
                                        <span className="fa fa-pencil" />
                                    </button>
                                </Link>
                                <button className="btn btn-danger btn-rounded btn-sm"  onClick={(e) => OnDelete(item._id)}><span className="fa fa-times" /></button>
                            </td>
                        </tr>
                    );
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

export default ListCategory

