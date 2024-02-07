import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


// import SingInForm from './screens/Forms/SingInForm'
// import Home from './screens/Home'
import Navbar from './screens/pages/Navbar-Footer/Navbar';
import Test from './screens/test';
import HeroApp from './screens/pages/Hero-Page/HeroApp';
import Footer from './screens/pages/Navbar-Footer/Footer';
import HomeApp from './screens/pages/Home-Page/HomeApp';

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<HeroApp />} />
        <Route path='/home' element={<HomeApp />} />
        {/* <Route path='/forgetpassword' element={<ForgottenPassword />} /> */}
      </Routes>

      {/* <Home /> */}
      {/* <HeroApp /> */}
      {/* <HomeApp /> */}
      {/* <Test /> */}
      <Footer />


    </Router>
  );
}

export default App
