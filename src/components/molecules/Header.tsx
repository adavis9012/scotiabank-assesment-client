import React from 'react';
import {Link} from "react-router-dom";

import './styles/Header.scss';

const Header: React.FC = () => {
    return(
        <header className="header">
            <nav className="header_nav">
                <Link className="header_item--selected" to="/" >Home</Link>
                <Link className="header_item" to="/accounts" >Cuentas</Link>
                <Link className="header_item" to="/movements">Movimientos</Link>
            </nav>
        </header>
    )
};

export default Header;