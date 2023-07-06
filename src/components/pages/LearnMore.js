import React from 'react';
import Friend from '../assets/Friend.png'
import Poolspa from '../assets/Poolspa.png'
import Placeholder1 from '../assets/Placeholder1.png'
import Placeholder2 from '../assets/Placeholder2.png'
import Sketch from '../assets/Sketch.png'
import Excavator from '../assets/Excavator.png'
import Shovels from '../assets/Shovels.png'
import Handshake from '../assets/Handshake.png'
import NoWaveFooter from '../NoWaveFooter';
import WaveBottom from '../WaveBottom';
import WaveTop from '../WaveTop';
import Header from '../Header';

const LearnMore = () => {
  return (
    <div className="pages-body">
      <Header />
      <div className="pages-container">
        <h1 className="pages-header">The Process</h1>
        <img src={Poolspa} alt="pool spa header" className="pages-header-pic"/>
      </div>
   
      <div className="wave-container-top">
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


<div className="wave-container-bottom">
        <WaveBottom />
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
<div className="consultation-bottom">
</div>
<NoWaveFooter />
    </div>
  );
};

export default LearnMore;

