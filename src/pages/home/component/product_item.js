/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */

import { Link } from "react-router-dom";

// import { Image } from "react-bootstrap";

const ProductItem = ({ product, mine }) => {
    return (
        <div className="col-md-4">
            <div className="card mb-4 box-shadow">
                <Link to={`/products/${product.id}`}>
                    {" "}
                    <img className="card-img-top" src={product.image} alt="Card image cap" />
                </Link>

                <div className="card-body">
                    <Link to={`/users/${product.user.name}`}>
                        {mine !== true ? (
                            <div className="row">
                                <img
                                    className="rounded-circle"
                                    alt="40x40"
                                    src="https://picsum.photos/id/3/45/45"
                                    style={{ marginBottom: "12px", marginLeft: "10px" }}
                                />
                                <p style={{ margin: "10px" }}>{product.user.name}</p>
                            </div>
                        ) : (
                            <Link to="#">Edit</Link>
                        )}
                    </Link>

                    <h5>{product.title.substring(0, 30)}</h5>
                    <p className="card-text">{product.description.substring(0, 100)}</p>
                    <div className="d-flex justify-content-between align-items-center"></div>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;
