import React from 'react';
import profile from '../../images/profile.png';
import './About.css'

const About = () => {
    return (
    <section class="about">
      <div class="container">
        <h2 class="section-title">
          About me
        </h2>
        <div class="row about-wrapper">
          
          <div class="col-md-7 col-sm-12 about-text">
            <div class="about-wrapper__info">
              <p class="about-wrapper__info-text">
                "This is Shah Jalal and I am a full-stack Web Developer who specializes in creating dynamic and beautiful web sites.”
              </p>
              <p class="about-wrapper__info-text">
              I am currently seeking a position in a dynamic organization to contribute for the growth of the company while having the scope to develop my own skills.
              </p>

              <p>Here are a few technologies I've been working with recently:</p>
                <div class="row">
                    
                    <div class="col-md-6">
                         <ul>
                             <li >JavaScript (ES6+)</li>
                            <li >React.js</li>
                             <li>Node.js</li>
                            <li>MongoDB
                            </li>
                         </ul>
                        </div>

                    <div class="col-md-6">
                         <ul>
                             <li >Node.js</li>
                            <li >Express.js</li>
                            <li>MongoDB</li>
                            <li>Firebase</li>
                        </ul>
                    </div>
                </div>
              

              <span class="d-flex mt-4">
                    <a href="https://drive.google.com/uc?export=download&id=1ss1i0nibS5sMuo4V9OHXPQmYU75mY81M"><button  className="btn btn-success">Resume</button></a>
              </span>
            </div>
          </div>

          <div class="col-md-5 col-sm-12">
            <div class="about-wrapper__image">
                <img className="img-fluid  profile-img" src={profile} alt=""/>
           
            </div>
          </div>

        </div>
      </div>
    </section>
    );
};

export default About;