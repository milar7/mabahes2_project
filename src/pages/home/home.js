import { Jumbotron } from "react-bootstrap";
import { useState ,useEffect} from "react";
import ProductList from "./component/product_list";

const Home = ({ auth, setAuth,activePage,setactivePage }) => {
  useEffect(() => {
    setactivePage("home");
  }, [])
  return (
    <div>
      <Jumbotron style={{ textAlign: "center" }}>
        <h1>{auth==="logOut" ? "hello" : "welcome back"}</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
      </Jumbotron>

      <ProductList/>  
    </div>
  );
};

export default Home;
