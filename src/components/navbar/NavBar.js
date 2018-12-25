import React from 'react';
import './NavBar.css';
import MenuList from './sub_components/MenuList';

class NavBar extends React.Component {
    constructor() {
        super();
        this.state = { };
    }

    callMenu = () => {
        if (document.getElementById('Burger').className === "burg")
        {
            document.querySelector('.burg').className += " clicked";
            document.querySelector('.menu').style.opacity = 1;
            document.querySelector('.menu').style.right = "10%";
        }
        else {
            document.querySelector('.burg').className = "burg";
            document.querySelector('.menu').style.opacity = 0;
            document.querySelector('.menu').style.right = 0;
        }
    }
    
    render() {
        return (
            <header className="heading">
                <div className="navbar">
                    <a href="index.html" className="logo"><img src={this.props.logoSRC} alt="LOGO"/></a>
                    <MenuList section1="home" section2="services" section3="about" section4="contact us" />
                </div>
            </header>
        );
    };
};

export default NavBar;
