import React from "react";

const Home = () => {
  return (
    <div>
      <section
        id="home"
        className="atf-particle-one atf-cover-bg atf-hero-area atf-align-items-details"
        style={{
          backgroundImage: "url(assets/img/slider/3.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="atf-round-area d-none d-lg-block" />
        <div className="container atf-particles-area">
          <div className="row atf-content-details align-items-center">
            {/*LEFT COL*/}
            <div className="col-lg-7 col-md-6 col-12 atf-single-details text-lg-left">
              <h2 className="mb-0 d-block d-lg-block">
                We Are Best App From to Landing Page Theme
              </h2>
              <p className="mr-lg-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                elit eiusmod tempor incididunt ut labore et dolore.
              </p>
              {/* Main-btn */}
              <div className="atf-one__btn-wrap">
                <a
                  href="https://www.templatemonster.com/landing-page-template/al-E-comm-multpurpose-app-amp-product-landing-page-template-145321.html?_gl=1*gwpaw1*_ga*MjgyMDU4MjUuMTYwODA1MDMzOQ..*_ga_FTPYEGT5LY*MTYwODA1NjEyNC4yLjEuMTYwODA1NzgwNi41OQ..&_ga=2.37367904.1397003643.1608056135-28205825.1608050339"
                  className="atf-one__btn"
                >
                  <i className="fa fa-play" />
                  <span>Get in</span>
                  <b>Pro Version</b>
                </a>
                <a
                  href="https://www.templatemonster.com/landing-page-template/al-E-comm-multpurpose-app-amp-product-landing-page-template-145321.html?_gl=1*gwpaw1*_ga*MjgyMDU4MjUuMTYwODA1MDMzOQ..*_ga_FTPYEGT5LY*MTYwODA1NjEyNC4yLjEuMTYwODA1NzgwNi41OQ..&_ga=2.37367904.1397003643.1608056135-28205825.1608050339"
                  className="atf-one__btn ml-3"
                >
                  <i className="fab fa-apple" />
                  <span>Get in</span>
                  <b>Pro Version</b>
                </a>
              </div>
            </div>
            {/*- END COL */}
            {/*RIGHT COL*/}
            <div className="col-lg-5 col-md-5 col-12 atf_home_img  atf_home_img4 text-center">
              <div
                className="atf-img-inner  wow fadeInRight"
                data-wow-duration="2s"
                data-wow-delay="0.4s"
                data-wow-offset={0}
              >
                <div className="home-image-box atf-particle-img">
                  <img
                    src="assets/img/slider/banner44.png"
                    alt="portfolio"
                    className="card-s"
                  />
                </div>
              </div>
            </div>
            {/*- END COL */}
          </div>
          {/*- END ROW */}
        </div>
        {/*- END CONTAINER */}
      </section>
    </div>
  );
};

export default Home;
