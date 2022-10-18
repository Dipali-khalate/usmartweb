import React from "react";
import "../style/contact.css";
import wave from "../lines.gif";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Button from "@mui/material/Button";

import Checkbox from "@mui/material/Checkbox";
import Footer from "./Footer";
import Roll from 'react-reveal/Roll';
import Bounce from 'react-reveal/Bounce';



const label = { inputProps: { "aria-label": "Checkbox demo" } };

function Contact() {
  return (
    <div>
      <div className="contactcont">
        <section className="containercont-wrap  innerBanner main-color ">
          <div className="section-containercont containercont">
            <div className="vc_row vc_row-fluid row vc_row-has-fill">
              {/* <div className="wpb_column vc_column_containercont vc_col-sm-12"> */}
              <div className="vc_column-inner ">
                <div className="wpb_wrapper">
                  <div className="wpb_wrappercont">
                    <h2>CONTACT US</h2>
                    <div className="line"></div>
                    <div className="breadcrumbSection">
                      <span>
                        <span typeof="v:Breadcrumb">
                          <a
                            href="https://www.tigeranalytics.com/"
                            rel="v:url"
                            property="v:title"
                            style={{ color: "#fff" }}
                          >
                            Home
                          </a>{" "}
                          / <span className="breadcrumb_last">Contact Us</span>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>
        </section>

        {/* ********************************************get in touch section*********************************** */}
        {/* <section
          class="container-wrap  common-sec form-container common-h2 main-color "
        //   style="padding-top:40px;padding-bottom:40px"
        >
          <div class="section-container container">
            <div class="vc_row vc_row-fluid row">
              <div class="wpb_column vc_column_container vc_col-sm-12">
                <div class="vc_column-inner ">
                  <div class="wpb_wrapper">
                    <div class="vc_row wpb_row vc_inner vc_row-fluid ourExpertiseTop">
                      <div class="wpb_column vc_column_container vc_col-sm-12">
                        <div class="vc_column-inner ">
                          <div class="wpb_wrapper">
                            <div class="kleo_text_column wpb_content_element ">
                              <div class="wpb_wrapper">
                                <h2
                                  class="wow fadeIn fadeInLeft animated"
                                  data-wow-duration="3s"
                                //   style="visibility: visible; animation-duration: 3s;"
                                >
                                  Get In Touch
                                </h2>
                              </div>
                            </div>
                            <div class="kleo_text_column wpb_content_element ">
                              <div class="wpb_wrapper">
                                <h4
                                //   style="text-align: left; visibility: visible; animation-duration: 2s;"
                                  class="wow fadeInRight animated"
                                  data-wow-duration="2s"
                                >
                                  Have an analytics need or want to know more
                                  about our services?&nbsp;Kindly fill the form.
                                  If you’re facing CAPTCHA issues&nbsp;please
                                  write to us at <b>info@tigeranalytics.com</b>{" "}
                                  and we will get back to you as soon as
                                  possible.
                                </h4>
                              </div>
                            </div>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="vc_row wpb_row vc_inner vc_row-fluid">
                      <div class="wpb_column vc_column_container vc_col-sm-12">
                        <div class="vc_column-inner ">
                          <div class="wpb_wrapper">
                            <div
                              role="form"
                              class="wpcf7"
                              id="wpcf7-f129-p48-o1"
                              lang="en-US"
                              dir="ltr"
                            >
                              <div class="screen-reader-response"></div>
                              <form
                                action="/contact-us/#wpcf7-f129-p48-o1"
                                method="post"
                                class="wpcf7-form"
                                novalidate="novalidate"
                              />
                              <div>
                                <input
                                  type="hidden"
                                  name="_wpcf7"
                                  value="129"
                                />
                                <input
                                  type="hidden"
                                  name="_wpcf7_version"
                                  value="4.7"
                                />
                                <input
                                  type="hidden"
                                  name="_wpcf7_locale"
                                  value="en_US"
                                />
                                <input
                                  type="hidden"
                                  name="_wpcf7_unit_tag"
                                  value="wpcf7-f129-p48-o1"
                                />
                                <input
                                  type="hidden"
                                  name="_wpnonce"
                                  value="618a728878"
                                />
                              </div>
                              <div class="contact-form">
                                <div class="contact-form1">
                                  <div class="form-group">
                                    <span class="wpcf7-form-control-wrap your-name">
                                      <input
                                        type="text"
                                        name="your-name"
                                        value=""
                                        size="40"
                                        class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                        aria-required="true"
                                        aria-invalid="false"
                                        placeholder="Name"
                                      />
                                    </span>
                                  </div>
                                  <div class="form-group">
                                    <span class="wpcf7-form-control-wrap phone">
                                      <input
                                        type="tel"
                                        name="phone"
                                        value=""
                                        size="40"
                                        class="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-required wpcf7-validates-as-tel"
                                        aria-required="true"
                                        aria-invalid="false"
                                        placeholder="Phone"
                                      />
                                    </span>
                                  </div>
                                  <div class="form-group">
                                    <span class="wpcf7-form-control-wrap email">
                                      <input
                                        type="email"
                                        name="email"
                                        value=""
                                        size="40"
                                        class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                                        aria-required="true"
                                        aria-invalid="false"
                                        placeholder="Email"
                                      />
                                    </span>
                                  </div>
                                  <div class="form-group checkbox">
                                    <span class="wpcf7-form-control-wrap checkbox-782">
                                      <span class="wpcf7-form-control wpcf7-checkbox wpcf7-validates-as-required">
                                        <span class="wpcf7-list-item first last">
                                          <input
                                            type="checkbox"
                                            name="checkbox-782[]"
                                            value=""
                                          />
                                          <span class="wpcf7-list-item-label"></span>
                                        </span>
                                      </span>
                                    </span>
                                    <br />
                                    <h5>
                                      Yes, I would like Tiger Analytics to
                                      contact me based on the information
                                      provided above. Read our{" "}
                                      <a
                                        href="https://www.tigeranalytics.com/privacy-policy/"
                                        target="_blank"
                                      >
                                        Privacy Policy
                                      </a>{" "}
                                      for details on how your information may be
                                      used.{" "}
                                    </h5>
                                  </div>
                                </div>
                                <div class="contact-form2">
                                  <div class="form-group ">
                                    <span class="wpcf7-form-control-wrap message">
                                      <textarea
                                        name="message"
                                        cols="40"
                                        rows="10"
                                        class="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required wow fadeInRight animated"
                                        aria-required="true"
                                        aria-invalid="false"
                                        placeholder="Message"
                                        data-wow-duration="2s"
                                        // style="visibility: visible; animation-duration: 2s;"
                                      ></textarea>
                                    </span>
                                  </div>
                                  <div class="form-group">
                                    <input
                                      type="submit"
                                      value="Send"
                                      class="wpcf7-form-control wpcf7-submit"
                                    />
                                    <span class="ajax-loader"></span>
                                  </div>
                                </div>
                              </div>
                              <div class="wpcf7-response-output wpcf7-display-none"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </div>
      <div className="section2">
        <div className="headingsec2">
         <Roll>
          <h3>Get in Touch</h3>
          </Roll>
          <img
            alt=""
            src={wave}
            style={{
              width: "300px",
              height: "60px",
              zIndex: "99",
            }}
          />
        </div>
        <div className="headingcontent">
            <Bounce>
          <h5>
            {" "}
            Have an analytics need or want to know more about our
            <br />
            services?&nbsp;Kindly fill the form. If you’re facing CAPTCHA
            <br />
            issues&nbsp;please write to us at <b>contact@u-smart.ai</b> and{" "}
            <br />
            we will get back to you as soon as possible.
          </h5>
          </Bounce>
        </div>

        <div className="contactdetails">
          <div className="inputfields">
            <TextField
              style={{ margin: "20px 0" }}
              id="outlined-basic"
              label="Name"
              variant="outlined"
            />
            <TextField 
              style={{ margin: "20px 0"}}
              id="outlined-basic"
              label="Phone"
              variant="outlined"
            />
            <TextField 
              style={{ margin: "20px 0" }}
              sid="outlined-basic"
              label="Email"
              variant="outlined"
            />
            <div class="checkbox">
              <input type="checkbox" value="" />

              <h6>
                Yes, I would like Tiger Analytics to contact me based <br />
                on the information provided above. Read our{" "}
                <a href="https://www.u-smart.ai/" target="_blank">
                  Privacy Policy
                  <br />
                </a>{" "}
                for details on how your information may be used.{" "}
              </h6>
            </div>
          </div>
          <div className="msgbtn">
            <TextareaAutosize
              aria-label="minimum height"
              minRows={5}
              placeholder=""
              style={{ width: 250, margin: "50px 0" }}
            />
            <Button style={{ width: "90px" }} variant="contained">
              Send
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
