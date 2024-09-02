import React, { useState } from 'react';
import data from '../../data/data.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import SortIcons from '../components/SortIcons';
import SearchInput from '../components/SearchInput';
import RowsPerPageSelect from '../components/RowsPerPageSelect';
import Pagination from '../components/Pagination';

type Product = {
    "Tracking ID": number;
    "Product Image": string;
    "Product Name": string;
    Customer: string;
    Date: string;
    Amount: number;
    "Payment Mode": string;
    Status: string;
};

const Table: React.FC = () => {
    const [products, setProducts] = useState<Product[]>(data);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [sortColumn, setSortColumn] = useState<string>('');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
    const [rowsPerPage, setRowsPerPage] = useState<number>(5);
    const [currentPage, setCurrentPage] = useState<number>(1);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    const filteredProducts = products.filter(product =>
        product["Product Name"].toLowerCase().includes(searchTerm) ||
        product.Customer.toLowerCase().includes(searchTerm) ||
        product.Date.toLowerCase().includes(searchTerm) ||
        product["Payment Mode"].toLowerCase().includes(searchTerm) ||
        product.Status.toLowerCase().includes(searchTerm)
    );

    const handleSortAsc = (column: keyof Product) => {
        const sortedProducts = [...filteredProducts].sort((a, b) => {
            if (a[column] < b[column]) return 'asc' === sortOrder ? -1 : 1;
            if (a[column] > b[column]) return 'asc' === sortOrder ? 1 : -1;
            return 0;
        });
        setProducts(sortedProducts);
        setSortOrder('asc');
        setSortColumn(column);
    };

    const handleSortDesc = (column: keyof Product) => {
        const sortedProducts = [...filteredProducts].sort((a, b) => {
            if (a[column] < b[column]) return 'desc' === sortOrder ? -1 : 1;
            if (a[column] > b[column]) return 'desc' === sortOrder ? 1 : -1;
            return 0;
        });
        setProducts(sortedProducts);
        setSortOrder('desc');
        setSortColumn(column);
    };

    const handleDelete = (trackingId: number) => {
        const updatedProducts = products.filter(product => product["Tracking ID"] !== trackingId);
        setProducts(updatedProducts);
    };

    const handleRowsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setRowsPerPage(Number(e.target.value));
        setCurrentPage(1);
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const startIndex = (currentPage - 1) * rowsPerPage;
    const paginatedProducts = filteredProducts.slice(startIndex, startIndex + rowsPerPage);

    const totalPages = Math.ceil(filteredProducts.length / rowsPerPage);

    return (
        <div className="p-4 bg-white dark:bg-[#1e1e42] text-black dark:text-white">
            <div className="mb-8 mt-8 flex md:justify-between  md:items-center md:flex-row gap-4 flex-col-reverse items-start ">
                <div className="flex justify-start items-center gap-5">
                    <RowsPerPageSelect value={rowsPerPage} onChange={handleRowsPerPageChange}/>
                    <SearchInput value={searchTerm} onChange={handleSearch} />
                </div>

                <button className="bg-blue-500 text-white p-2 rounded dark:bg-blue-700">+ Add Customer</button>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full table-auto">
                    <thead className="bg-white-200 dark:bg-[#1e1e42]">
                        <tr>
                            <th className="p-2 font-bold w-1/12">Tracking ID</th>
                            <th className="p-2 font-bold w-4/12">
                                <div className="flex justify-between items-center">
                                    Product
                                    <div className="mr-2">
                                        <SortIcons
                                            isActive={sortColumn === "Product Name"}
                                            sortOrder={sortOrder}
                                            onSortAsc={() => handleSortAsc("Product Name")}
                                            onSortDesc={() => handleSortDesc("Product Name")}
                                        />
                                    </div>
                                </div>
                            </th>
                            <th className="p-2 font-bold w-2/12">
                                <div className="flex justify-between items-center">
                                    Customer
                                    <div className="mr-2">
                                        <SortIcons
                                            isActive={sortColumn === "Customer"}
                                            sortOrder={sortOrder}
                                            onSortAsc={() => handleSortAsc("Customer")}
                                            onSortDesc={() => handleSortDesc("Customer")}
                                        />
                                    </div>
                                </div>
                            </th>
                            <th className="p-2 font-bold w-1/12">
                                <div className="flex justify-between items-center">
                                    Date
                                    <div className="mr-2">
                                        <SortIcons
                                            isActive={sortColumn === "Date"}
                                            sortOrder={sortOrder}
                                            onSortAsc={() => handleSortAsc("Date")}
                                            onSortDesc={() => handleSortDesc("Date")}
                                        />
                                    </div>
                                </div>
                            </th>
                            <th className="p-2 font-bold w-2/12">Amount</th>
                            <th className="p-2 font-bold w-1/12">Payment Mode</th>
                            <th className="p-2 font-bold w-1/12">
                                <div className="flex justify-between items-center">
                                    Status
                                    <div className="mr-2">
                                        <SortIcons
                                            isActive={sortColumn === "Status"}
                                            sortOrder={sortOrder}
                                            onSortAsc={() => handleSortAsc("Status")}
                                            onSortDesc={() => handleSortDesc("Status")}
                                        />
                                    </div>
                                </div>
                            </th>
                            <th className="p-2 font-bold w-2/12">Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {paginatedProducts.map((product, index) => (
                            <tr
                                key={product["Tracking ID"]}
                                className={` hover:bg-gray-100 dark:hover:bg-gray-700 h-[64px] overflow-hidden ${index % 2 === 0 ? 'bg-[#f7f6fe] dark:bg-[#27264e]' : 'bg-white dark:bg-[#1e1e42]'}`}
                            >
                                <td className="p-2 h-[64px]">{product["Tracking ID"]}</td>
                                <td className="p-2 w-32 h-[64px]">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-8 h-8 bg-gray-200 flex items-center justify-center rounded-lg">
                                            <img
                                                src={product["Product Image"]}
                                                alt={product["Product Name"]}
                                                className="w-full h-full object-cover rounded-lg"
                                            />
                                        </div>
                                        <div className="flex-1 overflow-hidden">
                                            <div className="break-words">{product["Product Name"]}</div>
                                        </div>
                                    </div>
                                </td>


                                <td className="p-2 h-[64px]">{product.Customer}</td>
                                <td className="p-2 h-[64px]">{product.Date}</td>
                                <td className="p-2 h-[64px] text-center align-middle">{product.Amount}</td>
                                <td className="p-2 h-[64px] text-center align-middle">{product["Payment Mode"]}</td>
                                <td className="p-2 h-[64px] text-center align-middle">
                                    <span
                                        className={`inline-block px-3 py-1 w-24 text-center rounded-full text-sm font-semibold
                                        ${product.Status === "Process"
                                                ? "text-orange-500 bg-white border border-orange-500"
                                                : product.Status === "Shipped"
                                                    ? "text-blue-500 bg-white border border-blue-500"
                                                    : product.Status === "Delivered"
                                                        ? "text-green-500 bg-white border border-green-500"
                                                        : "text-red-500 bg-white border border-red-500"
                                            }`}
                                    >
                                        {product.Status}
                                    </span>
                                </td>
                                <td className="p-2 h-[64px]">
                                    <div className="flex items-center justify-center space-x-1.5 h-full">
                                        <button className="text-blue-500 dark:text-blue-300">
                                            <FontAwesomeIcon icon={faEdit} />
                                        </button>
                                        <button onClick={() => handleDelete(product["Tracking ID"])} className="text-red-500 dark:text-red-300">
                                            <FontAwesomeIcon icon={faTrash} />
                                        </button>
                                    </div>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="flex justify-center items-center mt-4">
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    );
};

export default Table;


