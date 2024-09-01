import React from 'react';

type DropdownComponentProps = {
    defaultOption?: string;
    options?: string[];
};

const DropdownComponent: React.FC<DropdownComponentProps> = ({
    defaultOption = 'Interest',
    options = ['Interest 1', 'Interest 2', 'Interest 3', 'Interest 4'],
}) => {
    return (
        <select className="border-b-2 border-gray-400  focus:outline-none focus:border-gray-600 transition-colors duration-300">
            <option value="" disabled selected>
                {defaultOption}
            </option>
            {options.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
};

export default DropdownComponent;
