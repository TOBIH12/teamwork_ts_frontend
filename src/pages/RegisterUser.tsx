import { RiGroupLine } from 'react-icons/ri';
import TeamworkLogo from '../components/TeamworkLogo';
import CreateUserForm from '../components/CreateUserForm';
import * as AuthTypes from '../types/authFlow.types';
import { useState, type SubmitEvent } from 'react';
import axiosInstance from '../config/axios.config';
import { toast } from 'react-toastify';

const RegisterUser = () => {
  const userObj: AuthTypes.RegisterUserInput = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    gender: '',
    jobRole: '',
    department: '',
    address: '',
  };
  const [userCred, setUserCred] = useState<AuthTypes.RegisterUserInput>(userObj);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const changeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserCred((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const changeSelectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUserCred((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const genderOptions = ['male', 'female'];
  const jobRoleOptions = ['admin', 'employee'];

  const handleRegister = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await axiosInstance.post('/users/admin/createUser', userCred).then((response) => {
        toast.success(
          'User registered successfully! navigate to the colleagues page to view user profile.',
          {
            position: 'bottom-right',
            autoClose: 5000,
          }
        );
        setLoading(false);
        setUserCred(userObj);
        if (!response.data) {
          setLoading(false);
          return setError("Couldn't register user, please try again");
        }
      });
    } catch (err: any) {
      setLoading(false);
      if (err.response) {
        setError(err.response.data.error);
      } else if (err.request) {
        setError('No response from server, please try again later');
      } else {
        setError(`Error: ${err.message}`);
      }
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center p-4 select-none">
      <TeamworkLogo
        logoStyle="flex gap-2 items-center my-8 cursor-pointer"
        logoIcon={<RiGroupLine className="theme_background text-white p-2 rounded-xl" size={35} />}
        logoTextStyle="text-2xl font-semibold"
      />
      <div className="w-full md:w-md my-2 flex flex-col items-center bg-white border border-gray-300 rounded-xl mx-auto p-6 shadow-lg">
        <h1 className="text-2xl font-semibold mt-4">Register User</h1>
        <p className="text-gray-500 text-md text-center my-4">
          Input neccessary details to register new account.
        </p>

        <CreateUserForm
          handleRegister={handleRegister}
          changeInputHandler={changeInputHandler}
          changeSelectHandler={changeSelectHandler}
          genderOptions={genderOptions}
          jobRoleOptions={jobRoleOptions}
          firstNameValue={userCred.firstName}
          lastNameValue={userCred.lastName}
          emailValue={userCred.email}
          passwordValue={userCred.password}
          departmentValue={userCred.department}
          addressValue={userCred.address}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default RegisterUser;
