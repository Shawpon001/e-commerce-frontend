import Banner from '../../components/banner/Banner';
import Advertise from './Advertise';
import Discount from './Discount';
import PopularBooks from './PopularBooks';
import Feedback from './Review';

const Home = () => {
    return (
        <div className='bg-gray-100'>
            <Banner/>
           <div className=' lg:px-10 md:px-5 px-2'>
           {/* <BookCatagory/> */}
            <PopularBooks/>
            <Discount/>
            <Advertise/>
            <Feedback/>
           </div>
        </div>
    );
};

export default Home;