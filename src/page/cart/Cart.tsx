import { MdDeleteOutline } from "react-icons/md";
import useAxiosPublic from "../../axiosPublic/useAxiosPublic";
import { useEffect, useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState([]);
  console.log(cart);

  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axiosPublic.get("/cart/caritem-get");
        console.log(response);

        setCart(response.data.data);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchBookDetails();
  }, [axiosPublic]);

  return (
    <div className="px-4 sm:px-8 lg:px-10 px-5 mt-10">
      {/* Main container */}
      <div className="flex flex-col lg:flex-row w-full gap-8 lg:gap-24 justify-center">
        {/* Cart items */}
        <div className="w-full  lg:w-2/3">
          <div className="flex justify-between items-center mb-5 px-2">
            <h2 className="text-xl lg:text-2xl font-medium">Shopping Cart</h2>
            <p className="text-sm lg:text-base text-xl">{cart.length} Item</p>
          </div>
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            {cart.map((cartItems) => (
              <div className="flex flex-col sm:flex-row gap-4 p-4">
                {/* Product Image */}
                <img
                  src={cartItems.image}
                  alt="Product"
                  className="w-full sm:w-[100px] h-[100px] sm:h-auto object-cover rounded-lg"
                />
                {/* Product Info */}
                <div className="flex flex-col sm:flex-row justify-between w-full">
                  <div className="flex flex-col justify-between">
                    <h3 className="text-lg font-semibold">
                      {" "}
                      {cartItems.title}{" "}
                    </h3>

                    <div className="flex items-center gap-4 mt-4 justify-between">
                      <div className="flex items-center gap-4">
                        <button className="border px-2 hover:bg-gray-300 transition">
                          -
                        </button>
                        <span className="text-lg font-semibold border px-5">
                          2
                        </span>
                        <button className="border px-2 hover:bg-gray-300 transition">
                          +
                        </button>
                      </div>
                      <button className="hover:bg-red-600 hover:text-white px-3 py-1 text-teal-600 border transition flex items-center justify-center">
                        <MdDeleteOutline className="text-2xl" />
                      </button>
                    </div>
                  </div>
                  <p className="text-lg font-semibold w-[50px] text-right mt-4 sm:mt-0">
                    <span className="hover:text-red-500 transition">
                      {" "}
                      ${cartItems.price}{" "}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Checkout Summary */}
        <div className="w-full lg:w-1/3 bg-[#f8e6e6] mt-2 p-4 shadow-md">
          <h1 className="text-center text-sm font-medium py-2">
            You have free shipping
          </h1>
          <progress className="progress bg-white w-full mb-10"></progress>
          <div className="font-semibold">
            <p className="text-lg font-medium mb-3">Order Summary</p>
            <p className="flex justify-between mb-2">
              Product <span>$75.00</span>
            </p>
            <p className="flex justify-between mb-2">
              Saving <span className="text-red-400">- $15.00</span>
            </p>
            <p className="flex justify-between mb-2">
              Shipping <span>Calculate at checkout</span>
            </p>
            <p className="flex justify-between mb-2">
              Discount <span>Apply at checkout</span>
            </p>
            <h3 className="flex justify-between text-lg font-bold mb-4">
              Subtotal <span>$175.00 CAD</span>
            </h3>
            {/* Email Opt-in */}
            <div className="border border-gray-300 rounded-lg p-3 mb-6">
              <label
                htmlFor="MarketingAccept"
                className="flex items-start gap-3"
              >
                <input
                  type="checkbox"
                  id="MarketingAccept"
                  name="marketing_accept"
                  className="h-5 w-5 rounded-md border-gray-300"
                />
                <span className="text-sm text-gray-700">
                  I want to receive emails about events, product updates, and
                  company announcements.
                </span>
              </label>
            </div>
            {/* Checkout Button */}
            <button className="w-full bg-teal-600 text-white py-3 rounded-lg uppercase font-medium hover:bg-teal-700 transition">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
