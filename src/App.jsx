import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './screens/pages/Navbar-Footer/Navbar';
import HeroApp from './screens/pages/Hero-Page/HeroApp';
import Footer from './screens/pages/Navbar-Footer/Footer';
import HomeApp from './screens/pages/Home-Page/HomeApp';
import AboutUsApp from './screens/pages/About-Us/AboutUsApp';
import ContactUsApp from './screens/pages/Contact-Us/ContactApp';
import CustomApp from './screens/pages/Custom-Page/CustomApp';
import SignInForm from './screens/Forms/SignInForm';
import ForgottenPassword from './screens/Forms/ForgottenPassword';
import SignUpForm from './screens/Forms/SignUpForm';
import { useEffect, useState } from 'react';
import Cart from './screens/pages/Cart/Cart';
import NotFound from './screens/pages/NotFound';
import img from '../public/images/logo.png';
import ShowNF from './screens/pages/Navbar-Footer/ShowNF';

const isAuthenticated = true;

const PrivateRoute = ({ element }) => {
  return isAuthenticated ? element : <Navigate to="/sign-in" replace />;
};

function App() {
  const [showCart, setShowCart] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Router>
      {loading ? (
        <div className='w-full h-screen flex justify-center items-center bg-white'>
          <img src={img} className='w-20 h-20 bg-white animate-pulse ' loading='lazy' alt='loading' />
        </div>
      ) 
        : 
      (
        <>
        
          <ShowNF>
            <Navbar setShowCart={setShowCart} />
            {showCart && <Cart showCart={showCart} setShowCart={setShowCart} />}
          </ShowNF>
          <Routes>  
            <Route index element={<HeroApp />} />
            <Route path="/home" element={<HomeApp />} />
            <Route path="/about-us" element={<AboutUsApp />} />
            <Route path="/contact-us" element={<ContactUsApp />} />
            <Route path="/custom" element={<CustomApp />} />
            <Route path="/sign-in" element={<SignInForm />} />
            <Route path="/sign-up" element={<SignUpForm />} />
            <Route path="/forget-password" element={<ForgottenPassword />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          <ShowNF>
            <Footer />
          </ShowNF>
          
        </>
      )}

    </Router>
  );
}

export default App;
