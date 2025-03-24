import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
const SubNavbar = () => {
  return (
    <div className="bg-gray-100 ">
      {/* upper nav  */}
      <div className="hidden lg:flex flex-col items-center justify-between py-2 md:flex-row md:items-center md:justify-between text-sm mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
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
          <div className="flex">
            Follow us :
            <ul className="flex gap-2 textarea-xl ml-2">
              <li>
                <button>
                  {" "}
                  <FaFacebook />
                </button>
              </li>

              <li>
                <button>
                  {" "}
                  <FaInstagram />{" "}
                </button>
              </li>

              <li>
                <FaTwitter />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubNavbar;
