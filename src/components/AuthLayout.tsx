import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const AuthLayout = () => {
  return (
    <>
      <ToastContainer />
      <Outlet />;
    </>
  );
};

export default AuthLayout;
