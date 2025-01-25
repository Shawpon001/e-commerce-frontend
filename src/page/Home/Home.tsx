
import Banner from '../../components/banner/Banner';
import Discount from './Discount';
import PopularBooks from './PopularBooks';
import Feedback from './Review';
import BookCatagory from './catagory/BookCatagory';

const Home = () => {
    return (
        <div>
            <Banner/>
            <BookCatagory/>
            <PopularBooks/>
            <Discount/>
            <Feedback/>
        </div>
    );
};

export default Home;