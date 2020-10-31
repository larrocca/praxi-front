import React from 'react';
import './Header.scss';

const Header = () => {
    return (
        <header className="headerContainer">
            <div className="left">
                <a className="headerTitle" href="#">Como funciona</a>
                <a className="headerTitle" href="#">¿Tenes impresora 3D?</a>
                <a className="headerTitle" href="#">Ayuda</a>
            </div>
            <div className="right">
                <a className="headerTitle" href="#">¿Necesitas un modelo?</a>
                <a className="headerTitle" href="#">Iniciar sesion</a>
                <div className="headerDiv"><a className="headerTitle" href="#">Crear cuenta</a></div>
            </div>
        </header> 
    )
}

export default Header;