import { Link } from "react-router-dom";
import { useLoginContext } from "../../context/LoginContext";
import "./profile.css";
import { appRoutes } from "../../utils/constants";

export default function ProfileView() {
  const { userLogged } = useLoginContext();
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 20% 60% 20% )",
      }}
    >
      <div
        className="mainContainer-profile"
        style={{
          gridColumnStart: 2,
          placeItems: "center",
          marginTop: "5%",
          height: "70vh",
        }}
      >
        <h3 className="title">
          {userLogged.name} {userLogged.surname}Angel Muñoz
        </h3>
        <div>
          <img src={userLogged.avatar} className="circle avaPic" />
        </div>

        <div className=" inside-container w-75">
          <div className="card-header">
            <ul className="nav nav-tabs card-header-tabs">
              <li className="nav-item ">
                <a className="nav-link active " aria-current="true" href="#">
                  <b>Perfil</b>
                </a>
              </li>

              <li className="nav-item">
                <Link to={appRoutes.RANKING} className="nav-link">
                  <b>Score</b>
                </Link>
              </li>

              <li className="nav-item">
                <Link to={appRoutes.UPLOAD_USERS} className="nav-link">
                  <b>Actualizar</b>
                </Link>
              </li>
            </ul>
          </div>

          <div className="insideText-profile">
            <p className="mt-5 ">
              <b>Nombre: </b>
              {userLogged.name}
            </p>

            <p>
              <b>Apellidos: </b>
              {userLogged.surname}
            </p>

            <p>
              <b>Email: </b>
              {userLogged.email}
            </p>

            <p>
              <b>Edad: </b>
              {userLogged.age}
            </p>
          </div>
        </div>
        <Link to="/games" className="btn button-profile" style={{}}>
          Juegos
        </Link>
      </div>
    </div>
  );
}
