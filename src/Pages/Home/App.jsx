import React from 'react';
import "./App.css";

import Navbar from '../../Components/Navbar/App.jsx'
import IntroductionSection from '../../Components/IntroductionSection/App.jsx'
import Asseenin from '../../Components/Asseenin/App.jsx'
import Aboutus from '../../Components/Aboutus/App.jsx'
import Whychoseus from '../../Components/Whychoseus/App.jsx'
import Sales from '../../Components/Sales/App.jsx'
import Categories from '../../Components/Categories/App.jsx'
import NewArrivals from '../../Components/NewArrivals/App.jsx'
import Partner from '../../Components/Partner/App.jsx'


function Home() {
  return (
    <div className='homepage'>
      <Navbar />
      <IntroductionSection />
      <Asseenin />
      <Aboutus />
      <Whychoseus />
      <Sales />
      <Categories />
      <NewArrivals />
      <Partner />
{/*       Aj customer service wala kam bhi karna hai */}
    </div>
  )
}

export default Home;
