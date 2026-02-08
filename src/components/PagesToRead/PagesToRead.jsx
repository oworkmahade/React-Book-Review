import { useEffect, useState } from "react";
import { getStoredReadItem } from "../../utility/localStorage";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import ShapeBar from "../ShapeBar/ShapeBar";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#FF0000"];

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
    <div className="w-full h-[750px] p-16 bg-slate-200 rounded-2xl mt-12">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={readBooks}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="title" />
          <YAxis />
          <Tooltip />

          <Bar dataKey="pages" shape={<ShapeBar />} label={{ position: "top" }}>
            {readBooks.map((_, index) => (
              <Cell key={index} fill={colors[index % colors.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PagesToRead;
