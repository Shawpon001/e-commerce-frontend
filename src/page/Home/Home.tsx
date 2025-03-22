import Banner from "../../components/banner/Banner";
import Advertise from "./Advertise";
import BookCatagory from "./catagory/BookCatagory";
import Discount from "./Discount";
import PopularBooks from "./PopularBooks";
import RelizonBook from "./RelizonBook";
import Feedback from "./Review";

const Home = () => {
  return (
    <div className="bg-gray-100 w-full mx-auto">
      
      <div className="px-4">
      <Banner />
        <BookCatagory />
        <PopularBooks />
        <RelizonBook/>
        <Discount />
        <Advertise />
        <Feedback />
      </div>
    </div>
  );
};

export default Home;
