import React from 'react';
import './NavBar.css';
import MenuList from './sub_components/MenuList'

function NavBar(props) {
console.log(props.logoSRC)
  return (
    <header className="heading">
        <div className="navbar">
            <a href="index.html" className="logo"><img src={props.logoSRC} alt="ID-Consult"/></a>
            <MenuList section1="home" section2="services" section3="about" section4="contact us" />
        </div>
    </header>
    )
}


export default NavBar;
