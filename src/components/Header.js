import React from 'react';
import './Header.css';

export default () => {
    return (
        <header>
            <div className="header--logo">
                <a href="/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1024px-Netflix_2015_logo.svg.png" alt="Netflix"></img>
                </a>
            </div>
        </header>
    );
}