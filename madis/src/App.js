import React from 'react';
import { Routes } from 'react-router-dom';
import Header from './components/Header';
import "./components/scss/main.css";
import Banner from './components/Banner';
function App() {
    return (
        <div>
                <Header />
                <Banner/>
        </div>


    )
}

export default App