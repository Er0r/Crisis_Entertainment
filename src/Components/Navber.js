import React from 'react';
import '../Assets/Navber.css';
import { NavLink } from 'react-router-dom';

function navber() {
return (       
            <div>
                <div className="icon-bar">
                    <a href="https://www.facebook.com/AnnihilationCrisis" className="facebook"><i class="fa fa-facebook"></i></a>
                    <a href="https://twitter.com/AnihilationIn" className="twitter"><i className="fa fa-twitter"></i></a>
                    <a href="https://www.linkedin.com/company/crisis-entertainment-ltd" className="linkedin"><i className="fa fa-linkedin"></i></a>
                    <a href="https://www.youtube.com/channel/UCfNWSKZoRmjO48CCu7Xx6Yw" className="youtube"><i className="fa fa-youtube"></i></a>
                    <a href="https://discord.gg/mgsAK2N" className="discord"><i className='fab fa-discord' style={{font_size:"48px"}}></i></a>
                </div>
                <div className="topnav">
                    <nav className="navbar navbar-inverse" id="myTopnav">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <a className="navbar-brand" href="/">CRISIS ENTERTAINMENT</a>
                            </div>
                            <ul className="nav navbar-nav">
                                <li><NavLink exact to="/">HOME</NavLink></li>
                                <li><NavLink to="/support">SUPPORT</NavLink></li>
                                <li><NavLink to="/about">ABOUT</NavLink></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li><NavLink to="/patch">PATCH NOTES</NavLink></li>
                            </ul>
                        </div>
                    
                    </nav>           
                </div>
                
                    
            </div> 
    );
}


export default navber
