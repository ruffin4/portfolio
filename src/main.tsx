import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

console.log("React Portfolio App Starting...");
createRoot(document.getElementById("root")!).render(<App />);
