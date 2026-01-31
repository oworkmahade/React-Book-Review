import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Books from "../Books/Books";

function Home() {
  const books = useLoaderData();
  return (
    <div>
      <Banner />
      <Books books={books} />
    </div>
  );
}

export default Home;
