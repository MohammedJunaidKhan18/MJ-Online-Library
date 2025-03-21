ONLINE-LIBRARY-SYSTEM:
This is a react based web application built using vite. It allows users to browse books, browse books by category, view details and add new books to the library.

Installation & Technologies used:
1. vite:It is a bundler.
    =>Create a reat project with the help of vite:npm create vite@latest
    =>Select framework and variant:React+JavaScript
    =>Change the directory:cd MJ-LIBRARY

2.Installation.
    =>npm install react-router-dom (React Router)
    =>npm install @reduxjs/toolkit(redux toolkit)
    =>npm install react-redux(React Redux)
    =>npm install tailwindcss @tailwindcss/vite (tailwindcss)
    =>npm install
    =>npm run dev
    This will give you link and this link will redirect you to MJ-LIBRARY.

3.Project:
Components:
    1.Navbar: It contains logo and navigation links.
    2.BookCategory : This component allows books to be in respective category.
    3.PopularBooks: Displays popular books based on ratings.
    4.BookCard: It is used to display the meta content of the book.
    5.SearchBar:Used to browsea book which is searched.

Pages:
    1.Home: Landing page with welcome message + BookCategory component + PopularBooks component.
    2.BrowseBooks: It displays SearchBar components + all books or(categorized books).
    3.BookDetails : This page shows the complete details of the books.
    4.AddBook: A page to add books to the library.
    5.NotFound: Error page when undefined routes.

Used redux to manage the state of the books list.


MY GITHUB REPOSITORY LINK:
https://github.com/MohammedJunaidKhan18/MJ-Online-Library.git

