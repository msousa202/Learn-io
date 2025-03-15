import React from 'react';
    import { useNavigate } from 'react-router-dom';
    import { useAuth } from '../AuthContext';

    function Profile() {
      const { user, logout } = useAuth();
      const navigate = useNavigate();

      const handleLogout = async () => {
        await logout();
        navigate('/login');
      };

      if (!user) {
        return <div>Please log in to view your profile.</div>;
      }

      return (
        <div className="profile-section">
          <h2>Profile</h2>
          <p>Email: {user.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      );
    }

    export default Profile;
