import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

interface SearchInputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ value, onChange }) => {
    return (
        <div className="relative">
            <input
                type="text"
                placeholder="Search..."
                className="p-2 pl-10 pr-2 border rounded"
                value={value}
                onChange={onChange}
            />
            <FontAwesomeIcon
                icon={faSearch}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            />
        </div>

    );
};

export default SearchInput;
