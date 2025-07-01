import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BookingPage from './pages/BookingPage';
import AchievementsPage from './pages/AchievementsPage';
import BlogPage from './pages/BlogPage';
import ClientDashboard from './pages/ClientDashboard';
import Footer from './components/Footer';
import StarField from './components/StarField';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-cosmic-gradient relative overflow-hidden">
        <StarField />
        <div className="relative z-10">
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/achievements" element={<AchievementsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/dashboard" element={<ClientDashboard />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;