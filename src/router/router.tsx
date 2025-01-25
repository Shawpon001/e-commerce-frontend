import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../mainLayOut/MainLayOut";
import Home from "../page/Home/Home";
import Login from "../page/authprovider/Login";
import Registation from "../page/authprovider/Registation";
import DashboardLayout from "../mainLayOut/Deshboar";
import About from "../page/about/About";
import Bloge from "../page/bloge/Bloge";
import Contact from "../page/contact/Contact";
import Book from "../page/book/Book";

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
      {
        path: "/books",
        element: <Book />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/bloge",
        element: <Bloge />,
      },
      {
        path: "/contact",
        element: <Contact />,
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
  {
    path: "/deshbaord",
    element: <DashboardLayout />,
  },
]);

export default router;
