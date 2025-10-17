import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router";
import { axiosInstance } from "../utils/axiosInstance";

const Iphone = () => {
  const [iphoneProduct, setIphoneProduct] = useState([]);

  useEffect(() => {
    const getIphone = async () => {
      try {
        const response = await axiosInstance.get("/iphones");
        setIphoneProduct(response.data?.products);
      } catch (error) {
        console.error("Error fetching iPhones:", error);
      }
    };
    getIphone();
  }, []);
  // console.log(iphoneProduct)
  let flip = true;
  return (
    <div>
      <section className="internal-page-wrapper">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12 mt-5 pt-5">
              <h1 className="font-weight-bold">Iphones</h1>
              <div className="brief-description mb-5">
                The best for the brightest.
              </div>
            </div>
          </div>
        </div>
      </section>
      {iphoneProduct?.map((singleProduct) => {
        // const {product_id, Product_brief_description, Starting_price, Price_range} = singleProduct
        let id = singleProduct.product_id;
        let Brief = singleProduct.Product_brief_description;
        let StartPrice = singleProduct.Starting_price;
        let PriceRange = singleProduct.Price_range;
        let productPage = "/iphone/" + id;
        //   console.log(singleProduct.Product_img)
        let order1 = 1;
        let order2 = 2;
        if (flip) {
          order1 = 2;
          order2 = 1;

          flip = !flip;
        } else {
          flip = !flip;
        }

        return (
          <div
            key={id}
            className="row justify-content-center text-center product-holder h-100"
          >
            <div className={`col-sm-12 col-md-6 my-auto order-${order1}`}>
              <div className="product-title">{singleProduct.product_name}</div>
              <div className="product-brief">{Brief}</div>
              <div className="starting-price">
                {`Starting at ${StartPrice}`}
              </div>
              <div className="monthly-price">{PriceRange}</div>
              <div className="links-wrapper">
                <ul>
                  <li>
                    {/* <Link to="#">Learn more</Link> */}
                    <Link to={productPage}>Learn more</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className={`col-sm-12 col-md-6 order-${order2}`}>
              <div className="product-image">
                <img src={singleProduct.Product_img} alt="product" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Iphone;
