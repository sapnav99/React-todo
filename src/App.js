import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Operation from './Operation';
import Login from './Login';
import Signup from './Signup';

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login/>}></Route>
    <Route path='/addtodo' element={<Operation/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}
