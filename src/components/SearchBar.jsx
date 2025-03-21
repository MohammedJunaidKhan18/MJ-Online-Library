import React from "react";

const SearchBar = ({ search, setSearch }) => {
  return (
    <input 
      type="text"
      placeholder="Search by title or author..."
      className="border p-2 w-full mb-40"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default SearchBar;
