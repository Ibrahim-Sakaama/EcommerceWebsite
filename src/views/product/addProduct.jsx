import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ProductService from "../../service/ProductService";
import Swal from "sweetalert2";


const AddProduct = () =>{
    const [data, setData] = useState({});
    const [images, setImages] = useState({});

    const OnChangeHandler=(e)=>{
        setData({
            ...data, [e.target.name]:e.target.value,
        });
        console.log(data);
    }


    const navigate = useNavigate();
    const OnSubmitHandler=(e)=>{
        e.preventDefault();
        const formdata = new FormData()
        formdata.append('name',data.name)
        formdata.append('description',data.description)
        formdata.append('price',data.price)
        formdata.append('quantity',data.quantity)

        for(let i =0; i<=images.length;i++){
            formdata.append("files",images[i])
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
                ProductService.create(formdata)
                .then((res)=>{
                    console.log(res)
                    navigate('/home/listProduct')
                })

                Swal.fire('Saved!','','success')
            }else if(result.isDenied){
                Swal.fire('Canceled','','info')
            }
        })
    }


    const HandleImages=(e)=>{
        setImages(e.target.files)
    }
    return(
<div>
  {/* PAGE CONTENT WRAPPER */}
  <div className="page-content-wrap">
    <div className="row">
      <div className="col-md-12">
        <form className="form-horizontal">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Add Product</h3>
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
                    <input type="text" className="form-control" name="name" onChange={OnChangeHandler} />
                  </div>                                            
                </div>
              </div>

              <div className="form-group">
                <label className="col-md-3 col-xs-12 control-label">Description</label>
                <div className="col-md-6 col-xs-12">                                            
                  <textarea className="form-control" rows={5} defaultValue={""} name="description" onChange={OnChangeHandler} />
                </div>
              </div>


              <div className="panel-body">                                                                        
              <div className="form-group">
                <label className="col-md-3 col-xs-12 control-label">Price</label>
                <div className="col-md-6 col-xs-12">                                            
                  <div className="input-group">
                    <span className="input-group-addon"><span className="fa fa-pencil" /></span>
                    <input type="text" className="form-control" name="price" onChange={OnChangeHandler}/>
                  </div>                                            
                </div>
              </div>


            </div>


            
            <div className="panel-body">                                                                        
              <div className="form-group">
                <label className="col-md-3 col-xs-12 control-label">Quantity</label>
                <div className="col-md-6 col-xs-12">                                            
                  <div className="input-group">
                    <span className="input-group-addon"><span className="fa fa-pencil" /></span>
                    <input type="text" className="form-control" name="quantity" onChange={OnChangeHandler}/>
                  </div>                                            
                </div>
              </div>


            </div>

            



              <div className="form-group">
                <label className="col-md-3 col-xs-12 control-label">Images</label>
                <div className="col-md-6 col-xs-12">                                                                                                                                        
                  <input type="file" className="fileinput btn-primary" name="files" id="filename" title="Browse file" onChange={HandleImages} multiple/>
                </div>
              </div>
            </div>
            <div className="panel-footer">
              <button className="btn btn-default">Clear Form</button>                                    
              <button className="btn btn-primary pull-right" type="submit" onClick={OnSubmitHandler}>Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>                    
  </div>
  {/* END PAGE CONTENT WRAPPER */}  
</div>

    )
}

export default AddProduct