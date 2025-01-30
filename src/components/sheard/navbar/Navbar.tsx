import { CiSearch } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { IoMenuSharp } from "react-icons/io5";
import { Link, NavLink, useNavigate } from "react-router-dom";
import SubNavbar from "./SubNavbar";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../../axiosPublic/useAxiosPublic";
import Swal from "sweetalert2";
import UseCart from "../../../hooks/UseCart";
const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const [cart] = UseCart();
  
   

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        if (decodedToken.exp > currentTime) {
          setIsAuthenticated(true);
        } else {
          localStorage.removeItem("jwtToken"); // Remove expired token
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error("Invalid token:", error);
        localStorage.removeItem("jwtToken");
      }
    }
  }, []);

  const logoutHandler = async () => {
    try {
      await axiosPublic.post("/auth/logout");
      localStorage.removeItem("jwtToken");
      setIsAuthenticated(false);
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
    <header className="bg-gray-200">
      <SubNavbar />
      {/* main nav  */}
      <div className="mx-auto  max-w-screen-xl  px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a className="block text-teal-600" href="/">
              <img
                src="https://i.ibb.co.com/VmX711W/images-removebg-preview.png"
                alt=""
                className="h-[70px] w-36 object-cover "
              />
            </a>
          </div>
          <div className="hidden md:block">
            <nav aria-label="Global">
              <form>
                <div className="flex items-center relative">
                  <input
                    type="text"
                    placeholder="Search for books, authors, genres, etc."
                    className="text-sm py-4 px-4 h-6 bg-slate-100 rounded-2xl w-96 relative"
                  />
                  <button className="text-black font-bold text-sm py-2 absolute right-4 top-1/2  transform -translate-y-1/2 hover:text-blue-500 hover:cursor-pointer">
                    <CiSearch className="h-5 w-5 z-10" />
                  </button>
                </div>
              </form>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4 text-center items-center justify-center">
              <a
                className="hidden lg:flex text-gray-600 font-semibold transition hover:text-gray-800 hover:cursor-pointer hover:underline"
                href="#"
              >
                Choose a Bookstore
              </a>
              <div className="flex lg:hidden w-fit">
                <form className="">
                  <div className="flex items-center relative">
                    <input
                      type="text"
                      placeholder="Search for books etc."
                      className="text-sm py-4 px-4 h-6 bg-slate-100 rounded-2xl w-fit relative"
                    />
                    <button className="text-black font-extrabold text-sm py-2 absolute right-4 top-1/2  transform -translate-y-1/2 hover:text-blue-500 hover:cursor-pointer">
                      <CiSearch className="h-5 w-5 font-extrabold z-10" />
                    </button>
                  </div>
                </form>
              </div>
              {/* <Link
                to="/login"
                className="hidden lg:flex rounded-md bg-teal-600 px-2 md:px-5 py-2 md:py-2.5 text-sm font-medium text-white shadow"
              >
                Sign In
              </Link> */}
              {isAuthenticated ? (
                <>
                  <button className="hidden lg:flex  md:px-5 py-2 md:py-2.5 text-sm font-medium">
                    <div className="dropdown dropdown-end">
                      <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-circle avatar"
                      >
                        <div className="w-10 rounded-full">
                          <img
                            alt="Tailwind CSS Navbar component"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                          />
                        </div>
                      </div>
                      <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                      >
                        <Link to="/deshboard">
                        
                        <li>
                          <a className="justify-between">
                            Deshboard
                            <span className="badge">New</span>
                          </a>
                        </li>
                        </Link>
                        <li onClick={logoutHandler}>
                          <a>Logout</a>
                        </li>
                      </ul>
                    </div>
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  className="hidden lg:flex rounded-md bg-teal-600 px-2 md:px-5 py-2 md:py-2.5 text-sm font-medium text-white shadow"
                >
                  Sign In
                </Link>
              )}
              <Link to="/cart" className="hidden lg:flex">
                <FaCartShopping className="h-6 w-6 text-gray-500 hover:text-gray-700"  /><span className="badge badge-sm indicator-item">
                  {cart?.length || 0}
                </span>
              </Link>
            </div>

            <div className="block md:hidden">
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <div className="dropdown">
                  <div
                    tabIndex={0}
                    role="button"
                    className="text-black cursor-pointer "
                  >
                    <IoMenuSharp />
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-[#edf9ffe8] rounded-box z-1 mt-3 w-52 p-2 shadow right-0 text-sm font-semibold"
                  >
                    <li className="max-lg:border-b max-lg:px-3 max-lg:py-3">
                      <NavLink
                        to="/"
                        className={({ isActive }) =>
                          isActive
                            ? "text-teal-600 font-serif uppercase nav-link font-semibold block text-[15px]"
                            : "hover:text-[#ac99f1e1] text-gray-700 font-serif uppercase nav-link font-semibold block text-[15px]"
                        }
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="max-lg:border-b max-lg:px-3 max-lg:py-3">
                      <NavLink
                        to="/login"
                        className={({ isActive }) =>
                          isActive
                            ? "text-teal-600  font-serif uppercase nav-link font-semibold block text-[15px]"
                            : "hover:text-[#ac99f1e1] text-gray-700 font-serif uppercase nav-link font-semibold block text-[15px]"
                        }
                      >
                        Products
                      </NavLink>
                    </li>
                    <li className="max-lg:border-b max-lg:px-3 max-lg:py-3">
                      <NavLink
                        to="/about"
                        className={({ isActive }) =>
                          isActive
                            ? "text-teal-600  font-serif uppercase nav-link font-semibold block text-[15px]"
                            : "hover:text-[#ac99f1e1] text-gray-700 font-serif uppercase nav-link font-semibold block text-[15px]"
                        }
                      >
                        About
                      </NavLink>
                    </li>
                    <li className="max-lg:border-b max-lg:px-3 max-lg:py-3">
                      <NavLink
                        to="/about"
                        className={({ isActive }) =>
                          isActive
                            ? "text-teal-600  font-serif uppercase nav-link font-semibold block text-[15px]"
                            : "hover:text-[#ac99f1e1] text-gray-700 font-serif uppercase nav-link font-semibold block text-[15px]"
                        }
                      >
                        BLoge
                      </NavLink>
                    </li>
                    <li className="max-lg:border-b max-lg:px-3 max-lg:py-3">
                      <NavLink
                        to="/about"
                        className={({ isActive }) =>
                          isActive
                            ? "text-teal-600  font-serif uppercase nav-link font-semibold block text-[15px]"
                            : "hover:text-[#ac99f1e1] text-gray-700 font-serif uppercase nav-link font-semibold block text-[15px]"
                        }
                      >
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </button>
            </div>
          </div>
        </div>
        {/* bottom nav */}
        <div>
          <div className="hidden md:flex md:items-center justify-center  py-4 md:items-center">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm shrink-0 font-semibold">
                <li className="max-lg:border-b max-lg:px-3 max-lg:py-3">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "text-teal-600 font-serif uppercase nav-link font-semibold block text-[15px]"
                        : "hover:text-[#ac99f1e1] text-gray-700 font-serif uppercase nav-link font-semibold block text-[15px]"
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li className="max-lg:border-b max-lg:px-3 max-lg:py-3">
                  <NavLink
                    to="/books"
                    className={({ isActive }) =>
                      isActive
                        ? "text-teal-600  font-serif uppercase nav-link font-semibold block text-[15px]"
                        : "hover:text-[#ac99f1e1] text-gray-700 font-serif uppercase nav-link font-semibold block text-[15px]"
                    }
                  >
                    Book
                  </NavLink>
                </li>
                <li className="max-lg:border-b max-lg:px-3 max-lg:py-3">
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive
                        ? "text-teal-600  font-serif uppercase nav-link font-semibold block text-[15px]"
                        : "hover:text-[#ac99f1e1] text-gray-700 font-serif uppercase nav-link font-semibold block text-[15px]"
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li className="max-lg:border-b max-lg:px-3 max-lg:py-3">
                  <NavLink
                    to="/bloge"
                    className={({ isActive }) =>
                      isActive
                        ? "text-teal-600  font-serif uppercase nav-link font-semibold block text-[15px]"
                        : "hover:text-[#ac99f1e1] text-gray-700 font-serif uppercase nav-link font-semibold block text-[15px]"
                    }
                  >
                    BLoge
                  </NavLink>
                </li>
                <li className="max-lg:border-b max-lg:px-3 max-lg:py-3">
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive
                        ? "text-teal-600  font-serif uppercase nav-link font-semibold block text-[15px]"
                        : "hover:text-[#ac99f1e1] text-gray-700 font-serif uppercase nav-link font-semibold block text-[15px]"
                    }
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
