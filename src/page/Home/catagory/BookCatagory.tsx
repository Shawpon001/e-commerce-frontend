import { useEffect, useState } from "react";
import Slider from "react-slick";

interface FeedbackData {
  categoryName: string;
  categoryImage: string;
}

const BookCatagory = () => {
  const settings = {
    dots: true,
    infinite: true, // auto-slide হলে usually infinite true দিতে হয়
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 2,
    autoplay: true, // Auto slide enabled
    autoplaySpeed: 3000, // 3 seconds
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          initialSlide: 2,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
    ],
  };

  const [bookscatagory, setBookscatagory] = useState<FeedbackData[]>([]);

  useEffect(() => {
    fetch("/catagory.json")
      .then((response) => response.json())
      .then((data) => {
        setBookscatagory(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="my-4 md:my-8 lg:mt-10 container mx-auto">
      <div className="slider-container">
        <Slider {...settings}>
          {bookscatagory.map((catagory) => (
            <div key={catagory.categoryName}>
              <div className="flex flex-col justify-center items-center">
                <img src={catagory.categoryImage} className="w-14" alt="" />
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
