import Card from "../components/Card";
import ProductList from "../container/Product/ProductList";
import "./HomePage.css"

const HomePage = () => {
  return (
    <div className="home_container">
      <ProductList />
    </div>
  );
};

export default HomePage;
