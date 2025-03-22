/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { MdDeleteOutline } from "react-icons/md";
import useAxiosPublic from "../../axiosPublic/useAxiosPublic";
import { useEffect, useState } from "react"; // Add useState for managing quantity
import Swal from "sweetalert2";
import UseCart from "../../hooks/UseCart";
import Modal from "./Modal";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
interface DecodedToken {
  email: string;
}
const Cart = () => {
  const [cart, refetch] = UseCart();
  console.log(cart);
  const navigate = useNavigate();

  const axiosPublic = useAxiosPublic();

  // State to manage quantity for each cart item
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});

 
useEffect(() => {
  const initialQuantities: { [key: string]: number } = {};
  cart.forEach((item) => {
    initialQuantities[item._id] = 1;
  });
  setQuantities(initialQuantities);
}, [cart]);

  // Handle increase quantity
  const handleIncrease = (id: string) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) + 1, // Increment quantity
    }));
  };

  // Handle decrease quantity
  const handleDecrease = (id: string) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) - 1),
    }));
  };

  // Calculate total price
  const calculateItemTotal = (price: number, quantity: number) => {
    return price * quantity;
  };

  // Calculate subtotal for all items in the cart
  const calculateSubtotal = () => {
    return cart.reduce((total, item) => {
      const quantity = quantities[item._id] || 1;
      return total + item.price * quantity;
    }, 0);
  };

  // Handle delete item
  const handelDelet = async (id: any) => {
    try {
      const response = await axiosPublic.delete(`cart/delete/${id}`);
      console.log("Delete response:", response);
      refetch();

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Item Deleted Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.error("Error deleting the item:", error);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Failed to Delete Item",
        showConfirmButton: true,
      });
    }
  };

  const [userEmail, setUserEmail] = useState<string | null>(null);

  // Retrieve user email from token
  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      try {
        const decoded = jwtDecode<DecodedToken>(token);
        setUserEmail(decoded.email);
      } catch (error) {
        console.error("Failed to decode JWT token:", error);
      }
    }
  }, []);

  // const handleCheckout = async () => {

  //   if (!userEmail) {
  //     Swal.fire({
  //       icon: "error",
  //       title: "Error",
  //       text: "User email not found. Please log in again.",
  //     });
  //     return;
  //   }

  //   const checkoutData = {
  //     totalPrice: calculateSubtotal().toFixed(2),
  //     products: cart.map((item) => ({
  //       id: item._id,
  //       title: item.title,
  //       quantity: quantities[item._id] || 1,
  //     })),
  //     userEmail,
  //   };

  //   console.log(checkoutData,"my send data");

  //   try {
  //     // const response = await axiosPublic.post('/payment', checkoutData);
  //     // console.log('Checkout response:', response.data);
  //     // fetch("http://localhost:5000/api/payment", {
  //     //   method: "POST",
  //     //   headers: { "Content-Type": "application/json" },
  //     //   body: JSON.stringify(checkoutData),
  //     // })
  //     //   .then((res) => res.json())
  //     //   .then((result) => {
  //     //     window.location.replace(result.url)
  //     //     console.log(result);
  //     //   })

  //       // Simulate payment success (you need to handle this after actual success)
  //     // Swal.fire({
  //     //   position: 'top-end',
  //     //   icon: 'success',
  //     //   title: 'Checkout Successful',
  //     //   showConfirmButton: false,
  //     //   timer: 1500,
  //     // });

  //     if(paymentSuccess){
  //       for (const item of cart) {
  //         await axiosPublic.delete(`/cart/delete/${item._id}`);
  //         refetch()
  //         navigate("/deshboard")
  //       }
  //     }

  //   } catch (error) {
  //     console.error('Error during checkout:', error);
  //     Swal.fire({
  //       position: 'top-end',
  //       icon: 'error',
  //       title: 'Checkout Failed',
  //       showConfirmButton: true,
  //     });
  //   }
  // };

  const handleCheckout = async () => {
    if (!userEmail) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "User email not found. Please log in again.",
      });
      return;
    }

    const checkoutData = {
      totalPrice: calculateSubtotal().toFixed(2),
      products: cart.map((item) => ({
        id: item._id,
        title: item.title,
        quantity: quantities[item._id] || 1,
      })),
      userEmail,
    };

    try {
      const response = await fetch("http://localhost:5000/api/payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(checkoutData),
      });

      const result = await response.json();

      if (response.ok && result.url) {
        window.location.replace(result.url);
      } else {
        console.error("Checkout Error:", result.error, result.details);
        Swal.fire({
          icon: "error",
          title: "Checkout Failed",
          text: result.error || "An error occurred during checkout.",
        });
      }
    } catch (error) {
      // console.error("Checkout Error:", error);
      Swal.fire({
        icon: "error",
        title: "Checkout Failed",
        text: "An error occurred during checkout.",
      });
    }
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search); // Use location.search
    const tranId = urlParams.get("tran_id");

    if (tranId) {
      if (location.pathname.includes("/payment/success")) {
        // Use location.pathname
        Swal.fire({
          icon: "success",
          title: "Payment Successful!",
          text: "Thank you for your purchase.",
        }).then(() => {
          navigate("/dashboard");
          refetch(); // Refresh cart data
        });
      } else if (location.pathname.includes("/payment/fail")) {
        // Use location.pathname
        Swal.fire({
          icon: "error",
          title: "Payment Failed",
          text: "Please try again.",
        });
      }
    }
  }, [location, navigate, refetch]);

  if (cart.length === 0) { 
    return (
        // JSX for empty cart message
        <div className="text-center h-[40vh] mt-20">
            <h2 className="text-2xl font-medium">Your cart is empty!!</h2>
            <p className="mt-4">Add items to your cart to continue shopping.</p>
            <button onClick={() => navigate('/books')} className="mt-6 bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-700 transition">
                Go to Products
            </button>
        </div>
    );
}

  return (
    <div className="px-4 sm:px-8 lg:px-10 px-5 mt-10">
      {/* Main container */}
      <div className="flex flex-col lg:flex-row w-full gap-8 lg:gap-24 justify-center">
        {/* Cart items */}
        <div className="w-full lg:w-2/3">
          <div className="flex justify-between items-center mb-5 px-2">
            <h2 className="text-xl lg:text-2xl font-medium">Shopping Cart</h2>
            <p className="text-sm lg:text-base text-xl">{cart.length} Item</p>
          </div>
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            {cart.map((cartItems) => (
              <div
                key={cartItems._id}
                className="flex flex-col border border-gray-200 sm:flex-row gap-4 p-4"
              >
                {/* Product Image */}
                <img
                  src={cartItems?.image}
                  alt="Product"
                  className="w-full sm:w-[100px] h-[100px] object-cover rounded-lg"
                />
                {/* Product Info */}
                <div className="flex flex-col sm:flex-row justify-between w-full">
                  <div className="flex flex-col justify-between">
                    <h3 className="text-lg font-semibold">{cartItems.title}</h3>

                    <div className="flex items-center gap-4 mt-4 justify-between">
                      <div className="flex items-center gap-4">
                        <button
                          onClick={() => handleDecrease(cartItems._id)}
                          className="border px-2 hover:bg-gray-300 transition"
                        >
                          -
                        </button>
                        <span className="text-lg font-semibold border px-5">
                          {quantities[cartItems._id] || 1}
                        </span>
                        <button
                          onClick={() => handleIncrease(cartItems._id)}
                          className="border px-2 hover:bg-gray-300 transition"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => handelDelet(cartItems._id)}
                        className="hover:bg-red-600 hover:text-white px-3 py-1 text-teal-600 border transition flex items-center justify-center"
                      >
                        <MdDeleteOutline className="text-2xl" />
                      </button>
                    </div>
                  </div>
                  <p className="text-lg font-semibold w-[50px] text-right mt-4 sm:mt-0">
                    <span className="hover:text-red-500 transition">
                      $
                      {calculateItemTotal(
                        cartItems.price,
                        quantities[cartItems._id] || 1
                      )}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Checkout Summary */}
        <div className="w-full h-fit lg:w-1/3 bg-[#f8e6e6] mt-2 p-4 shadow-md">
          <h1 className="text-center text-sm font-medium py-2">
            You have free shipping
          </h1>
          <progress className="progress bg-white w-full mb-10"></progress>
          <div className="w-full flex justify-end">
            <Modal />
          </div>
          <div className="font-semibold">
            <p className="text-lg font-medium mb-3">Order Summary</p>
            <p className="flex justify-between mb-2">
              Product <span>${calculateSubtotal().toFixed(2)}</span>
            </p>
            <p className="flex justify-between mb-2">
              Saving <span className="text-red-400">- $0.00</span>
            </p>
            <p className="flex justify-between mb-2">
              Shipping <span>Calculate at checkout</span>
            </p>
            <p className="flex justify-between mb-2">
              Discount <span>Apply at checkout</span>
            </p>
            <h3 className="flex justify-between text-lg font-bold mb-4">
              Subtotal <span>${calculateSubtotal().toFixed(2)}</span>
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

            {/* <button
              onClick={handleCheckout}
              className="w-full bg-teal-600 text-white py-3 rounded-lg uppercase font-medium hover:bg-teal-700 transition"
            >
              Checkout
            </button> */}
            <button
              onClick={handleCheckout}
              disabled={cart.length === 0} // Disable when cart is empty
              className={`w-full py-3 rounded-lg uppercase font-medium transition 
    ${
      cart.length === 0
        ? "bg-gray-400 cursor-not-allowed"
        : "bg-teal-600 text-white hover:bg-teal-700"
    }`}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
