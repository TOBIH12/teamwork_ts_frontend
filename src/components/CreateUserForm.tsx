import Button from './Button';
import Input from './Input';
import { emailStyle, passwordStyle, submitButtonStyle } from './InputStyles';
import { IoArrowBack } from 'react-icons/io5';

const CreateUserForm = () => {
  const GENDER_OPTIONS = ['other', 'male', 'female'];
  const JOB_ROLE = ['other', 'admin', 'employee'];

  return (
    <form action="submit" className="w-full max-w-lg mx-auto p-6">
      <p className="text-sm text-left font-semibold">First Name</p>
      <Input formStyle={emailStyle} type="text" placeholder="First Name" required />

      <p className="text-sm text-left font-semibold">Last Name</p>
      <Input formStyle={emailStyle} type="text" placeholder="Last Name" required />

      <p className="text-sm text-left font-semibold">Email</p>
      <Input formStyle={emailStyle} type="email" placeholder="Email" required />

      <p className="text-sm text-left font-semibold">Password</p>
      <Input formStyle={passwordStyle} type="password" placeholder="Password" required />
      <p className="text-sm text-left font-semibold mt-4">Gender</p>
      <select name="gender" id="" className={`w-full ${emailStyle}`}>
        {GENDER_OPTIONS.map((gender) => (
          <option key={gender}>{gender}</option>
        ))}
      </select>

      <p className="text-sm text-left font-semibold mt-4">Job Role</p>
      <select name="job role" id="" className={`w-full ${emailStyle}`}>
        {JOB_ROLE.map((role) => (
          <option key={role}>{role}</option>
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

      <a
        href="/feed"
        className="flex text-sm justify-center items-center theme_text my-2 hover:underline"
      >
        <IoArrowBack /> back to feed
      </a>
    </form>
  );
};

export default CreateUserForm;
