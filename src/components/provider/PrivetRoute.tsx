import {  useNavigate} from "react-router-dom";
import Swal from "sweetalert2";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const token = localStorage.getItem("jwtToken");
  const navigate = useNavigate()

  if (!token) {
   
    Swal.fire({
      title: "Please login!",
      icon: "warning",
      confirmButtonText: "login",
    }).then(() => {
        navigate("/login")
    });

    return null; 
  }

  return <>{children}</>;
};

export default PrivateRoute;
