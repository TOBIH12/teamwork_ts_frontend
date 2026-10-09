import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Logout = () => {
  const { logout } = UserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    logout();
    navigate('/auth/login');
  });
  return <></>;
};

export default Logout;
