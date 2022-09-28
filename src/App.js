import logo from './logo.svg';
import './App.css';
import * as React from "react";
import  Stepper  from './components/Stepper';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './components/Home';



function App() {
  return (
    <>
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Stepper />}></Route>
        <Route  path="home" element={<Home />} ></Route>
      </Routes>
    </BrowserRouter>
      </>
  );
}

export default App;