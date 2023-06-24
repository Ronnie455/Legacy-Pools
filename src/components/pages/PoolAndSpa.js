import React from 'react';
import Footer from '../Footer';
import Friend from '../assets/Friend.png'
import Poolspa from '../assets/Poolspa.png'
import Placeholder1 from '../assets/Placeholder1.png'
import Placeholder2 from '../assets/Placeholder2.png'
import Sketch from '../assets/Sketch.png'
import Excavator from '../assets/Excavator.png'
import Shovels from '../assets/Shovels.png'
import Handshake from '../assets/Handshake.png'

const PoolAndSpa = () => {
  return (
    <div className="pages-body">
      <div className="pages-container">
        <h1 className="pages-header">The Process</h1>
        <img src={Poolspa} alt="pool spa header" className="pages-header-pic"/>
        <div class="pages-wave">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
      </div>
   
      <div className="friend-list-container">
  <p className="bullet-list">
    <img src={Shovels} alt="bullet" className="bullet-points" />
    Start with a consultation
  </p>
  <p className="bullet-list">
    <img src={Shovels} alt="bullet" className="bullet-points" />
    Begin planning
  </p>
  <p className="bullet-list">
    <img src={Shovels} alt="bullet" className="bullet-points" />
    Sit back while we make your dreams come true
  </p>
</div>

      <div className="friend-container">
  <div className="friend-item">
    <img src={Friend} alt="friend icon" className="friend-pic" />
  </div>
  <div className="friend-item">
    <img src={Sketch} alt="Sketch icon" className="friend-pic" />
  </div>
  <div className="friend-item">
    <img src={Excavator} alt="Excavator icon" className="friend-pic" />
  </div>
</div>

<div class="page-wave-2">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    </svg>
</div>

<div className="placeholder-container">
  <img src={Placeholder1} alt="placeholder 1" className="placeholder-pic" />
</div>
<div className="pages-hero-content">
  <div className="hero-content-pic">
    <img src={Handshake} alt="placeholder 3" className="handshake-pic" />
  </div>
  <div className="content-wrapper">
    <h2>Our Pool Building Process</h2>
    <p>
      Start off by getting in touch with our team to schedule a consultation. We'll discuss your pool and potentially spa construction needs and provide expert advice.
      <br />
      During the site visit, we'll mark and paint out the shape of the pool in your backyard. We'll further discuss the best placement and how it will fit harmoniously with your existing landscape.
      <br />
      After receiving the approved plans, our team will start the pool building process. We'll begin by setting forms and digging the pool according to the approved design.
      <br />
      We'll install the necessary plumbing lines and electrical connections to ensure proper functioning of your pool and spa.
      <br />
      The next step involves tying the steel reinforcement within the pool structure to provide strength and durability.
      <br />
      After the steel is tied and the plumbing is ran, we'll apply shotcrete, a mixture of concrete and sand, to form the shell of your pool. This ensures a strong and stable structure.
      <br />
      After the pool shell is complete, we'll pour and finish the concrete deck and coping.
      <br />
      Finally, once this is all complete we will finish the electrical and install the necessary equipment drawing the project to its conclusion.
    </p>
  </div>
</div>
<div className="placeholder-container">
  <img src={Placeholder2} alt="placeholder 2" className="placeholder-pic2" />
</div>
<Footer waveColor="rgb(145,158,150)" />
    </div>
  );
};

export default PoolAndSpa;

