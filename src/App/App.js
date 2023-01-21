import React,{Component} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"

import About from '../Components/About';
import Careers from '../Components/Careers';
import Events from '../Components/Events';
import Products from '../Components/Products';
import Support from '../Components/Support';
import Main from '../Components/Main'


const App = () =>{

return(
    <BrowserRouter >
    <Routes>
        <Route element={<Main/>} path='/' />
        <Route element={<About/>} path='/about' />
        <Route element={<Careers/>} path='/careers' />
        <Route element={<Events/>} path='/events' />
        <Route element={<Products/>} path='/products' />
        <Route element={<Support/>} path='/support' />
    </Routes>
    </BrowserRouter>
)

}

export default App;