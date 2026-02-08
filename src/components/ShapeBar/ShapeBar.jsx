const colors = [
  "bg-blue-500",
  "bg-emerald-500",
  "bg-yellow-400",
  "bg-orange-400",
  "bg-red-500",
];

const ShapeBar = ({ book, books, index }) => {
  const maxPages = Math.max(...books.map((b) => b.pages));
  const height = (book.pages / maxPages) * 320;

  return (
    <div className="flex flex-col items-center justify-end h-full">
      {/* Page Number */}
      <span className="mb-1 text-sm font-semibold" style={{ color: "inherit" }}>
        {book.pages}
      </span>

      {/* Shape Bar */}
      <div
        className={`w-24 ${colors[index % colors.length]}`}
        style={{
          height: `${height}px`,
          clipPath:
            "polygon(50% 0%, 68% 8%, 85% 30%, 100% 100%, 0% 100%, 15% 30%, 32% 8%)",
        }}
      />

      {/* Book Title */}
      <p className="mt-4 text-sm text-center text-gray-600 break-words w-28">
        {book.title}
      </p>
    </div>
  );
};

export default ShapeBar;
