// src/components/Pagination.tsx
import React from 'react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            onPageChange(page);
        }
    };

    const renderPageNumbers = () => {
        const pages = [];
        const maxPagesToShow = 2;

        // Always show the first page
        if (totalPages > 1 && currentPage > 1) pages.push(1);

        // Show dots before current page
        if (currentPage > maxPagesToShow + 2) pages.push('...');

        // Show previous pages
        for (let i = Math.max(currentPage - maxPagesToShow, 2); i < currentPage; i++) {
            pages.push(i);
        }

        // Show current page
        pages.push(currentPage);

        // Show next pages
        for (let i = currentPage + 1; i <= Math.min(currentPage + maxPagesToShow, totalPages - 1); i++) {
            pages.push(i);
        }

        // Show dots after current page
        if (currentPage < totalPages - maxPagesToShow - 1) pages.push('...');

        // Always show the last page
        if (totalPages > 1 && currentPage < totalPages) pages.push(totalPages);

        return pages.map((page, index) => (
            <button
                key={index}
                onClick={() => page !== '...' && handlePageChange(Number(page))}
                className={`p-2 border rounded mx-1 ${currentPage === page ? 'bg-blue-500 text-white' : ''} ${page === '...' ? 'cursor-default' : ''}`}
                disabled={page === '...'}
            >
                {page}
            </button>
        ));
    };

    return (
        <div className="flex justify-center mt-4">
            <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-2 border rounded mx-1"
            >
                Previous
            </button>
            {renderPageNumbers()}
            <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-2 border rounded mx-1"
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
