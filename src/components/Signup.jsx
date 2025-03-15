import React, { useState } from 'react';
    import { useNavigate } from 'react-router-dom';
    import { useAuth } from '../AuthContext';

    function Signup() {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const { signup } = useAuth();
      const navigate = useNavigate();

      const handleSubmit = async (e) => {
        e.preventDefault();
        const error = await signup({ email, password });
        if (!error) {
          navigate('/profile');
        } else {
          alert(error.message);
        }
      };

      return (
        <div className="auth-form">
          <h2>Signup</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Signup</button>
          </form>
        </div>
      );
    }

    export default Signup;
