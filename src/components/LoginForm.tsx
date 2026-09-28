import { MdOutlineMailOutline } from 'react-icons/md';
import { CiLock } from 'react-icons/ci';
import { GoEye } from 'react-icons/go';
import { GoEyeClosed } from 'react-icons/go';
import { useState } from 'react';
import Button from './Button';
import Input from './Input';
import { emailStyle, passwordStyle, submitButtonStyle } from './InputStyles';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [visible, setVisible] = useState(false);

  return (
    <form className="w-full max-w-md mx-auto p-6">
      <p className="text-sm text-left font-semibold">Email</p>
      <Input
        formStyle={emailStyle}
        icon={<MdOutlineMailOutline className="text-gray-500 font-semibold" size={25} />}
        type="email"
        placeholder="you@email.com"
        required
      />

      <p className="text-sm text-left font-semibold">Password</p>
      <Input
        formStyle={passwordStyle}
        icon={<CiLock className="text-gray-500 font-semibold" size={25} />}
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
        placeholder="Enter Password"
        required
      />

      <a href="/forgot-password" className="flex max-w-fit text-sm align-left theme_text mb-2">
        Forgot your password?
      </a>

      <Link to="/feed">
        <Button title="submit" type="submit" buttonText="Sign in" buttonStyle={submitButtonStyle} />
      </Link>
    </form>
  );
};

export default LoginForm;
