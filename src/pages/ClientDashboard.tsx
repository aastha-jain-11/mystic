import React, { useState } from 'react';
import { User, Calendar, FileText, Settings, Lock, Star, Clock, CreditCard, Download } from 'lucide-react';
import SacredGeometry from '../components/SacredGeometry';

const ClientDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });

  // Mock client data
  const clientData = {
    name: 'Sarah Chen',
    email: 'sarah.chen@email.com',
    memberSince: '2023-06-15',
    totalSessions: 4,
    nextSession: '2024-02-15 10:00 AM',
    lifePathNumber: 7,
    currentPersonalYear: 3
  };

  const sessionHistory = [
    {
      id: 1,
      date: '2024-01-15',
      type: 'Life Path Reading',
      duration: '60 min',
      status: 'Completed',
      recording: true,
      report: true
    },
    {
      id: 2,
      date: '2023-12-10',
      type: 'Career Guidance',
      duration: '45 min',
      status: 'Completed',
      recording: true,
      report: true
    },
    {
      id: 3,
      date: '2023-10-22',
      type: 'Relationship Compatibility',
      duration: '45 min',
      status: 'Completed',
      recording: false,
      report: true
    },
    {
      id: 4,
      date: '2023-08-05',
      type: 'Personal Year Forecast',
      duration: '30 min',
      status: 'Completed',
      recording: true,
      report: true
    }
  ];

  const upcomingInsights = [
    {
      title: 'Your February 2024 Personal Month',
      description: 'Focused on communication and creativity - perfect time for new projects',
      date: '2024-02-01'
    },
    {
      title: 'Mercury Retrograde Impact',
      description: 'How the upcoming retrograde affects your Life Path 7 energy',
      date: '2024-02-10'
    },
    {
      title: 'Career Opportunity Window',
      description: 'Your numbers indicate a powerful career shift opportunity in March',
      date: '2024-03-01'
    }
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - in real app, this would validate credentials
    if (loginForm.email && loginForm.password) {
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoginForm({ email: '', password: '' });
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen py-20 flex items-center justify-center">
        <div className="max-w-md w-full mx-4">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 relative overflow-hidden">
            <SacredGeometry className="absolute -top-4 -right-4 text-accent-400" size="md" />
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <Lock className="h-16 w-16 text-accent-400 mx-auto mb-4" />
                <h1 className="text-3xl font-bold text-white mb-2">Client Portal</h1>
                <p className="text-white/80">Access your personal numerology dashboard</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label className="block text-white/90 text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={loginForm.email}
                    onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent backdrop-blur-sm"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-white/90 text-sm font-medium mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    required
                    value={loginForm.password}
                    onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent backdrop-blur-sm"
                    placeholder="Enter your password"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Sign In to Dashboard
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-white/60 text-sm">
                  Demo credentials: any email + any password
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 text-center">
                <p className="text-white/80 text-sm">
                  Don't have an account yet?
                </p>
                <button className="text-accent-400 hover:text-accent-300 font-medium mt-2">
                  Contact us to get started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 animate-fade-in-up">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Welcome back,
              <span className="bg-gradient-to-r from-accent-400 to-primary-400 bg-clip-text text-transparent block">
                {clientData.name}
              </span>
            </h1>
            <p className="text-white/80">Your personal numerology portal</p>
          </div>
          
          <button
            onClick={handleLogout}
            className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-lg border border-white/20 transition-colors mt-4 md:mt-0"
          >
            Sign Out
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 bg-white/10 backdrop-blur-md rounded-2xl p-2 border border-white/20">
            {[
              { id: 'overview', label: 'Overview', icon: User },
              { id: 'sessions', label: 'Sessions', icon: Calendar },
              { id: 'reports', label: 'Reports', icon: FileText },
              { id: 'insights', label: 'Insights', icon: Star },
              { id: 'settings', label: 'Settings', icon: Settings }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-accent-500 text-white'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                <tab.icon className="h-4 w-4 mr-2" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8 animate-fade-in-up">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/60 text-sm">Life Path Number</p>
                    <p className="text-3xl font-bold text-accent-400">{clientData.lifePathNumber}</p>
                  </div>
                  <Star className="h-12 w-12 text-accent-400/30" />
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/60 text-sm">Total Sessions</p>
                    <p className="text-3xl font-bold text-primary-400">{clientData.totalSessions}</p>
                  </div>
                  <Calendar className="h-12 w-12 text-primary-400/30" />
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/60 text-sm">Personal Year</p>
                    <p className="text-3xl font-bold text-secondary-400">{clientData.currentPersonalYear}</p>
                  </div>
                  <Clock className="h-12 w-12 text-secondary-400/30" />
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/60 text-sm">Member Since</p>
                    <p className="text-lg font-bold text-white">Jun 2023</p>
                  </div>
                  <User className="h-12 w-12 text-white/30" />
                </div>
              </div>
            </div>

            {/* Next Session */}
            <div className="bg-gradient-to-r from-accent-500/20 to-primary-500/20 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Upcoming Session</h3>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/90 text-lg">Personal Year Deep Dive</p>
                  <p className="text-accent-300">February 15, 2024 at 10:00 AM</p>
                  <p className="text-white/70 text-sm mt-2">60 minutes • Online via Zoom</p>
                </div>
                <div className="text-right">
                  <button className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-2 rounded-lg font-medium transition-colors mb-2">
                    Join Session
                  </button>
                  <p className="text-white/60 text-sm">Reschedule if needed</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Sessions Tab */}
        {activeTab === 'sessions' && (
          <div className="animate-fade-in-up">
            <h2 className="text-3xl font-bold text-white mb-8">Session History</h2>
            <div className="space-y-4">
              {sessionHistory.map((session) => (
                <div
                  key={session.id}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-xl font-semibold text-white">{session.type}</h3>
                      <p className="text-accent-300">{session.date}</p>
                      <p className="text-white/70 text-sm">{session.duration} • {session.status}</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {session.recording && (
                        <button className="bg-primary-500/30 hover:bg-primary-500/40 text-primary-200 px-4 py-2 rounded-lg text-sm transition-colors flex items-center">
                          <Download className="h-4 w-4 mr-2" />
                          Recording
                        </button>
                      )}
                      {session.report && (
                        <button className="bg-secondary-500/30 hover:bg-secondary-500/40 text-secondary-200 px-4 py-2 rounded-lg text-sm transition-colors flex items-center">
                          <FileText className="h-4 w-4 mr-2" />
                          Report
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Insights Tab */}
        {activeTab === 'insights' && (
          <div className="animate-fade-in-up">
            <h2 className="text-3xl font-bold text-white mb-8">Personalized Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingInsights.map((insight, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                  <Star className="h-8 w-8 text-accent-400 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-3">{insight.title}</h3>
                  <p className="text-white/80 mb-4">{insight.description}</p>
                  <p className="text-accent-300 text-sm">{insight.date}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className="animate-fade-in-up">
            <h2 className="text-3xl font-bold text-white mb-8">Account Settings</h2>
            <div className="max-w-2xl">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-6">Profile Information</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-white/90 text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      value={clientData.name}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent backdrop-blur-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-white/90 text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      value={clientData.email}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent backdrop-blur-sm"
                    />
                  </div>
                  <button className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                    Update Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClientDashboard;