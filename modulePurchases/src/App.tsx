import ReactDOM from "react-dom/client";
import Cart from "./Cart";

import "./index.css";

const App = () => (
  <div>
    <Cart />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);
