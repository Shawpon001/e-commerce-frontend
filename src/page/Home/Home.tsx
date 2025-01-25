
import Banner from '../../components/banner/Banner';
import PopularBooks from './PopularBooks';
import BookCatagory from './catagory/BookCatagory';

const Home = () => {
    return (
        <div>
            <Banner/>
            <BookCatagory/>
            <PopularBooks/>
        </div>
    );
};

export default Home;