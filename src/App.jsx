import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BrowseBooks from "./pages/BrowseBooks";
import BookDetails from "./pages/BookDetails";
import AddBook from "./pages/AddBook";
import NotFound from "./pages/NotFound";
import "./index.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-6 ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<BrowseBooks />} />
          <Route path="/books/:category" element={<BrowseBooks />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
