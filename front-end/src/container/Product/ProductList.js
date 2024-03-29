import Card from "../../components/Card"
import dataProduct from "../../data/dataproduct"
import ProductCard from "./ProductCard"

import "./ProductList.css"

const ProductList = () => {
    return (
        <div className="container product_container">
            {dataProduct.map((product) => (
                <Card key={product.id} className="">
                    <ProductCard product={product} />
                </Card>
            ))}
        </div>
    )
}

export default ProductList