import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../mainLayOut/MainLayOut";
import Home from "../page/Home/Home";
import Login from "../page/authprovider/Login";
import Registation from "../page/authprovider/Registation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    //   errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // login routes
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registaion",
        element: <Registation />,
      },
    ],
  },
]);

export default router;
