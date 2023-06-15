import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SubcategoryService from "../../service/SubcategoryService";
import Swal from "sweetalert2";
import '../../subcat.css';

const UpdateSubcategory = () => {

    // tnajem tsami l data subcategory (changeable name)
    const [Data, setData] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();
    const OnChangeHandler = (e) => {
        setData({ ...Data, [e.target.name]: e.target.value });
        console.log(Data);
    };

    const OnSubmitHandler = (e) => {
        e.preventDefault();

        Swal.fire({
            title: "Do you want to update this subcategory?",
            showDenyButton:true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`,
        }).then((result)=> {
            if (result.isConfirmed){
                SubcategoryService
                    .update(id, Data)
                    .then((res) =>{
                        console.log(res);
                        navigate('/home/listSubcategory')
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

    useEffect(() => {
        SubcategoryService.getOne(id).then((res) => {
            console.log("data of category", res);
            setData(res.data.data);
        });
    }, []);


    return(
        <div className="row">
  <div className="col-md-12">
    <form className="form-horizontal" onSubmit={OnSubmitHandler}>
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="headerSubcat">Update Subcategory</h3>
          <ul className="panel-controls">
            <li><a href="#" className="panel-remove"><span className="fa fa-times" /></a></li>
          </ul>
        </div>
        <div className="panel-body">                                                                        
          <div className="form-group">
            <label className="col-md-3 col-xs-12 control-label">Name Subcategory</label>
            <div className="col-md-6 col-xs-12">                                            
              <div className="input-group">
                <span className="input-group-addon"><span className="fa fa-pencil" /></span>
                <input type="text" className="form-control" name="name" onChange={OnChangeHandler} value={Data.name}/>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label className="col-md-3 col-xs-12 control-label">Description</label>
            <div className="col-md-6 col-xs-12">                                            
              <textarea className="form-control" rows={5} defaultValue={""} name="description" onChange={OnChangeHandler} value={Data.description}/>
            </div>
          </div>


          <div className="form-group">
            <label className="col-md-3 col-xs-12 control-label">Category</label>
            <div className="col-md-6 col-xs-12">                                            
              <textarea className="form-control" rows={5} defaultValue={""} name="categoryId" onChange={OnChangeHandler} value={Data.categoryId}/>
            </div>
          </div>

        </div>
        <div className="panel-footer">
          <button className="clear">Clear Form</button>                                    
          <button className="btn btn-primary pull-right submit">Submit</button>
        </div>
      </div>
    </form>
  </div>
</div>
    )
}

export default UpdateSubcategory