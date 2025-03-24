import { useEffect, useState } from "react";
import { RiDeleteBin4Line } from "react-icons/ri";
import useAxiosPublic from "../../axiosPublic/useAxiosPublic";

interface User {
  _id: string;
  name: string;
  role: string;
  userStatus: string;
  id: string;
}

const AllUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosPublic.get("/user/user-get");
        setUsers(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [axiosPublic]);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUsers = users.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(users.length / itemsPerPage);

  return (
    <div className="px-4 w-full md:w-[1000px] mt-5">
      <h1 className="mb-10 text-4xl text-center">All Users</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <input type="checkbox" className="checkbox" />
              </th>
              <th>Name</th>
              <th>User ID</th>
              <th>Role</th>
              <th>Delete</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((userdata) => (
              <tr key={userdata.id}>
                <td>
                  <input type="checkbox" className="checkbox" />
                </td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="border rounded-full bg-gray-200 h-12 w-12">
                      <p className="flex items-center w-full justify-center h-full text-center uppercase font-semibold">
                        {userdata?.name?.slice(0, 2)}
                      </p>
                    </div>
                    <div>
                      <div className="font-bold">{userdata?.name}</div>
                    </div>
                  </div>
                </td>
                <td>{userdata._id}</td>
                <td>{userdata?.role}</td>
                <td className="text-xl hover:text-red-600 cursor-pointer">
                  <RiDeleteBin4Line />
                </td>
                <td className="text-teal-600">{userdata?.userStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination  */}
        <div className="flex justify-center items-center mt-6 gap-2">
          <button
            className="px-3 py-1 border rounded hover:bg-gray-200"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              className={`px-3 py-1 border rounded ${
                currentPage === i + 1 ? "bg-blue-500 text-white" : "hover:bg-gray-200"
              }`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button
            className="px-3 py-1 border rounded hover:bg-gray-200"
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
