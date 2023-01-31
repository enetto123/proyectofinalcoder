import React from 'react';
import './styles.css';
import logo from './logo_bear.png'

const NavBar = ({carrito}) => {
    return(
        <div id='idNavBar'>
            <div id='idLogo'>
            <img src={logo} alt='Logo'/>
            <p id='idBear'>The Big Boy </p>
            <p id='idSlogan'>Los mejores articulos para tu caza</p>
            </div>
            <div  id="idCategorias">
                <ul>
                    <li className='categoria'><a href='#'>CAMPING</a></li>
                    <li className='categoria'><a href='#'>CONSUMIBLES</a></li>
                    <li className='categoria'><a href='#'>PESCA</a></li>
                    <li className='categoria'><a href='#'>ARMAS</a></li>
                    <li className='categoria'><a href='#'>ACCESORIOS</a></li>
                </ul>
            </div>
            {carrito}
        </div>
    )
}
export default NavBar;
