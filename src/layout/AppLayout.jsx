import { useLocation } from "react-router-dom";
import "./appLayout.css";
import Footer from "./footer/Footer.jsx";
import Navbar from "./navBar/NavBar";
import core from "../visual/appfondo.png";
import { appRoutes } from "../utils/constants.js";

export default function AppLayout({ children }) {
  const location = useLocation();

  return (
    <>
      <div style={{ marginLeft: "-1vh" }}>
        <img
          src={core}
          style={{
            position: "fixed",
            zIndex: "-100",
            paddingTop: "1.3%",
          }}
        />
      </div>
      <div
        style={{
          position: "fixed",
          zIndex: 100,
          width: "100%",
        }}
      >
        <Navbar />
      </div>
      <div style={{ paddingTop: "7vh" }}>{children}</div>
      <div
        style={{
          position:
            location.pathname === appRoutes.HOME ||
            location.pathname === appRoutes.GAMES
              ? "fixed"
              : null,
          bottom: 0,
        }}
      >
        <Footer />
      </div>
    </>
  );
}
