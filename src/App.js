import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/home/Home";
import Contact from "./components/home/Contact";
import FAQ from "./components/home/FAQ";
import WelcomeHome from "./components/welcome/welHome";

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

          </Routes>
        </main>
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
  