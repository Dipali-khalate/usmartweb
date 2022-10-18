import React from "react";
import "../style/datavisu.css";
import Datavisu3 from "./Datavisu3";
// import NavCasestdy from "../pages/NavCasestdy"
import Footer from "../pages/Footer";
import Fade from "react-reveal/Fade";

function Datavisu() {
  return (
    <div>
      <section
        style={{ height: "100vh" }}
        id="hero-3"
        className="bg-scroll hero-section division"
      >
        <div className="case_container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6" id="conEle">
              <div className="hero-3-txt white-color">
                <h2
                  className="h2-lg wow fadeInUp"
                  //   style="visibility: visible;animation-name: fadeInUp;"
                >
                  Get answers to questions you didn’t know you had
                </h2>
                <p
                  className="p-xl wow fadeInUp"
                  //   style="visibility: visible; animation-name: fadeInUp;"
                >
                  From strategy to implementation, we provide solutions for any
                  Data &amp; Analytics challenges that work in the real
                  world.For your data to be truly useful, it must be presented
                  in a way that is meaningful, intuitive, and which answers the
                  questions that will drive you to correct well-informed
                  decisions
                </p>
                <div
                  className="btns-group mb-30 wow fadeInUp"
                  //   style="visibility: visible; animation-name: fadeInUp;"
                >
                  <a
                    href="https://techknomatic.com/contact-us/"
                    className="btn btn-green tra-white-hover mr-15"
                  >
                    Get Started
                  </a>
                </div>{" "}
              </div>{" "}
            </div>
            <div className="col-lg-6">
              <div
                className="hero-3-img wow fadeInRight"
                id="imgEle"
                // style="visibility: visible; animation-name: fadeInRight;"
              >
                {/* <img
                  alt="Case-Studies-hero-image"
                  nitro-lazy-src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/themes/techknomatic/images/tablet-06.png"
                  className="img-fluid ls-is-cached lazyloaded"
                  nitro-lazy-empty=""
                  id="MjY4OjE4Ng==-1"
                  src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/themes/techknomatic/images/tablet-06.png"
                /> */}
                <img
                  alt="Data Visualization Consulting Services"
                  nitro-lazy-src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/themes/techknomatic/images/tablet-02.png"
                  className="img-fluid ls-is-cached lazyloaded"
                  nitro-lazy-empty=""
                  id="MjY3OjE3NQ==-1"
                  src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/themes/techknomatic/images/tablet-02.png"
                ></img>
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="wave-shape-bottom">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 195">
            <path
              fill="#fff"
              fillOpacity="1"
              d="M0,192L1440,96L1440,320L0,320Z"
            ></path>
          </svg>{" "}
        </div>
      </section>

      {/* ********************************************section two******************************* */}
      <section className="section-content-2">
        {" "}
        <div className="sectioncontainer">
          {" "}
          <div className="containerflex">
            {" "}
            <Fade left>
              <div className="image">
                {" "}
                <img
                  alt="Data Visualization Consulting Services"
                  nitro-lazy-src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/themes/techknomatic/images/data-visualization.png"
                  className="img-fluid ls-is-cached lazyloaded"
                  nitro-lazy-empty=""
                  id="MjgyOjE4NA==-1"
                  src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/themes/techknomatic/images/data-visualization.png"
                />{" "}
              </div>
            </Fade>
            <Fade right>
              <div className="text">
                {" "}
                <h2 className="h2-md">
                  Visual Analytics For Quick Insights
                </h2>{" "}
                <p className="p-lg">
                  From requirement analysis, data environment understanding,
                  <br /> dashboard development, to its release, we’ll help you
                  get data-driven <br />
                  insights for individual functions and the entire enterprise.
                  <br />
                </p>{" "}
                <p className="p-lg">
                  We work in all major BI tools and constantly develop our
                  knowledge to
                  <br /> provide clients with the best solutions tailored to
                  their needs.
                </p>{" "}
              </div>{" "}
            </Fade>
          </div>{" "}
        </div>{" "}
      </section>
      {/* *********************************************section three************************************** */}
      <Datavisu3 />
      {/* ****************************************section four********************************** */}
      <div className="frameofusecase">
        <div className="containe3">
          <div className="row justify-content-center">
            <div className="section-title title-01 mb-70">
              <h2
                style={{
                  justifyItems: "center",
                  justifyContent: "center",
                  textShadow: "3px 3px 2px slategray",
                  color: "#000",
                  margin: "20px 0",
                }}
                className="h2-md"
              >
                Case Studies
              </h2>
              <p
                style={{
                  color: "#000",
                  fontFamily: "sans-serif",
                  fontSize: "17px",
                  padding: "10px 0",
                }}
                className="p-xl"
              >
                {" "}
                Solutions to meet your needs
              </p>
            </div>{" "}
          </div>
          <div className="row1">
            <div>
              <a href="https://techknomatic.com/case-studies/dashboards-cycle-hire-analysis/">
                <img
                  style={{ width: "300px" }}
                  alt=""
                  src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/uploads/2021/12/hp-2.jpg"
                />
              </a>
              <a href="https://techknomatic.com/case-studies/dashboards-cycle-hire-analysis/">
                {" "}
                <h5 className="h5-md">Simplified Cycle Hire Analysis</h5>{" "}
                <p className="p-md grey-color">Human Resource</p>{" "}
              </a>
            </div>
            <div>
              <a href="https://techknomatic.com/case-studies/hr-management-dashboards/">
                {" "}
                <img
                  style={{ width: "300px" }}
                  alt=""
                  src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/uploads/2021/12/hp-3.jpg"
                />
              </a>
              <a href="https://techknomatic.com/case-studies/hr-management-dashboards/">
                {" "}
                <h5 className="h5-md">
                  HR Management Through Instructive Dashboards
                </h5>
                <p className="p-md grey-color">Human Resource</p>
              </a>
            </div>
            <div>
              <a href="https://techknomatic.com/case-studies/hr-management-dashboards/">
                {" "}
                <img
                  style={{ width: "300px" }}
                  alt=""
                  src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/uploads/2021/12/hp-3.jpg"
                />
              </a>
              <a href="https://techknomatic.com/case-studies/hr-management-dashboards/">
                {" "}
                <h5 className="h5-md">
                  HR Management Through Instructive Dashboards
                </h5>
                <p className="p-md grey-color">Human Resource</p>
              </a>
            </div>
            <div>
              <a href="https://techknomatic.com/case-studies/hr-management-dashboards/">
                {" "}
                <img
                  style={{ width: "300px" }}
                  alt=""
                  src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/uploads/2021/12/hp-3.jpg"
                />
              </a>
              <a href="https://techknomatic.com/case-studies/hr-management-dashboards/">
                {" "}
                <h5 className="h5-md">
                  HR Management Through Instructive Dashboards
                </h5>
                <p className="p-md grey-color">Human Resource</p>
              </a>
            </div>

            <div>
              <a href="https://techknomatic.com/case-studies/hr-management-dashboards/">
                {" "}
                <img
                  style={{ width: "300px" }}
                  alt=""
                  src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/uploads/2021/12/hp-3.jpg"
                />
              </a>
              <a href="https://techknomatic.com/case-studies/hr-management-dashboards/">
                {" "}
                <h5 className="h5-md">
                  HR Management Through Instructive Dashboards
                </h5>
                <p className="p-md grey-color">Human Resource</p>
              </a>
            </div>

            <div>
              <a href="https://techknomatic.com/case-studies/hr-management-dashboards/">
                {" "}
                <img src=" https://redlink-website-public.storage.googleapis.com/1234.jpg" />
                alt=""
              </a>
              <a href="https://techknomatic.com/case-studies/hr-management-dashboards/">
                {" "}
                <h5 className="h5-md">
                  HR Management Through Instructive Dashboards
                </h5>
                <p className="p-md grey-color">Human Resource</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* **************************************footer*********************************** */}
      <Footer />
    </div>
  );
}

export default Datavisu;
