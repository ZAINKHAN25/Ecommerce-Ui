import React from 'react';
import "./App.css";

import Navbar from '../../Components/Navbar/App.jsx'
import IntroductionSection from '../../Components/IntroductionSection/App.jsx'


function Home() {
  return (
    <div className='homepage'>
      <Navbar />
      <IntroductionSection />
    </div>
  )
}

export default Home;