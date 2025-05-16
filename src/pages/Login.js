import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Dummy login check: username 'labelmanager' and password 'password'
    if (username === 'labelmanager' && password === 'password') {
      // Save a dummy token or user role in localStorage
      localStorage.setItem('userRole', 'labelManager');
      navigate('/user/1'); // Redirect to a user profile (dummy id=1)
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f9f7f7' }}>
      <div style={{ width: 320, backgroundColor: 'white', padding: '2rem', borderRadius: 8, boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
        <h2 style={{ marginBottom: 20 }}>Login</h2>
        <div style={{ marginBottom: 10 }}>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            style={{ width: '100%', padding: 8, marginTop: 5, borderRadius: 4, border: '1px solid #ccc' }}
          />
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>Password</label>
          <div style={{ position: 'relative' }}>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={e => setPassword(e.target.value)}
              style={{ width: '100%', padding: 8, marginTop: 5, borderRadius: 4, border: '1px solid #ccc' }}
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              style={{ position: 'absolute', right: 8, top: 10, background: 'none', border: 'none', cursor: 'pointer' }}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>
        {error && <div style={{ color: 'red', marginBottom: 10 }}>{error}</div>}
        <button
          onClick={handleLogin}
          style={{ width: '100%', padding: 10, backgroundColor: '#b77d7d', color: 'white', border: 'none', borderRadius: 4, cursor: 'pointer' }}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;