import React from "react";
import "../style/storiescust.css";

function Storiesofcust() {
  return (
    <div>
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

          <div className="storiescustcontainer">
            <div className="review-1">
              <p>
                The Techknomatic team understands the visualization space very
                well. They have helped us in building a visualization layer on
                top of our Data processing solution. Our clients loved the
                visualization created by the Techknomatic team. The combination
                of UI &amp; UX with justification to each chart, color selection
                was very thoughtful and convincing.
              </p>
            </div>
            <div className="review-2">
              <p>
                Our internal team created 15-20 dashboards for our internal
                operations platform. We contacted Techknomatic to re-designing
                these dashboards for better UI. The re-designed dashboards by
                the Techknomatic team were eye-catchy, attractive aa well as
                intuitive. This team understands the user experience and
                dashboard design very well.
              </p>
            </div>

            <div className="review-3">
              <p>
                Techknomatic added value in the creation and redesigning of our
                metrics &amp; dashboards. Innovative thought processes &amp;
                plans were chartered &amp; rolled out in completing 20+
                dashboards. The teams were seamless in inceptions, interactions,
                technology , operations &amp; delivery. It is very well
                appreciated for completing the project in time &amp; with
                enhanced satisfaction. Thanks &amp; do look for more
                collaboration in the future.
              </p>
            </div>
            <div className="review-4">
              <p>
                Techknomatic is one of exemplary partner demonstrating “Constant
                Innovation, Courage over Comfort, efficacy towards sharing right
                talent for delivering out-of-box analytical solutions”.
                Impressive to see the exponential growth of Techknomatic in
                terms of expertise across varied skillsets and people headcount.
              </p>
            </div>
            <div className="review-5">
              <p>
                Techknomatic added value in the creation and redesigning of our
                metrics &amp; dashboards. Innovative thought processes &amp;
                plans were chartered &amp; rolled out in completing 20+
                dashboards. The teams were seamless in inceptions, interactions,
                technology , operations &amp; delivery. It is very well
                appreciated for completing the project in time &amp; with
                enhanced satisfaction. Thanks &amp; do look for more
                collaboration in the future.
              </p>
            </div>
          </div>
        </div>
        {/* <div className="storiescustomer">
        <div className="col-lg-10 col-xl-8">
          <div className="section-title title-01 mb-30">
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
              Stories From Our Customers
            </h2>
          </div>{" "}
        </div>

        <div className="review-1">
          <p className="p-lg"></p>
          <p>
            The Techknomatic team understands the visualization space very well.
            They have helped us in building a visualization layer on top of our
            Data processing solution. Our clients loved the visualization
            created by the Techknomatic team. The combination of UI &amp; UX
            with justification to each chart, color selection was very
            thoughtful and convincing.
          </p>
          <p></p>
          <div className="author-data clearfix">
            <div className="review-avatar">
              <img
                alt="review-avatar"
                nitro-lazy-src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/themes/techknomatic/images/review-author-1.jpg"
                className="nitro-lazy"
                nitro-lazy-empty=""
                id="ODQ4OjE4MQ==-1"
                src="data:image/svg+xml;nitro-empty-id=ODQ4OjE4MQ==-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTIwIDEyMCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSIxMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
              />
            </div>
            <div className="review-author">
              <h6 className="h6-xl">CEO</h6>
              <p className="p-md">Sazinga Digital</p>
              <div className="review-rating ico-15 yellow-color">
                <span className="flaticon-star-1"></span>
                <span className="flaticon-star-1"></span>
                <span className="flaticon-star-1"></span>
                <span className="flaticon-star-1"></span>
                <span className="flaticon-star-half-empty"></span>
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>

        <div className="owl-item cloned" style={{ width: "312px" }}>
          <div className="review-1">
            {" "}
            <div className="review-1-ico ico-25">
              <span className="flaticon-left-quote"></span>
            </div>{" "}
            <div className="review-1-txt">
              {" "}
              <p className="p-lg"></p>
              <p>
                Our internal team created 15-20 dashboards for our internal
                operations platform. We contacted Techknomatic to re-designing
                these dashboards for better UI. The re-designed dashboards by
                the Techknomatic team were eye-catchy, attractive aa well as
                intuitive. This team understands the user experience and
                dashboard design very well.
              </p>{" "}
              <p></p>{" "}
              <div className="author-data clearfix">
                {" "}
                <div className="review-avatar">
                  <img
                    alt="review-avatar"
                    nitro-lazy-src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/themes/techknomatic/images/review-author-1.jpg"
                    className="nitro-lazy"
                    nitro-lazy-empty=""
                    id="ODYzOjE4MQ==-1"
                    src="data:image/svg+xml;nitro-empty-id=ODYzOjE4MQ==-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTIwIDEyMCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSIxMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                  />
                </div>{" "}
                <div className="review-author">
                  {" "}
                  <h6 className="h6-xl">BI Head</h6>{" "}
                  <p className="p-md">IT Consulting Firm - Singapore</p>{" "}
                  <div className="review-rating ico-15 yellow-color">
                    <span className="flaticon-star-1"></span>{" "}
                    <span className="flaticon-star-1"></span>{" "}
                    <span className="flaticon-star-1"></span>{" "}
                    <span className="flaticon-star-1"></span>{" "}
                    <span className="flaticon-star-half-empty"></span>
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>
        </div>
        <div className="owl-item cloned" style={{ width: "312px" }}>
          <div className="review-1">
            {" "}
            <div className="review-1-ico ico-25">
              <span className="flaticon-left-quote"></span>
            </div>{" "}
            <div className="review-1-txt">
              {" "}
              <p className="p-lg"></p>
              <p>
                Techknomatic is one of exemplary partner demonstrating “Constant
                Innovation, Courage over Comfort, efficacy towards sharing right
                talent for delivering out-of-box analytical solutions”.
                Impressive to see the exponential growth of Techknomatic in
                terms of expertise across varied skillsets and people headcount.
              </p>{" "}
              <p></p>{" "}
              <div className="author-data clearfix">
                {" "}
                <div className="review-avatar">
                  <img
                    alt="review-avatar"
                    nitro-lazy-src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/themes/techknomatic/images/review-author-1.jpg"
                    className="nitro-lazy"
                    nitro-lazy-empty=""
                    id="ODc4OjE4MQ==-1"
                    src="data:image/svg+xml;nitro-empty-id=ODc4OjE4MQ==-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTIwIDEyMCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSIxMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                  />
                </div>{" "}
                <div className="review-author">
                  {" "}
                  <h6 className="h6-xl">Delivery Manager</h6>{" "}
                  <p className="p-md">Sales and Marketing consulting firm</p>{" "}
                  <div className="review-rating ico-15 yellow-color">
                    <span className="flaticon-star-1"></span>{" "}
                    <span className="flaticon-star-1"></span>{" "}
                    <span className="flaticon-star-1"></span>{" "}
                    <span className="flaticon-star-1"></span>{" "}
                    <span className="flaticon-star-half-empty"></span>
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>
        </div>
        <div className="owl-item cloned" style={{ width: "312px" }}>
          <div className="review-1">
            {" "}
            <div className="review-1-ico ico-25">
              <span className="flaticon-left-quote"></span>
            </div>{" "}
            <div className="review-1-txt">
              {" "}
              <p className="p-lg"></p>
              <p>
                Techknomatic added value in the creation and redesigning of our
                metrics &amp; dashboards. Innovative thought processes &amp;
                plans were chartered &amp; rolled out in completing 20+
                dashboards. The teams were seamless in inceptions, interactions,
                technology , operations &amp; delivery. It is very well
                appreciated for completing the project in time &amp; with
                enhanced satisfaction. Thanks &amp; do look for more
                collaboration in the future.
              </p>{" "}
              <p></p>{" "}
              <div className="author-data clearfix">
                {" "}
                <div className="review-avatar">
                  <img
                    alt="review-avatar"
                    nitro-lazy-src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/themes/techknomatic/images/review-author-1.jpg"
                    className="nitro-lazy"
                    nitro-lazy-empty=""
                    id="ODkzOjE4MQ==-1"
                    src="data:image/svg+xml;nitro-empty-id=ODkzOjE4MQ==-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTIwIDEyMCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSIxMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                  />
                </div>{" "}
                <div className="review-author">
                  {" "}
                  <h6 className="h6-xl">Director</h6>{" "}
                  <p className="p-md">Sapphire IMS</p>{" "}
                  <div className="review-rating ico-15 yellow-color">
                    <span className="flaticon-star-1"></span>{" "}
                    <span className="flaticon-star-1"></span>{" "}
                    <span className="flaticon-star-1"></span>{" "}
                    <span className="flaticon-star-1"></span>{" "}
                    <span className="flaticon-star-half-empty"></span>
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>
        </div>
        <div className="owl-item" style={{ width: "312px" }}>
          <div className="review-1">
            {" "}
            <div className="review-1-ico ico-25">
              <span className="flaticon-left-quote"></span>
            </div>{" "}
            <div className="review-1-txt">
              {" "}
              <p className="p-lg"></p>
              <p>
                Techknomatic was hired for a small performance optimization PoC.
                we ended up making them our engineering partners for all the
                visualization related requirements. It’s been 3 years and they
                have designed, developed, delivered and maintained 400+
                dashboards for us.
              </p>{" "}
              <p></p>{" "}
              <div className="author-data clearfix">
                {" "}
                <div className="review-avatar">
                  <img
                    alt="review-avatar"
                    nitro-lazy-src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/themes/techknomatic/images/review-author-1.jpg"
                    className="nitro-lazy"
                    nitro-lazy-empty=""
                    id="ODAzOjE4MQ==-1"
                    src="data:image/svg+xml;nitro-empty-id=ODAzOjE4MQ==-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTIwIDEyMCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSIxMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                  />
                </div>{" "}
                <div className="review-author">
                  {" "}
                  <h6 className="h6-xl">Director – Technology,</h6>{" "}
                  <p className="p-md">Fortune 100 company</p>{" "}
                  <div className="review-rating ico-15 yellow-color">
                    <span className="flaticon-star-1"></span>{" "}
                    <span className="flaticon-star-1"></span>{" "}
                    <span className="flaticon-star-1"></span>{" "}
                    <span className="flaticon-star-1"></span>{" "}
                    <span className="flaticon-star-half-empty"></span>
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>
        </div>
        <div className="owl-item" style={{ width: "312px" }}>
          <div className="review-1">
            {" "}
            <div className="review-1-ico ico-25">
              <span className="flaticon-left-quote"></span>
            </div>{" "}
            <div className="review-1-txt">
              {" "}
              <p className="p-lg"></p>
              <p>
                Techknomatic has supported us in all the visualization needs
                from environment setup to delivering dashboards for our CXOs.
                They have become part of our delivery team and help us in every
                step of our project strategy, delivery and support.
              </p>{" "}
              <p></p>{" "}
              <div className="author-data clearfix">
                {" "}
                <div className="review-avatar">
                  <img
                    alt="review-avatar"
                    nitro-lazy-src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/themes/techknomatic/images/review-author-1.jpg"
                    className="nitro-lazy"
                    nitro-lazy-empty=""
                    id="ODE4OjE4MQ==-1"
                    src="data:image/svg+xml;nitro-empty-id=ODE4OjE4MQ==-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTIwIDEyMCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSIxMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                  />
                </div>{" "}
                <div className="review-author">
                  {" "}
                  <h6 className="h6-xl">Analytics Head</h6>{" "}
                  <p className="p-md">Fintech Company – India</p>{" "}
                  <div className="review-rating ico-15 yellow-color">
                    <span className="flaticon-star-1"></span>{" "}
                    <span className="flaticon-star-1"></span>{" "}
                    <span className="flaticon-star-1"></span>{" "}
                    <span className="flaticon-star-1"></span>{" "}
                    <span className="flaticon-star-half-empty"></span>
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>
        </div>
        <div className="owl-item active" style={{ width: "312px" }}>
          <div className="review-1">
            {" "}
            <div className="review-1-ico ico-25">
              <span className="flaticon-left-quote"></span>
            </div>{" "}
            <div className="review-1-txt">
              {" "}
              <p className="p-lg"></p>
              <p>
                Techknomatic is going beyond the project delivery and helping us
                build off the shelf visualization solutions and accelerators for
                our clients. They have expertise in end-to-end visualization
                projects and sometimes the team forced us to re-think on our
                visualization strategies.
              </p>{" "}
              <p></p>{" "}
              <div className="author-data clearfix">
                {" "}
                <div className="review-avatar">
                  <img
                    alt="review-avatar"
                    nitro-lazy-src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/themes/techknomatic/images/review-author-1.jpg"
                    className="nitro-lazy"
                    nitro-lazy-empty=""
                    id="ODMzOjE4MQ==-1"
                    src="data:image/svg+xml;nitro-empty-id=ODMzOjE4MQ==-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTIwIDEyMCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSIxMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                  />
                </div>
                <div className="review-author">
                  {" "}
                  <h6 className="h6-xl">Associate Principal</h6>{" "}
                  <p className="p-md">Management Consulting Firm</p>{" "}
                  <div className="review-rating ico-15 yellow-color">
                    <span className="flaticon-star-1"></span>{" "}
                    <span className="flaticon-star-1"></span>{" "}
                    <span className="flaticon-star-1"></span>{" "}
                    <span className="flaticon-star-1"></span>{" "}
                    <span className="flaticon-star-half-empty"></span>
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>
        </div>
        <div className="owl-item active" style={{ width: "312px" }}>
          <div className="review-1">
            {" "}
            <div className="review-1-ico ico-25">
              <span className="flaticon-left-quote"></span>
            </div>{" "}
            <div className="review-1-txt">
              {" "}
              <p className="p-lg"></p>
              <p>
                The Techknomatic team understands the visualization space very
                well. They have helped us in building a visualization layer on
                top of our Data processing solution. Our clients loved the
                visualization created by the Techknomatic team. The combination
                of UI &amp; UX with justification to each chart, color selection
                was very thoughtful and convincing.
              </p>{" "}
              <p></p>{" "}
              <div className="author-data clearfix">
                {" "}
                <div className="review-avatar">
                  <img
                    alt="review-avatar"
                    nitro-lazy-src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/themes/techknomatic/images/review-author-1.jpg"
                    className="nitro-lazy"
                    nitro-lazy-empty=""
                    id="ODQ4OjE4MQ==-1"
                    src="data:image/svg+xml;nitro-empty-id=ODQ4OjE4MQ==-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTIwIDEyMCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSIxMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                  />
                </div>{" "}
                <div className="review-author">
                  {" "}
                  <h6 className="h6-xl">CEO</h6>{" "}
                  <p className="p-md">Sazinga Digital</p>{" "}
                  <div className="review-rating ico-15 yellow-color">
                    <span className="flaticon-star-1"></span>{" "}
                    <span className="flaticon-star-1"></span>{" "}
                    <span className="flaticon-star-1"></span>{" "}
                    <span className="flaticon-star-1"></span>{" "}
                    <span className="flaticon-star-half-empty"></span>
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>
        </div>
        <div className="owl-item active" style={{ width: "312px" }}>
          <div className="review-1">
            {" "}
            <div className="review-1-ico ico-25">
              <span className="flaticon-left-quote"></span>
            </div>{" "}
            <div className="review-1-txt">
              {" "}
              <p className="p-lg"></p>
              <p>
                Our internal team created 15-20 dashboards for our internal
                operations platform. We contacted Techknomatic to re-designing
                these dashboards for better UI. The re-designed dashboards by
                the Techknomatic team were eye-catchy, attractive aa well as
                intuitive. This team understands the user experience and
                dashboard design very well.
              </p>{" "}
              <p></p>{" "}
              <div className="author-data clearfix">
                {" "}
                <div className="review-avatar">
                  <img
                    alt="review-avatar"
                    nitro-lazy-src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/themes/techknomatic/images/review-author-1.jpg"
                    className="nitro-lazy"
                    nitro-lazy-empty=""
                    id="ODYzOjE4MQ==-1"
                    src="data:image/svg+xml;nitro-empty-id=ODYzOjE4MQ==-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTIwIDEyMCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSIxMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                  />
                </div>{" "}
                <div className="review-author">
                  {" "}
                  <h6 className="h6-xl">BI Head</h6>{" "}
                  <p className="p-md">IT Consulting Firm - Singapore</p>{" "}
                  <div className="review-rating ico-15 yellow-color">
                    <span className="flaticon-star-1"></span>{" "}
                    <span className="flaticon-star-1"></span>{" "}
                    <span className="flaticon-star-1"></span>{" "}
                    <span className="flaticon-star-1"></span>{" "}
                    <span className="flaticon-star-half-empty"></span>
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>
        </div>
        <div className="owl-item" style={{ width: "312px" }}>
          <div className="review-1">
            {" "}
            <div className="review-1-ico ico-25">
              <span className="flaticon-left-quote"></span>
            </div>{" "}
            <div className="review-1-txt">
              {" "}
              <p className="p-lg"></p>
              <p>
                Techknomatic is one of exemplary partner demonstrating “Constant
                Innovation, Courage over Comfort, efficacy towards sharing right
                talent for delivering out-of-box analytical solutions”.
                Impressive to see the exponential growth of Techknomatic in
                terms of expertise across varied skillsets and people headcount.
              </p>{" "}
              <p></p>{" "}
              <div className="author-data clearfix">
                {" "}
                <div className="review-avatar">
                  <img
                    alt="review-avatar"
                    nitro-lazy-src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/themes/techknomatic/images/review-author-1.jpg"
                    className="nitro-lazy"
                    nitro-lazy-empty=""
                    id="ODc4OjE4MQ==-1"
                    src="data:image/svg+xml;nitro-empty-id=ODc4OjE4MQ==-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTIwIDEyMCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSIxMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                  />
                </div>{" "}
                <div className="review-author">
                  {" "}
                  <h6 className="h6-xl">Delivery Manager</h6>{" "}
                  <p className="p-md">Sales and Marketing consulting firm</p>{" "}
                  <div className="review-rating ico-15 yellow-color">
                    <span className="flaticon-star-1"></span>{" "}
                    <span className="flaticon-star-1"></span>{" "}
                    <span className="flaticon-star-1"></span>{" "}
                    <span className="flaticon-star-1"></span>{" "}
                    <span className="flaticon-star-half-empty"></span>
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>
        </div>
        <div className="owl-item" style={{ width: "312px" }}>
          <div className="review-1">
            {" "}
            <div className="review-1-ico ico-25">
              <span className="flaticon-left-quote"></span>
            </div>{" "}
            <div className="review-1-txt">
              {" "}
              <p className="p-lg"></p>
              <p>
                Techknomatic added value in the creation and redesigning of our
                metrics &amp; dashboards. Innovative thought processes &amp;
                plans were chartered &amp; rolled out in completing 20+
                dashboards. The teams were seamless in inceptions, interactions,
                technology , operations &amp; delivery. It is very well
                appreciated for completing the project in time &amp; with
                enhanced satisfaction. Thanks &amp; do look for more
                collaboration in the future.
              </p>{" "}
              <p></p>{" "}
              <div className="author-data clearfix">
                {" "}
                <div className="review-avatar">
                  <img
                    alt="review-avatar"
                    nitro-lazy-src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/themes/techknomatic/images/review-author-1.jpg"
                    className="nitro-lazy"
                    nitro-lazy-empty=""
                    id="ODkzOjE4MQ==-1"
                    src="data:image/svg+xml;nitro-empty-id=ODkzOjE4MQ==-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTIwIDEyMCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSIxMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                  />
                </div>{" "}
                <div className="review-author">
                  {" "}
                  <h6 className="h6-xl">Director</h6>{" "}
                  <p className="p-md">Sapphire IMS</p>{" "}
                  <div className="review-rating ico-15 yellow-color">
                    <span className="flaticon-star-1"></span>{" "}
                    <span className="flaticon-star-1"></span>{" "}
                    <span className="flaticon-star-1"></span>{" "}
                    <span className="flaticon-star-1"></span>{" "}
                    <span className="flaticon-star-half-empty"></span>
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>
        </div>
        <div className="owl-item cloned" style={{ width: "312px" }}>
          <div className="review-1">
            {" "}
            <div className="review-1-ico ico-25">
              <span className="flaticon-left-quote"></span>
            </div>{" "}
            <div className="review-1-txt">
              {" "}
              <p className="p-lg"></p>
              <p>
                Techknomatic was hired for a small performance optimization PoC.
                we ended up making them our engineering partners for all the
                visualization related requirements. It’s been 3 years and they
                have designed, developed, delivered and maintained 400+
                dashboards for us.
              </p>{" "}
              <p></p>{" "}
              <div className="author-data clearfix">
                {" "}
                <div className="review-avatar">
                  <img
                    alt="review-avatar"
                    nitro-lazy-src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/themes/techknomatic/images/review-author-1.jpg"
                    className="nitro-lazy"
                    nitro-lazy-empty=""
                    id="ODAzOjE4MQ==-1"
                    src="data:image/svg+xml;nitro-empty-id=ODAzOjE4MQ==-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTIwIDEyMCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSIxMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                  />
                </div>{" "}
                <div className="review-author">
                  {" "}
                  <h6 className="h6-xl">Director – Technology,</h6>{" "}
                  <p className="p-md">Fortune 100 company</p>{" "}
                  <div className="review-rating ico-15 yellow-color">
                    <span className="flaticon-star-1"></span>{" "}
                    <span className="flaticon-star-1"></span>{" "}
                    <span className="flaticon-star-1"></span>{" "}
                    <span className="flaticon-star-1"></span>{" "}
                    <span className="flaticon-star-half-empty"></span>
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>
        </div>
        <div className="owl-item cloned" style={{ width: "312px" }}>
          <div className="review-1">
            {" "}
            <div className="review-1-ico ico-25">
              <span className="flaticon-left-quote"></span>
            </div>{" "}
            <div className="review-1-txt">
              {" "}
              <p className="p-lg"></p>
              <p>
                Techknomatic has supported us in all the visualization needs
                from environment setup to delivering dashboards for our CXOs.
                They have become part of our delivery team and help us in every
                step of our project strategy, delivery and support.
              </p>{" "}
              <p></p>{" "}
              <div className="author-data clearfix">
                {" "}
                <div className="review-avatar">
                  <img
                    alt="review-avatar"
                    nitro-lazy-src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/themes/techknomatic/images/review-author-1.jpg"
                    className="nitro-lazy"
                    nitro-lazy-empty=""
                    id="ODE4OjE4MQ==-1"
                    src="data:image/svg+xml;nitro-empty-id=ODE4OjE4MQ==-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTIwIDEyMCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSIxMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                  />
                </div>{" "}
                <div className="review-author">
                  {" "}
                  <h6 className="h6-xl">Analytics Head</h6>{" "}
                  <p className="p-md">Fintech Company – India</p>{" "}
                  <div className="review-rating ico-15 yellow-color">
                    <span className="flaticon-star-1"></span>{" "}
                    <span className="flaticon-star-1"></span>{" "}
                    <span className="flaticon-star-1"></span>{" "}
                    <span className="flaticon-star-1"></span>{" "}
                    <span className="flaticon-star-half-empty"></span>
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>
        </div>
        <div className="owl-item cloned" style={{ width: "312px" }}>
          <div className="review-1">
            {" "}
            <div className="review-1-ico ico-25">
              <span className="flaticon-left-quote"></span>
            </div>{" "}
            <div className="review-1-txt">
              {" "}
              <p className="p-lg"></p> <p></p>{" "}
              <div className="author-data clearfix">
                <div className="review-avatar">
                  <img
                    alt="review-avatar"
                    nitro-lazy-src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/themes/techknomatic/images/review-author-1.jpg"
                    className="nitro-lazy"
                    nitro-lazy-empty=""
                    id="ODMzOjE4MQ==-1"
                    src="data:image/svg+xml;nitro-empty-id=ODMzOjE4MQ==-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTIwIDEyMCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSIxMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                  />
                </div>
                <div className="review-author">
                  {" "}
                  <h6 className="h6-xl">Associate Principal</h6>{" "}
                  <p className="p-md">Management Consulting Firm</p>{" "}
                  <div className="review-rating ico-15 yellow-color">
                    <span className="flaticon-star-1"></span>{" "}
                    <span className="flaticon-star-1"></span>{" "}
                    <span className="flaticon-star-1"></span>{" "}
                    <span className="flaticon-star-1"></span>{" "}
                    <span className="flaticon-star-half-empty"></span>
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>
        </div>
        <div className="owl-item cloned" style={{ width: "312px" }}>
          <div className="review-1">
            {" "}
            <div className="review-1-ico ico-25">
              <span className="flaticon-left-quote"></span>
            </div>{" "}
            <div className="review-1-txt">
              {" "}
              <p className="p-lg"></p>
              <p>
                The Techknomatic team understands the visualization space very
                well. They have helped us in building a visualization layer on
                top of our Data processing solution. Our clients loved the
                visualization created by the Techknomatic team. The combination
                of UI &amp; UX with justification to each chart, color selection
                was very thoughtful and convincing.
              </p>{" "}
              <p></p>{" "}
              <div className="author-data clearfix">
                {" "}
                <div className="review-avatar">
                  <img
                    alt="review-avatar"
                    nitro-lazy-src="https://cdn-gehmn.nitrocdn.com/ejXDRhVMYwDqccVaEHuKASVAhgjQwSEv/assets/static/optimized/rev-cd56d89/wp-techknomatic/wp-content/themes/techknomatic/images/review-author-1.jpg"
                    className="nitro-lazy"
                    nitro-lazy-empty=""
                    id="ODQ4OjE4MQ==-1"
                    src="data:image/svg+xml;nitro-empty-id=ODQ4OjE4MQ==-1;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTIwIDEyMCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSIxMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
                  />
                </div>{" "}
                <div className="review-author">
                  {" "}
                  <h6 className="h6-xl">CEO</h6>{" "}
                  <p className="p-md">Sazinga Digital</p>{" "}
                  <div className="review-rating ico-15 yellow-color">
                    <span className="flaticon-star-1"></span>{" "}
                    <span className="flaticon-star-1"></span>{" "}
                    <span className="flaticon-star-1"></span>{" "}
                    <span className="flaticon-star-1"></span>{" "}
                    <span className="flaticon-star-half-empty"></span>
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>
        </div>

        <div className="owl-nav disabled">
          <button type="button" role="presentation" className="owl-prev">
            <span aria-label="Previous">‹</span>
          </button>
          <button type="button" role="presentation" className="owl-next">
            <span aria-label="Next">›</span>
          </button>
        </div>
        <div className="owl-dots">
          <button role="button" className="owl-dot active">
            <span></span>
          </button>
          <button role="button" className="owl-dot">
            <span></span>
          </button>
          <button role="button" className="owl-dot">
            <span></span>
          </button>
        </div>
      </div> */}
      </div>
    </div>
  );
}

export default Storiesofcust;
