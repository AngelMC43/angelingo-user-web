import "./appLayout.css";
import Footer from "./footer/Footer.jsx";
import Navbar from "./navBar/NavBar";
import core from "../visual/appfondo.png";
import { useLocation } from "react-router-dom";
import SlimFooter from "./footer/SlimFooter.jsx";

export default function AppLayout({ children }) {
  const location = useLocation();

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <div style={{ flex: "1" }}>
        <img
          src={core}
          style={{
            position: "fixed",
            zIndex: "-100",
          }}
        />

        <Navbar />
      </div>
      <div
        style={{
          flex: "12",
        }}
      >
        {children}
      </div>
      {location.pathname === "/" ? <Footer /> : <SlimFooter />}
    </div>
  );
}
