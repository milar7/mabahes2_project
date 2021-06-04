/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useEffect } from "react";
import data from "../../../data.json";

function EditProduct({ match,auth, setAuth, activePage, setActivePage }) {
    const [product, setProduct] = useState({ user: {} });
  const [user, setUser] = useState({});
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");

  useEffect(() => {
    setActivePage("EditProduct");
    fetchData();
  }, []);

  function fetchData() {
    var user = data.Users.filter((user) => user.id === auth)[0];
    var product = data.Products.filter((product) => product.id === match.params.id)[0];
    setProduct(product);
    setUser(user);
    settitle(product.title)
    setdescription(product.description)
  }
  function hanndleSummit() {}

  return (
    <div>
      <div className="row mb-2">
        <div className="col-md-6">
          <img
            src={
              product.image
            }
            className="img-fluid rounded"
            alt="not found image"
          />
        </div>
        <div className="card col-md-6">
          <form>
            <div className="mt-2">
              <label htmlFor="title">Title</label>
              <input
                className="form-control"
                value={title}
                onChange={(e) => settitle(e.target.value)}
                placeholder="title"
                type="text"
                name="title"
                required
              />
            </div>
            <div className="mt-2">
              <label htmlFor="description">Description</label>
              <textarea
                className="form-control"
                value={description}
                onChange={(e) => setdescription(e.target.value)}
                placeholder="description"
                type="textara"
                name="description"
                required
                rows="3"
                style={{ width: "100%" }}
              />
            </div>

            <button
              className="btn btn-info  mt-3 btn-lg"
              style={{ width: "100%" }}
              onClick={() => hanndleSummit()}
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default EditProduct;
