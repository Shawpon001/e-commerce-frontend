import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { IBook } from "./PopularBooks";
import { FaStar } from "react-icons/fa6";
import Loading from "../../components/sheard/Loading";
import useAddToCart from "../../hooks/addToCart";

const RelizonBook = ({ religiousBooks }: { religiousBooks: IBook[] }) => {
  // console.log(religiousBooks, "dataa");
  const addToCart = useAddToCart();


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

  if (!religiousBooks) {
    return <Loading />;
  }

  return (
    <div className=" mb-20 bg-[#f7f6f6] px-2 py-4">
      <div className="flex px-4 items-center justify-between mb-8">
        <h2 className="text-xl lg:text-4xl font-semibold text-black">
          Religous Book
        </h2>
        <div className="border-t-2 border-gray-300 w-[25%] md:w-[60%] lg:w-[65%] mt-4"></div>
        <div>
          <Link to="/books">
            <button className="btn rounded-3xl bg-[#F65D4E] text-white px-8">
              View All
            </button>
          </Link>
        </div>
      </div>
      <div className="slider-container px-4">
        <Slider {...settings}>
          {religiousBooks.map((data) => (
            <div key={data._id} className="p-2 h-[410px] ">
              <div className=" rounded-xl overflow-hidden shadow-lg h-full flex flex-col">
                {/* Image Section */}
                <img
                  className="w-full h-52 object-cover p-2"
                  src={data.image}
                  alt={data.title}
                />

                {/* Details Section */}
                <div className="px-4 py-2 flex-grow">
                  <p className="text-gray-600 text-sm">
                    <strong>author:</strong> {data.author}
                  </p>
                  <p className="font-bold text-xl mb-1">{data.title}</p>
                  <div className="flex justify-between mb-2 mt-2 ">
                    <p className="text-teal-500 text-sm">
                      <strong>Price:</strong> {data.price}
                    </p>
                    <p className="text-gray-600 flex items-center gap-2 text-sm">
                      <strong>reting:</strong>
                      {data.rating} <FaStar className="text-orange-400" />
                    </p>
                  </div>

                  <p className="text-gray-600 text-sm">
                    <strong>Category:</strong> {data.category}
                  </p>
                </div>

                {/* Button Section */}
                <div className="px-4 pb-4">
                  <button onClick={() => addToCart(data)} className="bg-teal-500 hover:bg-blue-700 text-white font-bold py-2 w-full rounded">
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
