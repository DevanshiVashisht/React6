// About.js
import React from 'react';

function About() {
  return (
    
    <section className="about-container">
      <img class="image" src="https://cdn3d.iconscout.com/3d/premium/thumb/freelancer-working-from-home-3079946-2569229.png"/>
        
      <div className="translucent-box">
        
        <div className="box-content">
          <div className="about-heading">
            <h2>About Me</h2>
          </div>
          <div className="about-content">
            <p>
                  I'm Devanshi, and my creative journey commences with a fervent passion for Web Development.<br />
This fascination serves as my daily driving force, igniting my enthusiasm as I welcome new challenges and relentlessly explore the boundaries of what's achievable.<br />
I am currently pursuing a BTech degree at VIT, Vellore.<br />
Each project and collaboration represents an opportunity to channel this inner drive, culminating in the creation of something truly extraordinary.<br />
My objective is not merely to meet expectations but to consistently exceed them. With an unwavering passion, I approach each endeavor, pouring my heart and soul into every intricate detail.<br />
            </p>
          </div>
          <br/>
          <div className="about-heading">
            <h2>SKILLS</h2>
          </div>
          <div className='buttons'>
          <button type="button" class="btn  btn-outline-dark ">HTML</button>
          <button  type="button"class="btn  btn-outline-dark b" >CSS</button>
          <button type="button"class="btn  btn-outline-dark b" >JAVASCRIPT</button>
          <button type="button"class="btn  btn-outline-dark b">BOOTSTRAP</button>
          <button type="button"class="btn  btn-outline-dark b" >REACT JS</button>
          <button type="button"class="btn btn-outline-dark b" >C</button>
          <button type="button"class="btn  btn-outline-dark b" >C++</button>
          <button type="button"class="btn btn-outline-dark b" >JAVA</button>
          <button type="button"class="btn  btn-outline-dark b" >PYTHON</button>
          </div>
          


        </div>
        
        
      </div>
      
    </section>
  );
}

export default About;
