import { useEffect, useState } from "react";
import useAxiosPublic from "../../axiosPublic/useAxiosPublic";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin4Line } from "react-icons/ri";

const ManageBook = () => {
  const [book, setBook] = useState([]);
  console.log(book);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosPublic.get("/products/get-book");

        setBook(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [axiosPublic]);

  return (
    <div>
      <h2 className="text-center  mb-10 mt-10 text-2xl"> Manage All Books</h2>
      <div className="overflow-x-auto px-10">
        <p className="mb-5 text-teal-600 text-xl">
          Total Books : {book?.length}{" "}
        </p>
        <table className="min-w-full  divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Name
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Author
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Category
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Price
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                update
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Delet
              </th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {book?.map((item) => (
              <tr key={item.id}>
                <td className="whitespace-nowrap px-2 py-2 font-medium text-gray-900">
                  {item.title}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {item.author}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {item.category}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {item.price}
                </td>
                <td className="whitespace-nowrap hover:text-teal-600 text-xl px-5 py-2">
                  <FaEdit />
                </td>
                <td className="whitespace-nowrap hover:text-red-600 text-xl px-5 py-2">
                  <RiDeleteBin4Line />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageBook;
