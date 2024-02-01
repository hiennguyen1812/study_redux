import "./ProductList.css"
import { CiShoppingBasket } from "react-icons/ci";

const ProductCard = (props) => {
  return (
    <div className="card_main">
      <img src={props.product.productImg} />
      <br />
      <h2>{props.product.name}</h2>
      <br />
      <h4>{props.product.payment}</h4>
      <br />
      <button className="btn btn-primary">
        Add to Card <CiShoppingBasket />
      </button>
    </div>
  );
};

export default ProductCard;
