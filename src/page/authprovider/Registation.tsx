"use client";
import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../axiosPublic/useAxiosPublic";
import Swal from "sweetalert2";

const Registation = () => {
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const name =
      (form.elements.namedItem("name") as HTMLInputElement)?.value || "";
    const email =
      (form.elements.namedItem("email") as HTMLInputElement)?.value || "";
    const password =
      (form.elements.namedItem("password") as HTMLInputElement)?.value || "";

    const data = { name, email, password };
    console.log(data);

    try {
      const response = await axiosPublic.post("/auth/register", data);
      console.log(response, "response");

      if (response.data) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Registration Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/login");
      } else {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Registration Failed",
          showConfirmButton: true,
        });
      }
    } catch (err) {
      console.error("Registration error:", err);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Registration Failed",
        text: "An error occurred during registration.",
        showConfirmButton: true,
      });
    }
  };

  return (
    <div className=" mt-8 lg:px-14 px-5">
      <div className=" md:flex items-center  justify-center">
        <div className=" w-full">
          {" "}
          <img src="https://i.ibb.co.com/4RL2PxQ/17133825331.jpg" alt="" />
        </div>
        <div className="dark:bg-white dark:text-black bg-base-200 px-4 py-4 lg:max-w-3xl">
          <form onSubmit={handleRegister} className="mt-8     gap-6">
            <div className=" mb-2 ">
              <label
                htmlFor="text"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>

              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1  py-2 px-5 w-full  rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              />
            </div>
            <div className=" mb-2 ">
              <label
                htmlFor="Email"
                className="block text-sm font-medium text-gray-700"
              >
                Email{" "}
              </label>

              <input
                type="email"
                id="Email"
                name="email"
                required
                className="mt-1  py-2 px-5 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="Password"
                className="block   text-sm font-medium text-gray-700"
              >
                Password
              </label>

              <input
                type="password"
                id="Password"
                name="password"
                required
                className="mt-1  px-5  py-2 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              />
            </div>

            <div className="mb-7 mt-3">
              <label htmlFor="MarketingAccept" className="flex gap-4">
                <input
                  type="checkbox"
                  id="MarketingAccept"
                  name="marketing_accept"
                  className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
                />

                <span className="text-sm  text-gray-700">
                  I want to receive emails about events, product updates and
                  company announcements.
                </span>
              </label>
            </div>
            <div className=" mb-7 sm:flex sm:items-center sm:gap-4">
              <button className="inline-block shrink-0 rounded-md border bg-teal-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none ">
                Create Account
              </button>

              <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                Already have an account?
                <Link to="/login" className="text-gray-700 underline">
                  Log in
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registation;
