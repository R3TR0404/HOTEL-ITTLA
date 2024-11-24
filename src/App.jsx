import React from "react";
import Header from './Header';
import Home from './Home';
import About from './about';
import Services from './services';
import Contacto from './contact';
import Footer from './Footer';
import './App.css';
//import Landingpage from "./Landing-Hotel";



function App () {
    return(
        <section className="App">
            <Header/>
            <Home/>
            <About/>
            <Services/>
            <Contacto/>
            <Footer/>         
        </section>
    );
};

export default App;