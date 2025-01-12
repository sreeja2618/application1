import React from 'react';
import { useParams } from 'react-router-dom';
import './MoodRecommendation.css';
import { Link } from 'react-router-dom';

const MoodRecommendation = () => {
  const { mood } = useParams();
  let recommendations = [];

  // Provide recommendations based on the mood
  if (mood === 'demotivated') {
    recommendations = [
      { title: 'Stay Motivated', content: 'Watch this motivational video to boost your energy.' },
      { title: 'Overcoming Demotivation', content: 'Here are some tips to overcome demotivation.' },
    ];
  } else if (mood === 'sad') {
    recommendations = [
      { title: 'Finding Happiness', content: 'Watch a video on how to feel better when sad.' },
      { title: 'How to Cope with Sadness', content: 'Learn techniques to overcome sadness.' },
    ];
  } else if (mood === 'anxious') {
    recommendations = [
      { title: 'Calming Anxiety', content: 'Watch this video to help calm your anxiety.' },
      { title: 'Focus and Breathe', content: 'Try these breathing exercises to ease anxiety.' },
    ];
  } else {
    recommendations = [
      { title: 'You Are Doing Great', content: 'Keep it up! Here’s a motivational video.' },
    ];
  }

  return (
    <div className="mood-recommendations">
      <h1>Recommendations for You</h1>
      <div className="recommendation-list">
        {recommendations.map((rec, index) => (
          <div key={index} className="recommendation-item">
            <h2>{rec.title}</h2>
            <p>{rec.content}</p>
            {/* Here you could embed the video or link to the content */}
            <a href={`https://www.youtube.com/watch?v=dQw4w9WgXcQ`} target="_blank" rel="noopener noreferrer">
              Watch Video
            </a>
          </div>
        ))}
      </div>
      <div className="go-home-link">
        <Link to="/" className="go-home">Go to Home</Link>
      </div>
    </div>
  );
};

export default MoodRecommendation;
