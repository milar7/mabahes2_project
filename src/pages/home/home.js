/* eslint-disable react-hooks/exhaustive-deps */
import { Jumbotron } from "react-bootstrap";
import {  useEffect} from "react";
import ProductList from "./component/product_list";
import data from '../../data.json';
const Home = ({ auth, setAuth,activePage,setactivePage }) => {
  useEffect(() => {
    setactivePage("home");
  }, [])






  
  const products =data.Products
  return (
    <div>
      <Jumbotron style={{ textAlign: "center" }}>
      <div className="position-relative overflow-hidden  p-md-5 m-md-3 text-center bg-light">
            <div className="col-md-5 p-lg-5 mx-auto my-5">
              <h1 className="display-4 fw-normal">نمونه‌کار‌هام</h1>
              <p className="lead fw-normal">اینجا جایی هست که می‌تونی رزومه‌ي کار‌هایی که تا حالا انجام دادی رو در معرض دید بقیه قرار بدی و برای شروع کار جدید اعلام آماد‌گی و خودنمایی کنی! برای شروع فقط کافیه که ثبت‌نام کنی</p>
            </div>
            <div className="top_section_bg shadow-sm d-none d-md-block"></div>
            <div className="top_section_bg top_section_bg-2 shadow-sm d-none d-md-block"></div>
          </div>
      </Jumbotron>

      <ProductList products={products}/>  
    </div>
  );
};

export default Home;
