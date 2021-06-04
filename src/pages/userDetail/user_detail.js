/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import data from "../../data.json";
import ProductList from "../home/component/product_list";
import Tags from "../home/productDetail/components/tags";

const UserDetail = ({ match, auth, setAuth, activePage, setActivePage }) => {
    const [user, setUser] = useState({});
    const [products, setProducts] = useState([]);
    useEffect(() => {
        setActivePage("UserDetail");
        fetchOwner();
    }, []);

    function fetchOwner() {
        var user = data.Users.filter((user) => user.username === match.params.id)[0];
        var products = data.Products.filter((product) => product.user.id === user.id);
        setProducts(products);

        setUser(user);
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
                    <div className="card flex-md-row mb-4 box-shadow h-md-250">
                        <div className="card-body d-flex flex-column align-items-start">
                            <h3>{user.username}</h3>
                            <strong className="d-inline-block mb-2">User Description</strong>
                            <p>{user.name}</p>
                            <p>{user.description}</p>
                            <strong className="d-inline-block mb-2">social medias</strong>
                            <Tags tags={user.tags} />
                        </div>
                    </div>
                </div>
            </div>
            <h3 className="mb-0 mt-4" style={{ textAlign: "center" }}>
                <p className="text-dark">other projects</p>
            </h3>
            <ProductList products={products} />
        </div>
    );
};

export default UserDetail;
