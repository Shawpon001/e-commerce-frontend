import { IoCloseSharp } from "react-icons/io5";

const ProfileUpdate = () => {
    return (
        <div>
            <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
              <div className=" px-4 py-3 rounded-md ">
                <div className="flex justify-between items-center">
                  <h1 className="text-2xl font-semibold">
                      
                    Update Information
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
                        type="number"
                        name="number"
                        placeholder="Add Number"
                        className="input"
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
                    className=" mt-4 font-semibold px-2 hover:bg-teal-500   rounded-lg bg-teal-400 w-[180px] h-12 mb-6 "
                  >
                    Update Information
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
    );
};

export default ProfileUpdate;