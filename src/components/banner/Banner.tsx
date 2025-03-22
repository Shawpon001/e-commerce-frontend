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
    <div className="w-full">
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <img
              src="https://i.ibb.co.com/p246TGp/adv-23042024-12-24-1735022744.jpg"
              alt="Banner 2"
              className="w-full object-cover h-[50vh] sm:h-[60vh] md:h-[65vh] lg:h-[30vh] xl:h-[50vh]"
            />
          </div>
          <div>
            <img
              src="https://i.ibb.co.com/X3rxMMW/adv-54712024-12-24-1735022931.jpg"
              alt="Banner 4"
              className="w-full object-cover h-[50vh] sm:h-[60vh] md:h-[65vh] lg:h-[70vh] xl:h-[50vh]"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
