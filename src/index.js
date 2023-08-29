import ReactDOM from "react-dom/client";
import App from "./App";
import "./Scss/index.scss";
import store from "./Global/store";
import { Provider } from "react-redux";
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
