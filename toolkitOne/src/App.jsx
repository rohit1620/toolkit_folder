import { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/header";
import Product from "./components/Product";
import CartList from "./components/CartList";
import Home from "./components/Home";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      {/* <Product /> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/cart" element={<CartList />}></Route>
      </Routes>
    </>
  );
}

export default App;
