import { Link } from 'react-router-dom';
import TeamworkLogo from './TeamworkLogo';
import { RiGroupLine, RiMenu3Fill } from 'react-icons/ri';
import { CiSearch, CiSettings } from 'react-icons/ci';
import { FaPlus } from 'react-icons/fa6';
import { IoMdNotificationsOutline, IoIosLogOut, IoMdClose } from 'react-icons/io';
import { MdPerson } from 'react-icons/md';
import { createButtonStyle, searchStyle } from './InputStyles';
import Input from './Input';
import Button from './Button';
import { PreviewIcon } from './ProfileIcon';
import SarahWash from '../assets/avatar1.jpg';
import MenuOption from './MenuOption';
import LeftNav from './LeftNav';
import RightNav from './RightNav';
import { useState } from 'react';

const NavBar = () => {
  const [menuClicked, setMenuClicked] = useState<boolean>(false);

  const handleMenuClick = () => {
    setMenuClicked((prev) => !prev);
  };

  return (
    <>
      <div className="relative w-full items-center overflow-hidden z-10">
        <div className="fixed top-0 w-full flex items-center px-5 lg:px-13 py-3 justify-between border-b border-gray-200 bg-white/80 backdrop-blur-md">
          <Link
            to={'/feed'}
            className="hover:scale-105 transition duration-200"
            onClick={() => setMenuClicked(false)}
          >
            <TeamworkLogo
              logoStyle="flex gap-2 items-center"
              logoIcon={
                <RiGroupLine className="theme_background text-white p-2 rounded-xl" size={37} />
              }
              logoTextStyle="hidden md:block text-2xl font-semibold"
            />
          </Link>

          <Input
            formStyle={`${searchStyle} hidden lg:flex`}
            icon={<CiSearch />}
            placeholder="Search articles, GIFs, colleagues..."
            type="text"
          />

          <div className="flex items-center gap-3 h-full">
            <Button
              type="button"
              title="Create"
              icon={<FaPlus />}
              buttonText={`Create`}
              buttonStyle={`${createButtonStyle}`}
            />

            <div
              className="relative flex h-full cursor-pointer hover:bg-[#27aa83]/20 p-2 rounded-xl transition duration-200"
              onClick={() => setMenuClicked(false)}
            >
              <IoMdNotificationsOutline className="text-xl text-gray-500 h-full" />
              <span className="absolute bottom-5 left-6 items-center bg-red-500 text-[0.7rem] text_white w-4 h-4 px-1 rounded-full select-none">
                4
              </span>
            </div>

            <MenuOption
              icon={<PreviewIcon source={SarahWash} alt="SW" />}
              options={
                <>
                  <div className="flex flex-col w-full border-b border-gray-200 py-2 px-4">
                    <h1>Sarah Washington</h1>
                    <p className="text-sm text-gray-500 mt-0">sarahwashington@company.com</p>
                  </div>

                  <ul className="flex flex-col gap-1 py-1 px-2 border-b border-gray-200">
                    <Link
                      to={'/profile'}
                      className="flex w-full p-1 items-center align-center gap-2 rounded-xl font-light hover:bg-[#27aa83]/20 hover:text-[#27aa83] transition duration-200"
                    >
                      <MdPerson />
                      Profile
                    </Link>
                    <Link
                      to={'/settings'}
                      className="flex w-full p-1 items-center align-center gap-2 rounded-xl font-light hover:bg-[#27aa83]/20 hover:text-[#27aa83] transition duration-200"
                    >
                      <CiSettings />
                      Settings
                    </Link>
                  </ul>

                  <div className="flex flex-col py-1 px-2">
                    <Link
                      to={'/logout'}
                      className="flex w-full p-1 items-center align-center gap-2 rounded-xl font-light text-red-600 hover:bg-[#27aa83]/20 hover:text-[#27aa83] transition duration-200"
                    >
                      <IoIosLogOut />
                      Logout
                    </Link>
                  </div>
                </>
              }
              style="right-2"
            />

            {!menuClicked ? (
              <RiMenu3Fill
                className="block lg:hidden text-4xl text-gray-500 hover:bg-[#27aa83]/20 p-2 rounded-xl transition duration-200 cursor-pointer"
                onClick={handleMenuClick}
              />
            ) : (
              <IoMdClose
                className="block lg:hidden text-4xl text-gray-500 hover:bg-[#27aa83]/20 p-2 rounded-xl transition duration-200 cursor-pointer"
                onClick={handleMenuClick}
              />
            )}
            <div>
              {
                <LeftNav
                  containerClass={`lg:hidden flex ${menuClicked ? 'left-0' : 'left-[100%]'} mt-8 w-full transition-all duration-200 ease-in-out`}
                  handleMenuClick={handleMenuClick}
                />
              }
            </div>
          </div>
        </div>
      </div>

      <LeftNav containerClass="hidden lg:flex mt-16 min-w-[17%]" />
      <RightNav />
    </>
  );
};

export default NavBar;
