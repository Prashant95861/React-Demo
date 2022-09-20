import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="atf-footer-area">
        <div className="atf-section-padding pb-0">
          <div className="container">
            <div className="row atf-mailchamp-border clearfix">
              <div className="col-lg-6 col-md-8 col-12 offset-lg-3 offset-md-2 atf-mailchamp-headding atf-mailchamp-subscribe">
                <h2 className="mb-3 text-center">Subcribe to Newletter Now</h2>
                <form className="form-group" id="mc-form">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="email"
                    placeholder="Your Email"
                    required="required"
                  />
                  <button
                    type="submit"
                    id="subscribe-button"
                    className="btn atf-themes-btn"
                  >
                    <i className="fab fa-telegram-plane" />
                  </button>
                  {/* SUBSCRIPTION SUCCESSFUL OR ERROR MESSAGES */}
                  <br />
                  <label className="atf-subscription-label" htmlFor="email" />
                </form>
              </div>
              {/*- END COL */}
            </div>
            {/*- END COL */}
            <div className="atf-footer-top mt-5">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-12 atf-footer-link">
                  <div className="atf-footer-box">
                    <h5>
                      <a href="">E-comm Company</a>
                    </h5>
                    <p>
                      Sed congue nisl dolorSed congue nisl dolor, id dapibus leo
                      elementum posuere.Sed congue nisl dolorSed congue nisl
                      dolor, id dapibus leo. Sed congue nisl dolorSed congue
                      nisl.
                    </p>
                  </div>
                </div>
                {/*- END COL */}
                <div className="col-lg-2 col-md-6 col-12 atf-footer-link">
                  <h5>Quick Links</h5>
                  <ul className="atf-list-menu">
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-right mr-2" />
                        Get Stared
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-right mr-2" />
                        Our Team
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-right mr-2" />
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-right mr-2" />
                        Need Helps
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-right mr-2" />
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
                {/*- END COL */}
                <div className="col-lg-2 col-md-6 col-12 atf-footer-link">
                  <h5>Support Links</h5>
                  <ul className="atf-list-menu">
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-right mr-2" />
                        Our Faq
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-right mr-2" />
                        Our Service
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-right mr-2" />
                        Protfolio
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-right mr-2" />
                        Apps Download
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-right mr-2" />
                        Our News
                      </a>
                    </li>
                  </ul>
                </div>
                {/*- END COL */}
                <div className="col-lg-4 col-md-6 col-12 atf-footer-link">
                  <h5>Follow Us</h5>
                  <p>
                    Sed congue nisl dolorSed congue nisl dolor, id dapibus leo
                    elementum posuere.
                  </p>
                  <br />
                  <div className="atf-footer-social-icon mt-1">
                    <a href="#" className="icon">
                      <i className="fab fa-dribbble" />
                    </a>
                    <a href="#" className="icon">
                      <i className="fab fa-behance" />
                    </a>
                    <a href="#" className="icon">
                      <i className="fab fa-linkedin" />
                    </a>
                    <a href="#" className="icon">
                      <i className="fab fa-twitter" />
                    </a>
                  </div>
                </div>
                {/*- END COL */}
              </div>
              {/*- END ROW */}
            </div>
            {/*- END SINGLE FOOTER */}
          </div>
          {/*- END CONTAINER */}
          <div className="atf-footer-boottom text-center mt-4">
            <div className="row">
              <div className="col-md-12">
                <p>
                  ©Copyright - All Right Reserved.Designed
                  <i className="fa fa-heart ml-1 mr-1" /> by
                  <a href="">Theme Family</a>
                </p>
              </div>
              {/*- END COL */}
            </div>
            {/*- END ROW */}
          </div>
          {/* FOOTER SECTION END*/}
        </div>
        {/*- END OVERLAY */}
      </footer>
    </div>
  );
};

export default Footer;
