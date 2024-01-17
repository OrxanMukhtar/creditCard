import React from 'react';
import { Routes, Route} from "react-router-dom";
import About from "./pages/about";
import Home from './pages/home';
import Contact from './pages/contact';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <Header/>

      




      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={ <About />} ></Route>
        <Route path='/contact' element={ <Contact />}></Route>
      </Routes>


      <Footer/>

    </div>
  )
}

export default App
