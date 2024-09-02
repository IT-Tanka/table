import React from 'react';

interface RowsPerPageSelectProps {
    value: number;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const RowsPerPageSelect: React.FC<RowsPerPageSelectProps> = ({ value, onChange }) => {
    return (
        <div>
            <span>Show</span>
            <select
                className="ml-2 mr-2 p-1 rounded bg-gray-200 dark:bg-[#1e1e42] text-gray-900 dark:text-gray-100"
                value={value}
                onChange={onChange}
            >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
            </select>
            entries
        </div>

    );
};

export default RowsPerPageSelect;
