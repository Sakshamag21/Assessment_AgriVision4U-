import React from 'react';
// import './index.css';
import 'antd/dist/antd.css';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
// import 'antd/dist/reset.css';
import { Route, Routes } from 'react-router-dom';
import PastSponsors from './Components/PastSponsors/PastSponsors';
import Queries from './Components/Queries/Queries';
// import ContactUs from './Components/ContactUs/ContactUs';
import StarAttraction from './Components/StarAttraction/StarAttraction';
import Competitons from './Components/Competitons/Competitions';
import Brouchre from './Components/Gallery/Brouchre/Brouchre';
import Media from './Components/Gallery/Media/Media';
import Photos from './Components/Gallery/Photos/Photos';
// import Landing from './Components/Landing/landing';
// import Register from './Components/components/login/singin';
import Register from './Components/components/login/singup';
import Login from './Components/components/login/singin';
import HomePage from './Components/Home/home';
import { loggedInVal } from './Components/typeDefinitions/recoilDeclarartion';
import { useRecoilState } from 'recoil';
function App() {
  const [loggedIn,setLoggedIn]=useRecoilState(loggedInVal);
  console.log(loggedIn,"24");
  return (

      <>
        {loggedIn ? (
          <Routes>
          <Route path={`/`} element={<PastSponsors />} />
        <Route path={`/queries`} element={<Queries />} />
        <Route path={`/contact`} element={<HomePage />} />
        
        <Route path={`/competitons`} element={<Competitons />} />
        <Route path={`/brouchre`} element={<Brouchre />} />
        <Route path={`/media`} element={<Media />} />
        <Route path={`/photos`} element={<Photos />} />
        <Route path={`/register`} element={<Register />} />
        <Route path={`/login`} element={<Login />} />
        </Routes>
        ):(
          <Routes>
          <Route path={`/login`} element={<Login />} />
          <Route path={`/`} element={<Login />} />
          <Route path={`/register`} element={<Register />} />
          <Route path={`*`} element={<PastSponsors/>} />
          
          </Routes>
        )}
        
      </>
  );
}

export default App;