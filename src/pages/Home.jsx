import React, { useState, useEffect } from 'react';
import './Home.css'; // See the CSS section below

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Handle window resize to close menu if switching to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) closeMenu();
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`home-container ${isMenuOpen ? 'menu-open' : ''}`}>
      {/* Navbar */}
      {/* <header className="navbar">
        <div className="logo">⚡ MyCodeTime</div>
        <div 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} 
          id="menuToggle" 
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className={isMenuOpen ? 'active' : ''}>
          <a href="#" onClick={closeMenu}>Courses</a>
          <a href="#" onClick={closeMenu}>Problems</a>
          <a href="/compiler.html" onClick={closeMenu}>Compiler</a>
          <a href="/leaderboard.html" onClick={closeMenu}>Leaderboard</a>
          <a href="/create-contest.html" onClick={closeMenu}>Create Contest</a>
          <a href="#" onClick={closeMenu}>Pricing</a>
          <button className="login-btn">Login</button>
        </nav>
      </header> */}

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-left">
          <h1>
            Unlock Your <span>Coding Potential</span><br />
            Learn & Compete in One Platform
          </h1>
          <p>
            Practice real contest problems, compete with friends,
            track rankings, and prepare for interviews.
          </p>
          <div className="hero-actions">
            <button className="primary-btn">Start Coding</button>
            <button className="secondary-btn">View Contests</button>
          </div>
        </div>

        <div className="hero-right">
          <div className="tech-stack-container">
            <div className="central-glow"></div>
            <div className="orbit">
              <div className="icon-card java"><span>☕</span></div>
              <div className="icon-card cpp"><span>C++</span></div>
              <div className="icon-card csharp"><span>C#</span></div>
              <div className="icon-card python"><span>🐍</span></div>
              <div className="icon-card web"><span>JS</span></div>
              <div className="icon-card logic"><span>{"{}"}</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <FeatureCard 
          title="🏆 Coding Contests" 
          desc="Create & join real-time coding contests with leaderboard." 
        />
        <FeatureCard 
          title="🧪 Test Case Engine" 
          desc="Run code securely with multiple hidden test cases." 
        />
        <FeatureCard 
          title="📊 Rankings" 
          desc="Track performance and improve week by week." 
        />
        <FeatureCard 
          title="⚙️ Multi Language" 
          desc="Java, Python, C++, JavaScript supported." 
        />
      </section>

      <footer className="footer">
        © 2026 MyCodeTime. Built for Developers.
      </footer>
      
      {/* Backdrop for mobile menu */}
      {isMenuOpen && <div className="backdrop" onClick={closeMenu}></div>}
    </div>
  );
};

// Sub-component for clean code
const FeatureCard = ({ title, desc }) => (
  <div className="feature-card">
    <h3>{title}</h3>
    <p>{desc}</p>
  </div>
);

export default Home;