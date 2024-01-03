import React from 'react';
import "./App.css";

import Navbar from '../../Components/Navbar/App.jsx'
import IntroductionSection from '../../Components/IntroductionSection/App.jsx'
import Asseenin from '../../Components/Asseenin/App.jsx'
import Aboutus from '../../Components/Aboutus/App.jsx'


function Home() {
  return (
    <div className='homepage'>
      <Navbar />
      <IntroductionSection />
      <Asseenin />
      <Aboutus />
    </div>
  )
}

export default Home;
