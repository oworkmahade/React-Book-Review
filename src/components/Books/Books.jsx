import Book from "../Book/Book";
import PropTypes from "prop-types";

const Books = ({ books }) => {
  return (
    <div className="p-4 my-4 mt-24 border-2 border-green-600">
      <h1 className="text-3xl font-bold text-center">Books</h1>
      <div className="grid gap-16 md:grid-cols-3">
        {books?.map((book) => (
          <Book key={book.id} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

Books.propTypes = {
  books: PropTypes.array.isRequired,
};

export default Books;
