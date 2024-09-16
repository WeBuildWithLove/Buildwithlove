import React from "react";

type InputComponentProps = {
  value: string;
  placeholder: string;
  type: string;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputComponent: React.FC<InputComponentProps> = ({
  placeholder,
  type,
  className,
  onChange,
  value,
}) => {
  return (
    <input
      value={value}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      className={`border-b-2 border-gray-400 h-16  focus:outline-none focus:border-gray-600 transition-colors duration-300 ${className}`}
    />
  );
};

export default InputComponent;
