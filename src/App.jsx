import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

const App = () =>{
    return (
        <div className="app-body">
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
        </div>
    )
}

export default App;