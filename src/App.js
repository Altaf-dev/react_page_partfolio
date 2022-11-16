import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from "./Navigate/Navbar";
import Main from "./Main/Main"
import About from "./About/About"
import Skills from "./Skills/Skills"
import Portfolio from "./Portfolio/Portfolio"
import Contact from "./Contact/Contact"

function App() {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/main' element={<Main/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/skills' element={<Skills/>} />
                <Route path='/portfolio' element={<Portfolio/>} />
                <Route path='/contact' element={<Contact/>} />
            </Routes>
        </Router>
    );
}

export default App;