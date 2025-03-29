import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../axiosPublic/useAxiosPublic";
import { jwtDecode } from "jwt-decode";
import Swal from "sweetalert2";
import "animate.css";
import ReviewsRatings from "./BookRevew";
// import RelizonBook from "../Home/RelizonBook";
import InfoSection from "./InfoSection";

interface Book {
  _id: string;
  title: string;
  description: string;
  author: string;
  price: number;
  discount: number;
  image: string;
  quantity: number;
}

interface DecodedToken {
  email?: string;
  exp: number;
  iat: number;
}

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState<Book | null>(null);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axiosPublic.get(`/products/${id}`);
        setBook(response.data.data);
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    };

    fetchBookDetails();
  }, [id, axiosPublic]);

  const addToCart = async () => {
    const token = localStorage.getItem("jwtToken");

    if (!token) {
      Swal.fire({
        title: "Please Login",
        icon: "info",
        showClass: {
          popup: `animate__animated animate__fadeInUp animate__faster`,
        },
        hideClass: {
          popup: `animate__animated animate__fadeOutDown animate__faster`,
        },
      });
      return;
    }

    const decodedToken: DecodedToken = jwtDecode(token);
    const userEmail = decodedToken?.email;

    const cartData = {
      productId: book?._id,
      title: book?.title,
      price: book?.price,
      image: book?.image,
      userEmail,
    };

    try {
      const response = await axiosPublic.post("/cart/create-cart", cartData);
      if (response.data) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Product added to cart successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        alert("Failed to add product to cart.");
      }
    } catch (error) {
      console.error("Error adding product to cart:", error);
      alert("Error adding product to cart.");
    }
  };

  if (!book) {
    return <div className="text-center py-10">Loading...</div>;
  }

  return (
    <div className="w-full mt-10 px-5 md:px-10 lg:px-14">
      <div className="bg-base-200  dark:bg-white dark:text-black shadow-lg p-5 md:p-8 rounded-lg">
        <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start">
          {/* Product Image */}
          <div className="w-full lg:w-1/2 flex flex-col items-center">
            <img
              src={book.image}
              alt={book.title}
              className="w-full max-w-xs md:max-w-md  h-[500px] object-cover rounded-lg"
            />
            <div className="grid grid-cols-3 gap-3 mt-5 w-full max-w-[220px]">
              {[1, 2, 3].map((_, index) => (
                <img
                  key={index}
                  src="https://i.ibb.co.com/jHgvsvt/images-6.jpg"
                  alt="thumbnail"
                  className="h-[70px] object-cover rounded"
                />
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full  lg:w-1/2 space-y-5 text-center lg:text-left">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              {book.title}
            </h1>
            <p className="text-gray-600">{book.description}</p>
            <p className="text-gray-500 font-medium">{book.author}</p>
            <p className="text-2xl text-teal-600 font-semibold">
              ${book.price}
              <span className="text-red-500 ml-4 line-through text-lg">
                ${book.discount}
              </span>
            </p>

            {/* Quantity Section */}
            <p className="text-lg font-medium text-gray-800">
              Books available: {book.quantity} pcs
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={addToCart}
                className="bg-[#071214] text-white px-5 py-3 rounded-lg w-full sm:w-auto shadow-md hover:bg-[#19bcd1] transition"
              >
                Add to Cart
              </button>
              <button className="bg-teal-600 text-white px-5 py-3 rounded-lg w-full sm:w-auto shadow-md hover:bg-orange-600 transition">
                Add to wishlist
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews, Related Books & Info Section */}
      <div className="mt-10 space-y-10">
        <ReviewsRatings />
        {/* <RelizonBook /> */}
        <InfoSection />
      </div>
    </div>
  );
};

export default BookDetails;
