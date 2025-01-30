import { useEffect, useState } from "react";
import { data, useParams } from "react-router-dom";
import useAxiosPublic from "../../axiosPublic/useAxiosPublic";
import { jwtDecode } from "jwt-decode";
import Swal from "sweetalert2";
import "animate.css";
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

const BookDetails = () => {
  const _id = useParams();
  const [book, setBook] = useState<Book | null>(null);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axiosPublic.get(`/products/${_id.id}`);
        console.log(data);

        setBook(response.data.data);
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    };

    fetchBookDetails();
  }, [_id, axiosPublic]);

  const addToCart = async () => {
    const token = localStorage.getItem("jwtToken");

    if (!token) {
      Swal.fire({
        title: "please Login",
        icon: "info",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `,
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `,
        },
      });
    }
    const decodedToken = jwtDecode(token); // Type the decoded token
    const userEmail = decodedToken?.email;

    const cartData = {
      productId: book._id,
      title: book.title,
      price: book.price,
      image: book?.image,
      userEmail,
    };
    console.log(cartData);

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
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full mt-10 px-5 md:px-14 px-5">
      <div className="bg-base-200  shadow-lg p-5">
        <div className="flex flex-col lg:flex-row justify-center items-start gap-10">
          {/* Product Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={book.image}
              alt="Product"
              className="w-full max-w-[430px] h-[500px] object-cover "
            />
          </div>

          {/* Product Details */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-2xl font-bold text-gray-800 mb-3">
              {book.title}
            </h1>
            <p className="text-gray-600 mb-4">{book.description}</p>
            <p className="text-gray-500 mb-2">{book.author}</p>
            <p className="text-2xl text-teal-600 font-semibold mb-5">
              $ {book.price}
              <span className="text-red-500 ml-4 line-through">
                ${book.discount}
              </span>
            </p>

            {/* Quantity Section */}
            <div className=" mb-1">
              <p className="text-lg font-medium mb-7 text-gray-800">
                {" "}
                Books {book.quantity} pis Aviable{" "}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-5">
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
            {/* image */}
            <div className=" grid grid-cols-3 gap-4 mt-5 w-[200px] h-[100px] ">
              <img
                src="https://i.ibb.co.com/jHgvsvt/images-6.jpg"
                className=" "
                alt=""
              />
              <img
                src="https://i.ibb.co.com/jHgvsvt/images-6.jpg"
                className=" "
                alt=""
              />
              <img
                src="https://i.ibb.co.com/jHgvsvt/images-6.jpg"
                className=" "
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
