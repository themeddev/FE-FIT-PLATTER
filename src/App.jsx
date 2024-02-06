import { useState } from 'react'
import './App.css'
import SingInForm from './screens/Forms/SingInForm'
// import Home from './screens/Home'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './screens/pages/Navbar-Footer/Navbar';
import Test from './screens/test';
import HeroApp from './screens/pages/Hero/HeroApp';

function App() {

  return (
    <Router>
      <Navbar />
      {/* <Routes>
        <Route path='/signin' element={<SingInForm />} />
        <Route path='/signup' element={<SignUpForm />} />
        <Route path='/forgetpassword' element={<ForgottenPassword />} />
      </Routes> */}

      {/* <Home /> */}
      {/* <Test /> */}
      <HeroApp />


    </Router>
  );
}

export default App
