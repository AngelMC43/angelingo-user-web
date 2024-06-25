import { useLocation } from "react-router-dom";
// import { useLoginContext } from "../../context/LoginContext";
import logoutImg from "../../visual/main/logout.png";
import logoWhite from "../../visual/main/logoWhite.png";
import letterLogo from "../../images/letter-logo-less.png";
import { appNames, appRoutes } from "../../utils/constants";
import "./navBar.css";

const barElements = [
  {
    route: appRoutes.HOME,
    name: appNames.HOME,
  },
  {
    route: appRoutes.GAMES,
    name: appNames.GAMES,
  },
  {
    route: appRoutes.GUIDE,
    name: appNames.GUIDE,
  },
  {
    route: appRoutes.RANKING,
    name: appNames.RANKING,
  },
];

export default function Navbar() {
  //   const { userLogged, logout } = useLoginContext();

  //   const location = useLocation();

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        // style={{ height: "7vh" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 8% 29.5% 25% 37.5%)",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "grid",
              placeItems: "center",
              paddingLeft: "8%",
              // background: "red",
            }}
          >
            <img src={letterLogo} style={{ width: "80%" }} />
          </div>
          {/* <div
            className="collapse navbar-collapse"
            id="navbarNavAltMarkup"
            style={{
              background: "blue",
              paddingLeft: "2%",
              display: "flex",
              justifyContent: "space-between",
            }}
          > */}
          <div className="navbar-nav" style={{ paddingLeft: "8%" }}>
            {barElements.map((i, index) => (
              <a
                key={index}
                className={`nav-link ${
                  location.pathname === i.route &&
                  "active nav-item lime accent-4 black-text fw-bold"
                } `}
                aria-current="page"
                href={i.route}
              >
                {i.name}
              </a>
            ))}
          </div>
          <div
            style={{
              display: "grid",
              placeItems: "center",
              // background: "red",
            }}
          >
            <img
              src={logoWhite}
              style={{
                height: "7vh",
                // background: "red",
                alignContent: "center",
              }}
            />
          </div>
          <a
            // onClick={() => logout()}
            style={{
              height: "9vh",
              // alignContent: "center",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              paddingRight: "2%",
              // background: "green",
            }}
          >
            <img
              src={logoutImg}
              style={{
                // width: "30%",
                height: "40%",
              }}
            />
          </a>
        </div>
        {/* </div> */}
      </nav>
      {/* <main className="App"></main> */}
    </>
  );
}
