import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Interest from "../pages/Interest";
import Experience from "../pages/Experience";
import Award from "../pages/Award";
const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/skils' element={<Skills />} />
      <Route path='/interest' element={<Interest />} />
      <Route path='/experience' element={<Experience />} />
      <Route path='/award' element={<Award />} />
    </Routes>
  );
};

export default Routers;
