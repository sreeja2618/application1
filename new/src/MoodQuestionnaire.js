import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MoodQuestionnaire.css';

const MoodQuestionnaire = () => {
  const [answers, setAnswers] = useState({
    q1: '',
    q2: '',
    q3: '',
  });

  const navigate = useNavigate();
  const handleClose = () => {
    navigate('/');  // Redirect to the home page
  };

  const handleAnswerChange = (question, answer) => {
    setAnswers((prev) => ({
      ...prev,
      [question]: answer,
    }));
  };

  const handleSubmit = () => {
    let mood = '';

    // Determine mood based on answers
    if (answers.q1 === 'Yes' && answers.q2 === 'No' && answers.q3 === 'No') {
      mood = 'demotivated';
    } else if (answers.q1 === 'No' && answers.q2 === 'Yes' && answers.q3 === 'Yes') {
      mood = 'sad';
    } else if (answers.q1 === 'No' && answers.q2 === 'No' && answers.q3 === 'Yes') {
      mood = 'anxious';
    } else {
      mood = 'happy';
    }

    // Navigate to mood-based recommendations page with the conclusion
    navigate(`/recommendations/${mood}`);
  };

  return (
    <div className="mood-questionnaire">
      <h1>How Are You Feeling Today?</h1>
      
      <div className="question">
        <p>1. Do you feel overwhelmed or exhausted lately?</p>
        <button onClick={() => handleAnswerChange('q1', 'Yes')}>Yes</button>
        <button onClick={() => handleAnswerChange('q1', 'No')}>No</button>
      </div>

      <div className="question">
        <p>2. Do you often feel sad or upset without a clear reason?</p>
        <button onClick={() => handleAnswerChange('q2', 'Yes')}>Yes</button>
        <button onClick={() => handleAnswerChange('q2', 'No')}>No</button>
      </div>

      <div className="question">
        <p>3. Are you struggling to focus or feel anxious?</p>
        <button onClick={() => handleAnswerChange('q3', 'Yes')}>Yes</button>
        <button onClick={() => handleAnswerChange('q3', 'No')}>No</button>
      </div>

      <button className="submit-btn" onClick={handleSubmit}>Submit</button>
      <button className="close-btn" onClick={handleClose}>
        Close
      </button>
    </div>
  );
};

export default MoodQuestionnaire;
