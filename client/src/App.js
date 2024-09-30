import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LogInPage from './pages/LogInPage';
import SignUpPage from './pages/SignUpPage';
import NavBar from './components/layout/NavBar';
import LaunchPage from './pages/LaunchPage';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />  
          <Route path="/login" element={<LogInPage />} /> 
          <Route path="/signup" element={<SignUpPage />} /> 
          <Route path="/launch" element={<LaunchPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
