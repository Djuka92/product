import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { StoreProvider } from "./context/StoreContext";
import ProductDetails from "./components/ProductDetails";
import ProductList from "./components/ProductList";
import EditProductForm from "./components/EditProductForm";
import AddProductForm from "./components/AddProductForm";
import "./styles.css";

const App = () => {
  return (
    <Router>
      <StoreProvider>
        <div className="container">
          <nav>
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/product/add" className="nav-link">
                  Add Product
                </Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/product/edit/:id" element={<EditProductForm />} />
            <Route path="/product/add" element={<AddProductForm />} />
          </Routes>
        </div>
      </StoreProvider>
    </Router>
  );
};

export default App;
