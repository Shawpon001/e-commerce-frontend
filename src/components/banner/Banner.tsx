import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="w-full xl:mb-16 lg:mb-14 mb-5 ">
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <img
              src="https://i.ibb.co/frnsRPZ/vecteezy-book-store-cartoon-banner-with-young-woman-face-13867971.jpg"
              alt="Banner 1"
              className="w-full object-cover h-[50vh] sm:h-[60vh] md:h-[65vh] lg:h-[70vh] xl:h-[75vh]"
            />
          </div>
          <div>
            <img
              src="https://i.ibb.co/NnD1cbb/deef500591c4959336c2631d8ccbbe4a.jpg"
              alt="Banner 2"
              className="w-full object-cover h-[50vh] sm:h-[60vh] md:h-[65vh] lg:h-[70vh] xl:h-[75vh]"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
