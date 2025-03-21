import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import BookCard from "../components/BookCard";
import { setSearchVisibility } from "../redux/booksSlice";

const BrowseBooks = () => {
  const books = useSelector((state) => state.books.books);
  const showSearch = useSelector((state) => state.books.showSearch);
  const [search, setSearch] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);
  const { category } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Show search bar on component mount
  useEffect(() => {
    dispatch(setSearchVisibility(true));
    return () => dispatch(setSearchVisibility(false));
  }, [dispatch]);

  // Update Books on Search or Category Change
  useEffect(() => {
    const filtered = books
      .filter(
        (book) =>
          book.title.toLowerCase().includes(search.toLowerCase()) ||
          book.author.toLowerCase().includes(search.toLowerCase())
      )
      .filter((book) =>
        category ? book.category.toLowerCase() === category.toLowerCase() : true
      );

    setFilteredBooks(filtered);
  }, [books, search, category]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-3">
      <div className="flex items-center mb-10 space-x-6">
        <button
          onClick={() => navigate("/")}
          className="bg-gray-700 w-30 text-white px-4 py-2 shadow-2xl rounded hover:bg-gray-900 hover:scale-110 transition-transform duration-300 cursor-pointer flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M16.5 3.75a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V15a.75.75 0 0 0-1.5 0v3.75a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5.25a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3V9A.75.75 0 1 0 9 9V5.25a1.5 1.5 0 0 1 1.5-1.5h6ZM5.78 8.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 0 0 1.06-1.06l-1.72-1.72H15a.75.75 0 0 0 0-1.5H4.06l1.72-1.72a.75.75 0 0 0 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
          Back
        </button>

        
        {showSearch && (
          <input
            type="text"
            placeholder="Search by title or author..."
            className="border-1 rounded-lg p-2 w-full shadow-2xl  "
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        )}

        <button
          onClick={() => {}}
          className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-900 hover:scale-110 transition-transform duration-300 flex items-center cursor-pointer shadow-2xl gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
              clipRule="evenodd"
            />
          </svg>
          Search
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => <BookCard key={book.id} book={book} />)
        ) : (
          <p>No books found.</p>
        )}
      </div>
    </div>
  );
};

export default BrowseBooks;
