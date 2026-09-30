import { RiGroupLine } from 'react-icons/ri';
import TeamworkLogo from '../components/TeamworkLogo';
import CreateUserForm from '../components/CreateUserForm';

const RegisterUser = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center select-none">
      <TeamworkLogo
        logoStyle="flex gap-2 items-center mt-8 cursor-pointer"
        logoIcon={<RiGroupLine className="theme_background text-white p-2 rounded-xl" size={30} />}
        logoTextStyle="text-xl font-semibold"
      />

      <h1 className="text-3xl font-semibold my-2">Register User</h1>
      <p className="text-gray-500 text-lg">Input neccessary details to register new account.</p>

      <CreateUserForm />
    </div>
  );
};

export default RegisterUser;
