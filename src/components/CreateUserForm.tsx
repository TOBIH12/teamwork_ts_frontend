import { Link } from 'react-router-dom';
import Button from './Button';
import Input from './Input';
import { emailStyle, loadingButtonStyle, passwordStyle, submitButtonStyle } from './InputStyles';
import { IoArrowBack } from 'react-icons/io5';
import { useState, type SubmitEvent } from 'react';
import { FaRegCircle } from 'react-icons/fa';
import { GoEye, GoEyeClosed } from 'react-icons/go';

type RegisterProps = {
  handleRegister: (e: SubmitEvent<HTMLFormElement>) => void;
  error: string;
  loading?: boolean;
  firstNameValue?: string;
  lastNameValue?: string;
  emailValue?: string;
  passwordValue?: string;
  departmentValue?: string;
  addressValue?: string;
  changeInputHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  changeSelectHandler?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  genderOptions?: string[];
  jobRoleOptions?: string[];
};

const CreateUserForm = ({
  handleRegister,
  error,
  loading,
  firstNameValue,
  lastNameValue,
  emailValue,
  passwordValue,
  departmentValue,
  addressValue,
  changeInputHandler,
  changeSelectHandler,
  genderOptions,
  jobRoleOptions,
}: RegisterProps) => {
  const GENDER_OPTIONS = genderOptions as string[];
  const JOB_ROLE = jobRoleOptions as string[];
  const [visible, setVisible] = useState(false);

  return (
    <form
      action="submit"
      name="createUserForm"
      className="w-full md:max-w-lg"
      onSubmit={handleRegister}
    >
      {error && <p className="bg-red-500 w-full text-white text-md">{error}</p>}
      <p className="text-sm text-left font-semibold">First Name</p>
      <Input
        formStyle={emailStyle}
        type="text"
        placeholder="First Name"
        name="firstName"
        value={firstNameValue}
        onChange={changeInputHandler}
        required
      />

      <p className="text-sm text-left font-semibold">Last Name</p>
      <Input
        formStyle={emailStyle}
        type="text"
        placeholder="Last Name"
        name="lastName"
        value={lastNameValue}
        onChange={changeInputHandler}
        required
      />

      <p className="text-sm text-left font-semibold">Email</p>
      <Input
        formStyle={emailStyle}
        type="email"
        placeholder="Email"
        name="email"
        value={emailValue}
        onChange={changeInputHandler}
        required
      />

      <p className="text-sm text-left font-semibold">Password</p>
      <Input
        formStyle={passwordStyle}
        eyeIcon={
          visible ? (
            <GoEye
              className="text-gray-500 font-semibold cursor-pointer"
              size={25}
              onClick={() => setVisible(false)}
            />
          ) : (
            <GoEyeClosed
              className="text-gray-500 font-semibold cursor-pointer"
              size={25}
              onClick={() => setVisible(true)}
            />
          )
        }
        type={visible ? 'text' : 'password'}
        name="password"
        value={passwordValue}
        onChange={changeInputHandler}
        placeholder="Enter Password"
        required
      />

      <p className="text-sm text-left font-semibold mt-4">Gender</p>
      <select
        name="gender"
        id=""
        className={`w-full ${emailStyle}`}
        onChange={changeSelectHandler}
        required
      >
        <option value="" disabled selected>
          Select gender
        </option>
        {GENDER_OPTIONS.map((gender) => (
          <option key={gender} value={gender}>
            {gender}
          </option>
        ))}
      </select>

      <p className="text-sm text-left font-semibold mt-4">Job Role</p>
      <select
        name="jobRole"
        id=""
        className={`w-full ${emailStyle}`}
        onChange={changeSelectHandler}
        required
      >
        <option value="" disabled selected>
          Select job role
        </option>
        {JOB_ROLE.map((role) => (
          <option key={role} value={role}>
            {role}
          </option>
        ))}
      </select>

      <p className="text-sm text-left font-semibold">Department</p>
      <Input
        formStyle={emailStyle}
        type="text"
        placeholder="Department"
        name="department"
        value={departmentValue}
        onChange={changeInputHandler}
        required
      />

      <p className="text-sm text-left font-semibold">Address</p>
      <Input
        formStyle={emailStyle}
        type="text"
        placeholder="123 Main St"
        name="address"
        value={addressValue}
        onChange={changeInputHandler}
        required
      />

      {loading ? (
        <Button
          title="register"
          type="submit"
          icon={<FaRegCircle />}
          buttonStyle={loadingButtonStyle}
        />
      ) : (
        <Button
          title="register"
          type="submit"
          buttonText="Register"
          buttonStyle={`${submitButtonStyle}`}
        />
      )}

      <Link
        to="/feed"
        className="flex text-sm justify-center items-center theme_text my-2 hover:underline"
      >
        <IoArrowBack /> back to feed
      </Link>
    </form>
  );
};

export default CreateUserForm;
