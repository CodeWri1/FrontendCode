import React from 'react';
import './Home.css';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <h1>Welcome to Our Lottery App</h1>
        <p>Test your luck and win big!</p>
        <button className="get-started-btn">Get Started</button>
      </header>
      <main className="main-content">
        <section className="features">
          <div className="feature">
            <i className="fas fa-money-bill-wave"></i>
            <h2>Win Prizes</h2>
            <p>Play and stand a chance to win amazing prizes.</p>
          </div>
          <div className="feature">
            <i className="fas fa-lock"></i>
            <h2>Secure & Fair</h2>
            <p>Our lottery is secure and transparent.</p>
          </div>
          <div className="feature">
            <i className="fas fa-heart"></i>
            <h2>Support a Cause</h2>
            <p>Part of the proceeds go to a charitable cause.</p>
          </div>
        </section>
        <div className="call-to-action">
          <h2>Ready to try your luck?</h2>
          <button className="play-now-btn">
          <Link to="/create-tiket">
            Play Now
            </Link>
            </button>
        </div>
      </main>
      <footer className="footer">
        <p>&copy; 2023 Lottery App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
