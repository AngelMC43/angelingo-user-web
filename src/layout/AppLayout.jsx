import "./appLayout.css";
import Footer from "./footer/Footer.jsx";
import Navbar from "./navBar/NavBar";
import core from "../visual/appfondo.png";

export default function AppLayout({ children }) {
  return (
    <div>
      <img
        src={core}
        style={{
          position: "fixed",
          zIndex: "-100",
        }}
      />
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
      <Footer />
    </div>
  );
}
