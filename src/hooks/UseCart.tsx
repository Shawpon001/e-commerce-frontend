import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../axiosPublic/useAxiosPublic";
import { jwtDecode } from "jwt-decode";


// Define interfaces for types
interface DecodedToken {
    email: string;
}

interface CartItem {
    _id: string;
    title: string;
    price: number;
    quantity: number;
    image: string;
    email: string; // Ensure email exists in the CartItem type
}

const UseCart = (): [CartItem[], () => void] => {
    const axiosPublic = useAxiosPublic();

    // Get the token from localStorage
    const token = localStorage.getItem("jwtToken");
    let userEmail: string | null = null;

    // Decode the token to extract the email
    if (token) {
        try {
            const decoded = jwtDecode<DecodedToken>(token);
            userEmail = decoded.email;
        } catch (error) {
            console.error("Failed to decode JWT token:", error);
        }
    }

    // Fetch cart data using react-query
    const { refetch, data: cart = [] } = useQuery<CartItem[]>({
        queryKey: ["cart", userEmail],
        queryFn: async (): Promise<CartItem[]> => {
            if (!userEmail) {
                throw new Error("User email not found in token");
            }

            // Fetch cart items for the logged-in user's email
            const response = await axiosPublic.get(`/cart/caritem-get?email=${userEmail}`);
            
            if (!response.data.status) {
                throw new Error("Failed to fetch cart data");
            }

            return response.data.data; // Access the `data` array from the API response
        },
        enabled: !!userEmail, // Query runs only if the userEmail exists
    });

    return [cart, refetch];
};

export default UseCart;
