import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const dummyUser = {
  id: 1,
  fullName: 'John Doe',
  email: 'john@example.com',
  mobileNumber: '+1234567890',
  address: '123 Street, City',
  country: 'India',
  paypalEmail: 'john.paypal@example.com',
  bankTransferInfo: 'Bank XYZ, Account No: 123456789',
  password: 'password123',
  kycVerified: false,
  kycExpiry: '2025-12-31',
  status: 'active', // active, suspended, banned
};

const UserProfile = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user data from API or local DB here
    setUser(dummyUser);
  }, [userId]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUser(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSave = () => {
    // Save data to backend or local DB here
    setEditMode(false);
    alert('User data saved!');
  };

  const handleSuspendToggle = () => {
    setUser(prev => ({
      ...prev,
      status: prev.status === 'suspended' ? 'active' : 'suspended',
    }));
  };

  const handleBanToggle = () => {
    setUser(prev => ({
      ...prev,
      status: prev.status === 'banned' ? 'active' : 'banned',
    }));
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div style={{ maxWidth: 600, margin: '2rem auto', padding: 20, backgroundColor: 'white', borderRadius: 10, boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>User Profile: {user.fullName}</h2>
        <button onClick={() => setEditMode(!editMode)} style={{ cursor: 'pointer' }}>
          {editMode ? 'Cancel' : 'Edit'}
        </button>
      </div>

      <form onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
        <fieldset disabled={!editMode} style={{ border: 'none' }}>
          <h3>Personal Info</h3>
          <label>Full Name</label><br/>
          <input type="text" name="fullName" value={user.fullName} onChange={handleChange} required style={{ width: '100%', padding: 8, marginBottom: 10 }} /><br/>

          <label>Email</label><br/>
          <input type="email" name="email" value={user.email} onChange={handleChange} required style={{ width: '100%', padding: 8, marginBottom: 10 }} /><br/>

          <label>Mobile Number</label><br/>
          <input type="tel" name="mobileNumber" value={user.mobileNumber} onChange={handleChange} required style={{ width: '100%', padding: 8, marginBottom: 10 }} /><br/>

          <label>Address</label><br/>
          <textarea name="address" value={user.address} onChange={handleChange} required style={{ width: '100%', padding: 8, marginBottom: 10 }} /><br/>

          <label>Country</label><br/>
          <select name="country" value={user.country} onChange={handleChange} required style={{ width: '100%', padding: 8, marginBottom: 10 }}>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="Other">Other</option>
          </select><br/>

          <h3>Payout Details</h3>
          <label>PayPal Email</label><br/>
          <input type="email" name="paypalEmail" value={user.paypalEmail} onChange={handleChange} style={{ width: '100%', padding: 8, marginBottom: 10 }} /><br/>

          {user.country === 'India' && (
            <>
              <label>Bank Transfer Info</label><br/>
              <textarea name="bankTransferInfo" value={user.bankTransferInfo} onChange={handleChange} style={{ width: '100%', padding: 8, marginBottom: 10 }} /><br/>
            </>
          )}

          <h3>Login</h3>
          <label>Password</label><br/>
          <input type="password" name="password" value={user.password} onChange={handleChange} required style={{ width: '100%', padding: 8, marginBottom: 10 }} /><br/>

          <h3>KYC Setup</h3>
          <label>
            <input type="checkbox" name="kycVerified" checked={user.kycVerified} onChange={handleChange} disabled />
            {' '}KYC Verified (editable by admin later)
          </label><br/>

          <label>KYC Expiry</label><br/>
          <input type="date" name="kycExpiry" value={user.kycExpiry} onChange={handleChange} disabled style={{ width: '100%', padding: 8, marginBottom: 10 }} /><br/>
        </fieldset>

        {editMode && (
          <button type="submit" style={{ padding: 10, backgroundColor: '#b77d7d', color: 'white', border: 'none', borderRadius: 5, cursor: 'pointer' }}>
            Save Changes
          </button>
        )}
      </form>

      <div style={{ marginTop: 20 }}>
        <h3>Status: {user.status.charAt(0).toUpperCase() + user.status.slice(1)}</h3>
        {editMode && (
          <div style={{ display: 'flex', gap: 10 }}>
            <button onClick={handleSuspendToggle} style={{ padding: 10, cursor: 'pointer' }}>
              {user.status === 'suspended' ? 'Reactivate Account' : 'Suspend Account'}
            </button>
            <button onClick={handleBanToggle} style={{ padding: 10, cursor: 'pointer' }}>
              {user.status === 'banned' ? 'Unban Account' : 'Ban Account'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;