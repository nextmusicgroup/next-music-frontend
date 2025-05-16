import { useState } from 'react';

export default function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here or redirect
    alert(`Logging in with ${username}`);
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>
      {/* Left side: Info */}
      <div style={{ flex: 1, backgroundColor: '#f7f3f5', padding: '4rem' }}>
        <img src="/logo.png" alt="Next Music Group Logo" style={{ width: 120, marginBottom: 40 }} />
        <h1 style={{ color: '#bba8aa', fontSize: '3rem', lineHeight: 1.2 }}>
          Get Started with Next Music Group Distribution Platform
        </h1>
        <p style={{ color: '#bba8aa', marginTop: 20, fontSize: '1.1rem' }}>
          A platform offering tools to help independent artists, labels, and distributors monetize their music and videos.
        </p>
        {/* Add your partner logos or footer here */}
      </div>

      {/* Right side: Login */}
      <div
        style={{
          flexBasis: '400px',
          backgroundColor: '#f0f3f7',
          padding: '3rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <h2 style={{ marginBottom: 20, fontWeight: 'bold' }}>Welcome to Next Music Group</h2>
        <form onSubmit={handleLogin}>
          <label htmlFor="username" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
            style={{
              width: '100%',
              padding: '10px',
              margin: '8px 0 16px',
              borderRadius: 4,
              border: '1px solid #ccc',
              fontSize: '1rem',
            }}
          />

          <label htmlFor="password" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
            Password
          </label>
          <div style={{ position: 'relative', marginBottom: '24px' }}>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: 4,
                border: '1px solid #ccc',
                fontSize: '1rem',
              }}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#666',
                fontSize: '0.9rem',
              }}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: '#bba8aa',
              color: '#fff',
              border: 'none',
              borderRadius: 4,
              fontWeight: 'bold',
              fontSize: '1rem',
              cursor: 'pointer',
              opacity: username && password ? 1 : 0.6,
            }}
            disabled={!username || !password}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
