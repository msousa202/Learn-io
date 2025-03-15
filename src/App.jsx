import React from 'react';
    import { Routes, Route, Link } from 'react-router-dom';
    import { AuthProvider } from './AuthContext';
    import Home from './components/Home';
    import CourseRoadmap from './components/CourseRoadmap';
    import Login from './components/Login';
    import Signup from './components/Signup';
    import Profile from './components/Profile';
    import './App.css';

    function App() {
      return (
        <AuthProvider>
          <div className="App">
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/roadmap">Course Roadmap</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Signup</Link></li>
                <li><Link to="/profile">Profile</Link></li>
              </ul>
            </nav>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/roadmap" element={<CourseRoadmap />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
        </AuthProvider>
      );
    }

    export default App;
