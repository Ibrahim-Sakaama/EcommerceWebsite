//Fichier principale, routage bech ysir here

import logo from './logo.svg';
import './App.css';
import Home from './views/home';
import Layout from './views/layout';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ListCategory from './views/Category/listCategory';
import UpdateCategory from './views/Category/updateCategory';
import AddCategory from './views/Category/addCategory';
import ListSubcategory from './views/Subcategory/listSubcategory';
import UpdateSubcategory from './views/Subcategory/updateSubcategory';
import AddSubcategory from './views/Subcategory/addSubcategory';
import ListProduct from './views/product/listProduct';
//import AddProduct from './views/product/addproduct';
import UpdateProduct from './views/product/updateProduct';
import AddProduct from './views/product/addProduct';
import Signup from './views/Auth/signup';
import Signin from './views/Auth/signin';
import Profile from './views/Auth/profile';


function App() {
  const PrivateRoot = ({children})=>{
    if(!localStorage.getItem("user")){
      return <Navigate to="/"></Navigate>;
    }
    return children;
  }
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/home" element = {<PrivateRoot><Home></Home></PrivateRoot>}>
          <Route path='/home' element = {<PrivateRoot><Layout></Layout></PrivateRoot>}></Route>
          <Route path="/home/listCategory" element = {<PrivateRoot><ListCategory></ListCategory></PrivateRoot>}></Route>
          <Route path="/home/updatecategory/:id" element= {<PrivateRoot><UpdateCategory></UpdateCategory></PrivateRoot>}></Route>
          <Route path="/home/addCategory" element={<PrivateRoot><AddCategory></AddCategory></PrivateRoot>}></Route>
          <Route path="/home/listSubcategory" element={<PrivateRoot><ListSubcategory></ListSubcategory></PrivateRoot>}></Route>
          <Route path="/home/updateSubcategory/:id" element={<PrivateRoot><UpdateSubcategory></UpdateSubcategory></PrivateRoot>}></Route>
          <Route path="/home/addSubcategory" element={<PrivateRoot><AddSubcategory></AddSubcategory></PrivateRoot>}></Route>
          <Route path="/home/listProduct" element={<PrivateRoot><ListProduct></ListProduct></PrivateRoot>}></Route>
          <Route path="/home/updateProduct/:id" element={<PrivateRoot><UpdateProduct></UpdateProduct></PrivateRoot>}></Route>
          <Route path="/home/addProduct" element={<PrivateRoot><AddProduct></AddProduct></PrivateRoot>}></Route>
          <Route path="/home/profile" element={<Profile></Profile>}></Route>
        </Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/" element={<Signin></Signin>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

