import { Link } from 'react-router-dom';
import Button from './Button';
import Input from './Input';
import { emailStyle, passwordStyle, submitButtonStyle } from './InputStyles';
import { IoArrowBack } from 'react-icons/io5';

const CreateUserForm = () => {
  const GENDER_OPTIONS = ['male', 'female'];
  const JOB_ROLE = ['admin', 'employee'];

  return (
    <form action="submit" className="w-full md:max-w-lg mx-auto p-6">
      <p className="text-sm text-left font-semibold">First Name</p>
      <Input formStyle={emailStyle} type="text" placeholder="First Name" required />

      <p className="text-sm text-left font-semibold">Last Name</p>
      <Input formStyle={emailStyle} type="text" placeholder="Last Name" required />

      <p className="text-sm text-left font-semibold">Email</p>
      <Input formStyle={emailStyle} type="email" placeholder="Email" required />

      <p className="text-sm text-left font-semibold">Password</p>
      <Input formStyle={passwordStyle} type="password" placeholder="Password" required />

      <p className="text-sm text-left font-semibold mt-4">Gender</p>
      <select name="gender" id="" className={`w-full ${emailStyle}`} required>
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
      <select name="jobRole" id="" className={`w-full ${emailStyle}`} required>
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
      <Input formStyle={emailStyle} type="text" placeholder="Department" required />

      <p className="text-sm text-left font-semibold">Address</p>
      <Input formStyle={emailStyle} type="text" placeholder="123 Main St" required />

      <Button
        title="register"
        type="submit"
        buttonText="Register"
        buttonStyle={`${submitButtonStyle}`}
      />

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
