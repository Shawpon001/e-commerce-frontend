import { FaBagShopping, FaUsers } from "react-icons/fa6";
import { IoMdAddCircleOutline, IoMdContacts } from "react-icons/io";
import {
  MdDashboard,
  MdDashboardCustomize,
  MdHome,
  MdMenu,
  MdOutlineBorderColor,
} from "react-icons/md";
import { TiEdit } from "react-icons/ti";
import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {


  return (
    <div>
        <div className="drawer bg-[#f3edf7] md:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col sm:items-start sm:justify-start my-2">
            {/* Page content here */}

            <div className=" flex items-center justify-between mx-2 mt-3">
              <label
                htmlFor="my-drawer-2"
                className="btn btn-primary drawer-button md:hidden"
              >
                <MdDashboardCustomize />
              </label>
              <div className="flex justify-center md:hidden btn-primary rounded-full px-4 ">
                
                <div >
                  <div className=" ">
                  <img src="https://i.ibb.co.com/VmX711W/images-removebg-preview.png" alt="" className="w-28 h-[15px] object-cover" />
                  </div>
                </div>
              </div>
            </div>

            <div className=" mt-5 md:mt-2 ">
              <Outlet />
            </div>
          </div>
          <div className="drawer-side ">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-52 bg-[#d24df3]  min-h-full  text-base-content">
              {/* Sidebar content here */}
              <li>
                <Link className="flex justify-start gap-10" to={"/dashboard"}>
                  <img
                    src="https://i.ibb.co.com/VmX711W/images-removebg-preview.png"
                    className="h-[20px] w-full object-cover"
                    alt=""
                  />
                  <span className="badge badge-secondary badge-outline">
                    User
                  </span>
                </Link>
              </li>
              <hr className="mb-2 mt-1" />
              <li>
                <Link to={"/dashboard"}>
                  <MdDashboard /> Dashboard{" "}
                </Link>
              </li>
              <li>
                <Link to={"/dashboard/alluser"}>
                  <FaUsers /> All Users
                </Link>
              </li>
              <li>
                <Link to={"/dashboard/managebooking"}>
                  <FaBagShopping /> Manage Booking
                </Link>
              </li>
              <li>
                <Link to={"/dashboard/addMenu"}>
                  <IoMdAddCircleOutline /> Add Menu
                </Link>
              </li>
              <li>
                <Link to={"/dashboard/manageItem"}>
                  <TiEdit /> Manage Items
                </Link>
              </li>

              <li className="mt-10">
                <hr />
                <Link to={"/"}>
                  <MdHome /> Home
                </Link>
              </li>
              <li>
                <Link to={"/menu"}>
                  <MdMenu /> Menu
                </Link>
              </li>
              <li>
                <Link to={"/order-Tracking"}>
                  <MdOutlineBorderColor /> Order Tracking
                </Link>
              </li>
              <li>
                <Link to={"/order-Tracking"}>
                  <IoMdContacts /> Customer Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
    </div>
  );
};

export default DashboardLayout;