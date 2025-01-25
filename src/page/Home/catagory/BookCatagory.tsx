import { useEffect, useState } from "react";
import Slider from "react-slick";
const BookCatagory = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 8,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [bookscatagory, setBookscatagory] = useState([]);
  console.log(bookscatagory);

  useEffect(() => {
    fetch("../../../../public/catagory.json")
      .then((response) => response.json())
      .then((data) => {
        setBookscatagory(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="my-4 md:my-8  lg:mt-10 container mx-auto">
      <div className="slider-container">
        <Slider {...settings}>
          {bookscatagory.map((catagory) => (
            <div className="">
              <div
                key={catagory.categoryName}
                className="flex flex-col justify-center items-center"
              >
                <img src={catagory.categoryImage} className="w-24" alt="" />
                <h3 className="items-center">{catagory.categoryName}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BookCatagory;
