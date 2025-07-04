import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { saveUser, loginUser } from '../utils/auth';
import { Link } from 'react-router-dom';


const Signup = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    const newUser = {username, email, password };
    saveUser(newUser); 

    const user = loginUser(email, password);
    if (user) {
      setIsLoggedIn(true);
      navigate('/');
    }
  };

  return (
    <div className="signup">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <div className="form-group">
          <input
            type="text"
            placeholder=" "
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label>Username</label>
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder=" "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Email</label>
        </div>

        <div className="form-group">
          <input
            type="password"
            placeholder=" "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label>Password</label>
        </div>

        <button type="submit">Signup</button>
      </form>
      <p className="checksign">Already have an account? <Link to='/login'>Login</Link></p>
    </div>
  );
};

export default Signup;
