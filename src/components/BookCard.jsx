import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  return (
    <div className="bg-white p-0 rounded shadow-2xl hover:scale-110 transition-transform duration-300 flex flex-col h-full">
      <img
        src={book.coverImage}
        alt={book.title}
        className="w-full h-45 object-cover  rounded-t-md mb-2"
      />
      <h3 className="text-lg text-center font-bold">{book.title}</h3>
      <p className="text-gray-800 text-center mb-4">by {book.author}</p>
      
      <div className="flex-grow"></div>

      <Link
        to={`/book/${book.id}`}
        className="bg-gray-800 text-white px-3 py-2 mb-3 mx-3 rounded  hover:bg-gray-900 text-center"
      >
        View Details
      </Link>
    </div>
  );
};

export default BookCard;
