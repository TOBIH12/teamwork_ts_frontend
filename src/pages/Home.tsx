import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Home = () => {
  const navigate = useNavigate();
  const { user } = UserAuth();

  useEffect(() => {
    if (!user || user === null) {
      navigate('/auth/login');
    } else if (user && user !== null) {
      navigate('/feed');
    }
  }, [user, navigate]);

  return <></>;
};

export default Home;
