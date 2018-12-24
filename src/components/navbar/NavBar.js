import React from 'react';
import './NavBar.css';
import MenuList from './sub_components/MenuList';

class NavBar extends React.Component {
    constructor() {
        super();
        this.state = { };
    }

    callMenu = () => document.querySelector('.menu').style.display === "flex" ? document.querySelector('.menu').style.display = "none" : document.querySelector('.menu').style.display = "flex";
    
    render() {
        return (
            <header className="heading">
                <div className="navbar">
                    {/* <a href="index.html" className="logo"><img src={this.props.logoSRC} alt="ID-Consult"/></a> */}
                    <a href="#" className="logo"><svg  id="Layer_1" data-name="Layer 1" preserveAspectRatio="xMidYMin slice" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 59.074"><defs></defs><title>Untitled-1</title><rect id="BACK" className="rect" width="164.74" height="59.07"/><g onClick={this.callMenu} className="burg" id="BURGER"><path id="span3" d="M51.28,17H8.52V8.62H51.28Z" transform="translate(-0.36 -0.46)"/><path id="span2" d="M51.28,51.38H8.52v-8.3H51.28Z" transform="translate(-0.36 -0.46)"/><path id="span1" d="M51.28,34.15H8.52v-8.3H51.28Z" transform="translate(-0.36 -0.46)"/></g><g className="uni" id="UNI"><path id="U" d="M77.11,43.89A9.36,9.36,0,0,0,82,42.7a9.57,9.57,0,0,0,3.19-3.07,12.74,12.74,0,0,0,1.72-4.35,25.44,25.44,0,0,0,.5-5.05V8.82h8.1V30.23a30.67,30.67,0,0,1-1,8.1A18.57,18.57,0,0,1,91.21,45a15.52,15.52,0,0,1-5.7,4.49,19.24,19.24,0,0,1-8.34,1.66,19.09,19.09,0,0,1-8.54-1.74,15.94,15.94,0,0,1-5.71-4.62,18.37,18.37,0,0,1-3.16-6.65,31.35,31.35,0,0,1-1-7.86V8.82h8.16V30.23a25.75,25.75,0,0,0,.5,5.11,12.74,12.74,0,0,0,1.72,4.35,9.38,9.38,0,0,0,3.16,3A9.26,9.26,0,0,0,77.11,43.89Z" transform="translate(-0.36 -0.46)"/><path id="N" d="M111.82,23.9V50.8h-8.16v-42H110l21.88,27.56V8.88H140V50.8h-6.62Z" transform="translate(-0.36 -0.46)"/><path id="I" d="M148.78,50.8V8.88h8.16V50.8Z" transform="translate(-0.36 -0.46)"/></g><g className="verse" id="VERSE"><path id="V" className="cls-1" d="M173.67,8.92,185,40.67,196.26,8.92h8.58l-16.38,42H181.6l-16.5-42Z" transform="translate(-0.36 -0.46)"/><path id="E" className="cls-1" d="M238.42,43.75V50.9H209.27v-42h28.62v7.15H217.43V26.19h17.68v6.62H217.43V43.75Z" transform="translate(-0.36 -0.46)"/><path id="R" className="cls-1" d="M245,50.9v-42h18.57a11.9,11.9,0,0,1,5.35,1.21,14,14,0,0,1,4.23,3.19,15.18,15.18,0,0,1,2.77,4.5,13.5,13.5,0,0,1,1,5.05,14,14,0,0,1-2,7.43,11.76,11.76,0,0,1-5.53,4.82l9.88,15.78H270l-8.81-14.07h-8V50.9Zm8.16-21.23h10.23a4.26,4.26,0,0,0,2.1-.53,5.16,5.16,0,0,0,1.68-1.45,7.2,7.2,0,0,0,1.13-2.15,8.58,8.58,0,0,0,.41-2.67,7.73,7.73,0,0,0-.47-2.72A7.28,7.28,0,0,0,267,18a5.8,5.8,0,0,0-1.84-1.42,4.71,4.71,0,0,0-2.1-.51h-9.87Z" transform="translate(-0.36 -0.46)"/><path id="S" className="cls-1" d="M309.92,19.92a10.46,10.46,0,0,0-1.51-1.13,19.64,19.64,0,0,0-2.66-1.39,24.2,24.2,0,0,0-3.4-1.15,15.19,15.19,0,0,0-3.73-.47,8.3,8.3,0,0,0-5,1.24,4.1,4.1,0,0,0-1.66,3.49,3.61,3.61,0,0,0,.62,2.16,5.39,5.39,0,0,0,1.8,1.51,15.9,15.9,0,0,0,3,1.18c1.2.35,2.59.73,4.17,1.12,2.05.55,3.91,1.15,5.59,1.78a15,15,0,0,1,4.25,2.36,9.86,9.86,0,0,1,2.7,3.4A11.3,11.3,0,0,1,315,38.9a12.14,12.14,0,0,1-1.27,5.77,10.89,10.89,0,0,1-3.4,3.87,14.76,14.76,0,0,1-5,2.16,25.43,25.43,0,0,1-5.91.68A31.78,31.78,0,0,1,290.11,50a29,29,0,0,1-8.28-4l3.6-7a11.8,11.8,0,0,0,1.93,1.39A28.94,28.94,0,0,0,290.64,42a24.31,24.31,0,0,0,4.2,1.45,18.64,18.64,0,0,0,4.73.59c4.49,0,6.74-1.43,6.74-4.31a3.65,3.65,0,0,0-.77-2.37,6.43,6.43,0,0,0-2.19-1.65,19.8,19.8,0,0,0-3.43-1.3c-1.34-.4-2.84-.81-4.49-1.25a37.62,37.62,0,0,1-5.23-1.8,14,14,0,0,1-3.7-2.28A8.18,8.18,0,0,1,284.28,26a10.91,10.91,0,0,1-.74-4.2,13.05,13.05,0,0,1,1.19-5.68A11.48,11.48,0,0,1,288,12a14.85,14.85,0,0,1,4.88-2.51,20.18,20.18,0,0,1,6-.86A23.37,23.37,0,0,1,307,10a30.6,30.6,0,0,1,6.5,3.28Z" transform="translate(-0.36 -0.46)"/><path id="E-2" data-name="E" className="cls-1" d="M350.36,43.75V50.9H321.21v-42h28.62v7.15H329.37V26.19h17.68v6.62H329.37V43.75Z" transform="translate(-0.36 -0.46)"/></g></svg></a>
                    <MenuList section1="home" section2="services" section3="about" section4="contact us" />
                </div>
            </header>
        );
    };
};

export default NavBar;
