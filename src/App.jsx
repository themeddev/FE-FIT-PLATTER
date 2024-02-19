import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import Test from './screens/test';

function App() {
  return (
    <Router>
      <Routes>
        {/* Wrap your Routes in an Outlet to handle nested routes */}
        <Route
          path="*"
          element={
            <>
              <Navbar />
              <Routes>
                {/* Define your nested routes */}
                <Route path="/" element={<HeroApp />} />
                <Route path="/home" element={<HomeApp />} />
                <Route path="/about-us" element={<AboutUsApp />} />
                <Route path="/contact-us" element={<ContactUsApp />} />
                <Route path="/custom" element={<CustomApp />} />
              </Routes>
              <Footer />
            </>
          }
        />
        <Route path="/sign-in" element={<SignInForm />} />
        <Route path="/sign-up" element={<SignUpForm />} />
        <Route path="/forget-password" element={<ForgottenPassword />} />

      </Routes>
    </Router>
  );
}

export default App;
