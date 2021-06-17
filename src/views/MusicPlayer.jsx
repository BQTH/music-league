import React from "react";
import "./music"

const Home = () => (
  <div>
     <div style={{textAlign: "center"}} id="container" className="musicplayer">
      <h3 id="title"><b>Song</b></h3>

      <div className="img-container">
          <img src="./img/coverArt.jpg" alt="cover" id="cover" />
          <div className="statsLabel">
              <div className="statsComp">
                  <p className="label">DISTANCE</p>
                  <p className="info">0000</p>
              </div>
              <div className="statsComp">
                  <p className="label">STEPS</p>
                  <p className="info">0000</p>
              </div>
              <div className="statsComp">
                  <p className="label">SPEED</p>
                  <p className="info">0000</p>
              </div>
              <div className="statsComp">
                  <p className="label">DURATION</p>
                  <p className="info">0000</p>
              </div>
          </div>

      </div>

      <div className="favorite">
          <button className="btn favBtn">
              <i className="material-icons">favorite_border</i>
          </button>
      </div>

      <div className="music-info">
          <div id="progress-container">
              <div id="progressbar"></div>
          </div>
      </div>
      <audio src="./music/ukulele.mp3" id="audio"></audio>

      <div className="music-nav">
          <button className="btn musicBtn" id="prev">
            <i className="fas fa-backward"></i>
          </button>
          <button className="btn bigBtn musicBtn" id="play">
            <i className="fas fa-play"></i>
          </button>
          <button className="btn musicBtn" id="next">
              <i className="fas fa-forward"></i>
          </button>
      </div>

      <button className="btn startstop">
          <span>START</span>
      </button>
  </div>
  </div>
);

export default Home;
