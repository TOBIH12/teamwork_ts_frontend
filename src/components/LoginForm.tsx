import { MdOutlineMailOutline } from 'react-icons/md';
import { CiLock } from 'react-icons/ci';
import { GoEye } from 'react-icons/go';
import { GoEyeClosed } from 'react-icons/go';
import { FaRegCircle } from 'react-icons/fa';
import { useState, type SubmitEvent } from 'react';
import Button from './Button';
import Input from './Input';
import { emailStyle, loadingButtonStyle, passwordStyle, submitButtonStyle } from './InputStyles';
import { Link } from 'react-router-dom';

type LoginProps = {
  handleLogin: (e: SubmitEvent<HTMLFormElement>) => void;
  loading?: boolean;
  error: string;
  emailValue?: string;
  passwordValue?: string;
  changeInputHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const LoginForm = ({
  handleLogin,
  loading,
  error,
  emailValue,
  passwordValue,
  changeInputHandler,
}: LoginProps) => {
  const [visible, setVisible] = useState(false);

  return (
    <form
      action="submit"
      name="loginForm"
      className="w-full max-w-md mx-auto p-6"
      onSubmit={handleLogin}
    >
      {error && <p className="bg-red-500 w-full text-white text-md">{error}</p>}
      <p className="text-sm text-left font-semibold">Email</p>
      <Input
        formStyle={emailStyle}
        icon={<MdOutlineMailOutline className="text-gray-500 font-semibold" size={25} />}
        type="email"
        name="email"
        value={emailValue}
        onChange={changeInputHandler}
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
        name="password"
        value={passwordValue}
        onChange={changeInputHandler}
        placeholder="Enter Password"
        required
      />

      <Link
        to="/auth/forgot-password"
        className="flex max-w-fit text-sm align-left theme_text mb-2"
      >
        Forgot your password?
      </Link>

      {loading ? (
        <Button
          title="sign in"
          type="submit"
          icon={<FaRegCircle />}
          buttonStyle={loadingButtonStyle}
        />
      ) : (
        <Button
          title="sign in"
          type="submit"
          buttonText="Sign in"
          buttonStyle={submitButtonStyle}
        />
      )}
    </form>
  );
};

export default LoginForm;
