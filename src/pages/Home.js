import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <section style={{ flex: 1, padding: '3rem', backgroundColor: '#f9f7f7' }}>
        <img src="/logo192.png" alt="Next Music Group Logo" style={{ width: 120, marginBottom: 20 }} />
        <h1 style={{ fontSize: '2.5rem', color: '#b77d7d' }}>Get Started with Next Music Group Distribution Platform</h1>
        <p style={{ fontSize: '1.2rem', color: '#b77d7d', maxWidth: 450 }}>
          A platform offering tools to help independent labels and distributors monetize their music and videos.
        </p>
        <div style={{ marginTop: 40 }}>
          <h3>Trusted by major platforms:</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 10 }}>
            {/* Add partner logos here */}
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/56/Deezer_logo.png" alt="Deezer" style={{ height: 40, borderRadius: 5 }} />
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/70/YouTube_logo_2017.svg" alt="YouTube" style={{ height: 40, borderRadius: 5 }} />
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/12/Amazon_Music_logo.svg" alt="Amazon Music" style={{ height: 40, borderRadius: 5 }} />
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Pandora_logo.svg" alt="Pandora" style={{ height: 40, borderRadius: 5 }} />
            {/* Add more logos as needed */}
          </div>
        </div>
      </section>
      <section style={{ flex: 1, backgroundColor: '#e9edf1', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ width: 320, padding: '2rem', backgroundColor: 'white', borderRadius: 10, boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
          <h2 style={{ marginBottom: 20 }}>Welcome to Next Music Group</h2>
          <Link to="/login" style={{ display: 'block', marginBottom: 10, padding: 10, backgroundColor: '#b77d7d', color: 'white', textAlign: 'center', borderRadius: 5 }}>
            Go to Login
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;