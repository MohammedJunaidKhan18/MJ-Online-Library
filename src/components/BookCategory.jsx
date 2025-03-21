import React from "react";
import { Link } from "react-router-dom";

// Array with category names and image paths
const categories = [
  { name: "Fiction", image: "/src/images/fiction.jpg" },
  { name: "Non-Fiction", image: "/src/images/non-fiction.jpg" },
  { name: "Sci-Fi", image: "/src/images/sci-fi.jpg" },
  { name: "History", image: "/src/images/history.jpg" },
  { name: "Biography", image: "/src/images/biography.jpg" },
];

const BookCategory = () => {
  return (
    <div className="mt-10">
      <h2 className="text-xl font-bold mb-5">CATEGORIES</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 ">
        {categories.map((category) => (
          <Link
            key={category.name}
            to={`/books/${category.name.toLowerCase()}`}
            className="relative rounded overflow-hidden shadow-xl group hover:scale-110 transition-transform duration-300"
          >
            {/* Displaying the image */}
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-55 object-cover"
            />
            
            {/* Text overlay at bottom center */}
            <div className="absolute bottom-0 w-full bg-white text-l font-bold text-center py-3">
              {category.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BookCategory;
