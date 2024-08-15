import React from 'react'

export default function Header() {
    return (
        <>
            <header className="header">
                <div className="container-xl">
                    <div className="header-content">
                        <a href="index.html" className="logo-container">
                            <img className="Sombrero" src="/img/sombrero.png" alt="Sombrero" />
                            <img className="img-fluid" src="/img/logo.svg" alt="Imagen Logo" />
                        </a>
                        
                        <nav>
                            <ul className= "nav-list">
                            <li><a className="active" href="/index.html">Home</a></li>
                            <li className="dropdown">
                                <a href="#recetas" className="dropbtn">Recetas</a>
                                <div className="dropdown-content">
                                    <a href="/desayuno.html" >Desayuno</a>
                                    <a href="/almuerzo.html">Almuerzo</a>
                                    <a href="/cena.html">Cena</a>
                                </div>
                            </li>
                                   
                                <li><a href="/about.html">Acerca de nosotros</a></li>
                                <li><a href="/contacto.html">Contacto</a></li>
                            </ul>
    
                        </nav>

                        
                    </div>
                </div>
            </header>
        </>
    );
}
   