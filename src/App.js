import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import "jquery/dist/jquery"
import $ from "jquery"
import { Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar';
import About from './Components/About';
import Resume from './Components/Resume';
import Skills from './Components/Skills';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
     
      <Routes>
      
        <Route exact path='/portfolio' element={<Navbar/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/resume' element={<Resume/>}/>
        <Route exact path='/skills' element={<Skills/>}/>
        <Route exact path='/port' element={<Portfolio/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
        <Route exact path='*' element={<Navbar/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
