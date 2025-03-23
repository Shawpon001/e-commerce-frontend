/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import BookCard from "./BookCard";
import useAxiosPublic from "../../axiosPublic/useAxiosPublic";
import Loading from "../../components/sheard/Loading";
import { IBook } from "../Home/PopularBooks";

const Book = () => {
  const [popularBooks, setPopularBooks] = useState<IBook[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [priceFilter, setPriceFilter] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(15); // Number of items per page
  const axiosPublic = useAxiosPublic();

  // Fetch books on filters
  const fetchBooks = async () => {
    try {
      const response = await axiosPublic.get("/products/get-book", {
        params: {
          searchTerm,
          category: selectedCategory,
          priceFilter,
          page: currentPage, 
          limit: itemsPerPage, 
        },
      });

      setPopularBooks(response.data.data || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, [searchTerm, selectedCategory, priceFilter, currentPage]);

  const handleSearch = () => {
    setCurrentPage(1); // Reset to the first page when searching
    fetchBooks();
  };

  // Calculate total pages
  const totalPages = Math.ceil(popularBooks.length / itemsPerPage);

  // Get current books for the current page
  const indexOfLastBook = currentPage * itemsPerPage;
  const indexOfFirstBook = indexOfLastBook - itemsPerPage;
  const currentBooks = popularBooks.slice(indexOfFirstBook, indexOfLastBook);

  if (!popularBooks) {
    return <Loading />;
  }

  return (
    <div className="">
      {/* Banner section */}
      <div>
        <img
          src="https://i.ibb.co.com/2hzVSbx/Imageby-Stanislav-Kondratievvia-Unsplash.webp"
          alt="imge"
          className="h-[250px] object-cover w-full"
        />
      </div>

      {/* Filtering section */}
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
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="select select-bordered w-full max-w-xs"
          >
            <option value="" disabled>
              Select Category
            </option>
            <option value="Fiction">Popular Book</option>
            <option value="Religious">Religious Book</option>
            <option value="Children">Child Book</option>
          </select>

          {/* Price filter section */}
          <div className=" w-full justify-end ">
            <select
              className="select select-bordered w-full max-w-xs"
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
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

        {/* Book grid */}
        <div className="grid mt-16 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5">
          {currentBooks.map((book) => (
            <BookCard key={book._id} book={book} />
          ))}
        </div>

        {/* Pagination controls */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 mx-1 bg-teal-600 text-white rounded disabled:bg-gray-300"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-4 py-2 mx-1 ${
                currentPage === index + 1
                  ? "bg-teal-600 text-white"
                  : "bg-gray-200"
              } rounded`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-4 py-2 mx-1 bg-teal-600 text-white rounded disabled:bg-gray-300"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Book;