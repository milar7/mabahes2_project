/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useEffect } from "react";
import data from "../../data.json";
import { useHistory } from "react-router-dom";

import ProductList from "../home/component/product_list";

function Profile({ auth, setAuth, activePage, setActivePage }) {
    const [user, setUser] = useState({});
    const [products, setProducts] = useState([]);
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [description, setdescription] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

        const history = useHistory();

    useEffect(() => {
        setActivePage("profile");
        fetchUser();
    }, []);

    useEffect(() => {}, [user]);
    function submitHandler() {}

    function fetchUser() {
        var myUser = data.Users.filter((user) => user.id === auth)[0];
        var products = data.Products.filter((product) => product.user.id === auth);

        setUser(myUser);
        setProducts(products);
        setName(myUser.name);
        setUsername(myUser.username);
        setEmail(myUser.email);
        setdescription(myUser.description)
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
                <div className="card col-md-6">
                    <form>
                             <label className="mt-2" style={{ width: "100%" }}>Full Name 
                        <input
                            className="form-control"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="First name"
                            type="text"
                            name="fullName"
                            required
                        />
                         </label>
                         <div className="mt-2">
                            <label htmlFor="userName">User Name</label>
                        <input
                            className="form-control"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="User name"
                            type="text"
                            name="userName"
                            required
                        />
                        </div>
                        <div className="mt-2">
                            <label htmlFor="email">Email</label>
                        <input
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email address"
                            type="email"
                            name="email"
                            required
                        />
                        </div>
                        <div className="mt-2">
                            <label htmlFor="description">Description</label>
                          <textarea  className="form-control"
                            value={description}
                            onChange={(e) => setdescription(e.target.value)}
                            placeholder="description"
                            type="textara"
                            name="description"
                            required  rows="5" style={{width:"100%"}}/>
                            </div>
                        <div className="mt-2">
                            <label htmlFor="password">Password</label>
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
                        </div>

                        
                    


                        <button
                            className="btn btn-primary  mt-3 mb-3 btn-lg"
                            style={{ width: "100%" }}
                            onClick={() => submitHandler()}
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
                    <button
                        type="button"
                        onClick={() => {
                            history.push(`new-product`);
                        }}
                        className="mt-3  btn btn-info"
                    >
                        + Add New Product
                    </button>
                </div>
            </div>

            <ProductList products={products} mine={true} />
        </div>
    );
}
export default Profile;
