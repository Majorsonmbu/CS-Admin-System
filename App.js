import './App.css';
import React from "react";
import { Route, Routes } from 'react-router';
import Login from "./components/Login.js"
import Student from "./components/Student.js"
import Convener from './components/Convener';
import TA from './components/TA';
import Register from './components/Register'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/Student" element={<Student />}/>
        <Route path="/courseConvener" element={<Convener />}/>
        <Route path="/TeachingAssistant" element={<TA />}/>
        <Route path="/Register" element={<Register />}/>
      </Routes>
    </div>
  );
}

export default App;
