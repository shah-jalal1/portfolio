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
                "This is Asaduzzaman Sajeeb and I am a full-stack Web Developer who specializes in creating dynamic and beautiful web sites.”
              </p>
              <p class="about-wrapper__info-text">
                I have been in the field for nearly 2 years, and have been loving every minute of it. I am a blogger, entrepreneur,photographer, designer, developer, and overall thinker. Check out some of the links below to see what I’ve been up to lately.
              </p>
              <span class="d-flex mt-3">
                <a target="_blank" class="cta-btn cta-btn--resume" href="G:\CV\My cv">
                  View Resume
                </a>
              </span>
            </div>
          </div>

          <div class="col-md-5 col-sm-12">
            <div class="about-wrapper__image">
                <img className="img-fluid  profile-img" src={profile} alt=""/>
              {/* <img
                class="img-fluid rounded shadow-lg"
                height="auto"
                width="300px"
                src="./assets/profile.jpg"
                alt="Profile Image"
              /> */}
            </div>
          </div>

        </div>
      </div>
    </section>
    );
};

export default About;