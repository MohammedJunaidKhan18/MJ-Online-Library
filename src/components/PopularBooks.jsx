import React from "react";
import { useSelector } from "react-redux";
import BookCard from "./BookCard";

const PopularBooks = () => {
  const books = useSelector((state) => state.books.books);

  // Sort by highest rating and select the top 5
  const popularBooks = [...books]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mt-10 mb-4">POPULAR BOOKS</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {popularBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default PopularBooks;
