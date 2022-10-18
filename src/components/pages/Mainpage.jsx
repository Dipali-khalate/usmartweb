import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Flip from "react-reveal/Flip";
import Fade from 'react-reveal/Fade';


// import { SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../style/mainpage.css";

// import required modules

// import { Pagination } from "swiper";
import slide from "../../bg.jpg";
import { Autoplay } from "swiper";
// import { Fade } from "react-bootstrap";

export default function App() {
  return (
    <>
      <div className="maincontainerpage">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div
              className="destination tns-item tns-slide-cloned"
              aria-hidden="true"
              tabindex="-1"
            >
              <div className="thumb">
                <img
                  src="https://www.helmholtz.ai/fileadmin/HAICU/IMG/HMGU_AI_Keyvisual_quer_ohneText.jpg"
                  alt="Image"
                  className="img-fluid"
                  data-pagespeed-url-hash="3703536431"
                  onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                />
                <div className="swiper-text">
                  <Fade left>
                    <h1>Hello</h1>
                  </Fade>
                  <Fade right>
                    <h5>Data Science</h5>
                  </Fade>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div
              className="destination tns-item tns-slide-cloned"
              aria-hidden="true"
              tabindex="-1"
            >
              <div className="thumb">
                <img
                  src="https://wallpaperaccess.com/full/1614824.jpg"
                  alt="Image"
                  className="img-fluid"
                  data-pagespeed-url-hash="3703536431"
                  onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                />
                <div className="swiper-text">
                  <h1>hello</h1>
                  <input type="text" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div
              className="destination tns-item tns-slide-cloned"
              aria-hidden="true"
              tabindex="-1"
            >
              <div className="thumb">
                <img
                  src="https://www.tigeranalytics.com/wp-content/uploads/emerging-trends-banner-sepia.jpg"
                  alt="Image"
                  className="img-fluid"
                  data-pagespeed-url-hash="3703536431"
                  onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                />
                <div className="swiper-text">
                  <h1>hello</h1>
                  <input type="text" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div
              className="destination tns-item tns-slide-cloned"
              aria-hidden="true"
              tabindex="-1"
            >
              <div className="thumb">
                <img
                  src="https://www.dailyexcelsior.com/wp-content/uploads/2020/01/life-insurance.jpg"
                  alt="Image"
                  className="img-fluid"
                  data-pagespeed-url-hash="3703536431"
                  onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                />
                <div className="swiper-text">
                  <h1>hello</h1>
                  <input type="text" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div
              className="destination tns-item tns-slide-cloned"
              aria-hidden="true"
              tabindex="-1"
            >
              <div className="thumb">
                <img
                  src="https://media.istockphoto.com/photos/woman-hand-holding-global-network-connection-internet-communication-picture-id1328486545?b=1&k=20&m=1328486545&s=170667a&w=0&h=NgVASbPBv7gI7N5BL42R7dGDM-Ida71vCzSL-cPu1nI="
                  alt="Image"
                  className="img-fluid"
                  data-pagespeed-url-hash="3703536431"
                  onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                />
                <div className="swiper-text">
                  <h1>hello</h1>
                  <input type="text" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div
              className="destination tns-item tns-slide-cloned"
              aria-hidden="true"
              tabindex="-1"
            >
              <div className="thumb">
                <img
                  src="https://enterprisersproject.com/sites/default/files/styles/google_discover/public/images/cio_data_analyze.png?itok=OkdfAXcU"
                  alt="Image"
                  className="img-fluid"
                  data-pagespeed-url-hash="3703536431"
                  onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                />
                <div className="swiper-text">
                  <h1>hello</h1>
                  <input type="text" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div
              className="destination tns-item tns-slide-cloned"
              aria-hidden="true"
              tabindex="-1"
            >
              <div className="thumb">
                <img
                  src="https://bernardmarr.com/wp-content/uploads/2021/07/Artificial-Intelligence-Can-Now-Copy-Your-Voice-What-Does-That-Mean-For-Humans.png.png"
                  alt="Image"
                  className="img-fluid"
                  data-pagespeed-url-hash="3703536431"
                  onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                />
                <div className="swiper-text">
                  <h1>hello</h1>
                  <input type="text" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div
              className="destination tns-item tns-slide-cloned"
              aria-hidden="true"
              tabindex="-1"
            >
              <div className="thumb">
                <img
                  src="https://wallpaperaccess.com/full/1398313.jpg"
                  alt="Image"
                  className="img-fluid"
                  data-pagespeed-url-hash="3703536431"
                  onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                />
                <div className="swiper-text">
                  <h1>hello</h1>
                  <input type="text" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
