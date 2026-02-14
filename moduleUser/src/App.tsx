import ReactDOM from "react-dom/client";
import User from "./User";

import "./index.css";

const App = () => (
  <div>
    <User />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);