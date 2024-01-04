import React from 'react';
import "./App.css";

import Navbar from '../../Components/Navbar/App.jsx'
import IntroductionSection from '../../Components/IntroductionSection/App.jsx'
import Asseenin from '../../Components/Asseenin/App.jsx'
import Aboutus from '../../Components/Aboutus/App.jsx'
import Whychoseus from '../../Components/Whychoseus/App.jsx'


function Home() {
  return (
    <div className='homepage'>
      <Navbar />
      <IntroductionSection />
      <Asseenin />
      <Aboutus />
      <Whychoseus />
    </div>
  )
}

export default Home;
