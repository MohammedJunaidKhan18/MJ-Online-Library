import React from "react";
import BookCategory from "../components/BookCategory";
import PopularBooks from "../components/PopularBooks";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-5 py-0 " >
      <h1 className="text-5xl text-center font-bold py-3">Welcome to MJ Library </h1>
      <p className="text-lg text-center ">Discover, Explore and Acquire Knowledge</p>
      <BookCategory />
      <PopularBooks />
    </div>
  );
};

export default Home;
