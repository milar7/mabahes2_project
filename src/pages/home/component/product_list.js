import ProductItem from "./product_item";

const ProductList = ({ products, mine }) => {
    return (
        <div className="container">
            <div className="row">
                {products.map((product) => (
                    <ProductItem key={product.id} product={product} mine={mine} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
