import React from "react";

const MainSlider = () => {
  return (
    <>
      <div className="intro-slider-container mb-0">
        <div
          className="intro-slider owl-carousel owl-theme owl-nav-inside owl-light"
          data-toggle="owl"
          data-owl-options='{"nav": false, "dots": false}'
        >
          <div
            className="intro-slide"
            style={{
              backgroundImage:
                "url(assets/images/demos/demo-5/slider/slide-1.jpg)",
            }}
          >
            <div className="container intro-content text-center">
              <h3 className="intro-subtitle text-white">Don’t Miss</h3>
              {/* End .h3 intro-subtitle */}
              <h1 className="intro-title text-white">Mystery Deals</h1>
              {/* End .intro-title */}
              <div className="intro-text text-white">Online Only</div>
              {/* End .intro-text */}
              <a href="category.html" className="btn btn-primary">
                Discover NOW
              </a>
            </div>
            {/* End .intro-content */}
          </div>
          {/* End .intro-slide */}
          <div
            className="intro-slide"
            style={{
              backgroundImage:
                "url(assets/images/demos/demo-5/slider/slide-2.jpg)",
            }}
          >
            <div className="container intro-content text-center">
              <h3 className="intro-subtitle text-white">Limited time only</h3>
              {/* End .h3 intro-subtitle */}
              <h1 className="intro-title text-white">Treat your self</h1>
              {/* End .intro-title */}
              <div className="intro-text text-white">Up to 50% off</div>
              {/* End .intro-text */}
              <a href="category.html" className="btn btn-primary">
                Shop NOW
              </a>
            </div>
            {/* End .intro-content */}
          </div>
          {/* End .intro-slide */}
        </div>
        {/* End .intro-slider owl-carousel owl-theme */}
        <span className="slider-loader text-white" />
        {/* End .slider-loader */}
      </div>
    </>
  );
};

export default MainSlider;
