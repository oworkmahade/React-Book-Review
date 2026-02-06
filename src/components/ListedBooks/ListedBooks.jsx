// import PropTypes from 'prop-types'

import { useState, useEffect } from "react";
import {
  getStoredReadItem,
  getStoredWishlistItem,
} from "../../utility/localStorage";

function ListedBooks() {
  const [books, setBooks] = useState([]);
  const [readBooks, setReadBooks] = useState([]);
  const [wishlistBooks, setWishlistBooks] = useState([]);
  const [activeTab, setActiveTab] = useState("read");

  useEffect(() => {
    fetch("/books.json")
      .then((res) => res.json())
      .then((data) => {
        const readIds = getStoredReadItem();
        const wishlistIds = getStoredWishlistItem();

        const readBooksData = data.filter((book) => readIds.includes(book.id));
        setReadBooks(readBooksData);

        const wishlistBooksData = data.filter((book) =>
          wishlistIds.includes(book.id),
        );
        setWishlistBooks(wishlistBooksData);
      });
  }, []);

  const handleJobsFilter = () => {};

  return (
    <div>
      {/* books  */}
      <div className="py-12 my-8 text-center rounded-lg bg-[#f3f3f3]">
        <h2 className="text-2xl font-bold">Books</h2>
      </div>
      {/* Sort By  */}
      <div className="flex flex-row justify-center mr-2 filter ">
        <div className="relative inline-block group">
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[#23be0a] rounded-lg">
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

          {/* Dropdown */}
          <div className="absolute hidden w-40 mt-2 bg-white border rounded-lg shadow-md group-hover:block">
            <ul className="text-sm text-gray-700">
              <li>
                <button
                  onClick={() => handleJobsFilter("all")}
                  className="w-full px-4 py-2 text-left hover:bg-gray-100"
                >
                  All
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleJobsFilter("rating")}
                  className="w-full px-4 py-2 text-left hover:bg-gray-100"
                >
                  Rating
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleJobsFilter("numberOfPages")}
                  className="w-full px-4 py-2 text-left hover:bg-gray-100"
                >
                  Number of Pages
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleJobsFilter("publishedYear")}
                  className="w-full px-4 py-2 text-left hover:bg-gray-100"
                >
                  Published Year
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Read Wishlist  */}
    </div>
  );
}

// ListedBooks.propTypes = {}

export default ListedBooks;
