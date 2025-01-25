import{ useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Feedback() {
 let sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024, // Large screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768, // Medium screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640, // Small screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  const [student, setStudent] = useState([]);
  console.log(student);
  

  useEffect(() => {
    fetch("../../../public/feedback.json")
      .then((response) => response.json())
      .then((data) => {
        setStudent(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);


  return (
    <div className="slider-container mb-10 mt-3 ">
      <h2 className="text-center mt-8 mb-5 font-serif text-3xl ">
        Our Clint Feedback
      </h2>
      <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
        {student.map((data, index) => (
          <section key={index} className="w-full flex gap-6">
            <div className="w-full">
              <div className="flex justify-start items-start gap-5  h-full px-4 rounded-lg p-8  border-b-green-500">
                <div className="flex items-center  mb-4">
                  <div className="w-16 h-16 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                    <img
                      src="https://i.ibb.co/tmRS5Lq/premium-photo-1682089789852-e3023ff6df24.jpg"
                      className="w-full h-full object-cover rounded-full"
                      alt={data.name}
                    />
                  </div>
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                    {data.name}
                  </h2>
                  <p className="leading-relaxed text-base">{data.feedback}</p>
                  <a className="mt-3 text-indigo-500 inline-flex items-center">
                    Session: {data.session}
                  </a>
                </div>
              </div>
            </div>
          </section>
        ))}
      </Slider>
    </div>
  );
}

export default Feedback;
