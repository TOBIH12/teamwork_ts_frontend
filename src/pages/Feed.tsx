import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { useEffect } from 'react';

const Feed = () => {
  const navigate = useNavigate();
  const { user } = UserAuth();

  useEffect(() => {
    if (!user || user === null) {
      navigate('/auth/login');
    }
  }, [user, navigate]);

  return <div className="page_container ">Feed Page</div>;
};

export default Feed;
