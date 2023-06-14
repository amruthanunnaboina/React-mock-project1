import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './arthmatelogo.png';
import './App.css';
import ReactDOM from 'react-dom';
import './index.css';
function Introduction() {
  return (
    <div style={{ textAlign: 'center' }} className="container">
      <h2 style={{ textAlign: 'center' }}>Introduction</h2>
      <p>
        Arthmate is India's premier embedded fintech platform leveraging technology to provide on-demand seamless deployment of credit across fintechs, digital platforms, and SME anchors. With our at-scale credit exchange platform, we strive to transform digital lending through proprietary tech and advanced analytics solutions.
      </p>
    </div>
  );
}

function Team() {
  return (
    <div className="container">
      <h2 style={{ textAlign: 'center' }} >Team</h2>
      <p>This is the team page of Arthmate.</p>
      <ul>
        <li>Frontend developer</li>
        <li>Backend developer</li>
        <li>Full stack developer</li>
        <li>Analyst</li>
      </ul>
    </div>
  );
}

function WhatWeDo() {
  return (
    <div className="container">
      <h2 style={{ textAlign: 'center' }}>What We Do</h2>
      <p>This is the "What We Do" page of Arthmate.</p>
      <ul>
        <li>We work</li>
        <li>We play</li>
        <li>We eat</li>
        <li>We help</li>
        <li>We understand</li>
      </ul>
    </div>
  );
}

function App() {
  const [activeTab, setActiveTab] = useState('');

  const handleTabChange = (tab) => {
    setActiveTab(activeTab === tab ? '' : tab);
  };

  return (
    <Router>
      <div className="app-container">
        <div className="header" style={{ textAlign: 'center' }}>
          <img src={logo} alt="Arthmate Logo" className="logo" />
        </div>
        <h2 style={{ textAlign: 'center' }} className="website-heading">ARTHMATE OFFICIAL WEBSITE</h2>
        <div className="gap"></div>
        <div className="box-container">
          <div
            className={`box ${activeTab === 'introduction' ? 'active' : ''}`}
            onClick={() => handleTabChange('introduction')}
          >
            <button className="box-button" style={{ textAlign: 'center' }}>Introduction</button>
            {activeTab === 'introduction' && <Introduction />}
          </div>
          <div
            className={`box ${activeTab === 'team' ? 'active' : ''}`}
            onClick={() => handleTabChange('team')}
          >
            <button className="box-button" style={{ textAlign: 'center' }}>Team</button>
            {activeTab === 'team' && <Team />}
          </div>
          <div
            className={`box ${activeTab === 'about' ? 'active' : ''}`}
            onClick={() => handleTabChange('about')}
          >
            <button className="box-button" style={{ textAlign: 'center' }}>What We Do</button>
            {activeTab === 'about' && <WhatWeDo />}
          </div>
        </div>

        <Routes>
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/team" element={<Team />} />
          <Route path="/about" element={<WhatWeDo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
ReactDOM.render(
  <React.StrictMode>
    <div style={{ backgroundColor: 'skyblue', minHeight: '100vh' }}>
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
