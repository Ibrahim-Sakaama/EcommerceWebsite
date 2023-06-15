import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SubcategoryService from "../../service/SubcategoryService";
import Swal from "sweetalert2";

const AddSubcategory = () => {
    const [data, setData] = useState({})
    const OnChangeHandler=(e)=>{
        setData({
            ...data,[e.target.name]:e.target.value,
        });
        console.log(data)
    }

    const onChange=(e)=>{
        setData({
            ...data,[e.target.name]:Object(e.target.value),
        });
        console.log(data)
    }

    const navigate = useNavigate();
    const OnSubmitHandler=(e)=>{
        e.preventDefault(); // bech ma ya3malch refrech OR pour  empecher le comportement apr default du formulaire


        Swal.fire({
            title: 'Do you want to confirm?',
            ShowDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Yes',
            denyButtonText: `No`,
        }).then((result)=>{
            /*Read more about isConfirmed, isDenied below*/
            if(result.isConfirmed){
                SubcategoryService.create(data)
                .then((res)=>{
                    console.log(res)
                    navigate('/home/listSubcategory')
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

    return(
        <div className="row">
  <div className="col-md-12">
    <form className="form-horizontal">
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title"><strong>Add Subcategory</strong></h3>
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
            <label className="col-md-3 col-xs-12 control-label">Category</label>
            <div className="col-md-6 col-xs-12">                                            
              <textarea className="form-control" rows={5} defaultValue={""} onChange={onChange} name="categoryId"/>
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

export default AddSubcategory