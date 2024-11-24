import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';


function Header () {
    return(
        <section id="header">
        <Router>
            <div className='header'>
                <header className='header'>
                <h1>Hotel Paradise</h1>
                <nav>
                <ul>
                    <li><Link to="#home">Inicio</Link></li>
                    <li><Link to="#about">Sobre Nosotros</Link></li>
                    <li><Link to="#services">Servicios</Link></li>
                    <li><Link to="#contact">Contacto</Link></li> 
                </ul>
                </nav> 
                </header>
            </div>
        </Router>
        </section>
    );
};

export default Header;