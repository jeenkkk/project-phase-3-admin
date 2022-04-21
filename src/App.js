
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/Nav";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import User from "./pages/User";
function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/User" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
