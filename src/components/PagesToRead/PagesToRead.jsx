import { useEffect, useState } from "react";
import { getStoredReadItem } from "../../utility/localStorage";
import ShapeBar from "../ShapeBar/ShapeBar";

function PagesToRead() {
  const [readBooks, setReadBooks] = useState([]);

  useEffect(() => {
    fetch("/books.json")
      .then((res) => res.json())
      .then((data) => {
        const storedReadIds = getStoredReadItem() || [];
        const storedReadBooks = data.filter((book) =>
          storedReadIds.includes(book.id),
        );
        setReadBooks(storedReadBooks);
      });
  }, []);

  return (
    <div className="max-w-6xl px-6 py-12 mx-auto bg-gray-50 rounded-xl">
      <h2 className="mb-10 text-3xl font-bold text-center">Pages to Read</h2>

      {/* Chart */}
      <div className="relative h-[420px] border-l border-b border-dashed px-10 flex items-end gap-10">
        {readBooks.map((book, index) => (
          <ShapeBar key={book.id} book={book} books={readBooks} index={index} />
        ))}
      </div>
    </div>
  );
}

export default PagesToRead;
