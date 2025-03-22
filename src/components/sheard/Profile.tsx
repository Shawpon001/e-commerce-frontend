import { FaEdit } from "react-icons/fa";
import ProfileUpdate from "./profileUpdate";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../axiosPublic/useAxiosPublic";
import Swal from "sweetalert2";

const Profile = () => {
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const logoutHandler = async () => {
    try {
      await axiosPublic.post("/auth/logout");
      localStorage.removeItem("jwtToken");
      // setIsAuthenticated(false);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "User Logout",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <h1 className="text-xl font-bold">Profile</h1>
        <button
          className="btn bg-teal-500 border-none  md:[12rem] lg:mr-8 mr-[2rem]  ml-[6rem] "
          onClick={() => {
            const modal = document.getElementById(
              "my_modal_5"
            ) as HTMLDialogElement | null;
            if (modal) {
              modal.showModal();
            }
          }}
        >
          <span>
            <FaEdit className="text-xl" />
          </span>
          Edit
        </button>
      </nav>
      <ProfileUpdate />
      <div className="flex items-center justify-center p-6 flex-1">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl flex flex-col md:flex-row gap-6">
          {/* Profile Card */}
          <div className="bg-gray-50 p-6 rounded-lg flex flex-col items-center w-full md:w-1/3 text-center">
            <img
              className="w-32 h-32 rounded-full border-4 border-white shadow-md"
              src="https://randomuser.me/api/portraits/men/10.jpg"
              alt="Profile"
            />
            <h2 className="mt-4 text-xl font-semibold">Hanna Gover</h2>
            <p className="text-gray-500 text-sm">Accounts Manager, Amix Corp</p>
            <div className="mt-4 flex gap-6 text-gray-600">
              <div className="flex items-center gap-1">
                <span className="text-lg">👥</span> 254
              </div>
              <div className="flex items-center gap-1">
                <span className="text-lg">📧</span> 54
              </div>
            </div>
            <button
              onClick={logoutHandler}
              className=" mt-10 text-teal-500 btn btn-outline"
            >
              {" "}
              LogOut
            </button>
          </div>
          {/* Profile Details */}
          <div className="flex-1 p-6 bg-white rounded-lg">
            <h2 className="text-xl font-semibold border-b pb-2">
              Profile Details
            </h2>
            <div className="mt-4 space-y-4">
              <div>
                <p className="text-gray-500 text-sm">Full Name</p>
                <p className="font-medium">Johnathan Doe</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Email</p>
                <p className="font-medium text-blue-600">johnathan@admin.com</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Password</p>
                <p className="font-medium">********</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Phone No</p>
                <p className="font-medium">123 456 7890</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Message</p>
                <p className="font-medium"> i am hriody </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
