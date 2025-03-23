/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import BookCard from "./BookCard";
import useAxiosPublic from "../../axiosPublic/useAxiosPublic";
import Loading from "../../components/sheard/Loading";
import { IBook } from "../Home/PopularBooks";


const Book = () => {
  const [popularBooks, setPopularBooks] = useState<IBook[]>([]);
  // console.log(popularBooks.length);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [priceFilter, setPriceFilter] = useState<string>("");
  const axiosPublic = useAxiosPublic();
  // Fetch books on filters
  const fetchBooks = async () => {
    try {
      const response = await axiosPublic.get("/products/get-book", {
        params: {
          searchTerm,
          category: selectedCategory,
          priceFilter,
        },
      });

      setPopularBooks(response.data.data || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, [searchTerm, selectedCategory, priceFilter]);

  const handleSearch = () => {
    fetchBooks();
  };

  if (!popularBooks) {
    return <Loading />;
  }

  return (
    <div className="">
      {/*banner section */}
      <div>
        <img
          src="https://i.ibb.co.com/2hzVSbx/Imageby-Stanislav-Kondratievvia-Unsplash.webp"
          alt="imge"
          className="h-[250px] object-cover w-full"
        />
      </div>
      {/* filtaring section */}
      <h3 className=" text-center textarea-xl mt-7 font-medium">
        The Leo Baeck Institute is a non-profit organization. Any income from
        the store is supporting the <br /> institute's activities.
      </h3>
      <div className=" mt-7 md:px-12 px-2 ">
        <div className=" flex w-full gap-10 justify-between">
          <div className="mb-4  w-full">
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              id="text"
              placeholder="search name author name"
              name="text"
              className="mt-1 w-full  px-5  py-2  rounded-md bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>
          <button onClick={handleSearch} className="btn bg-teal-600 text-white">
            Search
          </button>
          <select
            defaultValue={"d"}
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="select select-bordered w-full max-w-xs"
          >
            <option disabled selected>
              Select Category
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>

          {/* secound section */}
          <div className=" w-full justify-end ">
            <select
              className="select select-bordered w-full max-w-xs"
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)} // Set priceFilter
            >
              <option disabled selected>
                Sort by Price
              </option>
              <option defaultValue="asc" value="asc">
                Price: Low to High
              </option>
              <option value="desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
          {popularBooks.map((book) => (
            <BookCard key={book._id} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Book;
