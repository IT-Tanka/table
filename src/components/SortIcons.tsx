import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

interface SortIconsProps {
    isActive: boolean;
    sortOrder: 'asc' | 'desc';
    onSortAsc: () => void;
    onSortDesc: () => void;
}

const SortIcons: React.FC<SortIconsProps> = ({ isActive, sortOrder, onSortAsc, onSortDesc }) => (
    <div className="flex flex-col items-center cursor-pointer">
        <FontAwesomeIcon
            icon={faChevronUp}
            className={`text-gray-500 ${isActive ? 'text-blue-500' : ''}`}
            onClick={onSortAsc}
        />
        <FontAwesomeIcon
            icon={faChevronDown}
            className={`text-gray-500 ${isActive ? 'text-blue-500' : ''}`}
            onClick={onSortDesc}
        />
    </div>
);

export default SortIcons;
