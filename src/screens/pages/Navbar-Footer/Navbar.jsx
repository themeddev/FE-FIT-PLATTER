import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../public/images/logo.png'
import { MdShoppingBasket } from "react-icons/md";
import { useSelector } from 'react-redux';


const Navbar = ({setShowCart}) => {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false)
  const { cartList } = useSelector((state) => state.Cart);
  // Add sticky class to nav
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const stickyThreshold = 50;

      setIsSticky(scrollPosition > stickyThreshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);




  return (
    <div className='flex justify-center h-20 '>
      <div className={`border-5 border-green w-5/6 mx-auto ${isSticky ? 'shadow-lg py-2' : 'py-5 '} rounded-lg transition-all duration-300 bg-white fixed top-0 z-10 items-center px-[4%] duration-400`}>
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link to="/home" className="flex max-w-10">
          { isSticky ?    
            <img src={logo} alt="logo" width={40} height={40} />
            :
            <span className="self-center text-lg font-Outfit whitespace-nowrap text-myOrange">FIT <span className='text-headersBlue'> PLATTER</span></span>   
          }        
        </Link>
        <div className="flex md:order-2">

          <div
              className="relative flex items-center justify-center py-2 mr-5 active:scale-95"
              onClick={() => setShowCart(true)}            >
              <MdShoppingBasket className="text-textColor text-2xl hover:text-myBlue cursor-pointer transition-all duration-400" />

              {cartList && cartList.length > 0 && (
                <div className=" absolute -top-1 -right-2 w-4 h-4 rounded-full bg-myOrange flex items-center justify-center">
                  <p className="text-xs text-white font-semibold">
                  {cartList.length}
                  </p>
                </div>
              )}
          </div>


          <button data-collapse-toggle="mobile-menu-3" type="button" 
            onClick={()=>{setIsOpen(!isOpen)}} 
            className={`${isOpen ? 'rotate-90' : 'rotate-0'} ' md:hidden  transition-all duration-400 text-gray-400 hover:text-myBlue rounded-lg inline-flex items-center justify-center'`} aria-controls="mobile-menu-3" aria-expanded="false">
            
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
            </svg>
            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </button>
        </div>
        <div className="hidden md:flex justify-between items-center w-full md:w-auto md:order-1" id="mobile-menu-3">
          <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium z-20">
            <li>
              <Link to={'/home'} className="bg-myOrange md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-myOrange md:p-0 rounded" aria-current="page">Home</Link>
            </li>
            <li>
              <Link to={'/custom'} className="text-gray-500 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-myOrange md:p-0" >Custom</Link>
            </li>
            <li>
              <Link to={'/about-us'} className="text-gray-500 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-myOrange md:p-0" >About</Link>
            </li>
            <li>
              <Link to={'/contact-us'} className="text-gray-500 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-myOrange md:p-0" >Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
