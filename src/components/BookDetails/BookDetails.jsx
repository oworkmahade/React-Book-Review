import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  const { id } = useParams();
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    fetch("/books.json")
      .then((res) => res.json())
      .then((data) => {
        const book = data.find((b) => b.id === Number(id));
        setSelectedBook(book);
      });
  }, [id]);

  if (!selectedBook) {
    return (
      <div>
        <p>Loading book details...</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl p-6 mx-auto mt-24 bg-white shadow-md rounded-xl">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {/* Left: Book Image */}
        <div className="flex justify-center">
          <img
            src={selectedBook.img}
            alt="Book Cover"
            className="object-cover h-full rounded-lg shadow-lg min-w-96"
          />
        </div>

        {/* Right: Book Info */}
        <div>
          <h1 className="mb-2 text-3xl font-bold">{selectedBook.title}</h1>

          <p className="mb-1 text-gray-600">
            <span className="font-semibold">By :</span> {selectedBook.author}
          </p>

          <p className="mb-4 text-gray-500">{selectedBook.category}</p>

          {/* Review */}
          <p className="mb-1 font-semibold">Review :</p>
          <p className="mb-4 leading-relaxed text-gray-600">
            {selectedBook.review}
          </p>

          {/* Tags */}
          <div className="flex gap-3 mb-6">
            {selectedBook.hashtag.map((tag) => (
              <span
                className="px-3 py-1 text-sm bg-[#dcfce7] rounded-lg"
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Meta Info */}
          <div className="grid grid-cols-2 mb-6 text-gray-700 gap-y-3">
            <p>Number of Pages:</p>
            <p className="font-semibold">{selectedBook.pages}</p>

            <p>Publisher:</p>
            <p className="font-semibold">{selectedBook.publisher}</p>

            <p>Year of Publishing:</p>
            <p className="font-semibold">{selectedBook.year}</p>

            <p>Rating:</p>
            <p className="font-semibold">{selectedBook.rating}</p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="px-6 py-2 transition border border-gray-300 rounded-lg hover:bg-gray-100">
              Read
            </button>
            <button className="px-6 py-2 text-white transition rounded-lg bg-sky-500 hover:bg-sky-600">
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
