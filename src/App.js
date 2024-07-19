/*
create react app


npx create-react-app abc-automobiles
cd abc-automobiles
npm start


*/


/*


functional Components
javascript functions that return jsx to render ui elements
simpler and easier to write as compared to class components
used when you dont need to manage state or lifecycle method




*/


import Menu from "./components/Menu";
import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import {Routes,Route} from "react-router-dom";
import VechileList from "./components/Vechile-list";
import Services from "./components/Services"
import Contactus from "./components/Contactus"

function App(){
  return (
    <> 
    <Menu/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/vechile-list" element={<VechileList/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/contactus" element={<Contactus/>}/>
    </Routes>
    <Footer/>
    </>
  )
}


export default App;
