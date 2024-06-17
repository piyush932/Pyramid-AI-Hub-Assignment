import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Gallery from "./pages/Gallery";
import Contacts from "./pages/Contacts";
import Certifications from "./pages/Certifications";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";


const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop/>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
        <Route path="/certificates" element={<Certifications />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
