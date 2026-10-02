import { RiGroupLine } from 'react-icons/ri';
import TeamworkLogo from '../components/TeamworkLogo';
import CreateUserForm from '../components/CreateUserForm';

const RegisterUser = () => {
  return (
    <div className="w-full h-full flex flex-col items-center p-4 select-none">
      <TeamworkLogo
        logoStyle="flex gap-2 items-center my-8 cursor-pointer"
        logoIcon={<RiGroupLine className="theme_background text-white p-2 rounded-xl" size={35} />}
        logoTextStyle="text-2xl font-semibold"
      />
      <div className="w-full md:w-md my-2 flex flex-col items-center bg-white border border-gray-300 rounded-xl mx-auto p-6 shadow-lg">
        <h1 className="text-2xl font-semibold mt-4">Register User</h1>
        <p className="text-gray-500 text-md text-center my-4">Input neccessary details to register new account.</p>

        <CreateUserForm />
      </div>
    </div>
  );
};

export default RegisterUser;
