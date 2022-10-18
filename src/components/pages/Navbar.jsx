import React, { useState } from "react";
import "../style/navbar.css";
import logo from "../../logo.jpg";
import { Link } from "react-router-dom";
import { Flip } from "react-reveal";

function Navbar(props) {
  const [active, setActive] = useState("");

  return (
    <>
      <div
        className={
          (props.scroll ? "nav-header scrolled " : "nav-header ") + active
        }
      >
        <div
          className="menubtn"
          onClick={() => {
            // setActive("active")
            active === "" ? setActive("active") : setActive("");
          }}
        >
          <span></span>
          <span style={{ width: active ? "75%" : "100%" }}></span>
          <span style={{ width: active ? "50%" : "100%" }}></span>
        </div>

        <Flip left>
          <img src={logo} alt=" " width="80" height="80" />
        </Flip>
        <ul className="sub-menu">
          <li>
            <span>Services</span>

            <ul>
              <li>
                <Link to="/datavisu">Data_visualization</Link>
              </li>
              <li>
                <Link to="Stargyconst">Statergies_&_consulting</Link>
              </li>
              <li>
                <Link to="dataprep">Data Preparation</Link>
              </li>
              <li>Dashboard_Designing</li>
              <li>Data Stroytelling</li>
              <li>BI Implementation</li>
            </ul>
          </li>
          <li>
            <span>Industries</span>
          </li>
          <li>
            <span>Resources</span>

            <ul>
              <li>
                <Link to="/casestudy">Case_Study</Link>
              </li>
            </ul>
          </li>
          <li>
            <span>About Us</span>

            <ul>
              <li>Company</li>
              <li>
                <Link to="team">Team</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="contact"> Contact Us</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
