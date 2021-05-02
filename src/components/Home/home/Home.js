import React from 'react';
import About from '../../About/About';
import Porjects from '../../Projects/Porjects';
import Hero from '../Hero/Hero';
import './home.css'

const Home = () => {
    return (
        <main className="main-section">
            <Hero></Hero>
            {/* <About></About> */}
            <About></About>
            <Porjects></Porjects>
        </main>
    );
};

export default Home;