import { jwtDecode } from "jwt-decode";
import Swal from "sweetalert2";
import useAxiosPublic from "../axiosPublic/useAxiosPublic";

interface BookItem {
  _id: string;
  title: string;
  price: number;
  image: string;
}

interface DecodedToken {
  email?: string;
  exp: number;
  iat: number;
}

const useAddToCart = () => {
  const axiosPublic = useAxiosPublic();

  const addToCart = async (book: BookItem) => {
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
      return ;
    }

    const decodedToken: DecodedToken = jwtDecode(token);
    const userEmail = decodedToken?.email;

    const cartData = {
      productId: book._id,
      title: book.title,
      price: book.price,
      image: book.image,
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

  return addToCart;
};

export default useAddToCart;
