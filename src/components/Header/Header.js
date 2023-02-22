import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <div className="header-text">
            <h1>Live a Healthy Life </h1>
            <p>Join us for living a healthy life from today</p>
            <Link to="/aboutus" className="about-button">About Us</Link>
        </div>
        </div>
    );
};

export default Header;