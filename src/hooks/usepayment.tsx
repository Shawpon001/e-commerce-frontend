import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../axiosPublic/useAxiosPublic";
import { jwtDecode } from "jwt-decode";
// Define interfaces for types
interface DecodedToken {
    email: string;
}

// interface paymentItem {
//     _id: string;
//     title: string;
//     price: number;
//     quantity: number;
//     image: string;
//     email: string; // Ensure email exists in the paymentItem type
// }

const UsePayment = () => {
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

    // Fetch payment data using react-query
    const { refetch, data: payment = [] } = useQuery({
        queryKey: ["payment", userEmail],
        queryFn: async ()=> {
            if (!userEmail) {
                throw new Error("User email not found in token");
            }

            // Fetch payment items for the logged-in user's email
            const response = await axiosPublic.get(`/order?email=${userEmail}`);
            
            if (!response.data.status) {
                throw new Error("Failed to fetch payment data");
            }
            console.log(response,"datas");
            return response.data.result;
            
        },
        enabled: !!userEmail,
    });

    return [payment, refetch];
};

export default UsePayment;
