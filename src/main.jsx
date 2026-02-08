import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Root from "./components/Root/Root";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import ListedBooks from "./components/ListedBooks/ListedBooks";
import PagesToRead from "./components/PagesToRead/PagesToRead";
import BookDetails from "./components/BookDetails/BookDetails";
import ListedBook from "./components/ListedBook/ListedBook";
import ShapeBar from "./components/ShapeBar/ShapeBar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        // The Home component is nested inside Root via <Outlet />
        index: true,
        loader: () => fetch("/books.json").then((res) => res.json()),
        element: <Home />,
      },
      {
        path: "/listed-books",
        element: <ListedBooks />,
      },

      {
        path: "/listed-book",
        element: <ListedBook />,
      },
      {
        path: "pages-to-read",
        element: <PagesToRead />,
      },
      {
        path: "/book/:id",
        element: <BookDetails />,
      },
      {
        path: "/shapebar",
        element: <ShapeBar />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
