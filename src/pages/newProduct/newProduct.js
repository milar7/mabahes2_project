/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useEffect } from "react";
import data from "../../data.json";

function NewProduct({ auth, setAuth, activePage, setActivePage }) {
  const [user, setUser] = useState({});
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");

  useEffect(() => {
    setActivePage("NewProduct");
    fetchUser();
  }, []);

  function fetchUser() {
    var user = data.Users.filter((user) => user.id === auth)[0];
    setUser(user);
  }
  function hanndleSummit() {}

  return (
    <div>
      <div className="row mb-2">
        <div className="col-md-6">
          <img
            src={
              "http://rent-my-boat-nice.fr/wp-content/uploads/2020/08/placeholder.png"
            }
            className="img-fluid rounded"
            alt="not found image"
          />
        </div>
        <div className="card col-md-6">
          <form>
            <label className="mt-2" style={{ width: "100%" }}>
              Title
              <input
                className="form-control mt-2"
                value={title}
                onChange={(e) => settitle(e.target.value)}
                placeholder="title"
                type="text"
                name="title"
                required
              />
            </label>

            <label className="mt-2" style={{ width: "100%" }}>
              Description
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
            </label>
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
export default NewProduct;
