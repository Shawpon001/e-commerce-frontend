import { Link } from "react-router-dom";

const Registation = () => {
  const handelRegister = (e: any) => {
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const email = from.email.value;
    const password = from.password.value;

    console.log(name, email, password);
  };

  return (
    <div className=" mt-8 lg:px-14 px-5">
      <div className=" md:flex items-center  justify-center">
        <div className=" w-full">
          {" "}
          <img src="https://i.ibb.co.com/4RL2PxQ/17133825331.jpg" alt="" />
        </div>
        <div className=" bg-base-200 px-4 py-4 lg:max-w-3xl">
          <form onSubmit={handelRegister} className="mt-8     gap-6">
            <div className=" mb-2 ">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>

              <input
                type="name"
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
