import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../mainLayOut/MainLayOut";
import Home from "../page/Home/Home";
import Login from "../page/auth/Login";
import Registation from "../page/auth/Registation";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut />,
    //   errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
       
      ],
    },
    // login routes
    {
      path: "/admin",
      element: <Login/>,
    },
    {
      path: "/admin/signIn",
      element: <Registation />,
    },
  ]);
  
  export default router;