import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./redux_toolkit/store.js";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
