import { Link } from "react-router-dom";
import presentation from "../../visual/main/presentation.mp4";
import { useLoginContext } from "../../context/LoginContext";
import "./homeView.css";

export default function HomeView() {
  const { userLogged } = useLoginContext();

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr )",
          gridColumn: 3,
        }}
      >
        {userLogged && (
          <div style={{ display: "flex", gridColumn: "2" }}>
            <Link
              to="login"
              className="button-main btn btn-outline- purple lighten-2 z-depth-3 mr-3 section"
              style={{ width: "100%" }}
            >
              <i className="material-icons left">account_circle</i>
              Entra en tu perfil
            </Link>
            <Link
              to="signup"
              className="button-main btn btn-outline- lime accent-4 z-depth-3 section"
              style={{
                width: "100%",
              }}
            >
              <i className="material-icons left ">person_add</i>Registrate
            </Link>
          </div>
        )}
      </div>
      <div
        className="body"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr )",
          gridColumn: 3,
        }}
      >
        <div
          style={{
            paddingTop: "12%",
            gridColumn: "2",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // background: "blue",
          }}
        >
          <Link to={userLogged && "index-menu"}>
            <video
              loop
              autoPlay
              muted
              style={{
                border: "0.6vh solid black",
                borderRadius: "3.7vh",
                height: "45vh",
              }}
            >
              <source src={presentation} type="video/mp4" />
            </video>
          </Link>
        </div>
      </div>
      <h1
        className="title-main animate__animated animate__delay-1s animate__backInRight"
        style={{ textAlign: "center" }}
      >
        The English game
      </h1>
    </>
  );
}
