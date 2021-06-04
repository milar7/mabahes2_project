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
        setName(myUser.fullName);
        setUsername(myUser.userName);
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
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="First name"
                            type="text"
                            name="fullName"
                            required
                        />
                        <input
                            className="form-control"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
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
                            history.push(`new-product/${user.id}`);
                        }}
                        class="mt-3 btn btn-info"
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
