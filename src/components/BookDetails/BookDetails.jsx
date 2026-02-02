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

  console.log(selectedBook);

  return (
    <div>
      <h1 className="p-4 m-4">{selectedBook?.title}</h1>
    </div>
  );
};

export default BookDetails;
