import React from "react";

const Video = () => {
  return (
    <>
      <div
        className="video-banner video-banner-bg bg-image text-center"
        style={{
          backgroundImage: "url(assets/images/demos/demo-5/bg-2.jpg)",
        }}
      >
        <div className="container">
          <h3 className="video-banner-title h1 text-white">
            <span>New Collection</span>
            <strong>
              Winter’19 <i>/</i> Spring’20
            </strong>
          </h3>
          {/* End .video-banner-title */}
          <a
            href="https://www.youtube.com/watch?v=vBPgmASQ1A0"
            className="btn-video btn-iframe"
          >
            <i className="icon-play" />
          </a>
        </div>
        {/* End .container */}
      </div>
    </>
  );
};

export default Video;
