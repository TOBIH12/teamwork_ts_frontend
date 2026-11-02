import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
const Layout = () => {
  return (
    <>
      <NavBar />
      <div className="w-full lg:max-w-[calc(100%-34.3rem)] mt-16 lg:ml-[17%] py-4 px-10 min-h-[100vh] overflow-x-hidden">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
