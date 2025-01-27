import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  console.log(book);

  return (
    <div className=" mt-16">
      <div className="group border border-gray-300 relative block overflow-hidden">
        <button className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
          <span className="sr-only">Wishlist</span>
          <CiHeart />
        </button>

        <img
          src={book.image}
          alt=""
          className="w-full object-cover transition duration-500 group-hover:scale-105 sm:h-50"
        />

        <div className="relative border border-gray-100 bg-white p-4">
          <h3 className=" text-teal-600 mb-1"> {book.author} </h3>
          <p className="text-gray-700">
            ${book.price}
            <span className="text-gray-400 ml-3 text-red-500 line-through">
              ${book.discount}
            </span>
          </p>

          <Link to={`ditales/${book._id}`}>
            <h3 className="mt-1.5 hover:text-teal-600 cursor-pointer hover:underline text-lg font-medium text-gray-900">
              {book.title}
            </h3>
          </Link>
          <div className=" flex items-center ">
            {book.rating}{" "}
            <FaStar className="text-orange-400 ml-1 text-xs md:text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
