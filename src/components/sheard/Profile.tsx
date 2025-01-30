import { FaEdit } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

const Profile = () => {
  return (
    <div className="lg:w-[800px] w-full lg:px-14 px-4 ">
      <div className="flex justify-between items-center">
        <h1 className=" lg:text-3xl text-xl my-5 lg:ml-8 ml-4 md:ml-7 font-semibold">
          {" "}
          Personal Information:{" "}
        </h1>
        <button
          className="btn bg-[#f3f03fdc] border-none  md:[12rem] lg:mr-8 mr-[2rem]  ml-[6rem] "
          onClick={() => document.getElementById("my_modal_5").showModal()}
        >
          <span>
            <FaEdit className="text-xl" />
          </span>
          Info
        </button>
      </div>
      {/* start */}
      <div className="lg:flex xl:flex md:flex flex-row cursor-pointer gap-5  mb-5 px-7  justify-center ">
        <div className=" relative">
          <img
            src="https://i.ibb.co.com/tmRS5Lq/premium-photo-1682089789852-e3023ff6df24.jpg"
            alt=""
            className="md:w-[400px] w-full object-cover  md:h-[270px]  "
          />
        </div>

        <div className=" w-full lg:w-[400px] xl:w-full px-6 bg-gray-200 lg:mt-0 md:mt-0 mt-5">
          <div className="">
            <h1 className="text-2xl font-bold "> name </h1>
            <dialog
              id="my_modal_5"
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box">
                <div className=" px-4 py-3 rounded-md ">
                  <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-semibold">
                      {" "}
                      Update Information{" "}
                    </h1>
                    <div className="modal-action">
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="text-2xl ">
                          <IoCloseSharp />
                        </button>
                      </form>
                    </div>
                  </div>
                  <form>
                    <div className="mt-4 xl:grid-cols-2 lg:grid-cols-2 grid-cols-2  grid text-center items-center justify-center gap-10 ">
                      <div className="form-control">
                        <input
                          type="text"
                          name="name"
                          placeholder="Name"
                          className="input input-bordered"
                          required
                        />
                      </div>

                      <div className="form-control">
                        <input
                          name="photo"
                          type="file"
                          placeholder="Photo"
                          className="file-input file-input-bordered file-input-primary w-full"
                        />
                      </div>

                      <div className="form-control">
                        <textarea
                          className="textarea textarea-bordered"
                          name="description"
                          placeholder="Bio"
                        ></textarea>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className=" mt-4 font-semibold px-2 hover:bg-yellow-500   rounded-lg bg-yellow-400 w-[180px] h-12 mb-6 "
                    >
                      Update Information
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
