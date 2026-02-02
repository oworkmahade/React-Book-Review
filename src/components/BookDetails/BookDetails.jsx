import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  const { bookId } = useParams();

  const [books, setBooks] = useState([]);
  const [bookDetails, setBookDetails] = useState([]);

  useEffect(() => {
    fetch("/books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, [bookId]);

  const selectedBook = books.find((book) => book.id === parseInt(bookId));
  // eslint-disable-next-line react-hooks/set-state-in-render
  setBookDetails(selectedBook);

  return (
    <div>
      <h1 className="p-4 m-4">Book Id: {bookId}</h1>
    </div>
  );
};

export default BookDetails;
