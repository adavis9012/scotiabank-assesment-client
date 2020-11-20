import React from 'react';
import {NavLink} from "react-router-dom";

import './styles/Header.scss';

const Header: React.FC = () => {
    return(
        <header className="header">
            <nav className="header_nav">
                <NavLink className="header_item" activeClassName="header_item-selected" exact to="/" >Home</NavLink>
                <NavLink className="header_item" activeClassName="header_item-selected" exact to="/accounts" >Cuentas</NavLink>
            </nav>
        </header>
    )
};

export default Header;