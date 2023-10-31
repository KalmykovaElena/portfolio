
import {  Route, Routes } from 'react-router-dom';
import './App.css'
import Main from "./pages/main/Main.jsx";
import NotFound from "./pages/not-found/NotFound.jsx";
import AboutMe from './pages/about/AboutMe';
import Contacts from './pages/contacts/Contacts';

function App() {

  return (
        <Routes>
          {/* <Route path='/' element={<Main />} /> */}
          <Route path='/portfolio' element={<Main />} />
          <Route path='/works' element={<Main />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/about-me' element={<AboutMe />} />
          <Route path='/contacts' element={<Contacts />} />
        </Routes>
  )
}

export default App
