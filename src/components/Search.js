import React from 'react';

const Search = ({ country, handleSearch }) => {
  return (
    <div className="relative text-lg font-light">
      <span className="absolute inset-y-0 left-0 flex items-center pl-8">
        <i className="fas fa-search dark:text-white text-gray-input"></i>
      </span>
      <input
        value={country}
        onChange={handleSearch}
        className="box-border text-lg text-blue-text dark:text-white dark:placeholder-white placeholder-gray-input rounded-md shadow-lg half:w-96 mobile:w-full h-14 dark:bg-blue-elements dark:text-white pl-16 outline-none"
        placeholder="Search for a country..."
      ></input>
    </div>
  );
};

export default Search;
