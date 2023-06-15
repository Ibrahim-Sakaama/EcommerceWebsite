import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CategoryService from "../../service/CategoryService";
import Swal from "sweetalert2";

const UpdateCategory = () => {
    const [image, setImage] = useState({});
    const [Data, setData] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();
    const OnChangeHandler = (e) => {
        setData({ ...Data, [e.target.name]: e.target.value });
        console.log(Data);
    };
    const OnSubmitHandler = (e) => {
        e.preventDefault();
        const formdata = new FormData()
        formdata.append('name',Data.name)
        formdata.append('description',Data.description)

        for(let i=0; i<=image.length;i++){
          formdata.append("file",image[i])
        }

        Swal.fire({
            title: "Do you want to update this category?",
            showDenyButton:true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`,
        }).then((result)=> {
            if (result.isConfirmed){
                CategoryService
                    .update(id, formdata)
                    .then((res) =>{
                        console.log(res);
                        navigate('/home/listCategory')
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
        CategoryService.getOne(id).then((res) => {
            console.log("data of category", res);
            setData(res.data.data);
        });
    }, []);

    const HandleImage=(e)=>{
      setImage(e.target.files)
    }

    return (
<div className="row">
  <div className="col-md-12">
    <form className="form-horizontal" onSubmit={OnSubmitHandler}>
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Update Category</h3>
          <ul className="panel-controls">
            <li><a href="#" className="panel-remove"><span className="fa fa-times" /></a></li>
          </ul>
        </div>
        <div className="panel-body">                                                                        
          <div className="form-group">
            <label className="col-md-3 col-xs-12 control-label">Name Category</label>
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
            <label className="col-md-3 col-xs-12 control-label">File</label>
            <div className="col-md-6 col-xs-12">                                                                                                                                        
              <input type="file" className="fileinput btn-primary" name="file" id="filename" title="Browse file" onChange={HandleImage}/>
              <span className="help-block">Input type file</span>
            </div>
          </div>
        </div>
        <div className="panel-footer">
          <button className="btn btn-default">Clear Form</button>                                    
          <button className="btn btn-primary pull-right">Submit</button>
        </div>
      </div>
    </form>
  </div>
</div>

    )
}

export default UpdateCategory

