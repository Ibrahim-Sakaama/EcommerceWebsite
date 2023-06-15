import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import Swal from "sweetalert2";
import ProductService from "../../service/ProductService";

const UpdateProduct = () =>{
  const [images, setImage] = useState({});
  const [Data, setData] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const OnChangeHandler = (e)=>{
    setData({...Data, [e.target.name]: e.target.value});
    console.log(Data);
  };

  const OnSubmitHandler = (e) =>{
    e.preventDefault();
    const formdata = new FormData()
    formdata.append('name',Data.name)
    formdata.append("description",Data.description)
    formdata.append("quantity",Data.quantity)
    formdata.append("price",Data.price)

    for(let i=0; i<=images.length;i++){
      formdata.append("files",images[i]) // files illy mawjouda fil backend
    }

    Swal.fire({
      title: "Do you want to update this product?",
      showDenyButton:true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
  }).then((result)=> {
      if (result.isConfirmed){
          ProductService
              .update(id, formdata)
              .then((res) =>{
                  console.log(res);
                  navigate('/home/listProduct')
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
  useEffect(()=>{
    ProductService.getOne(id).then((res)=>{
      console.log("data of product",res);
      setData(res.data.data);
    });
  }, []);

  /*We need to add multiple images not just one */

  const HandleImages=(e)=>{
    setImage(e.target.files)
  }


    return(
        <div>
            {/* PAGE CONTENT WRAPPER */}
<div className="page-content-wrap">
  <div className="row">
    <div className="col-md-12">
      <form className="form-horizontal" onSubmit={OnSubmitHandler}>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Edit Product</h3>
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
              <label className="col-md-3 col-xs-12 control-label">Price</label>
              <div className="col-md-6 col-xs-12">                                            
                <div className="input-group">
                  <span className="input-group-addon"><span className="fa fa-pencil" /></span>
                  <input type="text" className="form-control" name="price" onChange={OnChangeHandler} value={Data.price}/>
                </div>                                            
              </div>
            </div>

            <div className="form-group">
              <label className="col-md-3 col-xs-12 control-label">Quantity</label>
              <div className="col-md-6 col-xs-12">                                            
                <div className="input-group">
                  <span className="input-group-addon"><span className="fa fa-pencil" /></span>
                  <input type="text" className="form-control" name="quantity" onChange={OnChangeHandler} value={Data.quantity}/>
                </div>                                            
              </div>
            </div>

            <div className="form-group">
              <label className="col-md-3 col-xs-12 control-label">Images</label>
              <div className="col-md-6 col-xs-12">                                                                                                                                         
                <input type="file" className="fileinput btn-primary" name="images" id="filename" title="Browse file" onChange={HandleImages} multiple/>
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
</div>
{/* END PAGE CONTENT WRAPPER */}
        </div>

    )
}

export default UpdateProduct