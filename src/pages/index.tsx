import React from 'react';
import Table from '../components/Table';
import ThemeToggle from '../components/ThemeToggle';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen dark:bg-[#1e1e42]">
      <header className="flex justify-between p-4 bg-gray-100 dark:bg-gray-800">
        <ThemeToggle />
      </header>
      <main className="flex-1 container mx-auto p-4">
        <Table />
      </main>
    </div>
  );
};

export default Home;

