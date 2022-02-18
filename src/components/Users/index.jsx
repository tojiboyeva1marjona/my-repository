import React from 'react'
import { Link } from 'react-router-dom';
import './style.css';

const Users = (props) => {
    return (
        <div>
            <section id="resume" class="resume">
                <div class="container">

                    <div class="section-title">
                        <h2 style={{ borderBottom: '2px solid #ffb3b3', width: 65, paddingBottom: 10 }}>Resume</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div class="row">
                        <div class="col-lg-6" data-aos="fade-up">
                            <h3 class="resume-title">Summary</h3>
                            <div class="resume-item pb-0">
                                <h4>{props.name}</h4>
                                <p><em>Innovative and deadline-driven Graphic Designer with 1 years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</em></p>
                                <ul>
                                    <li>{props.city} 127, {props.street} , MC</li>
                                    <li>{props.phone}</li>
                                    <li>{props.email}</li>
                                </ul>
                            </div>

                            <h3 class="resume-title">Education</h3>
                            <div class="resume-item">
                                <h4>Master of Fine Arts &amp; Graphic Design</h4>
                                <h5>2013 - 2024</h5>
                                <p><em>Secondary schoo No 18 , {props.city} </em></p>
                                <p>Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend</p>
                            </div>
                            <div class="resume-item">
                                <h4>Lover of Fine Arts &amp; Graphic Design</h4>
                                <h5>2010 - 2022</h5>
                                <p><em>Secondary schoo No 18 , Fergana , Rishtan</em></p>
                                <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila</p>
                            </div>
                        </div>
                        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                            <h3 class="resume-title">Professional Experience</h3>
                            <div class="resume-item">
                                <h4>Junior graphic design specialist</h4>
                                <h5>2021 - Present</h5>
                                
                                <ul>
                                    <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
                                    <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project. </li>
                                    <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
                                    <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
                                </ul>
                            </div>

                            <div>
                                <Link to='/'>
                                    <button style={{ color: 'white', backgroundColor: '#ffb3b3', width: 150, height: 60, border: 'none' }}>GO BACK</button>
                                </Link>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Users