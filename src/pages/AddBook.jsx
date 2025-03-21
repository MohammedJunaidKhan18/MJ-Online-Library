import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/booksSlice";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [book, setBook] = useState({
    title: "",
    author: "",
    coverImage: "",
    description: "",
    category: "",
    publishedYear: "",
    price: "",
    rating: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error when user types
  };

  const validateForm = () => {
    let newErrors = {};

    if (!book.title.trim()) newErrors.title = "Title is required";
    if (!book.author.trim()) newErrors.author = "Author is required";
    if (!book.coverImage.trim()) newErrors.cover = "Cover image URL is required";
    if (!book.description.trim())
      newErrors.description = "Description is required";
    if (!book.category) newErrors.category = "Category is required";

    if (
      !book.publishedYear.trim() ||
      isNaN(book.publishedYear) ||
      book.publishedYear < 1000 ||
      book.publishedYear > new Date().getFullYear()
    ) {
      newErrors.publishedYear = "Enter a valid Published Year";
    }

    if (!book.price.trim() || isNaN(book.price) || book.price <= 0) {
      newErrors.price = "Enter a valid Price";
    }

    if (
      !book.rating.trim() ||
      isNaN(book.rating) ||
      book.rating < 1 ||
      book.rating > 5
    ) {
      newErrors.rating = "Rating must be between 1 and 5";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    dispatch(addBook({ id: Date.now(), ...book }));
    navigate("/browse");
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-200 rounded-lg shadow-md mt-2 relative">
      <button
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 bg-gray-700 text-white font-medium px-4 py-2 rounded hover:bg-gray-900 flex  shadow-2xl hover:scale-110 transition-transform duration-300 cursor-pointer items-center gap-2"
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

      <h2 className="text-2xl font-bold text-center mb-6 flex items-center justify-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6"
        >
          <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
          <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
        </svg>
        Add a New Book
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4 px-4 ">
        {/* Title */}
        <div>
          <input
            type="text"
            name="title"
            placeholder="Book Title"
            onChange={handleChange}
            className="w-full p-2 border-2 border-gray-300 bg-white shadow-2xl rounded-md"
          />
          {errors.title && <p className="text-red-500">{errors.title}</p>}
        </div>

        {/* Author */}
        <div>
          <input
            type="text"
            name="author"
            placeholder="Author"
            onChange={handleChange}
            className="w-full p-2 border-2 border-gray-300 bg-white shadow-xl rounded-md"
          />
          {errors.author && <p className="text-red-500">{errors.author}</p>}
        </div>

        {/* Cover Image */}
        <div>
          <input
            type="text"
            name="coverImage"
            placeholder="Cover Image URL"
            onChange={handleChange}
            className="w-full p-2 border-2 border-gray-300  bg-white shadow-xl rounded-md "
          />
          {errors.coverImage && <p className="text-red-500">{errors.coverImage}</p>}
        </div>

        {/* Description */}
        <div>
          <textarea
            name="description"
            placeholder="Description"
            onChange={handleChange}
            className="w-full p-2 border-2 border-gray-300  bg-white shadow-xl rounded-md "
          ></textarea>
          {errors.description && (
            <p className="text-red-500">{errors.description}</p>
          )}
        </div>

        {/* Category */}
        <div>
          <select
            name="category"
            onChange={handleChange}
            className="w-full p-2 border-2 border-gray-300  bg-white shadow-xl rounded-md"
          >
            <option value="">Select Category</option>
            <option value="Fiction">Fiction</option>
            <option value="Non-Fiction">Non-Fiction</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="History">History</option>
            <option value="Biography">Biography</option>
          </select>
          {errors.category && <p className="text-red-500">{errors.category}</p>}
        </div>

        {/* Published Year */}
        <div>
          <input
            type="number"
            name="publishedYear"
            placeholder="Published Year (e.g., 2024)"
            onChange={handleChange}
            className="w-full p-2 border-2 border-gray-300  bg-white shadow-xl rounded-md"
          />
          {errors.publishedYear && (
            <p className="text-red-500">{errors.publishedYear}</p>
          )}
        </div>

        {/* Price */}
        <div>
          <input
            type="number"
            name="price"
            placeholder="Price "
            onChange={handleChange}
            className="w-full p-2 border-2 border-gray-300  bg-white shadow-xl rounded-md"
          />
          {errors.price && <p className="text-red-500">{errors.price}</p>}
        </div>

        {/* Rating */}
        <div>
          <input
            type="number"
            name="rating"
            placeholder="Rating (1-5)"
            onChange={handleChange}
            className="w-full p-2 border-2 border-gray-300  bg-white shadow-xl rounded-md"
          />
          {errors.rating && <p className="text-red-500">{errors.rating}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-gray-700 text-white p-2 rounded-lg hover:bg-gray-900 hover:scale-110 transition-transform duration-300 cursor-pointer"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
