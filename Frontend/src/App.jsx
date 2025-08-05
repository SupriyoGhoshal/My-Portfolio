import{BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";

function App() {
  return ( 
    // <BrowserRouter>
    //    <Routes>
    //     <Route path="/" element={<Home/>}></Route>
    //    </Routes>
    //   </BrowserRouter>
    <>
      <Navbar/>
      <Hero/>
      <Skills/>
      <Projects/>
      <Footer/>
    </>
  );
}

export default App;