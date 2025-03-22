import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const RelizonBook = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024, // below 1024px (lg)
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // below 768px (md)
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // below 640px (sm)
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const fakeData = [
    {
      id: 1,
      name: "John Doe",
      age: 30,
      engine: "V8",
      department: "Engineering",
      branch: "Mechanical",
      image:
        "https://i.ibb.co.com/FRGWf97/book-39032025-02-01-1738385616-1.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 25,
      engine: "V6",
      department: "Design",
      branch: "Electrical",
      image:
        "https://i.ibb.co.com/FRGWf97/book-39032025-02-01-1738385616-1.jpg",
    },
    {
      id: 3,
      name: "Alice Johnson",
      age: 28,
      engine: "V12",
      department: "Production",
      branch: "Automotive",
      image:
        "https://i.ibb.co.com/FRGWf97/book-39032025-02-01-1738385616-1.jpg",
    },
    {
      id: 4,
      name: "Bob Brown",
      age: 35,
      engine: "V4",
      department: "Quality",
      branch: "Aerospace",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 5,
      name: "Charlie Green",
      age: 29,
      engine: "V6",
      department: "Logistics",
      branch: "Marine",
      image: "https://via.placeholder.com/300",
    },
  ];

  return (
    <div className="bg-gray-200 mb-20 px-2 py-8">
      <div className="flex text-2xl px-4 mb-10 justify-between items-center">
        <h2 className="text-xl lg:text-4xl font-semibold text-black">
          Religious Book 📖
        </h2>
        <Link to="/books">
          <button className="btn rounded-3xl bg-[#F65D4E] text-white px-8">
            View All
          </button>
        </Link>{" "}
      </div>

      <div className="slider-container px-4">
        <Slider {...settings}>
          {fakeData.map((data) => (
            <div key={data.id} className="p-2">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg h-full flex flex-col">
                {/* Image Section */}
                <img
                  className="w-full h-48 object-contain p-4"
                  src={data.image}
                  alt={data.name}
                />

                {/* Details Section */}
                <div className="px-4 py-2 flex-grow">
                  <div className="font-bold text-lg mb-1">{data.name}</div>
                  <p className="text-gray-600 text-sm">
                    <strong>Age:</strong> {data.age}
                  </p>
                  <p className="text-gray-600 text-sm">
                    <strong>Engine:</strong> {data.engine}
                  </p>
                  <p className="text-gray-600 text-sm">
                    <strong>Department:</strong> {data.department}
                  </p>
                  <p className="text-gray-600 text-sm">
                    <strong>Branch:</strong> {data.branch}
                  </p>
                </div>

                {/* Button Section */}
                <div className="px-4 pb-4">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 w-full rounded">
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default RelizonBook;
