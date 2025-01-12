import React from 'react';
import './DailyJournal.css';  // If you have any specific styling for this page
import {Link} from "react-router-dom";
const DailyJournal = () => {
  return (
    <div className="daily-journal">
      <h1>Daily Journal</h1>
      <p>Write your thoughts and feelings here.</p>
      <textarea placeholder="Start writing your journal..." rows="10" cols="50"></textarea>
      <div className="navigation">
        <Link to="/" className="home-link">Back to Home</Link>
        
      </div>
    </div>
  );
};

export default DailyJournal;
