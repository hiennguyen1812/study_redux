import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./container/SideBar/Sidebar";
import Navbar from "./container/NavBar/Navbar";
import InforCard from "./InforCard.js/InforCard";
import Login from "./Pages/Login";
import Shop from "./Pages/Shop";
import ProductList from "./container/Product/ProductList";
import ShopCategory from "./Pages/ShopCategory";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/about" element={<ShopCategory category="about" />} />
          <Route path="/service" element={<ShopCategory category="service"  />} />
          <Route path="/sneaker" element={<ShopCategory category="sneaker"  />} />
          <Route path="/clothes" element={<ShopCategory category="clothes"  />} />
          <Route path="/contact" element={<ShopCategory category="contact"  />} />
          <Route path="/info" element={<InforCard />} />
          <Route path="/login" element={<Login />} />
          {/* Add more routes here */}
        </Routes>
    </div>
  );
}

export default App;
