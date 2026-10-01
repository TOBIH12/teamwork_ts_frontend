import { RiGroupLine } from 'react-icons/ri';
import TeamworkLogo from '../components/TeamworkLogo';
import Input from '../components/Input';
import { emailStyle, submitButtonStyle } from '../components/InputStyles';
import { MdOutlineMailOutline } from 'react-icons/md';
import Button from '../components/Button';
import { useState } from 'react';
import { IoArrowBack } from 'react-icons/io5';

const ForgotPassword = () => {
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-2 p-4">
      <TeamworkLogo
        logoStyle="flex gap-2 items-center my-8 cursor-pointer"
        logoIcon={<RiGroupLine className="theme_background text-white p-2 rounded-xl" size={37} />}
        logoTextStyle="text-2xl font-semibold"
      />

      {!submitted && (
        <div className="w-full md:w-md bg-white flex flex-col p-4 rounded-xl shadow-md">
          <p className="text-lg font-medium text-center mb-3">Input your email address below.</p>

          <form action="submit" onSubmit={handleSubmit}>
            <p className="text-sm text-left font-semibold">Email</p>
            <Input
              formStyle={emailStyle}
              icon={<MdOutlineMailOutline className="text-gray-500 font-semibold" size={25} />}
              type="email"
              placeholder="you@email.com"
              required
            />

            <Button
              title="submit"
              type="submit"
              buttonText="Submit"
              buttonStyle={submitButtonStyle}
            />
          </form>
        </div>
      )}

      {submitted && (
        <div className="w-full md:w-md bg-white flex flex-col items-center p-4 rounded-xl shadow-md">
          <p className="text-md text-center font-medium">
            A reset password link has been sent to your email address, check your mail box and
            follow the instructions.
          </p>

          <a
            href="/auth/login"
            className="w-fit flex text-sm items-center theme_text my-2 hover:underline"
          >
            <IoArrowBack /> back to login
          </a>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
