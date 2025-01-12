import React from 'react';
import './StressRelief.css'; // You can create custom CSS for styling this page
import {Link} from "react-router-dom";
const StressRelief = () => {
  return (
    <div className="stress-relief">
      <h1>Stress Relief Activities</h1>
      <p>Here are some activities to help relieve stress:</p>
      <ul>
        <li>Deep Breathing Exercises</li>
        <li>Short Walk in Nature</li>
        <li>Listen to Relaxing Music</li>
        <li>Stretching and Yoga</li>
        <li>Meditation</li>
      </ul>
      <p>Remember, self-care is essential for maintaining a healthy mind and body!</p>
      <div className="navigation">
        <Link to="/" className="home-link">Back to Home</Link>
        
      </div>
    </div>
  );
};

export default StressRelief;
