import { useNavigate } from 'react-router-dom';
import React from 'react'
import './style.css';

const Card = (props) => {

  
    return (
        <div className='my-5 container'>
            <div class="col-10">
                <div class="single-we-do-box text-center">
                    <div class="we-do-description">
                        <div class="we-do-info">

                            <div class="we-do-topics">
                                <code>
                                    <h5 href="#">
                                        Name: <strong><big>{props.name}</big> </strong> 
                                    </h5>
                                </code>
                            </div>
                        </div>
                        <div class="we-do-comment">
                            <code>
                                <h5 href="#">
                                    Email: <b> <u>{props.email}</u> </b> 
                                </h5>
                            </code>
                        </div>
                        <div class="we-do-comment">
                            <code>
                                <h5 href="#">
                                    UserName: <i>{props.username}</i> 
                                </h5>
                            </code>
                        </div>
                        <div class="we-do-comment">
                            <code>
                                <h5 href="#">
                                    WebSite: <a href="">{props.website}</a> 
                                </h5>
                            </code>
                        </div>
                        <button  className='my-4' style={{backgroundColor: '#ffb3b3', border: 'none', color: 'white', width: 120, height: 50 }}>Read More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card