import { FaRegStar } from "react-icons/fa";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { id, img, hashtag, title, author, category, rating } = book;
  return (
    <Link to={`book/${id}`}>
      <div className="border-2 border-gray-200 rounded-lg">
        <div className="w-full p-4 bg-white shadow-md rounded-2xl">
          {/* Image */}
          <div className="flex justify-center p-6 bg-gray-100 rounded-xl">
            <img src={img} alt="Book Cover" className="object-contain h-40" />
          </div>

          {/* Tags */}
          <div className="flex gap-2 mt-4">
            <span className="flex flex-row gap-4 px-3 py-1 text-sm text-green-600 rounded-full">
              {hashtag.map((tag) => (
                <span className="px-2 py-1 bg-green-100 rounded-lg" key={tag}>
                  {" "}
                  {tag}
                </span>
              ))}
            </span>
          </div>

          {/* Title */}
          <h2 className="mt-4 text-xl font-semibold text-gray-800">{title}</h2>

          {/* Author */}
          <p className="mt-1 text-gray-500">By : {author}</p>

          <hr className="my-3" />

          {/* Footer */}
          <div className="flex items-center justify-between">
            <span className="font-medium text-gray-600">{category}</span>
            <div className="flex items-center gap-1 text-gray-700">
              <span>{rating}</span>
              <FaRegStar />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    img: PropTypes.string.isRequired,
    hashtag: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export default Book;
