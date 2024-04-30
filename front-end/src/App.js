import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./container/SideBar/Sidebar";
import Navbar from "./container/NavBar/Navbar";
import InforCard from "./About/InforCard";
import Login from "./Pages/Login";
import Shop from "./Pages/Shop";
import ProductList from "./components/Product/ProductList";
import ShopCategory from "./Pages/ShopCategory";
import Cart from "./Pages/Cart";
import Deals from "./components/Deals/Deals";


function App() {
  return (
    <div className="App">
        <Navbar />
        <Sidebar />
        <Routes>
        <Route path="/" element={<Shop />} />
          <Route path="#sneaker" element={<ProductList />} />
          <Route path="#about" element={<ShopCategory category="about" />} />
          <Route path="#service" element={<ShopCategory category="service"  />} />
          <Route path="#sneaker" element={<ShopCategory category="sneaker"  />} />
          <Route path="#clothes" element={<ShopCategory category="clothes"  />} />
          <Route path="#contact" element={<ShopCategory category="contact"  />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/login" element={<Login />} />
          <Route path="/info" element={<InforCard />} />
          
        </Routes>
    </div>
  );
}

export default App;
