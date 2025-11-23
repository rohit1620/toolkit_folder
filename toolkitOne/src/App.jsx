import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/header";
import Product from "./components/Product";
// import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Product />
      <h1>React Redux-Toolkit project</h1>
    </>
  );
}

export default App;
