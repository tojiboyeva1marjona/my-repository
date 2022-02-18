import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import logo from "../../assets/images/logo.png";
import './style.css'

const Footer = () => {
  return (
    <div>
         <footer class="footer-main" style={{paddingLeft: 150, paddingRight: 150,  marginBottom: -25, marginTop: 50 }}>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 mr-auto">
                            <div class="footer-logo d-flex">
                                <img width='100' height='60' src={logo} alt="footer-logo"/>
                    <div style={{color: 'white', marginTop: 30, marginLeft: -16}}><h5>Lifetrakr</h5></div>

                            </div>
                                <div class="copyright">
                                    <p>@2022 All Rights Reserved | Design and Developed By : <br/> <a href="#"
                                        target="_blank">Tojiboyeva Marjona</a>
                                        <br/> Check Our Store for more <a href="#" target="_blank">Landing Page Template</a>
                                    </p>
                                </div>
                                </div>
                                <div class="col-lg-6 text-lg-right" style={{textAlign: 'right', paddingTop: 50}}>

                                    <ul class="social-icons list-inline">
                                        <li class="list-inline-item">
                                            <a target="_blank" href="https://facebook.com/themefisher"><i class="text-primary ti-facebook"><FaFacebook style={{fontSize: 30, color: 'white'}}/></i></a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a target="_blank" href="https://twitter.com/themefisher"><i class="text-primary ti-twitter-alt"><FaTwitter style={{fontSize: 30, color: 'white'}}/></i></a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a target="_blank" href="https://github.com/themefisher"><i class="text-primary ti-linkedin"><FaGithub style={{fontSize: 30, color: 'white'}}/></i></a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a target="_blank" href="https://instagram.com/themefisher"><i class="text-primary ti-instagram"><FaInstagram style={{fontSize: 30, color: 'white'}}/></i></a>
                                        </li>
                                    </ul>
                                    
                                <ul class="footer-links list-inline">
                                        <li class="list-inline-item">
                                            <a class="scrollTo" href="#about">ABOUT</a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a class="scrollTo" href="#team">TEAM</a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a class="scrollTo" href="#contact">CONTACT</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                </footer>
    </div>
  )
}

export default Footer