import React from 'react'
import logo from "../../assets/images/logo.png";
import './style.css'

const Header = () => {
  return (
    <div>
         <nav class="navbar main-nav fixed-top navbar-expand-lg large">
                <div class="container">
                    <a style={{marginLeft: 100}} class="navbar-brand" href="homepage.html"><img width='100' height='60' src={logo} alt="logo" />  </a>
                    <div style={{color: 'white', marginTop: 30, marginLeft: -30}}><h5>Lifetrakr</h5></div>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="ti-menu text-white"></span>
                    </button>
                    <div style={{marginLeft: 500}} class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                               <a className="nav-link scrollTo" to='/'> Home </a>
                            </li>
                            <li class="nav-item">
                            <a className="nav-link scrollTo" to='/about'>About</a>
                            </li>
                            <li class="nav-item">
                            <a className="nav-link scrollTo" to='/features'>Features</a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
    </div>
  )
}

export default Header