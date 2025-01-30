import { useEffect, useState } from "react";
import { RiDeleteBin4Line } from "react-icons/ri";
import useAxiosPublic from "../../axiosPublic/useAxiosPublic";


interface User {
  _id: string;
  name: string;
  role: string;
  userStatus: string;
  id: string;  // Assuming `id` is another unique identifier
}


const AllUsers = () => {
  // const [users, setUsers] = useState([]);
  const [users, setUsers] = useState<User[]>([]); // Stat
//   console.log(users);
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

  return (
    <div className=" px-4 mt-5">
      <h1 className=" mb-10 text-2xl text-center">All User</h1>
      <div className=" flex justify-center items-center">
        <div className=" overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Name</th>
                <th> User id </th>
                <th>Role</th>
                <th>Deleted</th>
                <th>userStatus</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((userdata) => (
                <tr key={userdata.id}>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className=" border rounded-full bg-gray-200 h-12 w-12">
                        <p className="flex items-center w-full justify-center h-full text-center ">
                          {" "}
                          {userdata?.name?.slice(0, 2)}{" "}
                        </p>
                      </div>
                      <div>
                        <div className="font-bold"> {userdata?.name} </div>
                      </div>
                    </div>
                  </td>
                  <td>{userdata._id}</td>
                  <td>{userdata?.role}</td>
                  <th className="text-xl hover:text-red-600  cursor-pointer">
                    <RiDeleteBin4Line />
                  </th>
                  <th className="text-teal-600"> {userdata?.userStatus} </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
