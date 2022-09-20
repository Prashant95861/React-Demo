import React from "react";

const About = () => {
  return (
    <div>
      <section
        id="about"
        className="atf-about-area atf-section-padding atf-shape"
      >
        <img
          className="atf-shape-one"
          src="assets/img/shape/shape1.png"
          alt=""
        />
        <div className="container">
          <div className="row clearfix">
            <div className="col-xl-6 col-lg-6  col-12">
              <div
                className="atf-about-content-area pl-lg-3 wow fadeInLeft"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
                data-wow-offset={0}
              >
                <div className="atf-section-title">
                  <h2>We are Best App</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Porro reprehenderit, voluptas a, sint tenetur.Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit. Porro
                    reprehenderit.
                  </p>
                  <ul className="atf-about-single-content mt-3">
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipisicing.
                    </li>
                    <li>Lorem ipsum dolor sit amet elit voluptas.</li>
                    <li>Lorem ipsum, or lipsum sint tenetur. </li>
                  </ul>
                </div>
                {/* About-btn */}
                <div className="atf-about-btn mt-5">
                  <a
                    href="https://www.templatemonster.com/landing-page-template/al-E-comm-multpurpose-app-amp-product-landing-page-template-145321.html?_gl=1*gwpaw1*_ga*MjgyMDU4MjUuMTYwODA1MDMzOQ..*_ga_FTPYEGT5LY*MTYwODA1NjEyNC4yLjEuMTYwODA1NzgwNi41OQ..&_ga=2.37367904.1397003643.1608056135-28205825.1608050339"
                    className="page-scroll atf-themes-btn mr-4"
                  >
                    Pro Version <i className="fa fa-download ml-2" />
                  </a>
                </div>
              </div>
            </div>
            {/*- END COL */}
            <div className="col-xl-6 col-lg-6  col-12">
              <div
                className="atf-single-about-img text-center my-auto wow fadeInRight"
                data-wow-duration="1s"
                data-wow-delay="0.3s"
                data-wow-offset={0}
              >
                <div className="atf-about-image">
                  <img
                    src="assets/img/slider/bg.png"
                    alt="about"
                    className="card-s"
                  />
                </div>
              </div>
            </div>
            {/*- END COL */}
          </div>
          {/*- END ROW */}
        </div>
        {/*- END CONTANIAR */}
      </section>
    </div>
  );
};

export default About;
