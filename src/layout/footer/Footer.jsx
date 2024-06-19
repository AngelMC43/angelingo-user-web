import facebook from "../../visual/main/facebook.png";
import instagram from "../../visual/main/instagram.png";
import tiktok from "../../visual/main/tiktok.png";
import twitter from "../../visual/main/twitter.png";
import letterLogo from "../../images/letter-logo-less.png";
import "./footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 33% 30% 22% 15%)",
          background: "black",
          width: "100%",
          height: "22vh",
          marginTop: "3%",
        }}
      >
        <div
          style={{
            paddingLeft: "15%",
            alignContent: "center",
          }}
        >
          <div className="col columnF-footer">
            <h5 className="titleMain-footer">AngeLingo</h5>
            <p className="color-footer">
              Aprender inglés con juegos interactivos es la forma más fácil de
              adquirir nuevos conocimientos. Podrás elegir varios niveles según
              tu grado de conocimiento.
            </p>
            <p className="fw-bold color-footer">¡Mucha suerte en tu camino!</p>
          </div>
        </div>

        <div
          style={{
            alignContent: "center",
            textAlign: "center",
          }}
        >
          <h5 className="titleMain-footer">Redes sociales</h5>
          <br />
          <ul
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 20,
            }}
          >
            <li>
              <a href="" className="col">
                <img src={facebook} className="pic-footer" />
              </a>
            </li>
            <li>
              <a href="" className="col">
                <img src={instagram} className="pic-footer" />
              </a>
            </li>
            <li>
              <a href="" className="col">
                <img src={tiktok} className="pic-footer" />
              </a>
            </li>
            <li>
              <a href="" className="col">
                <img src={twitter} className="pic-footer" />
              </a>
            </li>
          </ul>
        </div>
        <div
          style={{
            alignContent: "center",
            textAlign: "center",
          }}
        >
          <h5 className="titleMain-footer">Links</h5>
          <ul>
            <li>
              <a href="ideas-map" className="color-footer">
                Mapa de ideas
              </a>
            </li>
            <li>
              <a href="contacto" className="color-footer">
                Contacto
              </a>
            </li>

            <li>
              <a href="about" className="color-footer">
                Sobre nosotros
              </a>
            </li>
            <br />
          </ul>
        </div>
        <div style={{ alignContent: "center" }}>
          <img
            src={letterLogo}
            alt=""
            style={{
              width: "90%",
            }}
          />
        </div>
      </div>
      <div class="bgSub-footer">© {year} AngeLingo All rights reserved</div>
    </>
  );
}
