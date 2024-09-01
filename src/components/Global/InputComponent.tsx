import React from 'react';

type InputComponentProps = {
    placeholder: string;
    type: string;
    className?: string;
};

const InputComponent: React.FC<InputComponentProps> = ({ placeholder, type, className}) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className={`border-b-2 border-gray-400 h-10  focus:outline-none focus:border-gray-600 transition-colors duration-300 ${className}`}
        />
    );
};

export default InputComponent;
