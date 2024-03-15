import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <About/>  
      <Project/>
      <Contact/>
      <Footer/>
    </>
  )
}
export default App;
