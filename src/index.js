import React from "react";
import App from "./App.jsx";
import "./index.css";
import { createRoot } from "react-dom/client";

const nodeElement = document.getElementById("root");
const root = createRoot(nodeElement);

root.render(<App />);
