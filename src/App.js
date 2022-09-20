import React, { useEffect, useState } from "react";
import About from "./Components/About/About";
import Contact from "./Components/ContactUs/Contact";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  const [scrollHeight, setScrollHeight] = useState(false);

  const backToTop = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const scroll = window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setScrollHeight(true);
      } else {
        setScrollHeight(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", scroll);
    };
  });

  return (
    <div className="page-wrapper">
      {/* START PRELOADER */}
      <div className="atf-preloader">
        <div className="atf-status">
          <div className="atf-status-mes" />
        </div>
      </div>
      {/*  END PRELOADER */}
      {/* START back-to-top */}

      {/* <button id="topBtn">
        <i class="fas fa-arrow-up"></i>
      </button> */}
      {scrollHeight && (
        <button
          className="atf-scroll-top atf-back-to-top"
          data-targets="html"
          onClick={backToTop}
        >
          <i className="fa fa-angle-up atf-scrollup-icon" />
        </button>
      )}
      {/* END back-to-top*/}
      {/* START NAVBAR */}

      <Navbar />

      {/* END NAVBAR */}
      {/* START HOME */}

      <Home />

      {/* END HOME */}
      {/* START ABOUT AREA  */}

      <About />

      {/* END ABOUT AREA  */}
      {/* COUNTER SECTION START*/}
      <section id="counter" className="atf-section-padding pt-0 ">
        <div className="container atf-counter-area">
          <div className="row clearfix text-center">
            <div className="col-lg-3 col-md-6 col-12 atf-main-counter">
              <div
                className="atf-counter wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
                data-wow-offset={0}
              >
                <div className="atf-counter-content">
                  <span
                    className="atf-counter-value odometer"
                    data-count={1500}
                  >
                    00
                  </span>
                  <h3>Active Account</h3>
                </div>
              </div>
            </div>
            {/*- END COL */}
            <div className="col-lg-3 col-md-6 col-12 atf-main-counter">
              <div
                className="atf-counter wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.3s"
                data-wow-offset={0}
              >
                <div className="atf-counter-content">
                  <span
                    className="atf-counter-value odometer"
                    data-count={4500}
                  >
                    00
                  </span>
                  <h3>App Download</h3>
                </div>
              </div>
            </div>
            {/*- END COL */}
            <div className="col-lg-3 col-md-6 col-12 atf-main-counter">
              <div
                className="atf-counter wow fadeInUp"
                data-wow-duration="3s"
                data-wow-delay="0.4s"
                data-wow-offset={0}
              >
                <div className="atf-counter-content">
                  <span
                    className="atf-counter-value odometer"
                    data-count={5500}
                  >
                    00
                  </span>
                  <h3>Total Rates</h3>
                </div>
              </div>
            </div>
            {/*- END COL */}
            <div className="col-lg-3 col-md-6 col-12 atf-main-counter">
              <div
                className="atf-counter wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
                data-wow-offset={0}
              >
                <div className="atf-counter-content">
                  <span
                    className="atf-counter-value odometer"
                    data-count={6500}
                  >
                    00
                  </span>
                  <h3>Happy Client</h3>
                </div>
              </div>
            </div>
            {/*- END COL */}
          </div>
          {/*- END ROW */}
        </div>
        {/*- END CONTAINER */}
      </section>
      {/* COUNTER SECTION END*/}
      {/* START VIDEO SECTION  */}
      <section
        id="watch"
        className="atf-watch-area  atf-shape3-three"
        style={{
          backgroundImage: "url(assets/img/slider/bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <img
          className="atf-shape-three"
          src="assets/img/shape/shape3.png"
          alt=""
        />
        <div className="atf-video-overlay atf-section-padding">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-6">
                <div
                  className="atf-section-title text-center wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0.2s"
                  data-wow-offset={0}
                >
                  <h2 className="text-white">Watch Now</h2>
                  <p className="mx-auto my-auto text-white">
                    Lorem elementum Sed congue nisl dolorSed congue nisl dolor
                    Lorem elementum Sed congue nisl dolor Sed.
                  </p>
                </div>
              </div>
              {/*- END COL */}
            </div>
            {/*- END ROW */}
            <div className="row clearfix justify-content-center">
              <div className="col-xl-6 col-lg-6 col-12 atf_home_img text-center">
                <div className="atf-watch-inner text-center my-auto">
                  <div className="atf-watch-img">
                    <img
                      src="assets/img/slider/3.jpg"
                      alt="portfolio"
                      className="card-s"
                    />
                  </div>
                </div>
                <div className="waves-box">
                  <a
                    href="https://www.youtube.com/watch?v=Ao2XIhZ0JGs"
                    className="iq-video popup-video mfp-iframe"
                  >
                    <i className="fa fa-play" />
                  </a>
                  <div className="iq-waves">
                    <div className="waves wave-1" />
                    <div className="waves wave-2" />
                    <div className="waves wave-3" />
                  </div>
                </div>
              </div>
              {/*- END COL */}
            </div>
            {/*- END ROW */}
          </div>
          {/*- END CONTANIAR */}
        </div>
        {/*- END CONTANIAR */}
      </section>
      {/* SERVICE SECTION END */}
      {/* START FREQUENTLY AREA */}
      <section id="faq" className="atf-faq-area atf-section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6 col-12 text-center">
              <div
                className="atf-faq-img wow fadeInLeft"
                data-wow-duration="2s"
                data-wow-delay="0.4s"
                data-wow-offset={0}
              >
                <img
                  src="assets/img/slider/banner11.png"
                  className="img-fluid card-s"
                  alt="Faq img"
                />
              </div>
            </div>
            {/* End COL */}
            <div className="col-lg-7 col-md-6 col-12 my-auto mx-auto">
              <div className="row justify-content-left">
                <div className="col-xl-8 col-lg-7">
                  <div
                    className="atf-section-title text-left wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay="0.2s"
                    data-wow-offset={0}
                  >
                    <h2>We Have Best Partner From All Over The World</h2>
                    <p className="mx-auto my-auto">
                      Lorem elementum Sed congue nisl dolorSed congue nisl dolor
                      Lorem elementum Sed congue nisl dolor Sed.
                    </p>
                  </div>
                </div>
                {/*- END COL */}
              </div>
              {/*- END ROW */}
              <div
                className="panel-group"
                id="accordion"
                role="tablist"
                aria-multiselectable="true"
              >
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingOne">
                    <h4 className="panel-title">
                      <a
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                        className="collapsed"
                      >
                        We're ready to start now?
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapseOne"
                    className="panel-collapse collapse in"
                    role="tabpanel"
                    aria-labelledby="headingOne"
                  >
                    <div className="panel-body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Praesent nisl lorem, dictum id pellentesque at,
                        vestibulum ut arcu. Curabitur erat libero, egestas eu
                        tincidunt ac, rutrum ac justo. Vivamus condimentum
                        laoreet lectus, blandit posuere tortor aliquam vitae.
                        Curabitur molestie eros.
                      </p>
                    </div>
                  </div>
                </div>
                {/* END PANEL */}
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingTwo">
                    <h4 className="panel-title">
                      <a
                        className=""
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseTwo"
                        aria-expanded="true"
                        aria-controls="collapseTwo"
                      >
                        How I can Upgrade app?
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapseTwo"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="headingTwo"
                  >
                    <div className="panel-body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Praesent nisl lorem, dictum id pellentesque at,
                        vestibulum ut arcu. Curabitur erat libero, egestas eu
                        tincidunt ac, rutrum ac justo. Vivamus condimentum
                        laoreet lectus, blandit posuere tortor aliquam vitae.
                        Curabitur molestie eros.
                      </p>
                    </div>
                  </div>
                </div>
                {/* END PANEL */}
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingThree">
                    <h4 className="panel-title">
                      <a
                        className="collapsed"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        How I can Install app?
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapseThree"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="headingThree"
                  >
                    <div className="panel-body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Praesent nisl lorem, dictum id pellentesque at,
                        vestibulum ut arcu. Curabitur erat libero, egestas eu
                        tincidunt ac, rutrum ac justo. Vivamus condimentum
                        laoreet lectus, blandit posuere tortor aliquam vitae.
                        Curabitur molestie eros.
                      </p>
                    </div>
                  </div>
                </div>
                {/* END PANEL */}
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingFour">
                    <h4 className="panel-title">
                      <a
                        className="collapsed"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        How I can download app?
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapseFour"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="headingFour"
                  >
                    <div className="panel-body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Praesent nisl lorem, dictum id pellentesque at,
                        vestibulum ut arcu. Curabitur erat libero, egestas eu
                        tincidunt ac, rutrum ac justo. Vivamus condimentum
                        laoreet lectus, blandit posuere tortor aliquam vitae.
                        Curabitur molestie eros.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* END PANEL */}
            </div>
            {/* END COL */}
          </div>
          {/* End ROW */}
        </div>
        {/* End CONTAINER */}
      </section>
      {/* END FREQUENTLY AREA*/}
      {/* TESTIMONIAL SECTION START*/}
      <section
        id="testimonial"
        className="atf-testimonial-area atf-section-padding pb-0"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-xl-6">
              <div
                className="atf-section-title text-center wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.3s"
                data-wow-offset={0}
              >
                <h2>Client Review</h2>
                <p>
                  Lorem ipsum dolor sit amet elit , consectetur adipiscing , sed
                  eiusmod tempor sit amet elit dolor sit amet elit.
                </p>
              </div>
            </div>
            {/*- END COL */}
          </div>
          {/*- END ROW */}
          <div className="row clearfix">
            <div className="col-lg-12 col-md-12 col-12 clearfix">
              {/* Testimonials Slider*/}
              <div
                id="testimonial-slider"
                className="atf-testimonials-slide atf-main-testimonials atf-testimonial-slider owl-carousel owl-theme"
              >
                <div className="atf-testimonial-item">
                  <div className="atf-testimonial-image">
                    <img src="assets/img/client/01.jpg" alt="" />
                  </div>
                  {/* Single review*/}
                  <div className="atf-testimonial-inner">
                    <div className="atf-testimonial-text">
                      Lorem ipsum available but the majority have or suffered
                      alteration in some form, by injected humour.
                    </div>
                  </div>
                  <div className="atf-testimonial-info text-center">
                    <div className="atf-testimonial-name">
                      <h3>Ar-Rahman</h3>
                    </div>
                    <div className="atf-testimonial-designation">
                      <p>7 Dec, 2020</p>
                    </div>
                  </div>
                </div>
                {/* End single Testimonials */}
                <div className="atf-testimonial-item">
                  <div className="atf-testimonial-image">
                    <img src="assets/img/client/02.jpg" alt="" />
                  </div>
                  {/* Single review*/}
                  <div className="atf-testimonial-inner">
                    <div className="atf-testimonial-text">
                      Lorem ipsum available but the majority have or suffered
                      alteration in some form, by injected humour.
                    </div>
                  </div>
                  <div className="atf-testimonial-info text-center">
                    <div className="atf-testimonial-name">
                      <h3>Al-Azim</h3>
                    </div>
                    <div className="atf-testimonial-designation">
                      <p>7 Dec, 2020</p>
                    </div>
                  </div>
                </div>
                {/* End single Testimonials */}
                <div className="atf-testimonial-item">
                  <div className="atf-testimonial-image">
                    <img src="assets/img/client/03.jpg" alt="" />
                  </div>
                  {/* Single review*/}
                  <div className="atf-testimonial-inner">
                    <div className="atf-testimonial-text">
                      Lorem ipsum available but the majority have or suffered
                      alteration in some form, by injected humour.
                    </div>
                  </div>
                  <div className="atf-testimonial-info text-center">
                    <div className="atf-testimonial-name">
                      <h3>Ar-Raqib</h3>
                    </div>
                    <div className="atf-testimonial-designation">
                      <p>7 Dec, 2020</p>
                    </div>
                  </div>
                </div>
                {/* End single Testimonials */}
                <div className="atf-testimonial-item">
                  <div className="atf-testimonial-image">
                    <img src="assets/img/client/03.jpg" alt="" />
                  </div>
                  {/* Single review*/}
                  <div className="atf-testimonial-inner">
                    <div className="atf-testimonial-text">
                      Lorem ipsum available but the majority have or suffered
                      alteration in some form, by injected humour.
                    </div>
                  </div>
                  <div className="atf-testimonial-info text-center">
                    <div className="atf-testimonial-name">
                      <h3>Ar-Malik</h3>
                    </div>
                    <div className="atf-testimonial-designation">
                      <p>7 Dec, 2020</p>
                    </div>
                  </div>
                </div>
                {/* End single Testimonials */}
                <div className="atf-testimonial-item">
                  <div className="atf-testimonial-image">
                    <img src="assets/img/client/01.jpg" alt="" />
                  </div>
                  {/* Single review*/}
                  <div className="atf-testimonial-inner">
                    <div className="atf-testimonial-text">
                      Lorem ipsum available but the majority have or suffered
                      alteration in some form, by injected humour.
                    </div>
                  </div>
                  <div className="atf-testimonial-info text-center">
                    <div className="atf-testimonial-name">
                      <h3>Ar-Kuddus</h3>
                    </div>
                    <div className="atf-testimonial-designation">
                      <p>7 Dec, 2020</p>
                    </div>
                  </div>
                </div>
                {/* End single Testimonials */}
                <div className="atf-testimonial-item">
                  <div className="atf-testimonial-image">
                    <img src="assets/img/client/02.jpg" alt="" />
                  </div>
                  {/* Single review*/}
                  <div className="atf-testimonial-inner">
                    <div className="atf-testimonial-text">
                      Lorem ipsum available but the majority have or suffered
                      alteration in some form, by injected humour.
                    </div>
                  </div>
                  <div className="atf-testimonial-info text-center">
                    <div className="atf-testimonial-name">
                      <h3>Ar-Karim</h3>
                    </div>
                    <div className="atf-testimonial-designation">
                      <p>7 Dec, 2020</p>
                    </div>
                  </div>
                </div>
                {/* End single Testimonials */}
                <div className="atf-testimonial-item">
                  <div className="atf-testimonial-image">
                    <img src="assets/img/client/03.jpg" alt="" />
                  </div>
                  {/* Single review*/}
                  <div className="atf-testimonial-inner">
                    <div className="atf-testimonial-text">
                      Lorem ipsum available but the majority have or suffered
                      alteration in some form, by injected humour.
                    </div>
                  </div>
                  <div className="atf-testimonial-info text-center">
                    <div className="atf-testimonial-name">
                      <h3>Ar-Ghafur</h3>
                    </div>
                    <div className="atf-testimonial-designation">
                      <p>7 Dec, 2020</p>
                    </div>
                  </div>
                </div>
                {/* End single Testimonials */}
              </div>
              {/* Testimonials Slider End*/}
            </div>
            {/*- END COL */}
          </div>
          {/*- END ROW */}
        </div>
        {/*- END CONTAINER */}
      </section>
      {/* TESTIMONIAL SECTION END*/}
      {/* CONTACT SECTION START*/}

      <Contact />

      {/* CONTACT SECTION END*/}
      {/* FOOTER SECTION START*/}

      <Footer />

      {/*- END FOOTER */}
    </div>
  );
};

export default App;
