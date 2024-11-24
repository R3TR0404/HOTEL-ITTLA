import React from 'react';
import Reservaciones from './Reservaciones';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function Footer () {
    return(
        <section className='footer'>
            <footer>
                <p>&copy; 2024 Hotel Paradise. Todos los derechos reservados.</p>
            </footer>
            <Router>
                <Routes>
                    <Route index element={<Reservaciones />} />
                </Routes>
        </Router>
        </section> 

    );
};

export default Footer;