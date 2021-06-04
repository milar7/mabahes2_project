/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import data from "../../../data.json";
import Tags from "./components/tags";

const ProductDetail = ({ match, auth, setAuth, activePage, setActivePage }) => {
    const [product, setProduct] = useState({ user: {} });
    useEffect(() => {
        setActivePage("ProductDetail");
        fetchProduct();
    }, []);

    function fetchProduct() {
        var product = data.Products.filter((product) => product.id === match.params.id)[0];
        setProduct(product);
    }

    return (
        <div>
            <div className="row mb-2">
                <div className="col-md-6">
                    <img src={product.image} className="img-fluid rounded" alt="not found image" />
                </div>
                <div className="col-md-6">
                    <div className="card flex-md-row mb-4 box-shadow h-md-250">
                        <div className="card-body d-flex flex-column align-items-start">
                            <h3 className="mb-0">
                                <p className="text-dark">{product.title}</p>
                            </h3>
                            <div className="mb-1 text-muted">{product.createdAt}</div>
                            <strong className="d-inline-block  ">Product Description</strong>

                            <p className="card-text mb-3 ml-1">{product.description}</p>
                            <strong className="d-inline-block mb-2">user</strong>
                            <Link to={`/users/${product.user.name}`} className="text-dark mb-2">
                                <div style={{ display: "inline-block" }}>
                                    <img
                                        src={product.user.avatar}
                                        className="rounded-circle mr-1"
                                        alt="error"
                                    />
                                    <b>{product.user.name}</b>
                                </div>
                            </Link>
                            <strong className="d-inline-block mb-2">tags</strong>

                            <Tags tags={product.tags} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
