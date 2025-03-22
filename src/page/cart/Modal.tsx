// import useAxiosPublic from "../../axiosPublic/useAxiosPublic";

const Modal = () => {
  // const axiosPublic = useAxiosPublic();
    const handelAddress =  async (e: any) => {
        e.preventDefault();
        const from = e.target;
        const name = from.name.value;
        const email = from.email.value;
        const address = from.address.value;
        const phone = from.phone.value;
        const message = from.message.value;
         const products = {name, email, address , phone , message }
        //  console.log(data);

        fetch("http://localhost:5000/api/payment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(products),
        })
          .then((res) => res.json())
          .then((result) => {
            window.location.replace(result.url)
            console.log(result);
          })
          .catch((error) => console.error("Error:", error));
        
        
      };
    
  return (
    <div className="  ">
      <button
        className="btn"
        // onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        Add Address
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box text-black">
          <section className="">
            <div className="mx-auto max-w-screen-xl px-4 py-7 sm:px-6 lg:px-8">
              <form onSubmit={handelAddress} className="space-y-4">
                <div>
                  <label className="sr-only" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Name"
                    type="text"
                   name="name"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Email address"
                      type="email"
                      name="email"
                    />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="text">
                      Address
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Address "
                      type="text"
                      name="address"
                    />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Phone Number"
                      type="tel"
                      name="phone"
                    />
                  </div>
                </div>
                <div>
                  <label className="sr-only" htmlFor="message">
                    Message
                  </label>

                  <textarea
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Message"
                    name="message"
                  ></textarea>
                </div>
                <button type="submit"> submit </button>
              </form>
            </div>
          </section>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn bg-teal-500">ok</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
