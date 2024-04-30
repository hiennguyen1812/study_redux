import Card from "../../UI/Card";
import dataProduct from "../../data/dataproduct";
import ProductCard from "./ProductCard";

import "./ProductList.css";

const ProductList = () => {
  return (
    <section id="sneaker">
      <div className="sneaker">
        <h1 className="product__title">Sneakers</h1>
        <hr />
        <div className="container product_container">
          {dataProduct.map((product) => (
            <Card key={product.id} className="">
              <ProductCard product={product} />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
