import { RiGroupLine } from 'react-icons/ri';
import LoginForm from '../components/LoginForm';
import TeamworkLogo from '../components/TeamworkLogo';

const Login = () => {
  return (
    <div className="w-full h-screen flex flex-col md:flex-row justify-center items-center">
      <div className="hidden md:flex md:flex-col w-1/2 h-full p-12 justify-center text-left theme_background text_white">
        <TeamworkLogo
          logoStyle="flex gap-3 items-center mb-10"
          logoIcon={<RiGroupLine className=" bg-gray-200/20 p-3 rounded-2xl" size={55} />}
          logoTextStyle="text-4xl font-semibold"
        />

        <div className="flex flex-col gap-4 align-center mb-4">
          <h1 className="text-[3.5rem] font-medium leading-none">
            Connect with your <br /> colleagues
          </h1>
          <p className="text-[1.25rem] text_gray">
            The internal social network that brings teams <br /> together. Share ideas, celebrate
            wins, and build <br /> stronger connections.
          </p>
        </div>

        <div className="mt-8 flex flex-row items-center">
          <div className="bg-gray-200/20 w-10 h-10 rounded-full border-2 border-gray-200"></div>
          <div className="bg-gray-200/20 w-10 h-10 rounded-full border-2 border-gray-200 ml-[-0.7rem]"></div>
          <div className="bg-gray-200/20 w-10 h-10 rounded-full border-2 border-gray-200 ml-[-0.7rem]"></div>
          <div className="bg-gray-200/20 w-10 h-10 rounded-full border-2 border-gray-200 ml-[-0.7rem]"></div>
          <p className="text_gray mx-4">Join 1,000+ employees already connected</p>
        </div>
      </div>

      <div className="w-full h-full md:w-1/2 flex flex-col items-center text-center p-8 align-center justify-center">
        <TeamworkLogo
          logoStyle="flex gap-3 items-center mb-10 md:hidden"
          logoIcon={
            <RiGroupLine className="theme_background text-white p-3 rounded-2xl" size={50} />
          }
          logoTextStyle="text-3xl font-semibold"
        />

        <h1 className="text-3xl font-semibold mb-3">Welcome back</h1>
        <p className="text-gray-500 text-lg">Sign in to your account to continue</p>

        <LoginForm />

        <p className="text-gray-500 text-md">
          Don't have an account?{' '}
          <small className="theme_text hover:underline">
            Contact an admin for more information.
          </small>
        </p>
      </div>
    </div>
  );
};

export default Login;
