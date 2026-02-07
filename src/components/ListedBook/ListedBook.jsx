import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const ListedBook = ({ book }) => {
  console.log(book);
  return (
    <div className="mt-8 space-y-6">
      <div className="flex gap-6 p-6 border rounded-xl">
        {/* Image */}
        <div className="flex items-center justify-center w-40 bg-gray-100 rounded-lg h-52">
          <img
            src={book.img}
            alt={book.title}
            className="object-contain h-48"
          />
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-2xl font-bold">{book.title}</h3>
          <p className="mt-1 text-gray-600">By : {book.author}</p>

          {/* Tags */}
          <div className="flex gap-3 mt-3">
            {book.hashtag.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm text-green-600 bg-green-100 rounded-full"
              >
                {tag}
              </span>
            ))}
            <span className="flex items-center gap-1 text-sm text-gray-500">
              📍 Year of Publishing: {book.year}
            </span>
          </div>

          {/* Meta */}
          <div className="flex gap-6 mt-3 text-sm text-gray-500">
            <span>👥 Publisher: {book.publisher}</span>
            <span>📄 Page {book.pages}</span>
          </div>

          <hr className="my-4" />

          {/* Footer */}
          <div className="flex items-center gap-4">
            <span className="px-4 py-2 text-sm text-blue-600 bg-blue-100 rounded-full">
              Category: {book.category}
            </span>
            <span className="px-4 py-2 text-sm text-orange-600 bg-orange-100 rounded-full">
              Rating: {book.rating}
            </span>

            <NavLink
              to={`/book/${book.id}`}
              className="px-5 py-2 text-sm text-white bg-green-500 rounded-full"
            >
              View Details
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

ListedBook.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    hashtag: PropTypes.arrayOf(PropTypes.string).isRequired,
    year: PropTypes.number.isRequired,
    publisher: PropTypes.string.isRequired,
    pages: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export default ListedBook;
