import { useState } from "react";
import Swal from "sweetalert2";
import {useNavigate} from "react-router-dom"
import CategoryService from "../../service/CategoryService";

const AddCategory = () => {
    const [data, setData] = useState({})
    const [image, setImage] = useState({})
    const OnChangeHandler=(e)=>{
        setData({
            ...data,[e.target.name]:e.target.value,
        });
        console.log(data)
    }

    const navigate = useNavigate();
    const OnSubmitHandler=(e)=>{
        e.preventDefault(); // bech ma ya3malch refrech OR pour  empecher le comportement apr default du formulaire
        const formdata = new FormData()
        formdata.append('name',data.name)
        formdata.append('description',data.description)

        for(let i=0; i<=image.length;i++){
            formdata.append("file",image[i])
        }
        Swal.fire({
            title: 'Do you want to confirm?',
            ShowDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Yes',
            denyButtonText: `No`,
        }).then((result)=>{
            /*Read more about isConfirmed, isDenied below*/
            if(result.isConfirmed){
                CategoryService.create(formdata)
                .then((res)=>{
                    console.log(res)
                    navigate('/home/listCategory')
                })

                Swal.fire('Saved!','','success')
            }else if(result.isDenied){
                Swal.fire('Canceled','','info')
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const HandleImage=(e)=>{
        setImage(e.target.files)
    }

    
    return (
<div className="row">
  <div className="col-md-12">
    <form className="form-horizontal" >
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Add Category</h3>
          <ul className="panel-controls">
            <li><a href="#" className="panel-remove"><span className="fa fa-times" /></a></li>
          </ul>
        </div>
        <div className="panel-body">                                                                        
          <div className="form-group">
            <label className="col-md-3 col-xs-12 control-label">Name</label>
            <div className="col-md-6 col-xs-12">                                            
              <div className="input-group">
                <span className="input-group-addon"><span className="fa fa-pencil" /></span>
                <input type="text" className="form-control" onChange={OnChangeHandler} name="name"/>
              </div>                                            
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-3 col-xs-12 control-label">Description</label>
            <div className="col-md-6 col-xs-12">                                            
              <textarea className="form-control" rows={5} defaultValue={""} onChange={OnChangeHandler} name="description"/>
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-3 col-xs-12 control-label">File</label>
            <div className="col-md-6 col-xs-12">                                                                                                                                        
              <input type="file" className="fileinput btn-primary" name="file" id="filename" title="Browse file" onChange={HandleImage} />
            </div>
          </div>
        </div>
        <div className="panel-footer">
          <button className="btn btn-default">Clear Form</button>                                    
          <button className="btn btn-primary pull-right"type="submit" onClick={OnSubmitHandler}>Submit</button>
        </div>
      </div>
    </form>
  </div>
</div>

    )
}

export default AddCategory

