import facebook from "../../visual/main/facebook.png";
import instagram from "../../visual/main/instagram.png";
import tiktok from "../../visual/main/tiktok.png";
import twitter from "../../visual/main/twitter.png";
import letterLogo from "../../images/letter-logo-less.png";
import "./footer.css";

export default function SlimFooter() {
  const year = new Date().getFullYear();

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr )",
          background: "black",
          height: "6vh",
        }}
      >
        <div>
          <ul
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              gap: 20,
            }}
          >
            <li>
              <a href="" className="col">
                <img src={facebook} className="pic-slimfooter" />
              </a>
            </li>
            <li>
              <a href="" className="col">
                <img src={instagram} className="pic-slimfooter" />
              </a>
            </li>
            <li>
              <a href="" className="col">
                <img src={tiktok} className="pic-slimfooter" />
              </a>
            </li>
            <li>
              <a href="" className="col">
                <img src={twitter} className="pic-slimfooter" />
              </a>
            </li>
          </ul>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 20,
          }}
        >
          <a href="ideas-map" className="color-slimfooter">
            Mapa de ideas
          </a>

          <a href="contacto" className="color-slimfooter">
            Contacto
          </a>

          <a href="about" className="color-slimfooter">
            Sobre nosotros
          </a>
        </div>
        <div
          style={{
            alignContent: "center",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr )",
          }}
        >
          <div></div>
          <div></div>
          <img
            src={letterLogo}
            alt=""
            style={{
              width: "50%",
            }}
          />
        </div>
      </div>
      <div class="bgSub-footer">© {year} AngeLingo All rights reserved</div>
    </>
  );
}
