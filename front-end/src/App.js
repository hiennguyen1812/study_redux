import Sidebar from "./container/SideBar/Sidebar";
import Navbar from "./container/NavBar/Navbar";
import InforCard from "./InforCard.js/InforCard";
import HomePage from "./UI/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
        <Sidebar />
        <HomePage />
        <InforCard />
      </BrowserRouter>
    </div>
  );
}

export default App;
