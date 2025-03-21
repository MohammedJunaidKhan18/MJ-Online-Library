# ONLINE LIBRARY SYSTEM

Online Library System** is a React-based web application built using Vite. It allows users to browse books, filter books by category, view details, and add new books to the library.

---

## Installation & Technologies Used

### **1. Setup Project using Vite**
Vite is used as the project bundler.

```sh
# Create a React project with Vite
npm create vite@latest

# Select framework and variant: React + JavaScript

# Change to the project directory
cd MJ-LIBRARY
```

### **2. Install Dependencies**
Run the following commands to install required packages:

```sh
# Install React Router for navigation
npm install react-router-dom

# Install Redux Toolkit for state management
npm install @reduxjs/toolkit

# Install React Redux for integration with Redux
npm install react-redux

# Install Tailwind CSS for styling
npm install tailwindcss @tailwindcss/vite

# Install additional dependencies
npm install

# Start the development server
npm run dev
```
After running the above command, a local development link will be provided, which redirects you to **MJ-LIBRARY**.

---

## Project Overview

### ** Components**
1. **Navbar** - Contains the logo and navigation links.
2. **BookCategory** - Displays books in respective categories.
3. **PopularBooks** - Showcases popular books based on ratings.
4. **BookCard** - Displays the meta information of a book.
5. **SearchBar** - Enables users to search for books.

### ** Pages**
1. **Home** - Landing page with a welcome message, BookCategory, and PopularBooks components.
2. **BrowseBooks** - Displays all books and allows filtering by category with a search bar.
3. **BookDetails** - Shows complete details of a book.
4. **AddBook** - Provides a form to add new books to the library.
5. **NotFound (404)** - Displays an error message for undefined routes.

### ** State Management**
The project uses **Redux Toolkit** to manage the state of the books list efficiently.

---

## 🔗 GitHub Repository
Find the complete project code here: 
https://github.com/MohammedJunaidKhan18/MJ-Online-Library.git

---

