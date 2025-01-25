
import Banner from '../../components/banner/Banner';
import Discount from './Discount';
import PopularBooks from './PopularBooks';
import Feedback from './Review';
import BookCatagory from './catagory/BookCatagory';

const Home = () => {
    return (
        <div>
            <Banner/>
           <div className=' lg:px-10 md:px-5 px-2'>
           {/* <BookCatagory/> */}
            <PopularBooks/>
            <Discount/>
            <Feedback/>
           </div>
        </div>
    );
};

export default Home;