import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const userName = "User";
  const motivationalQuote = "Believe in yourself! Every day is a new beginning.";

  return (
    <div className="home">
      <div className="welcome-section">
        <h1 className="welcome-title">Welcome Back, {userName}!</h1>
        <p className="motivational-quote">"{motivationalQuote}"</p>
      </div>

      <div className="navigation">
        <Link to="/daily-journal" className="nav-link">Daily Journal</Link>
        <Link to="/stress-relief" className="nav-link">Stress Relief</Link>
        <Link to="/questionnaire" className="nav-link">Take the Mood Survey</Link>
      </div>
    </div>
  );
};

export default Home;
