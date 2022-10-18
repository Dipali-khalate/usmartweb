import "../pages/Header";
import video1 from "../../ai.mp4";
import imgbg from "../../bg.jpg";
import video2 from "../../video2.mp4";
import "../style/header.css";
import { Player, ControlBar } from "video-react";
function Header() {
  return (
    <header>
      {/* <video src={video1} style={{ width: "100%" }} loop autoPlay muted></video> */}
      {/* <img src={imgbg} style={{ width: "100%"}} /> */}

      <div className="header-container"></div>
      <div className="container">
        <div>
          <h1 className=" text-white h2-sm">
            {/* Make your data more insightful, Visually */}
          </h1>
          {/* <p style={{ color: "#fff" }} className="p-xl">
            Unlock the power of your data. Make informed decisions
            anytime-anywhere to deliver successful business outcomes
          </p> */}
        </div>
        <div>
          <video
            className="img-fluid lazyloaded"
            controls
            itemType="video/mp4"
            src={video2}
          ></video>
        </div>
      </div>
    </header>
  );
}
export default Header;
