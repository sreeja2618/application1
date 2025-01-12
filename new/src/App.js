
import './App.css';
import DailyJournal from './DailyJournal';
import Home from './Home';
import StressRelief from './StressRelief';
import MoodQuestionnaire from './MoodQuestionnaire';
import MoodRecommendation from './MoodRecommendation';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/daily-journal" element={<DailyJournal />} /> 
        
        <Route path="/stress-relief" element={<StressRelief />} />
        <Route path="/questionnaire" element={<MoodQuestionnaire />} />
        <Route path="/recommendations/:mood" element={<MoodRecommendation />} />
      </Routes>
    </Router>
  );
}

export default App;
