import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from './auth';

const Login = () => {
  const [username, setUsername] = useState('');
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const redirectPath = location.state?.path || '/';

  const handleLogin = () => {
    auth.login(username);
    navigate(redirectPath, { replace: true });
  };

  return (
    <div>
      <label>
        Username:{' '}
        <input type='text' onChange={(e) => setUsername(e.target.value)} />
      </label>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
