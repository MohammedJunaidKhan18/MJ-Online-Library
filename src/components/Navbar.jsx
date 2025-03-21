import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearchVisibility } from "../redux/booksSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  const handleBrowseClick = () => {
    dispatch(setSearchVisibility(true)); 
  };

  return (
    <nav className="bg-gray-800 text-white p-9 flex justify-between items-center shadow-md px-15">
      <h2 className="text-xl font-bold flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-9">
          <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
        </svg> 
        MJ-LIBRARY
      </h2>

      <ul className="flex space-x-20 mx-10 text-xl ">
        <li className="hover:scale-125 transition-transform duration-300">
          <Link to="/" className="text-white">Home</Link>
        </li>
        <li className="hover:scale-125 transition-transform duration-300">
          <Link to="/browse" className="text-white " onClick={handleBrowseClick}>Browse Books</Link>
        </li>
        <li className="hover:scale-125 transition-transform duration-300">
          <Link to="/add" className="text-white">Add Book</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
