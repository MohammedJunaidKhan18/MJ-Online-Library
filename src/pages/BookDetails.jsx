import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = useSelector((state) =>
    state.books.books.find((b) => b.id === Number(id))
  );

  if (!book) return <p className="text-center text-red-500">Book not found!</p>;

  return (
    <div className="max-w-7xl bg-gray-200 rounded-lg mx-auto px-4 py-8 relative h-full bg-white-100 p-6">
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 bg-gray-700 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-900 hover:scale-110 transition-transform duration-300 cursor-pointer flex items-center gap-2"
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
        Back to Browse
      </button>

      <div className="flex flex-col md:flex-row items-center md:items-start justify-center mt-16 bg-white mx-40  p-6 rounded-lg shadow-2xl">
        <img
          src={book.coverImage}
          alt={book.title}
          className="w-60 h-full object-cover rounded-lg shadow-lg"
        />

        <div className="md:ml-12 mt-8 md:mt-0">
          <h2 className="text-4xl font-bold">{book.title}</h2>
          <p className="text-lg text-gray-700 mt-4">by {book.author}</p>

          {/* Description Section */}
          <p className="text-gray-650 mt-4">{book.description}</p>

          {/* Book Details */}
          {/* <div className="mt-4"> */}
          <p className="text-gray-700 mt-4">
            <span className="font-bold">Category:</span> {book.category}
          </p>
          <p className="text-gray-700 mt-4">
            <span className="font-bold">Published:</span>{" "}
            {book.publishedYear}
          </p>
          <p className="text-gray-700 mt-4">
            <span className="font-bold">Price:</span> {book.price}
          </p>
          <p className="text-gray-800 mt-4 font-bold flex items-center">
            Rating: {book.rating}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 ml-1"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clipRule="evenodd"
              />
            </svg>
          </p>

          {/* </div> */}

          {/* Buy Book Button */}
          <button className="mt-6 inline-block cursor-pointer bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-gray-900 transition">
            Buy Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
