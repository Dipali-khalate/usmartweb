import React, { useState } from "react";
import "../style/story.css";

function Story() {
  const [slider, setSlider] = useState();
  const [slidenum, setSlidenum] = useState(2);

  const SliderData = [
    [
      {
        description: `The Techknomatic team understands the visualization space very well. They have helped us in building a visualization layer on top of our Data processing solution. Our clients loved the
      visualization created by the Techknomatic team. The
      combination of UI &amp UX with justification to each chart,
      color selection was very thoughtful and convincing.`,
        star: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Star_rating_3.5_of_5.png",
        name: "CEO",
        title: "Sazinga Digital",
      },
      {
        description: `Our internal team created 15-20 dashboards for our internal
                  operations platform. We contacted Techknomatic to re-designing
                  these dashboards for better UI. The re-designed dashboards by
                  the Techknomatic team were eye-catchy, attractive aa well as
                  intuitive. This team understands the user experience and
                  dashboard design very well.`,
        star: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Star_rating_4_of_5.png",
        name: "BI Head",
        title: "IT Consulting Firm - Singapore",
      },
      {
        description: `Techknomatic is one of exemplary partner demonstrating
                  “Constant Innovation, Courage over Comfort, efficacy towards
                  sharing right talent for delivering out-of-box analytical
                  solutions”. Impressive to see the exponential growth of
                  Techknomatic in terms of expertise across varied skillsets and
                  people headcount.`,
        star: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Star_rating_4.5_of_5.png",
        name: "Delivery Manager",
        title: "Sales and Marketing consulting firm",
      },
    ],
    [
      {
        description: ` Techknomatic added value in the creation and redesigning of
                  our metrics &amp; dashboards. Innovative thought processes
                  &amp; plans were chartered &amp; rolled out in completing 20+
                  dashboards. The teams were seamless in inceptions,
                  interactions, technology , operations &amp; delivery. It is
                  very well appreciated for completing the project in time &amp;
                  with enhanced satisfaction. Thanks &amp; do look for more
                  collaboration in the future.`,
        star: "https://cdn.searchenginejournal.com/wp-content/uploads/2021/08/a-guide-to-star-ratings-on-google-and-how-they-work-6123be39b9f2d-sej-1520x800.jpg",
        name: "Director",
        title: "Sapphire IMS",
      },
      {
        description: `                  Techknomatic was hired for a small performance optimization
                  PoC. we ended up making them our engineering partners for all
                  the visualization related requirements. It’s been 3 years and
                  they have designed, developed, delivered and maintained 400+
                  dashboards for us.`,
        star: "https://cdn.searchenginejournal.com/wp-content/uploads/2021/08/a-guide-to-star-ratings-on-google-and-how-they-work-6123be39b9f2d-sej-1520x800.jpg",
        name: "Director – Technology",
        title: "Fortune 100 company",
      },
      {
        description: ` Techknomatic has supported us in all the visualization needs
                  from environment setup to delivering dashboards for our CXOs.
                  They have become part of our delivery team and help us in
                  every step of our project strategy, delivery and support.`,
        star: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Star_rating_3_of_5.png",
        name: "Analytics Head",
        title: "Fintech Company – India",
      },
    ],
    [
      {
        description: ` Techknomatic is going beyond the project delivery and helping
                  us build off the shelf visualization solutions and
                  accelerators for our clients. They have expertise in
                  end-to-end visualization projects and sometimes the team
                  forced us to re-think on our visualization strategies.`,
        star: "https://upload.wikimedia.org/wikipedia/commons/9/95/Star_rating_2_of_5.png",
        name: "Associate Principal",
        title: "Management Consulting Firm",
      },
      {
        description: ` The Techknomatic team understands the visualization space very
                  well. They have helped us in building a visualization layer on
                  top of our Data processing solution. Our clients loved the
                  visualization created by the Techknomatic team. The
                  combination of UI &amp; UX with justification to each chart,
                  color selection was very thoughtful and convincing.`,
        star: "https://cdn.searchenginejournal.com/wp-content/uploads/2021/08/a-guide-to-star-ratings-on-google-and-how-they-work-6123be39b9f2d-sej-1520x800.jpg",
        name: "CEO",
        title: "Sazinga Digital",
      },
      {
        description: ` Techknomatic has supported us in all the visualization needs
                  from environment setup to delivering dashboards for our CXOs.
                  They have become part of our delivery team and help us in
                  every step of our project strategy, delivery and support.`,
        star: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Star_rating_3.5_of_5.png",
        name: "Analytics Head",
        title: "Fintech Company – India",
      },
    ],
  ];
  return (
    <div>
      <div className="storiescustomer">
        <h2
          style={{
            justifyItems: "center",
            justifyContent: "center",
            textShadow: "3px 3px 2px slategray",
            color: "#000",
            margin: "50px 0",
            fontSize: "40px",
          }}
        >
          Stories From Our Customers
        </h2>
      </div>
      <div className="storecontain">
        <div
          className="owl-stage"
          //   style="transform: translate3d(-2496px, 0px, 0px); transition: all 1.5s ease 0s; width: 4680px;"
        >
          {SliderData[slidenum].map((data) => {
            return (
              <div className="owl-item cloned" style={{ width: "312px" }}>
                <div className="review-1">
                  <div className="review-1-ico ico-25">
                    <span className="flaticon-left-quote"></span>
                  </div>{" "}
                  <div className="review-1-txt">
                    {" "}
                    <p className="p-lg"></p>
                    <p>{data.description}</p> <p></p>{" "}
                    <div className="author-data clearfix">
                      {" "}
                      <div style={{ height: "50px" }} className="review-avatar">
                        {/* <img
                          alt="review-avatar"
                          nitro-lazy-src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/themes/techknomatic/images/review-author-1.jpg"
                          className="nitro-lazy"
                          nitro-lazy-empty=""
                          id="ODQ4OjE4MQ==-1"
                          src="data:image/svg+xml;nitro-empty-id=ODQ4OjE4MQ==-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTIwIDEyMCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSIxMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                        /> */}
                      </div>
                      <div className="review-author">
                        {" "}
                        <span>
                          <img style={{ width: "200px" }} src={data.star} />
                        </span>
                        <h6 className="h6-xl">{data.name}</h6>{" "}
                        <p className="p-md">{data.title}</p>{" "}
                        <div className="review-rating ico-15 yellow-color">
                          <span className="flaticon-star-1"></span>{" "}
                          <span className="flaticon-star-1"></span>{" "}
                          <span className="flaticon-star-1"></span>{" "}
                          <span className="flaticon-star-1"></span>
                          <span className="flaticon-star-half-empty"></span>
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="butradio">
        <span
          onClick={() => {
            setSlidenum(0);
          }}
        ></span>
        <span
          onClick={() => {
            setSlidenum(1);
          }}
        ></span>
        <span
          onClick={() => {
            setSlidenum(2);
          }}
        ></span>
      </div>
    </div>
  );
}

export default Story;
