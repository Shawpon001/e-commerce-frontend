import { CiSearch } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="bg-gray-200">
      {/* upper nav  */}
      <div className="hidden lg:flex flex-col items-center justify-between py-2 md:flex-row md:items-center md:justify-between text-sm mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 bg-amber-50">
        <div>
          <form className="text-sm relative">
            <input
              type="text"
              placeholder="Sign Up for our emails"
              className="text-xs py-4 px-4 pr-20 h-6 bg-slate-100 rounded-2xl relative"
            />
            <button className="bg-teal-600 text-white px-2 rounded-2xl text-xs absolute right-0 top-1/2  transform -translate-y-1/2 py-2">
              Subscribe
            </button>
          </form>
        </div>

        <p className="text-slate-500 underline">
          Every purchase financially supports local independent bookstores!
        </p>

        <div>
          <p className="flex">
            Follow us :
            <ul className="flex gap-2 ml-2">
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className=" transition hover:opacity-75"
                >
                  <span className="sr-only">Facebook</span>

                  <svg
                    className="size-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className=" transition hover:opacity-75"
                >
                  <span className="sr-only">Instagram</span>

                  <svg
                    className="size-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="transition hover:opacity-75"
                >
                  <span className="sr-only">Twitter</span>

                  <svg
                    className="size-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </li>
            </ul>
          </p>
        </div>
      </div>
      {/* main nav  */}
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a className="block text-teal-600" href="#">
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
                      placeholder="Search for books, authors, genres, etc."
                      className="text-sm py-4 px-4 h-6 bg-slate-100 rounded-2xl w-fit relative"
                    />
                    <button className="text-black font-extrabold text-sm py-2 absolute right-4 top-1/2  transform -translate-y-1/2 hover:text-blue-500 hover:cursor-pointer">
                      <CiSearch className="h-5 w-5 font-extrabold z-10" />
                    </button>
                  </div>
                </form>
              </div>
              <a
                className="hidden lg:flex rounded-md bg-teal-600 px-2 md:px-5 py-2 md:py-2.5 text-sm font-medium text-white shadow"
                href="#"
              >
                Sign In
              </a>
              <a href="#" className="hidden lg:flex">
                <FaCartShopping className="h-6 w-6 text-gray-500 hover:text-gray-700" />
              </a>
            </div>

            <div className="block md:hidden">
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <div className="dropdown">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h7"
                      />
                    </svg>
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
          <div className="hidden md:flex md:items-center justify-center py-4 md:items-center">
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
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
