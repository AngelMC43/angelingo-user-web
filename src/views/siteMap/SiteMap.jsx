import "./siteMap.css";
import arbol5 from "../../visual/main/arbol5.jpg";
import arbol4 from "../../visual/main/arbol4.jpg";
import arbol3 from "../../visual/main/arbol3.jpg";
import arbol from "../../visual/main/arbol.jpg";

export default function SiteMapView() {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1 className="title-mapa">
          <span className="purple-letter">M</span>apa de
          <span className="green-letter"> I</span>deas
        </h1>
      </div>
      <div
        style={{
          width: "100%",
          display: "grid",
          placeItems: "center",
        }}
      >
        <div className="container-mapa">
          <img src={arbol} className="firstPic" />
        </div>
        <div className="container-mapSecond">
          <img src={arbol3} className="secondPic" />
        </div>
        <div className="container-mapThird">
          <img src={arbol4} className="thirdPic" />
        </div>
        <div className="container-mapFourth">
          <img src={arbol5} className="fourthPic" />
        </div>
      </div>
    </div>
  );
}
