import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./Home.tsx";
import Navbar from "./Navbar.tsx"
import "bootstrap/scss/bootstrap.scss";
import "./hero.scss"
import "./style.scss"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Navbar/>
    <Home />
  </StrictMode>,
);
