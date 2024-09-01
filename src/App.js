import {  Routes, Route } from 'react-router-dom';
import './fontAwesome'

import AllItems from './pages/AllItems';
import DrinkFood from './pages/DrinkFood';
import FoodMenu from './pages/FeedBack';
import Home from './pages/Home';
import Location from './pages/Location';
import Music from './pages/Music';

// import MeetupItems from './component/meetup/MeetupItem';
import MainNavigation from './component/layout/MainNavigation';


function App() {
  return (
   <div id='contianer'>
     {/* <MeetupItems /> */}
     <MainNavigation />
    <Routes>
      <Route path='/' element={ <AllItems />}/>
      <Route path='/drinkfood' element = { <DrinkFood />} />
      <Route path='/feed back' element={<FoodMenu />} />
      <Route path='/home' element={ <Home />} />
      <Route path='/location' element={ <Location />} />
      <Route path='/music' element={<Music />} />
    </Routes>

   </div>
  );
}

export default App;
