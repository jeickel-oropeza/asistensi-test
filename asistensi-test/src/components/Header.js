import React from 'react';
import { Link } from "react-router-dom";
import Banner from './Banner';

import logo from '../assets/img/visa.png';

const Header = () => {
    return (
        <header>
            <nav className="menu-navigation d-flex">
                <div className="logo-menu">
                    <Link to="/" title="Home">
                        <img src={logo} alt="Logo Visa" />
                    </Link>
                </div>
                <div className="items-center-navigation">
                    <ul className="d-flex">
                        <li>
                            <a href="#">Products</a>
                        </li>
                        <li>
                            <a href="#">Developers</a>
                        </li>
                        <li>
                            <a href="#">Company</a>
                        </li>
                    </ul>
                </div>
                <div className="items-rigth-navigation">
                    <ul className="d-flex">
                        <li>
                            <a href="#">Support</a>
                        </li>
                        <li>
                            <a href="#">Sign in</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <Banner />
        </header>
    )
}

export default Header;