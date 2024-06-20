import { Link } from "react-router-dom";
import basic from "../../visual/main/basic.mp4";
import intermediate from "../../visual/main/intermediate.mp4";
import advanced from "../../visual/main/advanced.mp4";
import "./games.css";

export default function GamesView() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1 className="title-link">Games</h1>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          marginTop: "4%",
        }}
      >
        <Link to="basic" style={{ gridColumnStart: 2 }}>
          <video
            loop
            autoPlay
            muted
            className="video-main"
            style={{ width: "95%" }}
          >
            <source src={basic} type="video/mp4" />
          </video>
        </Link>
        <Link to="intermediate">
          <video
            loop
            autoPlay
            muted
            className="video-main"
            style={{ width: "95%" }}
          >
            <source src={intermediate} type="video/mp4" />
          </video>
        </Link>
        <Link to="advanced">
          <video
            loop
            autoPlay
            muted
            className="video-main"
            style={{ width: "95%" }}
          >
            <source src={advanced} type="video/mp4" />
          </video>
        </Link>
      </div>
    </>
  );
}
