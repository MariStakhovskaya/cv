import React from 'react'
import './App.css';
import Header from "./header/Header";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Contact from "./contacts/Contact";
import Footer from "./footer/Footer";
import MainP from "./main/MainP";
import MainV from "./main/MainV";


function App() {

    return (
        <div className="App">
            <Header/>
            <MainV />
            <Skills/>
            <Projects/>
            <Contact/>
            <Footer/>

        </div>
    );
}

export default App;
