import { CiHeart } from "react-icons/ci";

const BookCard = () => {
  return (
    <div className=" mt-16">
      <div className="group border border-gray-300 relative block overflow-hidden">
        <button className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
          <span className="sr-only">Wishlist</span>
          <CiHeart />
        </button>

        <img
          src="https://i.ibb.co.com/jHgvsvt/images-6.jpg"
          alt=""
          className="w-full object-cover transition duration-500 group-hover:scale-105 sm:h-50"
        />

        <div className="relative border border-gray-100 bg-white p-4">
          <h3 className=" text-teal-600 mb-1"> catagory </h3>
          <p className="text-gray-700">
            $49.99
            <span className="text-gray-400 line-through">$80</span>
          </p>

          <h3 className="mt-1.5 text-lg font-medium text-gray-900">
            Wireless Headphones
          </h3>
          <div className="rating rating-sm">
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
