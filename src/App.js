import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from "./Navigate/Navbar";
import Main from "./Main/Main"
import About from "./About/About"
import Skills from "./Skills/Skills"
import Certificate from "./Certificate/Certificate"
import Portfolio from "./Portfolio/Portfolio"
import Contact from "./Contact/Contact"


const portfolioList = [
    { id:1, title: "Leotec", subtitle: "Перейти по ссылке", src: require("../src/img/leotech.jpg"), link: "#" },
    { id:2, title: "MVD", src: require("../src/img/mvd.jpg"), link: "#" },
    { id:3, title: "KazTerra", src: require("../src/img/kazterra.jpg"), link: "#" },
    { id:4, title: "Qube", src: require("../src/img/qube.jpg"), link: "#" },
    { id:5, title: "Avtovoz", src: require("../src/img/avtovoz.jpg"), link: "#" },
    { id:6, title: "Profrecrut", src: require("../src/img/recrut.jpg"), link: "#" },
    { id:7, title: "Teholpanel", src: require("../src/img/panel.jpg"), link: "#" },
    { id:8, title: "Teholmetal", src: require("../src/img/metall.jpg"), link: "#" },
    { id:9, title: "Zhaluzy", src: require("../src/img/zhaluzi.jpg"), link: "#" },
]



function App() {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route exact path="/react_page_portfolio/" element={<Main/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/skills' element={<Skills/>} />
                <Route path='/certificate' element={<Certificate/>} />
                <Route path='/portfolio' element={<Portfolio portfolioList={portfolioList}/>} />
                <Route path='/contact' element={<Contact/>} />
            </Routes>
        </Router>
    );
}

export default App;