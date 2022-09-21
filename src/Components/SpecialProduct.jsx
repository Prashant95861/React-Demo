import React from "react";

const SpecialProduct = () => {
  return (
    <>
      <div className="pt-6 pb-6" style={{ backgroundColor: "#fff" }}>
        <div className="container">
          <div className="banner-set">
            <div className="row">
              <div className="col-lg-6">
                <div className="banner-set-image">
                  <img
                    src="assets/images/demos/demo-5/banners/banner-4.jpg"
                    alt="banner"
                  />
                  {/* End .banner-content */}
                </div>
                {/* End .banner-set-image */}
              </div>
              {/* End .col-lg-6 */}

              <div className="col-lg-6">
                <div className="banner-set-content text-center">
                  <div className="set-content-wrapper">
                    <h4>Special</h4>
                    <h2>Refine Your Style.</h2>
                    <p>
                      Get on our exclusive email list and be the first to hear
                      about sales, coupons, new arrivals and more!
                    </p>
                    <div className="banner-set-products">
                      <div className="row">
                        <div className="products">
                          <div className="col-6">
                            <div className="product product-2 text-center">
                              <figure className="product-media">
                                <a href="product.html">
                                  <img
                                    src="assets/images/demos/demo-5/products/product-13.jpg"
                                    alt="Product image"
                                    className="product-image"
                                  />
                                </a>
                              </figure>
                              {/* End .product-media */}
                              <div className="product-body">
                                <h3 className="product-title">
                                  <a href="product.html">Rib-knit cardigan</a>
                                </h3>
                                {/* End .product-title */}
                              </div>
                              {/* End .product-body */}
                            </div>
                            {/* End .product */}
                          </div>
                          {/* End .col-sm-6 */}
                          <div className="col-6">
                            <div className="product product-2 text-center">
                              <figure className="product-media">
                                <a href="product.html">
                                  <img
                                    src="assets/images/demos/demo-5/products/product-14.jpg"
                                    alt="Product image"
                                    className="product-image"
                                  />
                                </a>
                              </figure>
                              {/* End .product-media */}
                              <div className="product-body">
                                <h3 className="product-title">
                                  <a href="product.html">
                                    Linen-blend trousers
                                  </a>
                                </h3>
                                {/* End .product-title */}
                              </div>
                              {/* End .product-body */}
                            </div>
                            {/* End .product */}
                          </div>
                          {/* End .col-sm-6 */}
                        </div>
                      </div>
                      {/* End .row */}
                    </div>
                    {/* End .banner-set-products */}
                  </div>
                  {/* End .set-content-wrapper */}
                </div>
                {/* End .banner-set-content */}
              </div>
              {/* End .col-lg-6 */}
            </div>
            {/* End .row */}
          </div>
          {/* End .banner-set */}
        </div>
        {/* End .container */}
      </div>
    </>
  );
};

export default SpecialProduct;
