import React from 'react';
import { Route, BrowserRouter as Router, Routes, useLocation} from "react-router-dom"
import { HomePage } from './pages/HomePage';
import './App.css'

function App() {
  return (
    <div className='wholePage'>
        <Router>
        <NavBar></NavBar>

      <div className='centerpageview'>
      <div className="pageview">
      <Routes>
      <Route path="/" element={ <HomePage/>} />
    </Routes>
      </div>
      </div>
      <Footer/>


  </Router>
    </div>
  );
}


export const NavBar = () => {
  return (
    <div className='navbar'>
      <div className="leftnav">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" height={20} width={20}>
      <path fill="#ffffff" d="M320 464c8.8 0 16-7.2 16-16V160H256c-17.7 0-32-14.3-32-32V48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320zM0 64C0 28.7 28.7 0 64 0H229.5c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64z"/></svg>
      <strong className='resume'>  Résumé</strong>
      </div>
      <div className="rightnav"></div>
    </div>
  )
}

const Footer = () => {
  return (
    <div className="footerp">
      <div className="footer-icons">
        <a href="https://github.com/atharva-khewle" className="footer-icon" target="_blank">
          <img src="https://img.icons8.com/ios-filled/50/ffffff/github.png" alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/atharvakhewle" className="footer-icon" target="_blank">
          <img src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" alt="LinkedIn" />
        </a>
        <a href="https://www.instagram.com/atharva_work/" className="footer-icon" target="_blank">
          <img src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png" alt="Instagram" />
        </a>
        <a href="https://twitter.com/atharvamainwork" className="footer-icon" target="_blank">
          <img src="https://img.icons8.com/ios-filled/50/ffffff/twitter.png" alt="Twitter" />
        </a>
      </div>
      <p className='footernote'>© 2024 Crafted with copious amounts of coffee, late-night coding sessions, and just a hint of wizardry by <strong>Atharva Khewle</strong>.<br/> Warning: May contain traces of bugs.</p>
    </div>
  );
};

export default App;
