/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useEffect } from "react";
import data from "../../data.json";
import { useHistory } from "react-router-dom";

import ProductList from "../home/component/product_list";

function Profile({ auth, setAuth, activePage, setactivePage }) {
  const [user, setUser] = useState({});
  const [products, setProducts] = useState([]);
  const [fullName, setfullName] = useState("");
  const [userName, setuserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const history = useHistory();

  useEffect(() => {
    setactivePage("profile");
    fetchUser();
  }, []);

  useEffect(() => {


  }, [user]);
  function hanndleSummit() {}

  function fetchUser() {
    var myUser = data.Users.filter((user) => user.id === auth)[0];
    var products = data.Products.filter((product) => product.owner.id === auth);

    setUser(myUser);
    setProducts(products);
    setfullName(myUser.fullName);
    setuserName(myUser.userName);
    setEmail(myUser.email);
    setPassword(myUser.password);
  }

  return (
    <div>
      <div className="row mb-2">
        <div className="col-md-6">
          <img
            src={user.avatar_big}
            className="img-fluid rounded"
            alt="not found image"
          />
        </div>
        <div className="col-md-6">
          <form>
            <input
              className="form-control"
              value={fullName}
              onChange={(e) => setfullName(e.target.value)}
              placeholder="First name"
              type="text"
              name="fullName"
              required
            />
            <input
              className="form-control"
              value={userName}
              onChange={(e) => setuserName(e.target.value)}
              placeholder="User name"
              type="text"
              name="userName"
              required
            />
            <input
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              type="email"
              name="email"
              required
            />
            <input
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              type="password"
              name="password"
              autoComplete="on"
              required
            />

            <button
              className="btn btn-primary  mt-3 btn-lg"
              style={{ width: "100%" }}
              onClick={() => hanndleSummit()}
            >
              Apply
            </button>
          </form>
        </div>
      </div>
     <div className="row mb-3 mt-4 justify-content-center">
     <div className="col-md-6">

     <h3 className="mb-0 mt-3" style={{ textAlign: "center" }}>
        <p className="text-dark">my projects</p>
      </h3>
      </div>
      <div className="col-md-6">
      <button type="button" onClick={()=>{history.push(`newproduct/${user.id}`)}} class="mt-3 btn btn-info">+ Add new Product</button>
      </div>

     </div>
      
      <ProductList products={products}  mine={true}/>
    </div>
  );
}
export default Profile;
