import type { ReactNode } from 'react';

type InputProps = {
  formStyle: string;
  type: string;
  placeholder: string;
  required?: boolean;
  icon?: ReactNode;
  eyeIcon?: ReactNode;
};
const Input = ({ type, placeholder, required, icon, eyeIcon, formStyle }: InputProps) => {
  return (
    <div className={formStyle}>
      {icon}
      <input
        type={type}
        placeholder={placeholder}
        className="text-md w-full focus:outline-none"
        required={required}
      />
      {eyeIcon}
    </div>
  );
};

export default Input;
