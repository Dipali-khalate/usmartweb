import React from "react";
import "../style/container.css";
import Storiesofcust from "./Storiesofcust";
import Footer from "./Footer";
import Story from "./Story";
// import Header from "./Header";
import Mainpage from "./Mainpage";

function Container() {
  return (
    <div>
      <Mainpage />
      <div className="mainbox">
        {" "}
        <div className="boxheader">
          {" "}
          <div className="titlebox">
            {" "}
            <h2>What We Do</h2>{" "}
            <p
              style={{ color: "#000", fontFamily: "initial", fontSize: "20px" }}
            >
              We provide Data &amp; Analytics solutions for your business
              problems
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className="fbox-8-wrapper text-center">
        <div className="row row-cols-1 row-cols-md-3">
          <div className="col">
            <a href="https://techknomatic.com/services/data-visualization-consulting-services">
              <div
                className="fbox-8 mb-40 bg-whitesmoke-gradient wow fadeInUp"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                <div className="fbox-img">
                  <img
                    alt="Data Visualization Services"
                    nitro-lazy-src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/themes/techknomatic/images/services/Data%20Visualization.jpg"
                    className="img-fluid ls-is-cached lazyloaded"
                    nitro-lazy-empty=""
                    id="Mjk3OjIwNA==-1"
                    src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/themes/techknomatic/images/services/Data%20Visualization.jpg"
                  />
                </div>{" "}
                <h5 className="h5-md">Data Visualization</h5>
                <p>
                  Automate manual, time-consuming processes to deliver deeper
                  insights
                </p>{" "}
              </div>{" "}
            </a>{" "}
          </div>{" "}
          <div className="col">
            <a href="https://techknomatic.com/services/data-preparation-services">
              <div
                className="fbox-8"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                <div className="fbox-img">
                  <img
                    alt="Data Preparation Services"
                    nitro-lazy-src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/themes/techknomatic/images/services/Data%20Preparation.jpg"
                    className="img-fluid ls-is-cached lazyloaded"
                    nitro-lazy-empty=""
                    id="MzA2OjIwMA==-1"
                    src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/themes/techknomatic/images/services/Data%20Visualization.jpg"
                  />
                </div>{" "}
                <h5 className="h5-md">Data Preparation</h5>
                <p>
                  Transform business data into the required format for decision
                  making
                </p>{" "}
              </div>{" "}
            </a>{" "}
          </div>
          <div className="col">
            {" "}
            <a href="https://techknomatic.com/services/dashboard-designing-services">
              {" "}
              <div
                className="fbox-8 mb-40 bg-whitesmoke-gradient wow fadeInUp"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                <div className="fbox-img">
                  <img
                    alt="Dashboard Designing Services"
                    nitro-lazy-src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/themes/techknomatic/images/services/Dashboard%20Designing.jpg"
                    className="img-fluid ls-is-cached lazyloaded"
                    nitro-lazy-empty=""
                    id="MzE1OjIwNg==-1"
                    src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/themes/techknomatic/images/services/Dashboard%20Designing.jpg"
                  />
                </div>{" "}
                <h5 className="h5-md">Dashboard Designing</h5>{" "}
                <p>
                  Convert complex reports into comprehensive and eye-catchy
                  dashboards
                </p>{" "}
              </div>{" "}
            </a>{" "}
          </div>{" "}
          <div className="col">
            <a href="https://techknomatic.com/services/data-storytelling-services">
              <div
                className="fbox-8 mb-40 bg-whitesmoke-gradient wow fadeInUp"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                {" "}
                <div className="fbox-img">
                  <img
                    alt="Data Storytelling Services"
                    nitro-lazy-src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/themes/techknomatic/images/services/Data%20Storytelling.jpg"
                    className="img-fluid ls-is-cached lazyloaded"
                    nitro-lazy-empty=""
                    id="MzI0OjIwMg==-1"
                    src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/themes/techknomatic/images/services/Dashboard%20Designing.jpg"
                  />
                </div>{" "}
                <h5 className="h5-md">Data Storytelling</h5>{" "}
                <p>
                  Use the effective way to share information and drive outcomes
                  with stories
                </p>{" "}
              </div>{" "}
            </a>{" "}
          </div>{" "}
          <div className="col">
            {" "}
            <a href="https://techknomatic.com/services/power-bi-consulting-services">
              {" "}
              <div
                className="fbox-8 mb-40 bg-whitesmoke-gradient wow fadeInUp"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                <div className="fbox-img">
                  <img
                    alt="BI Implementation Services "
                    nitro-lazy-src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/themes/techknomatic/images/services/BI%20Implementation.jpg"
                    className="img-fluid ls-is-cached lazyloaded"
                    nitro-lazy-empty=""
                    id="MzMzOjIwMw==-1"
                    src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/themes/techknomatic/images/services/Dashboard%20Designing.jpg"
                  />
                </div>
                <h5 className="h5-md">BI Implementation</h5>{" "}
                <p>
                  Migrate your data to new and improved BI analytical platforms
                  for better decisions
                </p>{" "}
              </div>{" "}
            </a>{" "}
          </div>{" "}
          <div className="col">
            {" "}
            <a href="https://techknomatic.com/services/strategy-consulting-services">
              {" "}
              <div
                className="fbox-8 mb-40 bg-whitesmoke-gradient wow fadeInUp"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                {" "}
                <div className="fbox-img">
                  <img
                    alt="Strategy &amp; Consulting Services"
                    nitro-lazy-src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/themes/techknomatic/images/services/Embedded%20Analytics.jpg"
                    className="img-fluid ls-is-cached lazyloaded"
                    nitro-lazy-empty=""
                    id="MzQyOjIwNw==-1"
                    src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/themes/techknomatic/images/services/Dashboard%20Designing.jpg"
                  />
                </div>
                <h5 className="h5-md">Strategy &amp; Consulting</h5>{" "}
                <p>
                  Ensure your organization’s success with strategy &amp;
                  consulting on solutions that fit your firm’s needs
                </p>{" "}
              </div>{" "}
            </a>{" "}
          </div>{" "}
        </div>
      </div>
      {/* **************************************who we are******************************** */}
      <div className="whoweare">
        <div
          style={{ padding: "50px 0" }}
          className="section-title title-01 mb-70"
        >
          {" "}
          <h2
            style={{
              justifyItems: "center",
              justifyContent: "center",
              textShadow: "3px 3px 2px slategray",
              color: "#fff",
            }}
            className="h2-md"
          >
            Who We Are
          </h2>{" "}
          <p
            className="p-xl"
            style={{
              color: "#fff",
              fontFamily: "sans-serif",
              fontSize: "17px",
            }}
          >
            We're a Data analytics firm passionately committed to helping our
            clients using leading-edge analytics, technology and strategy to
            create solutions that work in the real world.
          </p>{" "}
        </div>
        {/* ***************************************************** */}
        <div className="footer-images">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5">
            {" "}
            <div className="col">
              {" "}
              <div
                className="statistic-block mb-40 wow fadeInUp"
                // style="visibility: visible; animation-name: fadeInUp;"
              >
                <div className="statistic-ico ico-65">
                  <img
                    alt="Years of Solution Delivery Icon"
                    nitro-lazy-src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/themes/techknomatic/images/icons/Years%20of%20Solution%20Delivery%20Icon-01.svg"
                    className=" ls-is-cached lazyloaded"
                    nitro-lazy-empty=""
                    id="MzYzOjIyMw==-1"
                    src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/themes/techknomatic/images/icons/Years%20of%20Solution%20Delivery%20Icon-01.svg"
                  />
                </div>
                <div className="statictic-text">
                  {" "}
                  <h3 className="h3-md statistic-number">
                    {/* <span className="count-element">7</span>+ */}
                  </h3>{" "}
                  <p>Years of Solution Delivery</p>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="col">
              {" "}
              <div
                className="statistic-block mb-40 wow fadeInUp"
                // style="visibility: visible; animation-name: fadeInUp;"
              >
                <div className="statistic-ico ico-65">
                  <img
                    alt="Domains Served Icon"
                    nitro-lazy-src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/themes/techknomatic/images/icons/Domains%20Served%20Icon-01.svg"
                    className=" ls-is-cached lazyloaded"
                    nitro-lazy-empty=""
                    id="MzcyOjE5OQ==-1"
                    src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/themes/techknomatic/images/icons/Domains%20Served%20Icon-01.svg"
                  />
                </div>
                <div className="statictic-text">
                  {" "}
                  <h3 className="h3-md statistic-number">
                    {/* <span className="count-element">15</span>+ */}
                  </h3>{" "}
                  <p>Domains Served</p>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="col">
              {" "}
              <div
                className="statistic-block mb-40 wow fadeInUp"
                // style="visibility: visible; animation-name: fadeInUp;"
              >
                {" "}
                <div className="statistic-ico ico-65">
                  <img
                    alt="Projects Completed Icon"
                    nitro-lazy-src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/themes/techknomatic/images/icons/Projects%20Completed%20iCON-01.svg"
                    className=" ls-is-cached lazyloaded"
                    nitro-lazy-empty=""
                    id="MzgxOjIwNw==-1"
                    src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/themes/techknomatic/images/icons/Projects%20Completed%20iCON-01.svg"
                  />
                </div>{" "}
                <div className="statictic-text">
                  {" "}
                  <h3 className="h3-md statistic-number">
                    {/* <span className="count-element">200</span>+ */}
                  </h3>{" "}
                  <p>Projects Completed</p>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="col">
              {" "}
              <div
                className="statistic-block mb-40 wow fadeInUp"
                // style="visibility: visible; animation-name: fadeInUp;"
              >
                {" "}
                <div className="statistic-ico ico-65">
                  <img
                    alt="Dashboards Delivered Icon"
                    nitro-lazy-src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/themes/techknomatic/images/icons/Dashboards%20Delivered%20Icon-01.svg"
                    className=" ls-is-cached lazyloaded"
                    nitro-lazy-empty=""
                    id="MzkwOjIxMQ==-1"
                    src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/themes/techknomatic/images/icons/Dashboards%20Delivered%20Icon-01.svg"
                  />
                </div>{" "}
                <div className="statictic-text">
                  {" "}
                  <h3 className="h3-md statistic-number">
                    {/* <span className="count-element">5000</span>+ */}
                  </h3>{" "}
                  <p>Dashboards Delivered</p>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="col">
              {" "}
              <div
                className="statistic-block mb-40 wow fadeInUp"
                // style="visibility: visible; animation-name: fadeInUp;"
              >
                {" "}
                <div className="statistic-ico ico-65">
                  <img
                    alt="Hours of Consulting Icon"
                    nitro-lazy-src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/themes/techknomatic/images/icons/Hours%20of%20Consulting%20Icon-01.svg"
                    className=" ls-is-cached lazyloaded"
                    nitro-lazy-empty=""
                    id="Mzk5OjIwOQ==-1"
                    src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/themes/techknomatic/images/icons/Hours%20of%20Consulting%20Icon-01.svg"
                  />
                </div>{" "}
                <div className="statictic-text">
                  {" "}
                  <h3 className="h3-md statistic-number">
                    {/* <span className="count-element">100000</span>+ */}
                  </h3>{" "}
                  <p>Hours of Consulting</p>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>
        </div>
      </div>
      {/* *********************************************** How It Work************************************** */}
      <div style={{ width: "100%" }} className="col-lg-10 col-xl-8">
        {" "}
        <div className="section-title title-01">
          {" "}
          <h2
            style={{
              justifyItems: "center",
              justifyContent: "center",
              textShadow: "3px 3px 2px slategray",
              color: "#000",
            }}
            className="h2-md"
          >
            How It Works?
          </h2>{" "}
          <p
            style={{
              color: "#000",
              fontFamily: "sans-serif",
              fontSize: "17px",
            }}
            className="p-xl"
          >
            Enable everyone at your organization make confident decisions using
            intuitive analytics
          </p>
          <img
            style={{ maxWidth: "800px", height: "auto", margin: "40px 0" }}
            alt="Data Visualization &amp; Dashboard Designing"
            nitro-lazy-src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/themes/techknomatic/images/data-visualization-video.gif"
            className="img-fluid ls-is-cached lazyloaded"
            nitro-lazy-empty=""
            id="NDE4OjE5OA==-1"
            src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/themes/techknomatic/images/data-visualization-video.gif"
          />{" "}
        </div>{" "}
      </div>
      {/* ************************************************tools and tech************************************* */}
      <div
        id="brands-2"
        className="bg-lightgrey wide-70 brands-section division nitro-offscreen"
      >
        {" "}
        <div className="container1">
          {" "}
          <div className="section-title title-01">
            {" "}
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
              Tools &amp; Technologies We Use
            </h2>{" "}
            <p
              style={{
                color: "#000",
                fontFamily: "sans-serif",
                fontSize: "17px",
                padding: "10px 0",
              }}
              className="p-xl"
            >
              We work in all major BI tools and constantly develop our knowledge
              to provide clients with the best solutions tailored to their needs
            </p>{" "}
          </div>{" "}
          <div className="brands-2-wrapper">
            {" "}
            <div className="row justify-content-md-center row-cols-2 row-cols-sm-3 row-cols-md-5">
              {" "}
              <div className="col">
                {" "}
                <div className="brand-logo">
                  {" "}
                  <a href="#">
                    <img
                      alt="brand-logo"
                      nitro-lazy-src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/themes/techknomatic/images/brand-1.png"
                      className="img-fluid lazyloaded"
                      nitro-lazy-empty=""
                      id="NDM1OjE2NQ==-1"
                      src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/themes/techknomatic/images/brand-1.png"
                    />
                  </a>{" "}
                </div>{" "}
              </div>{" "}
              <div className="col">
                {" "}
                <div className="brand-logo">
                  {" "}
                  <a href="#">
                    <img
                      alt="brand-logo"
                      nitro-lazy-src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/themes/techknomatic/images/brand-2.png"
                      className="img-fluid lazyloaded"
                      nitro-lazy-empty=""
                      id="NDQwOjE2NQ==-1"
                      src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/themes/techknomatic/images/brand-2.png"
                    />
                  </a>{" "}
                </div>{" "}
              </div>{" "}
              <div className="col">
                {" "}
                <div className="brand-logo">
                  {" "}
                  <a href="#">
                    <img
                      alt="brand-logo"
                      nitro-lazy-src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/themes/techknomatic/images/brand-3.png"
                      className="img-fluid lazyloaded"
                      nitro-lazy-empty=""
                      id="NDQ1OjE2NQ==-1"
                      src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/themes/techknomatic/images/brand-3.png"
                    />
                  </a>{" "}
                </div>{" "}
              </div>{" "}
              <div className="col">
                {" "}
                <div className="brand-logo">
                  {" "}
                  <a href="#">
                    <img
                      alt="brand-logo"
                      nitro-lazy-src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/themes/techknomatic/images/brand-4.png"
                      className="img-fluid lazyloaded"
                      nitro-lazy-empty=""
                      id="NDUwOjE2NQ==-1"
                      src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/themes/techknomatic/images/brand-4.png"
                    />
                  </a>{" "}
                </div>{" "}
              </div>{" "}
              <div className="col">
                {" "}
                <div className="brand-logo">
                  {" "}
                  <a href="#">
                    <img
                      alt="brand-logo"
                      nitro-lazy-src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/themes/techknomatic/images/brand-5.png"
                      className="img-fluid lazyloaded"
                      nitro-lazy-empty=""
                      id="NDU1OjE2NQ==-1"
                      src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/themes/techknomatic/images/brand-5.png"
                    />
                  </a>{" "}
                </div>{" "}
              </div>{" "}
              <div className="col">
                {" "}
                <div className="brand-logo">
                  {" "}
                  <a href="#">
                    <img
                      alt="brand-logo"
                      nitro-lazy-src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/themes/techknomatic/images/brand-6.png"
                      className="img-fluid ls-is-cached lazyloaded"
                      nitro-lazy-empty=""
                      id="NDYwOjE2NQ==-1"
                      src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/themes/techknomatic/images/brand-6.png"
                    />
                  </a>{" "}
                </div>{" "}
              </div>{" "}
              <div className="col">
                {" "}
                <div className="brand-logo">
                  {" "}
                  <a href="#">
                    <img
                      alt="brand-logo"
                      nitro-lazy-src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/themes/techknomatic/images/brand-7.png"
                      className="img-fluid ls-is-cached lazyloaded"
                      nitro-lazy-empty=""
                      id="NDY1OjE2NQ==-1"
                      src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/themes/techknomatic/images/brand-7.png"
                    />
                  </a>{" "}
                </div>{" "}
              </div>{" "}
              <div className="col">
                {" "}
                <div className="brand-logo">
                  {" "}
                  <a href="#">
                    <img
                      alt="brand-logo"
                      nitro-lazy-src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/themes/techknomatic/images/brand-8.png"
                      className="img-fluid ls-is-cached lazyloaded"
                      nitro-lazy-empty=""
                      id="NDcwOjE2NQ==-1"
                      src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/themes/techknomatic/images/brand-8.png"
                    />
                  </a>{" "}
                </div>{" "}
              </div>{" "}
              <div className="col">
                {" "}
                <div className="brand-logo">
                  {" "}
                  <a href="#">
                    <img
                      alt="brand-logo"
                      nitro-lazy-src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/themes/techknomatic/images/brand-9.png"
                      className="img-fluid ls-is-cached lazyloaded"
                      nitro-lazy-empty=""
                      id="NDc1OjE2NQ==-1"
                      src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/themes/techknomatic/images/brand-9.png"
                    />
                  </a>{" "}
                </div>{" "}
              </div>{" "}
              <div className="col">
                {" "}
                <div className="brand-logo">
                  {" "}
                  <a href="#">
                    <img
                      alt="brand-logo"
                      nitro-lazy-src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/themes/techknomatic/images/brand-10.png"
                      className="img-fluid lazyloaded"
                      nitro-lazy-empty=""
                      id="NDgwOjE2Ng==-1"
                      src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/themes/techknomatic/images/brand-10.png"
                    />
                  </a>{" "}
                </div>{" "}
              </div>{" "}
              <div className="col">
                {" "}
                <div className="brand-logo">
                  {" "}
                  <a href="#">
                    <img
                      alt=" "
                      nitro-lazy-src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/themes/techknomatic/images/brand-11.png"
                      className="img-fluid lazyloaded"
                      nitro-lazy-empty=""
                      id="NDg1OjE2Ng==-1"
                      src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/themes/techknomatic/images/brand-11.png"
                    />
                  </a>{" "}
                </div>{" "}
              </div>{" "}
              <div className="col">
                {" "}
                <div className="brand-logo">
                  {" "}
                  <a href="#">
                    <img
                      alt="brand-logo"
                      nitro-lazy-src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/themes/techknomatic/images/brand-12.png"
                      className="img-fluid lazyloaded"
                      nitro-lazy-empty=""
                      id="NDkwOjE2Ng==-1"
                      src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/themes/techknomatic/images/brand-12.png"
                    />
                  </a>{" "}
                </div>{" "}
              </div>{" "}
              <div className="col">
                {" "}
                <div className="brand-logo">
                  {" "}
                  <a href="#">
                    <img
                      alt="brand-logo"
                      nitro-lazy-src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/themes/techknomatic/images/brand-13.png"
                      className="img-fluid lazyloaded"
                      nitro-lazy-empty=""
                      id="NDk1OjE2Ng==-1"
                      src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/themes/techknomatic/images/brand-13.png"
                    />
                  </a>{" "}
                </div>{" "}
              </div>{" "}
              <div className="col">
                {" "}
                <div className="brand-logo">
                  {" "}
                  <a href="#">
                    <img
                      alt="brand-logo"
                      nitro-lazy-src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/themes/techknomatic/images/brand-14.png"
                      src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/themes/techknomatic/images/brand-14.png"
                    />
                  </a>{" "}
                </div>{" "}
              </div>{" "}
              <div className="col">
                {" "}
                <div className="brand-logo">
                  {" "}
                  <a href="#">
                    <img
                      alt="brand-logo"
                      nitro-lazy-src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/themes/techknomatic/images/brand-15.png"
                      id="NTA1OjE2Ng==-1"
                      src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/themes/techknomatic/images/brand-15.png"
                    />
                  </a>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
      {/* ******************************case study************************** */}
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
        {/* ************************************our experties ************************************** */}
        {/* <section className="expertise nitro-offscreen"> */}
        <div style={{ margin: "40px 0" }} className="expertiescontainer">
          <div className="row justify-content-center">
            {" "}
            <div className="col-lg-10 col-xl-8">
              {" "}
              <div className="section-title title-01 mb-70">
                n{" "}
                <h2 style={{ margin: "30px 0" }} className="h2-md">
                  Our Expertise Across Industries
                </h2>{" "}
                <p className="p-xl">
                  We help our clients to implement a data-driven decision-making
                  system
                </p>
                <p className="p-xl">specific to their industry.</p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="fbox-8-wrapper text-center">
            {" "}
            <div className="fbox-8-wrapper text-center">
              <div
                style={{
                  flexWrap: "wrap",
                  alignItem: "center",
                  justifyContent: "center",
                }}
                className="row row-cols-1 row-cols-md-3"
              >
                {" "}
                <div className="col">
                  {" "}
                  <div
                    className="fbox-8 mb-40 bg-whitesmoke-gradient wow fadeInUp"
                    style={{ margin: "auto" }}
                  >
                    {" "}
                    <div className="fbox-img">
                      <img
                        alt="feature-icon"
                        nitro-lazy-src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/themes/techknomatic/images/industries-1.png"
                        className="img-fluid lazyloaded"
                        nitro-lazy-empty=""
                        id="NjQ4OjE4Ng==-1"
                        src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/themes/techknomatic/images/industries-1.png"
                      />
                    </div>{" "}
                    <h5 className="h5-md">Logistics &amp; Supply Chain</h5>{" "}
                    <p>
                      Gain higher RoI, understand risks better, increase
                      accuracy in planning,
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="col">
                  {" "}
                  <div
                    className="fbox-8 mb-40 bg-whitesmoke-gradient wow fadeInUp"
                    style={{ margin: "auto" }}
                  >
                    {" "}
                    <div className="fbox-img">
                      <img
                        alt="feature-icon"
                        nitro-lazy-src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/themes/techknomatic/images/industries-2.png"
                        className="img-fluid lazyloaded"
                        nitro-lazy-empty=""
                        id="NjU1OjE4NA==-1"
                        src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/themes/techknomatic/images/industries-2.png"
                      />
                    </div>{" "}
                    <h5 className="h5-md">Human Resources</h5>{" "}
                    <p>
                      Measure the employee performance, understand HR
                      demographics
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="col">
                  {" "}
                  <div
                    className="fbox-8 mb-40 bg-whitesmoke-gradient wow fadeInUp"
                    style={{ margin: "auto" }}
                  >
                    {" "}
                    <div className="fbox-img">
                      <img
                        alt="feature-icon"
                        nitro-lazy-src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/themes/techknomatic/images/industries-3.png"
                        className="img-fluid lazyloaded"
                        nitro-lazy-empty=""
                        id="NjYyOjE4NA==-1"
                        src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/themes/techknomatic/images/industries-3.png"
                      />
                    </div>{" "}
                    <h5 className="h5-md">Insurance</h5>{" "}
                    <p>
                      Track &amp; Improve agent attrition, manage risk with
                      better visibility into claims,
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>
            <div className="bntindustries">
              <a>See All Industries</a>
            </div>
          </div>{" "}
        </div>{" "}
        {/* </section> */}
        {/* *************************************our happy client************************************ */}
        <div className="clientcontainer">
          <div className="clientheadersection">
            {" "}
            <h2
              style={{
                justifyItems: "center",
                justifyContent: "center",
                textShadow: "3px 3px 2px slategray",
                color: "#000",
                margin: "20px 0",
                fontSize: "40px",
              }}
            >
              Our Happy Clientele
            </h2>{" "}
            <p
              style={{
                color: "#000",
                fontFamily: "sans-serif",
                fontSize: "17px",
                padding: "10px 0",
              }}
            >
              Since 2015, we’ve helped 40+ clients create a data-driven culture
              with Business Intelligence solutions
            </p>
          </div>
          <div className="brandswrapper">
            <div className="componentwrap">
              <div className="col">
                <div className="brand-logo">
                  {" "}
                  <a href="#!">
                    <img
                      alt="Logo - honeywell the power of connected"
                      nitro-lazy-src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/uploads/2021/12/client-1.png"
                      className="img-fluid lazyloaded"
                      nitro-lazy-empty=""
                      id="NjgzOjE5Nw==-1"
                      src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/uploads/2021/12/client-1.png"
                    />
                  </a>{" "}
                </div>{" "}
              </div>{" "}
              <div className="col">
                <div className="brand-logo">
                  {" "}
                  <a href="#!">
                    <img
                      alt="Logo - persistent"
                      nitro-lazy-src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/uploads/2021/12/client-2.png"
                      className="img-fluid lazyloaded"
                      nitro-lazy-empty=""
                      id="Njg4OjE3NQ==-1"
                      src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/uploads/2021/12/client-2.png"
                    />
                  </a>{" "}
                </div>{" "}
              </div>{" "}
              <div className="col">
                {" "}
                <div className="brand-logo">
                  {" "}
                  <a href="#!">
                    <img
                      alt="Logo - Trames"
                      nitro-lazy-src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/uploads/2021/12/client-3.png"
                      className="img-fluid lazyloaded"
                      nitro-lazy-empty=""
                      id="NjkzOjE3MQ==-1"
                      src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/uploads/2021/12/client-3.png"
                    />
                  </a>{" "}
                </div>{" "}
              </div>{" "}
              <div className="col">
                {" "}
                <div className="brand-logo">
                  {" "}
                  <a href="#!">
                    <img
                      alt="Logo - asian"
                      nitro-lazy-src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/uploads/2021/12/client-4.png"
                      className="img-fluid lazyloaded"
                      nitro-lazy-empty=""
                      id="Njk4OjE3MA==-1"
                      src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/uploads/2021/12/client-4.png"
                    />
                  </a>{" "}
                </div>{" "}
              </div>{" "}
              <div className="col">
                {" "}
                <div className="brand-logo">
                  {" "}
                  <a href="#!">
                    <img
                      alt="Logo - Atidiv"
                      nitro-lazy-src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/uploads/2021/12/client-5.png"
                      className="img-fluid lazyloaded"
                      nitro-lazy-empty=""
                      id="NzAzOjE3MQ==-1"
                      src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/uploads/2021/12/client-5.png"
                    />
                  </a>{" "}
                </div>{" "}
              </div>{" "}
              <div className="col">
                {" "}
                <div className="brand-logo">
                  {" "}
                  <a href="#!">
                    <img
                      alt="Logo - Teradata"
                      nitro-lazy-src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/uploads/2021/12/client-6.png"
                      className="img-fluid lazyloaded"
                      nitro-lazy-empty=""
                      id="NzA4OjE3Mw==-1"
                      src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/uploads/2021/12/client-6.png"
                    />
                  </a>{" "}
                </div>{" "}
              </div>{" "}
              <div className="col">
                {" "}
                <div className="brand-logo">
                  {" "}
                  <a href="#!">
                    <img
                      alt="Logo - ZS"
                      nitro-lazy-src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/uploads/2021/12/client-7.png"
                      className="img-fluid lazyloaded"
                      nitro-lazy-empty=""
                      id="NzEzOjE2Nw==-1"
                      src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/uploads/2021/12/client-7.png"
                    />
                  </a>{" "}
                </div>{" "}
              </div>{" "}
              <div className="col">
                {" "}
                <div className="brand-logo">
                  {" "}
                  <a href="#!">
                    <img
                      alt="Logo - Arya onmitalk"
                      nitro-lazy-src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/uploads/2021/12/client-9.png"
                      className="img-fluid lazyloaded"
                      nitro-lazy-empty=""
                      id="NzE4OjE3OA==-1"
                      src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/uploads/2021/12/client-9.png"
                    />
                  </a>{" "}
                </div>{" "}
              </div>{" "}
              <div className="col">
                {" "}
                <div className="brand-logo">
                  {" "}
                  <a href="#!">
                    <img
                      alt="logo - Blazeclean"
                      nitro-lazy-src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/uploads/2021/12/client-10.png"
                      className="img-fluid lazyloaded"
                      nitro-lazy-empty=""
                      id="NzIzOjE3Ng==-1"
                      src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/uploads/2021/12/client-10.png"
                    />
                  </a>{" "}
                </div>{" "}
              </div>{" "}
              <div className="col">
                {" "}
                <div className="brand-logo">
                  {" "}
                  <a href="#!">
                    <img
                      alt="Logo - early salary"
                      nitro-lazy-src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/uploads/2021/12/client-11.png"
                      className="img-fluid lazyloaded"
                      nitro-lazy-empty=""
                      id="NzI4OjE3OA==-1"
                      src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/uploads/2021/12/client-11.png"
                    />
                  </a>{" "}
                </div>{" "}
              </div>{" "}
              <div class="col">
                {" "}
                <div class="brand-logo">
                  {" "}
                  <a href="#!">
                    <img
                      alt="Logo - Ailefs"
                      nitro-lazy-src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/uploads/2021/12/client-12.png"
                      class="img-fluid lazyloaded"
                      nitro-lazy-empty=""
                      id="NzMzOjE3Mg==-1"
                      src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/uploads/2021/12/client-12.png"
                    />
                  </a>{" "}
                </div>{" "}
              </div>{" "}
              <div class="col">
                {" "}
                <div class="brand-logo">
                  {" "}
                  <a href="#!">
                    <img
                      alt="Logo - saviant"
                      nitro-lazy-src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/uploads/2021/12/client-13.png"
                      class="img-fluid lazyloaded"
                      nitro-lazy-empty=""
                      id="NzM4OjE3Mw==-1"
                      src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/uploads/2021/12/client-13.png"
                    />
                  </a>{" "}
                </div>{" "}
              </div>{" "}
              <div class="col">
                {" "}
                <div class="brand-logo">
                  {" "}
                  <a href="#!">
                    <img
                      alt="Logo - advanced bio logic solutions"
                      nitro-lazy-src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/uploads/2021/12/client-14.png"
                      class="img-fluid lazyloaded"
                      nitro-lazy-empty=""
                      id="NzQzOjE5NA==-1"
                      src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/uploads/2021/12/client-14.png"
                    />
                  </a>{" "}
                </div>{" "}
              </div>{" "}
              <div class="col">
                {" "}
                <div class="brand-logo">
                  {" "}
                  <a href="#!">
                    <img
                      alt="Logo - Softech"
                      nitro-lazy-src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/uploads/2021/12/client-15.png"
                      class="img-fluid lazyloaded"
                      nitro-lazy-empty=""
                      id="NzQ4OjE3Mw==-1"
                      src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/uploads/2021/12/client-15.png"
                    />
                  </a>{" "}
                </div>{" "}
              </div>{" "}
              <div class="col">
                {" "}
                <div class="brand-logo">
                  {" "}
                  <a href="#!">
                    <img
                      alt="Logo - Atos"
                      nitro-lazy-src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/uploads/2021/12/client-16.png"
                      class="img-fluid lazyloaded"
                      nitro-lazy-empty=""
                      id="NzUzOjE3MA==-1"
                      src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/uploads/2021/12/client-16.png"
                    />
                  </a>{" "}
                </div>{" "}
              </div>{" "}
              <div class="col">
                {" "}
                <div class="brand-logo">
                  {" "}
                  <a href="#!">
                    <img
                      alt="Logo - tejasco"
                      nitro-lazy-src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/uploads/2021/12/client-17.png"
                      class="img-fluid lazyloaded"
                      nitro-lazy-empty=""
                      id="NzU4OjE3Mw==-1"
                      src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/uploads/2021/12/client-17.png"
                    />
                  </a>{" "}
                </div>{" "}
              </div>{" "}
              <div class="col">
                {" "}
                <div class="brand-logo">
                  {" "}
                  <a href="#!">
                    <img
                      alt="Logo - link digital"
                      nitro-lazy-src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/uploads/2021/12/client-19.png"
                      class="img-fluid lazyloaded"
                      nitro-lazy-empty=""
                      id="NzYzOjE3OA==-1"
                      src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/uploads/2021/12/client-19.png"
                    />
                  </a>{" "}
                </div>{" "}
              </div>{" "}
              <div class="col">
                {" "}
                <div class="brand-logo">
                  {" "}
                  <a href="#!">
                    <img
                      alt="Logo - qrsolutions"
                      nitro-lazy-src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/uploads/2022/01/client-17.png"
                      class="img-fluid lazyloaded"
                      nitro-lazy-empty=""
                      id="NzY4OjE3Nw==-1"
                      src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/uploads/2022/01/client-17.png"
                    />
                  </a>
                </div>{" "}
              </div>{" "}
              <div class="col">
                {" "}
                <div class="brand-logo">
                  {" "}
                  <a href="#!">
                    <img
                      alt="client 18"
                      nitro-lazy-src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/uploads/2022/06/client-18.png"
                      class="img-fluid lazyloaded"
                      nitro-lazy-empty=""
                      id="NzczOjE2OA==-1"
                      src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/uploads/2022/06/client-18.png"
                    />
                  </a>{" "}
                </div>{" "}
              </div>{" "}
              <div class="col">
                {" "}
                <div class="brand-logo">
                  {" "}
                  <a href="#!">
                    <img
                      alt="client 19"
                      nitro-lazy-src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/uploads/2022/06/client-19.png"
                      class="img-fluid lazyloaded"
                      nitro-lazy-empty=""
                      id="Nzc4OjE2OA==-1"
                      src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/uploads/2022/06/client-19.png"
                    />
                  </a>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>
        </div>
        {/* </div> */}
      </div>
      {/* ********************************************stories from customer*****************************************  */}
      {/* <Storiesofcust /> */}
      <Story />
      {/* ***************************************footer*********************************** */}
      <Footer />
    </div>
  );
}

export default Container;
