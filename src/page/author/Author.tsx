import { useEffect, useState } from "react";
import useAxiosPublic from "../../axiosPublic/useAxiosPublic";
import { IBook } from "../Home/PopularBooks";
import Loading from "../../components/sheard/Loading";
import { FaPencil } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";

const Author = () => {
  const [popularBooks, setPopularBooks] = useState<IBook[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const authorsPerPage = 20;

  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosPublic.get(`/products/get-book`);
        const allBooks = response.data.data;
        setPopularBooks(allBooks || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [axiosPublic]);

  if (isLoading) {
    return <Loading />;
  }

  // Filter authors by search input (first letter match, case-insensitive)
  const filteredAuthors = popularBooks.filter((author) =>
    author.author
      ?.toLowerCase()
      .startsWith(searchTerm.trim().toLowerCase())
  );

  // Pagination section
  const totalPages = Math.ceil(filteredAuthors.length / authorsPerPage);
  const startIndex = (currentPage - 1) * authorsPerPage;
  const currentAuthors = filteredAuthors.slice(
    startIndex,
    startIndex + authorsPerPage
  );

  return (
    <div>
      {/* banner */}
      <div className="w-full">
        <div
          className="relative h-[250px] md:h-[250px] w-full bg-no-repeat bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage:
              "url('https://i.ibb.co.com/XZyKYx2D/portrait-young-woman-standing-against-white-background-1048944-25390971.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
          <p className="relative z-10 ml-[70%] text-white text-lg md:text-xl font-semibold bg-black/50 px-4 py-2 rounded">
            Home &gt;&gt; ALL Authors
          </p>
        </div>
      </div>

      <div className="px-10 py-1">
        <p className="py-16 text-lg font-medium">
          At BdBooks, authors shape captivating narratives across genres, from
          traditional to e-books. In our literary haven, they share diverse
          stories, enriching our shelves with a kaleidoscope of voices. This
          collaborative space celebrates the synergy between authors and
          publishers, fostering creativity without bounds. BdBooks is where
          authors' narratives form the heart of our dynamic literary universe."
        </p>

        <div className="mb-10">
          <hr />
          <div className="text-center items-center p-1.5 ">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1); // reset to page 1 when searching
              }}
              className="p-1 px-2 rounded-2xl"
              placeholder="Search author by first letter"
            />
          </div>
          <hr />
        </div>

        {/* Authors Grid */}
        <div className="grid grid-cols-1 py-10 md:grid-cols-4 gap-2">
          {currentAuthors.length > 0 ? (
            currentAuthors.map((author, index) => (
              <div
                data-aos="fade-up"
                data-aos-duration="3000"
                key={index}
                className="p-2 border flex flex-col items-center rounded-lg shadow-md transition-all cursor-pointer"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-md">
                  <span className="text-2xl">
                    <FaPencil />
                  </span>
                </div>
                <p className="mt-4 font-bold text-gray-800 text-xl">
                  {author.author}
                </p>
              </div>
            ))
          ) : (
            <p className="text-center col-span-4 text-red-500 font-semibold">
              No authors found.
            </p>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8 space-x-2">
            {[...Array(totalPages)].map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx + 1)}
                className={`px-4 py-2 rounded ${
                  currentPage === idx + 1
                    ? "bg-cyan-600 text-white"
                    : "bg-gray-200 text-black"
                }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Author;
