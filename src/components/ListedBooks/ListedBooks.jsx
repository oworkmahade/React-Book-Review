import { useState, useEffect } from "react";
import {
  getStoredReadItem,
  getStoredWishlistItem,
} from "../../utility/localStorage";

import ListedBook from "../ListedBook/ListedBook";

function ListedBooks() {
  const [readBooks, setReadBooks] = useState([]);
  const [wishlistBooks, setWishlistBooks] = useState([]);
  const [activeTab, setActiveTab] = useState("read");

  useEffect(() => {
    fetch("/books.json")
      .then((res) => res.json())
      .then((data) => {
        const readIds = getStoredReadItem() || [];
        const wishlistIds = getStoredWishlistItem() || [];

        const readBooksData = data.filter((book) => readIds.includes(book.id));
        setReadBooks(readBooksData);

        const wishlistBooksData = data.filter((book) =>
          wishlistIds.includes(book.id),
        );
        setWishlistBooks(wishlistBooksData);
      });
  }, []);

  const handleJobsFilter = (type) => {
    const source = activeTab === "read" ? readBooks : wishlistBooks;
    let sortedBooks = [...source];

    if (type === "rating") {
      sortedBooks.sort((a, b) => b.rating - a.rating);
    }

    if (type === "numberOfPages") {
      sortedBooks.sort((a, b) => b.pages - a.pages);
    }

    if (type === "publishedYear") {
      sortedBooks.sort((a, b) => b.year - a.year);
    }

    activeTab === "read"
      ? setReadBooks(sortedBooks)
      : setWishlistBooks(sortedBooks);
  };

  const booksToShow = activeTab === "read" ? readBooks : wishlistBooks;

  return (
    <div className="max-w-6xl px-4 mx-auto">
      {/* Header  */}
      <div className="py-12 my-8 text-center rounded-lg bg-[#f3f3f3]">
        <h2 className="text-3xl font-bold">Books</h2>
      </div>
      {/* Sort By  */}
      <div className="flex justify-center mb-8">
        <div className="relative inline-block group">
          <button className="flex items-center gap-2 px-6 py-2 text-sm font-medium text-white bg-[#23be0a] rounded-lg">
            Sort By
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <div className="absolute hidden mt-2 bg-white border rounded-lg shadow-md w-44 group-hover:block">
            <button
              onClick={() => handleJobsFilter("rating")}
              className="w-full px-4 py-2 text-left hover:bg-gray-100"
            >
              Rating
            </button>
            <button
              onClick={() => handleJobsFilter("numberOfPages")}
              className="w-full px-4 py-2 text-left hover:bg-gray-100"
            >
              Number of Pages
            </button>
            <button
              onClick={() => handleJobsFilter("publishedYear")}
              className="w-full px-4 py-2 text-left hover:bg-gray-100"
            >
              Published Year
            </button>
          </div>
        </div>
      </div>

      {/* Tabs  */}

      <div className="flex gap-6 border-b border-gray-300">
        <button
          onClick={() => setActiveTab("read")}
          className={`relative px-4 py-2 rounded-t-md border-x border-t
      ${
        activeTab === "read"
          ? "border-gray-300 border-b-0 bg-white font-medium -mb-[1px]"
          : "border-transparent text-gray-400"
      }`}
        >
          Read Books
        </button>

        <button
          onClick={() => setActiveTab("wishlist")}
          className={`relative px-4 py-2 rounded-t-md border-x border-t
      ${
        activeTab === "wishlist"
          ? "border-gray-300 border-b-0 bg-white font-medium -mb-[1px]"
          : "border-transparent text-gray-400"
      }`}
        >
          Wishlist Books
        </button>
      </div>

      {/* Book Cards  */}

      {booksToShow.map((book) => (
        <ListedBook key={book.id} book={book}></ListedBook>
      ))}
    </div>
  );
}

export default ListedBooks;
