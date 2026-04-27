"use client";
import Slider from "react-slick";
import ProductHeading from "../Products/ProductHeading";
import ShopProduct from "../Products/ShopProduct";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    { breakpoint: 1025, settings: { slidesToShow: 3, slidesToScroll: 1, infinite: true } },
    { breakpoint: 769, settings: { slidesToShow: 2, slidesToScroll: 2, infinite: true } },
    { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true } },
  ],
};

const NewArrivals = ({ items = [] }) => (
  <div className="w-full pb-16">
    <ProductHeading heading="New Arrivals" />
    <Slider {...settings}>
      {items.map((item) => (
        <div key={item._id} className="px-2">
          <ShopProduct {...item} />
        </div>
      ))}
    </Slider>
  </div>
);

export default NewArrivals;
