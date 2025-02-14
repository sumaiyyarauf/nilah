import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/home/Home";
import Contact from "./components/home/Contact";
import FAQ from "./components/home/FAQ";
import WelcomeHome from "./components/welcome/welHome";
import AboutHome from "./components/about/AboutHome";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/fqa" element={<FAQ />} />
            <Route path="/welcomehome" element={<WelcomeHome />} />
            <Route path="/abthome" element={<AboutHome/>}/>

          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;


// import React from "react";
// import Navbar from "./components/Navbar";
// import Home from "./components/home/Home";
// import Contact from "./components/home/Contact";
// import FAQ from "./components/home/FAQ";
// import WelcomeHome from "./components/welcome/welHome";
// const App = () => {
//   return (
//     <>
//      <Navbar/>
//      <WelcomeHome/>
//      <Home/>
//      <Contact/>
//      <FAQ/>
//     </>
   

//   );
//    };
  
//    export default App;
  