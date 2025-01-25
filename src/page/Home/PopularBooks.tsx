import { useEffect, useState } from "react";
import { FaDollarSign, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const PopularBooks = () => {
  interface Book {
    _id: string;
    photo: string;
    name: string;
    category: string;
    rating: number;
  }

  const [popularBooks, setPopularBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetch("../../../public/data.json")
      .then((response) => response.json())
      .then((data) => {
        setPopularBooks(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <div className="my-4 md:my-8 lg:mt-28 lg:mb-20 container mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl lg:text-4xl font-semibold text-black">
            Popular Books
          </h2>
          <div className="border-t-2 border-gray-300 w-[25%] md:w-[60%] lg:w-[65%] mt-4"></div>
          <p>
            <button className="btn rounded-3xl bg-[#F65D4E] text-white px-8">
              View All
            </button>
          </p>
        </div>

        {/* Popular Book Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 p-2">
          <div className="col-span-1 lg:col-span-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {popularBooks?.map((book) => (
              <div key={book._id} className="col-span-1">
                <div className="transition h-fit duration-500 w-full font-sans overflow-hidden mx-auto mt-4 px-4 pt-4">
                  {/* Full Height Image */}
                  <div className="relative group">
                    <img
                      src={book.photo}
                      width={500}
                      height={500}
                      className="w-56 h-80 object-cover rounded-xl mb-3 transition-transform hover:scale-105"
                    />
                  </div>

                  {/* Book Details */}
                  <div className="pt-3">
                    <p className="text-sm text-gray-600 mb-1 font-medium">
                      {book.category}
                    </p>
                    <Link to={`/books/${book}`}>
                      <h2 className="text-lg md:text-xl text-gray-800 font-bold line-clamp-2 hover:text-[#F65D4E]">
                        <p>{book.name}</p>
                      </h2>
                    </Link>
                    <div className="flex items-center mt-2">
                      <p className="text-gray-800 font-semibold flex items-center">
                        Ratings:{book.rating}
                        <FaStar className="text-orange-400 ml-1 text-xs md:text-xl" />
                      </p>
                    </div>

                    <h3 className="my-2 -ml-1 flex items-center">
                      <FaDollarSign className="text-xl text-[#F65D4E] font-semibold" />
                      <span className="text-xl md:text-2xl text-[#F65D4E] font-semibold -ml-1 -mt-1">
                        120
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Popular Books Offer Card */}
          <div className="col-span-1 relative">
            <img
              width={500}
              height={500}
              className="h-72 md:h-96 lg:h-full object-cover w-full rounded-xl hover:scale-105 transition-transform"
              src="https://i.ibb.co/7Cqj9df/h1-banner1.jpg"
              alt="Offer Image"
            />
            <div className="absolute bottom-[2%] left-1/3 md:left-[40%] lg:bottom-24 lg:left-16 text-white md:space-y-3">
              <h2 className="text-2xl md:text-3xl font-semibold">Best Offer</h2>
              <h1 className="text-3xl md:text-5xl font-bold">Save $15</h1>
              <p>on selected items</p>
              <button className="btn rounded-3xl bg-white md:text-lg text-black px-8">
                See more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularBooks;
