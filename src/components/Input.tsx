import type { ReactNode } from 'react';

type InputProps = {
  formStyle: string;
  type: string;
  value?: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  required?: boolean;
  icon?: ReactNode;
  eyeIcon?: ReactNode;
};
const Input = ({
  type,
  value,
  placeholder,
  onChange,
  name,
  required,
  icon,
  eyeIcon,
  formStyle,
}: InputProps) => {
  return (
    <div className={formStyle}>
      {icon}
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="text-md w-full focus:outline-none"
        required={required}
      />
      {eyeIcon}
    </div>
  );
};

export default Input;
