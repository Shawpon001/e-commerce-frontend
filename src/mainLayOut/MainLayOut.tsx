import { Outlet } from 'react-router-dom';
import Navbar from '../components/sheard/navbar/Navbar';
import Footer from '../components/sheard/footer/Footer.js';

const MainLayOut = () => {
    return (
        <div className='className=" w-full text-[#112A46] bg-[#fff7f7b2] 2xl:w-[1440px] 2xl:mx-auto overflow-x-hidden"'>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayOut;