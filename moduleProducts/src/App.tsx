import ReactDOM from "react-dom/client";
import Products from "./Products";

import "./index.css";

const App = () => (
  <div>
    <Products />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);