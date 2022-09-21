import React from "react";
import MainSlider from "./Components/MainSlider";
import NewArrivals from "./Components/NewArrivals";
import SpecialProduct from "./Components/SpecialProduct";
import TrendingProduct from "./Components/TrendingProduct";
import Video from "./Components/Video";

const App = () => {
  return (
    <>
      <div className="page-wrapper">
        <header className="header header-5">
          <div className="header-middle sticky-header">
            <div className="container-fluid">
              <div className="header-left">
                <button className="mobile-menu-toggler">
                  <span className="sr-only">Toggle mobile menu</span>
                  <i className="icon-bars" />
                </button>
                <a href="index.html" className="logo">
                  <img
                    src="assets/images/demos/demo-5/logo.png"
                    alt="Molla Logo"
                    width={105}
                    height={25}
                  />
                </a>
                <nav className="main-nav">
                  <ul className="menu ">
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <a href="category.html">Shop</a>
                    </li>
                    <li>
                      <a href="product.html">Product</a>
                    </li>
                    <li>
                      <a href="#">Pages</a>
                    </li>
                    <li>
                      <a href="blog.html">Blog</a>
                    </li>
                  </ul>
                  {/* End .menu */}
                </nav>
                {/* End .main-nav */}
              </div>
              {/* End .header-left */}
              <div className="header-right">
                <div className="header-search header-search-extended header-search-visible">
                  <a href="#" className="search-toggle" role="button">
                    <i className="icon-search" />
                  </a>
                  <form action="#" method="get">
                    <div className="header-search-wrapper">
                      <label htmlFor="q" className="sr-only">
                        Search
                      </label>
                      <input
                        type="search"
                        className="form-control"
                        name="q"
                        id="q"
                        placeholder="Search product ..."
                        required=""
                      />
                      <button className="btn btn-primary" type="submit">
                        <i className="icon-search" />
                      </button>
                    </div>
                    {/* End .header-search-wrapper */}
                  </form>
                </div>
                {/* End .header-search */}
                <a href="wishlist.html" className="wishlist-link">
                  <i className="icon-heart-o" />
                </a>
              </div>
              {/* End .header-right */}
            </div>
            {/* End .container-fluid */}
          </div>
          {/* End .header-middle */}
        </header>
        {/* End .header */}
        <main className="main">
          {/* -----------------------------------------Main slider---------------------------------------  */}
          <MainSlider />
          {/* End .intro-slider-container */}
          {/* -------------------------------------Company of brand-------------------------------------- */}
          <div
            className="brands-border owl-carousel owl-simple mb-5"
            data-toggle="owl"
            data-owl-options='{
              "nav": false, 
              "dots": false,
              "margin": 0,
              "loop": false,
              "responsive": {
                  "0": {
                      "items":2
                  },
                  "420": {
                      "items":3
                  },
                  "600": {
                      "items":4
                  },
                  "900": {
                      "items":5
                  },
                  "1024": {
                      "items":6
                  },
                  "1360": {
                      "items":7
                  }
              }
          }'
          >
            <a href="#" className="brand">
              <img src="assets/images/brands/1.png" alt="Brand Name" />
            </a>
            <a href="#" className="brand">
              <img src="assets/images/brands/2.png" alt="Brand Name" />
            </a>
            <a href="#" className="brand">
              <img src="assets/images/brands/3.png" alt="Brand Name" />
            </a>
            <a href="#" className="brand">
              <img src="assets/images/brands/4.png" alt="Brand Name" />
            </a>
            <a href="#" className="brand">
              <img src="assets/images/brands/5.png" alt="Brand Name" />
            </a>
            <a href="#" className="brand">
              <img src="assets/images/brands/6.png" alt="Brand Name" />
            </a>
            <a href="#" className="brand">
              <img src="assets/images/brands/7.png" alt="Brand Name" />
            </a>
          </div>
          {/* End .owl-carousel */}

          {/* ------------------------------ Main 3 product / Category ----------------------------------- */}
          <div className="container">
            <div className="banner-group">
              <div className="row">
                <div className="col-md-6">
                  <div className="banner banner-border">
                    <a href="#">
                      <img
                        src="assets/images/demos/demo-5/banners/banner-1.jpg"
                        alt="Banner"
                      />
                    </a>
                    <div className="banner-content">
                      <h4 className="banner-subtitle">
                        <a href="#">Trending now</a>
                      </h4>
                      {/* End .banner-subtitle */}
                      <h3 className="banner-title">
                        <a href="#">
                          <span>
                            This Week's
                            <br />
                            Most Wanted
                          </span>
                        </a>
                      </h3>
                      {/* End .banner-title */}
                      <a
                        href="#"
                        className="btn btn-outline-primary-2 banner-link"
                      >
                        Discover Now
                        <i className="icon-long-arrow-right" />
                      </a>
                    </div>
                    {/* End .banner-content */}
                  </div>
                  {/* End .banner */}
                </div>
                {/* End .col-md-6*/}
                <div className="col-md-6">
                  <div className="banner banner-border-hover">
                    <a href="#">
                      <img
                        src="assets/images/demos/demo-5/banners/banner-2.jpg"
                        alt="Banner"
                      />
                    </a>
                    <div className="banner-content">
                      <h4 className="banner-subtitle">
                        <a href="#">Limited time only.</a>
                      </h4>
                      {/* End .banner-subtitle */}
                      <h3 className="banner-title">
                        <a href="#">
                          <span>
                            Trainers &amp; Sportwear
                            <br />
                            Sale Up to 70% off
                          </span>
                        </a>
                      </h3>
                      {/* End .banner-title */}
                      <a
                        href="#"
                        className="btn btn-outline-primary-2 banner-link"
                      >
                        Shop Now
                        <i className="icon-long-arrow-right" />
                      </a>
                    </div>
                    {/* End .banner-content */}
                  </div>
                  {/* End .banner */}
                  <div className="banner banner-border-hover">
                    <a href="#">
                      <img
                        src="assets/images/demos/demo-5/banners/banner-3.jpg"
                        alt="Banner"
                      />
                    </a>
                    <div className="banner-content">
                      <h4 className="banner-subtitle">
                        <a href="#">This week we love...</a>
                      </h4>
                      {/* End .banner-subtitle */}
                      <h3 className="banner-title">
                        <a href="#">
                          <span>
                            Womens <br />
                            Holiday Clothes
                          </span>
                        </a>
                      </h3>
                      {/* End .banner-title */}
                      <a
                        href="#"
                        className="btn btn-outline-primary-2 banner-link"
                      >
                        Discover Now
                        <i className="icon-long-arrow-right" />
                      </a>
                    </div>
                    {/* End .banner-content */}
                  </div>
                  {/* End .banner */}
                </div>
                {/* End .col-md-6 */}
              </div>
              {/* End .row */}
            </div>
            {/* End .banner-group */}
          </div>
          {/* End .container */}
          <div className="mb-4" />
          {/* End .mb-6 */}
          {/* -----------------------------------Trending products----------------------------------------- */}
          <TrendingProduct />
          {/* End .container */}
          <div className="mb-5" />
          {/* End .mb-5 */}
          {/* -----------------------------------------Youtube video---------------------------------------- */}
          <Video />
          {/* End .video-banner bg-image */}
          {/* -------------------------------Special product ----------------------------------------- */}
          <SpecialProduct />
          {/* End .bg-lighter pt6 pb-6 */}
          {/* -----------------------------------------New Arrivals----------------------------------- */}
          <NewArrivals />
          {/* End .container */}
          <div className="mb-2" />
          {/* End .mb-2 */}
          {/* -------------------------Social accounts --------------------------------------------- */}
          <div className="container">
            <div className="cta cta-separator mb-5">
              <div className="row">
                <div className="col-lg-6">
                  <div className="cta-wrapper cta-text text-center">
                    <h3 className="cta-title">Shop Social</h3>
                    {/* End .cta-title */}
                    <p className="cta-desc">
                      Donec nec justo eget felis facilisis fermentum. Aliquam
                      porttitor mauris sit amet orci.
                    </p>
                    {/* End .cta-desc */}
                    <div className="social-icons social-icons-colored justify-content-center">
                      <a
                        href="#"
                        className="social-icon social-facebook"
                        title="Facebook"
                        target="_blank"
                      >
                        <i className="icon-facebook-f" />
                      </a>
                      <a
                        href="#"
                        className="social-icon social-twitter"
                        title="Twitter"
                        target="_blank"
                      >
                        <i className="icon-twitter" />
                      </a>
                      <a
                        href="#"
                        className="social-icon social-instagram"
                        title="Instagram"
                        target="_blank"
                      >
                        <i className="icon-instagram" />
                      </a>
                      <a
                        href="#"
                        className="social-icon social-youtube"
                        title="Youtube"
                        target="_blank"
                      >
                        <i className="icon-youtube" />
                      </a>
                      <a
                        href="#"
                        className="social-icon social-pinterest"
                        title="Pinterest"
                        target="_blank"
                      >
                        <i className="icon-pinterest" />
                      </a>
                    </div>
                    {/* End .soial-icons */}
                  </div>
                  {/* End .cta-wrapper */}
                </div>
                {/* End .col-lg-6 */}
                <div className="col-lg-6">
                  <div className="cta-wrapper text-center">
                    <h3 className="cta-title">Get the Latest Deals</h3>
                    {/* End .cta-title */}
                    <p className="cta-desc">
                      and <br />
                      receive <span className="text-primary">$20 coupon</span>
                      for first shopping
                    </p>
                    {/* End .cta-desc */}
                    <form action="#">
                      <div className="input-group">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter your Email Address"
                          aria-label="Email Adress"
                          required=""
                        />
                        <div className="input-group-append">
                          <button
                            className="btn btn-primary btn-rounded"
                            type="submit"
                          >
                            <i className="icon-long-arrow-right" />
                          </button>
                        </div>
                        {/* .End .input-group-append */}
                      </div>
                      {/* .End .input-group */}
                    </form>
                  </div>
                  {/* End .cta-wrapper */}
                </div>
                {/* End .col-lg-6 */}
              </div>
              {/* End .row */}
            </div>
            {/* End .cta */}
          </div>
          {/* End .container */}
          {/* -------------------------------------------Instagram last posts -------------------------- */}
          <div
            className="bg-lighter pt-7 pb-4"
            style={{ backgroundColor: "#fafafa" }}
          >
            <div className="container">
              <div className="instagram-feed-container">
                <div className="row">
                  <div className="feed-col">
                    <div className="instagram-feed">
                      <img
                        src="assets/images/demos/demo-5/instagram/1.jpg"
                        alt="img"
                      />
                      <div className="instagram-feed-content">
                        <a href="#">
                          <i className="icon-heart-o" />
                          387
                        </a>
                        <a href="#">
                          <i className="icon-comments" />
                          45
                        </a>
                      </div>
                      {/* End .instagram-feed-content */}
                    </div>
                    {/* End .instagram-feed */}
                  </div>
                  {/* End .feed-col */}
                  <div className="feed-col">
                    <div className="instagram-feed">
                      <img
                        src="assets/images/demos/demo-5/instagram/2.jpg"
                        alt="img"
                      />
                      <div className="instagram-feed-content">
                        <a href="#">
                          <i className="icon-heart-o" />
                          691
                        </a>
                        <a href="#">
                          <i className="icon-comments" />
                          87
                        </a>
                      </div>
                      {/* End .instagram-feed-content */}
                    </div>
                    {/* End .instagram-feed */}
                  </div>
                  {/* End .feed-col */}
                  <div className="feed-col feed-col-title">
                    <div className="instagram-feed-title">
                      <i className="icon-instagram" />
                      <p>
                        @Molla_store <br />
                        on instagram
                      </p>
                      <a href="#">FOLLOW</a>
                    </div>
                    {/* End .instagram-feed-title */}
                  </div>
                  {/* End .feed-col */}
                  <div className="feed-col">
                    <div className="instagram-feed">
                      <img
                        src="assets/images/demos/demo-5/instagram/3.jpg"
                        alt="img"
                      />
                      <div className="instagram-feed-content">
                        <a href="#">
                          <i className="icon-heart-o" />
                          321
                        </a>
                        <a href="#">
                          <i className="icon-comments" />
                          54
                        </a>
                      </div>
                      {/* End .instagram-feed-content */}
                    </div>
                    {/* End .instagram-feed */}
                  </div>
                  {/* End .feed-col */}
                  <div className="feed-col">
                    <div className="instagram-feed">
                      <img
                        src="assets/images/demos/demo-5/instagram/4.jpg"
                        alt="img"
                      />
                      <div className="instagram-feed-content">
                        <a href="#">
                          <i className="icon-heart-o" />
                          44
                        </a>
                        <a href="#">
                          <i className="icon-comments" />
                          55
                        </a>
                      </div>
                      {/* End .instagram-feed-content */}
                    </div>
                    {/* End .instagram-feed */}
                  </div>
                  {/* End .feed-col */}
                  <div className="feed-col">
                    <div className="instagram-feed">
                      <img
                        src="assets/images/demos/demo-5/instagram/5.jpg"
                        alt="img"
                      />
                      <div className="instagram-feed-content">
                        <a href="#">
                          <i className="icon-heart-o" />
                          128
                        </a>
                        <a href="#">
                          <i className="icon-comments" />
                          99
                        </a>
                      </div>
                      {/* End .instagram-feed-content */}
                    </div>
                    {/* End .instagram-feed */}
                  </div>
                  {/* End .feed-col */}
                  <div className="feed-col">
                    <div className="instagram-feed">
                      <img
                        src="assets/images/demos/demo-5/instagram/6.jpg"
                        alt="img"
                      />
                      <div className="instagram-feed-content">
                        <a href="#">
                          <i className="icon-heart-o" />
                          433
                        </a>
                        <a href="#">
                          <i className="icon-comments" />
                          25
                        </a>
                      </div>
                      {/* End .instagram-feed-content */}
                    </div>
                    {/* End .instagram-feed */}
                  </div>
                  {/* End .feed-col */}
                  <div className="feed-col">
                    <div className="instagram-feed">
                      <img
                        src="assets/images/demos/demo-5/instagram/7.jpg"
                        alt="img"
                      />
                      <div className="instagram-feed-content">
                        <a href="#">
                          <i className="icon-heart-o" />
                          588
                        </a>
                        <a href="#">
                          <i className="icon-comments" />
                          44
                        </a>
                      </div>
                      {/* End .instagram-feed-content */}
                    </div>
                    {/* End .instagram-feed */}
                  </div>
                  {/* End .feed-col */}
                  <div className="feed-col">
                    <div className="instagram-feed">
                      <img
                        src="assets/images/demos/demo-5/instagram/8.jpg"
                        alt="img"
                      />
                      <div className="instagram-feed-content">
                        <a href="#">
                          <i className="icon-heart-o" />
                          87
                        </a>
                        <a href="#">
                          <i className="icon-comments" />
                          23
                        </a>
                      </div>
                      {/* End .instagram-feed-content */}
                    </div>
                    {/* End .instagram-feed */}
                  </div>
                  {/* End .feed-col */}
                  <div className="feed-col">
                    <div className="instagram-feed">
                      <img
                        src="assets/images/demos/demo-5/instagram/9.jpg"
                        alt="img"
                      />
                      <div className="instagram-feed-content">
                        <a href="#">
                          <i className="icon-heart-o" />
                          87
                        </a>
                        <a href="#">
                          <i className="icon-comments" />
                          23
                        </a>
                      </div>
                      {/* End .instagram-feed-content */}
                    </div>
                    {/* End .instagram-feed */}
                  </div>
                  {/* End .feed-col */}
                </div>
                {/* End .row */}
              </div>
              {/* End .instagra-feed-container */}
              <div className="row justify-content-center">
                <div className="col-sm-6 col-lg-4">
                  <div className="icon-box icon-box-side">
                    <span className="icon-box-icon text-dark">
                      <i className="icon-rocket" />
                    </span>
                    <div className="icon-box-content">
                      <h3 className="icon-box-title">Payment &amp; Delivery</h3>
                      {/* End .icon-box-title */}
                      <p>Free shipping for orders over $50</p>
                    </div>
                    {/* End .icon-box-content */}
                  </div>
                  {/* End .icon-box */}
                </div>
                {/* End .col-sm-6 col-lg-4 */}
                <div className="col-sm-6 col-lg-4">
                  <div className="icon-box icon-box-side">
                    <span className="icon-box-icon text-dark">
                      <i className="icon-refresh" />
                    </span>
                    <div className="icon-box-content">
                      <h3 className="icon-box-title">Return &amp; Refund</h3>
                      {/* End .icon-box-title */}
                      <p>Free 100% money back guarantee</p>
                    </div>
                    {/* End .icon-box-content */}
                  </div>
                  {/* End .icon-box */}
                </div>
                {/* End .col-sm-6 col-lg-4 */}
                <div className="col-sm-6 col-lg-4">
                  <div className="icon-box icon-box-side">
                    <span className="icon-box-icon text-dark">
                      <i className="icon-life-ring" />
                    </span>
                    <div className="icon-box-content">
                      <h3 className="icon-box-title">Quality Support</h3>
                      {/* End .icon-box-title */}
                      <p>Alway online feedback 24/7</p>
                    </div>
                    {/* End .icon-box-content */}
                  </div>
                  {/* End .icon-box */}
                </div>
                {/* End .col-sm-6 col-lg-4 */}
              </div>
              {/* End .row */}
            </div>
            {/* End .container */}
          </div>
          {/* End .bg-lighter pt-5 pb-5 */}
          {/* -----------------------------------------Testimonials ----------------------------------- */}
          <div className="page-content">
            <div
              className="bg-image bg-overlay pt-5 pb-4"
              style={{
                backgroundImage: "url(assets/images/backgrounds/bg-1.jpg)",
              }}
            >
              <div className="container">
                <h2 className="title text-center text-white mb-3">
                  Quote Sign <span className="title-separator">/</span> Centered
                  Align <span className="title-separator">/</span> Dark
                  Background
                </h2>
                {/* End .title text-center */}
                <div
                  className="owl-carousel owl-theme owl-testimonials owl-light"
                  data-toggle="owl"
                  data-owl-options='{
                                      "nav": false, 
                                      "dots": true,
                                      "margin": 20,
                                      "loop": true,
                                      "responsive": {
                                          "1200": {
                                              "nav": true
                                          }
                                      }
                                  }'
                >
                  <blockquote className="testimonial testimonial-icon text-center text-white">
                    <p>
                      “ Lorem ipsum dolor sit amet, consectetuer adipiscing
                      elit. Phasellus hendrerit. Pellentesque aliquet nibh nec
                      urna. In nisi neque, aliquet vel, dapibus id, mattis vel,
                      nisi. Sed pretium, ligula sollicitudin laoreet viverra,
                      tortor libero sodales leo, eget blandit nunc tortor eu
                      nibh. Nullam mollis. Ut justo. Suspendisse potenti. ”
                    </p>
                    <cite>
                      Jenson Gregory
                      <span>Customer</span>
                    </cite>
                  </blockquote>
                  {/* End .testimonial */}
                  <blockquote className="testimonial testimonial-icon text-center text-white">
                    <p>
                      “ Impedit, ratione sequi, sunt incidunt magnam et.
                      Delectus obcaecati optio eius error libero perferendis
                      nesciunt atque dolores magni recusandae! Doloremque quidem
                      error eum quis similique doloribus natus qui ut
                      ipsum.Velit quos ipsa exercitationem, vel unde obcaecati
                      impedit eveniet non. ”
                    </p>
                    <cite>
                      Damon Stone
                      <span>Customer</span>
                    </cite>
                  </blockquote>
                  {/* End .testimonial */}
                  <blockquote className="testimonial testimonial-icon text-center text-white">
                    <p>
                      “ Molestias animi illo natus ut quod neque ad accusamus
                      praesentium fuga! Dolores odio alias sapiente odit
                      delectus quasi, explicabo a, modi voluptatibus.
                      Perferendis perspiciatis, voluptate, distinctio earum
                      veritatis animi tempora eget blandit nunc tortor eu nibh.
                      Nullam mollis. Ut justo. Suspendisse potenti. ”
                    </p>
                    <cite>
                      John Smith
                      <span>Customer</span>
                    </cite>
                  </blockquote>
                  {/* End .testimonial */}
                </div>
                {/* End .testimonials-slider owl-carousel */}
              </div>
              {/* End .container */}
            </div>
            {/* End .bg-image pt-6 pb-6 */}
          </div>
          {/* ----------------------------Contact Us------------------------------------------------ */}
          <div className="page-content pb-0">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 mb-2 mb-lg-0">
                  <h2 className="title mb-1">Contact Information</h2>
                  {/* End .title mb-2 */}
                  <p className="mb-3">
                    Vestibulum volutpat, lacus a ultrices sagittis, mi neque
                    euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus
                    pede arcu, dapibus eu, fermentum et, dapibus sed, urna.
                  </p>
                  <div className="row">
                    <div className="col-sm-7">
                      <div className="contact-info">
                        <h3>The Office</h3>
                        <ul className="contact-list">
                          <li>
                            <i className="icon-map-marker" />
                            70 Washington Square South New York, NY 10012,
                            United States
                          </li>
                          <li>
                            <i className="icon-phone" />
                            <a href="tel:#">+92 423 567</a>
                          </li>
                          <li>
                            <i className="icon-envelope" />
                            <a href="mailto:#">info@Molla.com</a>
                          </li>
                        </ul>
                        {/* End .contact-list */}
                      </div>
                      {/* End .contact-info */}
                    </div>
                    {/* End .col-sm-7 */}
                    <div className="col-sm-5">
                      <div className="contact-info">
                        <h3>The Office</h3>
                        <ul className="contact-list">
                          <li>
                            <i className="icon-clock-o" />
                            <span className="text-dark">
                              Monday-Saturday
                            </span>{" "}
                            <br />
                            11am-7pm ET
                          </li>
                          <li>
                            <i className="icon-calendar" />
                            <span className="text-dark">Sunday</span> <br />
                            11am-6pm ET
                          </li>
                        </ul>
                        {/* End .contact-list */}
                      </div>
                      {/* End .contact-info */}
                    </div>
                    {/* End .col-sm-5 */}
                  </div>
                  {/* End .row */}
                </div>
                {/* End .col-lg-6 */}
                <div className="col-lg-6">
                  <h2 className="title mb-1">Got Any Questions?</h2>
                  {/* End .title mb-2 */}
                  <p className="mb-2">
                    Use the form below to get in touch with the sales team
                  </p>
                  <form
                    action="#"
                    // onSubmit={handleSubmit(onSubmit)}
                    className="contact-form mb-3"
                  >
                    <div className="row">
                      <div className="col-sm-6">
                        <label htmlFor="cname" className="sr-only">
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          // {...register("name")}
                          className="form-control"
                          id="cname"
                          placeholder="Name *"
                          required
                        />
                      </div>
                      {/* End .col-sm-6 */}
                      <div className="col-sm-6">
                        <label htmlFor="cemail" className="sr-only">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          // {...register("email")}
                          className="form-control"
                          id="cemail"
                          placeholder="Email *"
                          required
                        />
                      </div>
                      {/* End .col-sm-6 */}
                    </div>
                    {/* End .row */}
                    <div className="row">
                      <div className="col-sm-6">
                        <label htmlFor="cphone" className="sr-only">
                          Phone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          // {...register("phone")}
                          className="form-control"
                          id="cphone"
                          placeholder="Phone"
                        />
                      </div>
                      {/* End .col-sm-6 */}
                      <div className="col-sm-6">
                        <label htmlFor="csubject" className="sr-only">
                          Subject
                        </label>
                        <input
                          type="text"
                          name="subject"
                          // {...register("subject")}
                          className="form-control"
                          id="csubject"
                          placeholder="Subject"
                        />
                      </div>
                      {/* End .col-sm-6 */}
                    </div>
                    {/* End .row */}
                    <label htmlFor="cmessage" className="sr-only">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      name="message"
                      // {...register("message")}
                      cols={30}
                      rows={4}
                      id="cmessage"
                      required
                      placeholder="Message *"
                      defaultValue={""}
                    />
                    <button
                      type="submit"
                      style={{ border: "1px solid #39f" }}
                      className="shadow-none btn btn-outline-primary-2 btn-minwidth-sm"
                    >
                      <span>SUBMIT</span>
                      <i className="icon-long-arrow-right" />
                    </button>
                  </form>
                  {/* End .contact-form */}
                </div>
                {/* End .col-lg-6 */}
              </div>
              {/* End .row */}
              <hr className="mt-4 mb-5" />
              <div className="stores mb-4 mb-lg-5">
                <h2 className="title text-center mb-3">Our Stores</h2>
                {/* End .title text-center mb-2 */}
                <div className="row">
                  <div className="col-lg-6">
                    <div className="store">
                      <div className="row">
                        <div className="col-sm-5 col-xl-6">
                          <figure className="store-media mb-2 mb-lg-0">
                            <img
                              src="assets/images/stores/img-1.jpg"
                              alt="image"
                            />
                          </figure>
                          {/* End .store-media */}
                        </div>
                        {/* End .col-xl-6 */}
                        <div className="col-sm-7 col-xl-6">
                          <div className="store-content">
                            <h3 className="store-title">Wall Street Plaza</h3>
                            {/* End .store-title */}
                            <address>
                              88 Pine St, New York, NY 10005, USA
                            </address>
                            <div>
                              <a href="tel:#">+1 987-876-6543</a>
                            </div>
                            <h4 className="store-subtitle">Store Hours:</h4>
                            {/* End .store-subtitle */}
                            <div>Monday - Saturday 11am to 7pm</div>
                            <div>Sunday 11am to 6pm</div>
                            <a
                              href="/"
                              className="btn btn-link"
                              target="_blank"
                            >
                              <span>View Map</span>
                              <i className="icon-long-arrow-right" />
                            </a>
                          </div>
                          {/* End .store-content */}
                        </div>
                        {/* End .col-xl-6 */}
                      </div>
                      {/* End .row */}
                    </div>
                    {/* End .store */}
                  </div>
                  {/* End .col-lg-6 */}
                  <div className="col-lg-6">
                    <div className="store">
                      <div className="row">
                        <div className="col-sm-5 col-xl-6">
                          <figure className="store-media mb-2 mb-lg-0">
                            <img
                              src="assets/images/stores/img-2.jpg"
                              alt="image"
                            />
                          </figure>
                          {/* End .store-media */}
                        </div>
                        {/* End .col-xl-6 */}
                        <div className="col-sm-7 col-xl-6">
                          <div className="store-content">
                            <h3 className="store-title">One New York Plaza</h3>
                            {/* End .store-title */}
                            <address>
                              88 Pine St, New York, NY 10005, USA
                            </address>
                            <div>
                              <a href="tel:#">+1 987-876-6543</a>
                            </div>
                            <h4 className="store-subtitle">Store Hours:</h4>
                            {/* End .store-subtitle */}
                            <div>Monday - Friday 9am to 8pm</div>
                            <div>Saturday - 9am to 2pm</div>
                            <div>Sunday - Closed</div>
                            <a
                              href="/"
                              className="btn btn-link"
                              target="_blank"
                            >
                              <span>View Map</span>
                              <i className="icon-long-arrow-right" />
                            </a>
                          </div>
                          {/* End .store-content */}
                        </div>
                        {/* End .col-xl-6 */}
                      </div>
                      {/* End .row */}
                    </div>
                    {/* End .store */}
                  </div>
                  {/* End .col-lg-6 */}
                </div>
                {/* End .row */}
              </div>
              {/* End .stores */}
            </div>
            {/* End .container */}
            <div id="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.940772264116!2d72.5011472149193!3d23.025946784951348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b3bfd772303%3A0xbfb4ae854688a1ac!2sSANKALP%20ICONIC%20TOWER%2C%20Sankalp%20Iconic%20Tower%2C%20Sanidhya%2C%20Ahmedabad%2C%20Gujarat%20380054!5e0!3m2!1sen!2sin!4v1648551631432!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            {/* End #map */}
          </div>
        </main>

        {/* End .main */}
        <footer className="footer footer-2">
          <div className="footer-middle border-0">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-lg-6">
                  <div className="widget widget-about">
                    <img
                      src="assets/images/demos/demo-5/logo-footer.png"
                      className="footer-logo"
                      alt="Footer Logo"
                      width={105}
                      height={25}
                    />
                    <p>
                      Praesent dapibus, neque id cursus ucibus, tortor neque
                      egestas augue, eu vulputate magna eros eu erat. Aliquam
                      erat volutpat. Nam dui mi, tincidunt quis, accumsan
                      porttitor, facilisis luctus, metus.
                    </p>
                    <div className="widget-about-info">
                      <div className="row">
                        <div className="col-sm-6 col-md-4">
                          <span className="widget-about-title">
                            Got Question? Call us 24/7
                          </span>
                          <a href="tel:123456789">+0123 456 789</a>
                        </div>
                        {/* End .col-sm-6 */}
                        <div className="col-sm-6 col-md-8">
                          <span className="widget-about-title">
                            Payment Method
                          </span>
                          <figure className="footer-payments">
                            <img
                              src="assets/images/payments.png"
                              alt="Payment methods"
                              width={272}
                              height={20}
                            />
                          </figure>
                          {/* End .footer-payments */}
                        </div>
                        {/* End .col-sm-6 */}
                      </div>
                      {/* End .row */}
                    </div>
                    {/* End .widget-about-info */}
                  </div>
                  {/* End .widget about-widget */}
                </div>
                {/* End .col-sm-12 col-lg-3 */}
                <div className="col-sm-4 col-lg-2">
                  <div className="widget">
                    <h4 className="widget-title">Information</h4>
                    {/* End .widget-title */}
                    <ul className="widget-list">
                      <li>
                        <a href="about.html">About Molla</a>
                      </li>
                      <li>
                        <a href="#">How to shop on Molla</a>
                      </li>
                      <li>
                        <a href="faq.html">FAQ</a>
                      </li>
                      <li>
                        <a href="contact.html">Contact us</a>
                      </li>
                      <li>
                        <a href="login.html">Log in</a>
                      </li>
                    </ul>
                    {/* End .widget-list */}
                  </div>
                  {/* End .widget */}
                </div>
                {/* End .col-sm-4 col-lg-3 */}
                <div className="col-sm-4 col-lg-2">
                  <div className="widget">
                    <h4 className="widget-title">Customer Service</h4>
                    {/* End .widget-title */}
                    <ul className="widget-list">
                      <li>
                        <a href="#">Payment Methods</a>
                      </li>
                      <li>
                        <a href="#">Money-back guarantee!</a>
                      </li>
                      <li>
                        <a href="#">Returns</a>
                      </li>
                      <li>
                        <a href="#">Shipping</a>
                      </li>
                      <li>
                        <a href="#">Terms and conditions</a>
                      </li>
                      <li>
                        <a href="#">Privacy Policy</a>
                      </li>
                    </ul>
                    {/* End .widget-list */}
                  </div>
                  {/* End .widget */}
                </div>
                {/* End .col-sm-4 col-lg-3 */}
                <div className="col-sm-4 col-lg-2">
                  <div className="widget">
                    <h4 className="widget-title">My Account</h4>
                    {/* End .widget-title */}
                    <ul className="widget-list">
                      <li>
                        <a href="#">Sign In</a>
                      </li>
                      <li>
                        <a href="cart.html">View Cart</a>
                      </li>
                      <li>
                        <a href="#">My Wishlist</a>
                      </li>
                      <li>
                        <a href="#">Track My Order</a>
                      </li>
                      <li>
                        <a href="#">Help</a>
                      </li>
                    </ul>
                    {/* End .widget-list */}
                  </div>
                  {/* End .widget */}
                </div>
                {/* End .col-sm-64 col-lg-3 */}
              </div>
              {/* End .row */}
            </div>
            {/* End .container */}
          </div>
          {/* End .footer-middle */}
          <div className="footer-bottom">
            <div className="container">
              <p className="footer-copyright">
                Copyright © 2019 Molla Store. All Rights Reserved.
              </p>
              {/* End .footer-copyright */}
              <ul className="footer-menu">
                <li>
                  <a href="#">Terms Of Use</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
              {/* End .footer-menu */}
              <div className="social-icons social-icons-color">
                <span className="social-label">Social Media</span>
                <a
                  href="#"
                  className="social-icon social-facebook"
                  title="Facebook"
                  target="_blank"
                >
                  <i className="icon-facebook-f" />
                </a>
                <a
                  href="#"
                  className="social-icon social-twitter"
                  title="Twitter"
                  target="_blank"
                >
                  <i className="icon-twitter" />
                </a>
                <a
                  href="#"
                  className="social-icon social-instagram"
                  title="Instagram"
                  target="_blank"
                >
                  <i className="icon-instagram" />
                </a>
                <a
                  href="#"
                  className="social-icon social-youtube"
                  title="Youtube"
                  target="_blank"
                >
                  <i className="icon-youtube" />
                </a>
                <a
                  href="#"
                  className="social-icon social-pinterest"
                  title="Pinterest"
                  target="_blank"
                >
                  <i className="icon-pinterest" />
                </a>
              </div>
              {/* End .soial-icons */}
            </div>
            {/* End .container */}
          </div>
          {/* End .footer-bottom */}
        </footer>
        {/* End .footer */}
      </div>

      {/* End .page-wrapper */}
      <button id="scroll-top" title="Back to Top">
        <i className="icon-arrow-up" />
      </button>
      {/* Mobile Menu */}
      <div className="mobile-menu-overlay" />
      {/* End .mobil-menu-overlay */}
      <div className="mobile-menu-container mobile-menu-light">
        <div className="mobile-menu-wrapper">
          <span className="mobile-menu-close">
            <i className="icon-close" />
          </span>
          <form action="#" method="get" className="mobile-search">
            <label htmlFor="mobile-search" className="sr-only">
              Search
            </label>
            <input
              type="search"
              className="form-control"
              name="mobile-search"
              id="mobile-search"
              placeholder="Search in..."
              required=""
            />
            <button className="btn btn-primary" type="submit">
              <i className="icon-search" />
            </button>
          </form>
          <nav className="mobile-nav">
            <ul className="mobile-menu">
              <li className="active">
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="category.html">Shop</a>
                <ul>
                  <li>
                    <a href="category-list.html">Shop List</a>
                  </li>
                  <li>
                    <a href="category-2cols.html">Shop Grid 2 Columns</a>
                  </li>
                  <li>
                    <a href="category.html">Shop Grid 3 Columns</a>
                  </li>
                  <li>
                    <a href="category-4cols.html">Shop Grid 4 Columns</a>
                  </li>
                  <li>
                    <a href="category-boxed.html">
                      <span>
                        Shop Boxed No Sidebar
                        <span className="tip tip-hot">Hot</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="category-fullwidth.html">
                      Shop Fullwidth No Sidebar
                    </a>
                  </li>
                  <li>
                    <a href="product-category-boxed.html">
                      Product Category Boxed
                    </a>
                  </li>
                  <li>
                    <a href="product-category-fullwidth.html">
                      <span>
                        Product Category Fullwidth
                        <span className="tip tip-new">New</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="cart.html">Cart</a>
                  </li>
                  <li>
                    <a href="checkout.html">Checkout</a>
                  </li>
                  <li>
                    <a href="wishlist.html">Wishlist</a>
                  </li>
                  <li>
                    <a href="#">Lookbook</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="product.html" className="sf-with-ul">
                  Product
                </a>
                <ul>
                  <li>
                    <a href="product.html">Default</a>
                  </li>
                  <li>
                    <a href="product-centered.html">Centered</a>
                  </li>
                  <li>
                    <a href="product-extended.html">
                      <span>
                        Extended Info<span className="tip tip-new">New</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="product-gallery.html">Gallery</a>
                  </li>
                  <li>
                    <a href="product-sticky.html">Sticky Info</a>
                  </li>
                  <li>
                    <a href="product-sidebar.html">Boxed With Sidebar</a>
                  </li>
                  <li>
                    <a href="product-fullwidth.html">Full Width</a>
                  </li>
                  <li>
                    <a href="product-masonry.html">Masonry Sticky Info</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Pages</a>
                <ul>
                  <li>
                    <a href="about.html">About</a>
                    <ul>
                      <li>
                        <a href="about.html">About 01</a>
                      </li>
                      <li>
                        <a href="about-2.html">About 02</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                    <ul>
                      <li>
                        <a href="contact.html">Contact 01</a>
                      </li>
                      <li>
                        <a href="contact-2.html">Contact 02</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="login.html">Login</a>
                  </li>
                  <li>
                    <a href="faq.html">FAQs</a>
                  </li>
                  <li>
                    <a href="404.html">Error 404</a>
                  </li>
                  <li>
                    <a href="coming-soon.html">Coming Soon</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="blog.html">Blog</a>
                <ul>
                  <li>
                    <a href="blog.html">Classic</a>
                  </li>
                  <li>
                    <a href="blog-listing.html">Listing</a>
                  </li>
                  <li>
                    <a href="#">Grid</a>
                    <ul>
                      <li>
                        <a href="blog-grid-2cols.html">Grid 2 columns</a>
                      </li>
                      <li>
                        <a href="blog-grid-3cols.html">Grid 3 columns</a>
                      </li>
                      <li>
                        <a href="blog-grid-4cols.html">Grid 4 columns</a>
                      </li>
                      <li>
                        <a href="blog-grid-sidebar.html">Grid sidebar</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Masonry</a>
                    <ul>
                      <li>
                        <a href="blog-masonry-2cols.html">Masonry 2 columns</a>
                      </li>
                      <li>
                        <a href="blog-masonry-3cols.html">Masonry 3 columns</a>
                      </li>
                      <li>
                        <a href="blog-masonry-4cols.html">Masonry 4 columns</a>
                      </li>
                      <li>
                        <a href="blog-masonry-sidebar.html">Masonry sidebar</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Mask</a>
                    <ul>
                      <li>
                        <a href="blog-mask-grid.html">Blog mask grid</a>
                      </li>
                      <li>
                        <a href="blog-mask-masonry.html">Blog mask masonry</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Single Post</a>
                    <ul>
                      <li>
                        <a href="single.html">Default with sidebar</a>
                      </li>
                      <li>
                        <a href="single-fullwidth.html">Fullwidth no sidebar</a>
                      </li>
                      <li>
                        <a href="single-fullwidth-sidebar.html">
                          Fullwidth with sidebar
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="elements-list.html">Elements</a>
                <ul>
                  <li>
                    <a href="elements-products.html">Products</a>
                  </li>
                  <li>
                    <a href="elements-typography.html">Typography</a>
                  </li>
                  <li>
                    <a href="elements-titles.html">Titles</a>
                  </li>
                  <li>
                    <a href="elements-banners.html">Banners</a>
                  </li>
                  <li>
                    <a href="elements-product-category.html">
                      Product Category
                    </a>
                  </li>
                  <li>
                    <a href="elements-video-banners.html">Video Banners</a>
                  </li>
                  <li>
                    <a href="elements-buttons.html">Buttons</a>
                  </li>
                  <li>
                    <a href="elements-accordions.html">Accordions</a>
                  </li>
                  <li>
                    <a href="elements-tabs.html">Tabs</a>
                  </li>
                  <li>
                    <a href="elements-testimonials.html">Testimonials</a>
                  </li>
                  <li>
                    <a href="elements-blog-posts.html">Blog Posts</a>
                  </li>
                  <li>
                    <a href="elements-portfolio.html">Portfolio</a>
                  </li>
                  <li>
                    <a href="elements-cta.html">Call to Action</a>
                  </li>
                  <li>
                    <a href="elements-icon-boxes.html">Icon Boxes</a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          {/* End .mobile-nav */}
          <div className="social-icons">
            <a
              href="#"
              className="social-icon"
              target="_blank"
              title="Facebook"
            >
              <i className="icon-facebook-f" />
            </a>
            <a href="#" className="social-icon" target="_blank" title="Twitter">
              <i className="icon-twitter" />
            </a>
            <a
              href="#"
              className="social-icon"
              target="_blank"
              title="Instagram"
            >
              <i className="icon-instagram" />
            </a>
            <a href="#" className="social-icon" target="_blank" title="Youtube">
              <i className="icon-youtube" />
            </a>
          </div>
          {/* End .social-icons */}
        </div>
        {/* End .mobile-menu-wrapper */}
      </div>
      {/* End .mobile-menu-container */}
    </>
  );
};

export default App;
