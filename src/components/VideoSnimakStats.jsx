import React, { useRef, useState } from 'react';
import '../components/CSS/VideoSnimakStats.css';
import { FaPlay } from 'react-icons/fa';

const VideoSnimakStats = ({ videoSrc }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="video-snimak-container">
      <div className="video-wrapper">
        <video
          ref={videoRef}
          className="video-element"
          src={videoSrc}
          controls={false}
          preload="metadata"
        />
        {!isPlaying && (
          <button className="play-button" onClick={handlePlay}>
            <FaPlay />
          </button>
        )}
      </div>

     <div className="stats-bar">
        <div className="stat with-border">
            <h3>10+</h3>
            <p>Skilled Doctors</p>
        </div>
        <div className="stat with-border">
            <h3>15+</h3>
            <p>Years of Experience</p>
        </div>
        <div className="stat with-border">
            <h3>20K+</h3>
            <p>Appointment Booked</p>
        </div>
        <div className="stat">
            <h3>99%</h3>
            <p>Patient Satisfaction</p>
        </div>
        </div>

    </section>
  );
};

export default VideoSnimakStats;
