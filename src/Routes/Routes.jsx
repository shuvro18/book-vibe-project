import { createBrowserRouter } from "react-router";
import MainLayOut from "../Layout/MainLayOut";
import HomePage from "../Component/Homepage/HomePage";
import Book from "../Component/Book/Book";
import ErrorPage from "../Component/ErrorPage/ErrorPage";
import BookDetails from "../Component/BookDetails/BookDetails";

export const router = createBrowserRouter([

  {
    path:"/",
    element:<MainLayOut></MainLayOut>,
    children:[
      {
        index: true,
        element: <HomePage></HomePage>
      },
      {
        path: "/book",
        element: <Book></Book>
      },
      {
        path:"/bookDetails/:bookId",
        loader: ()=>fetch("/booksData.json"),
        element:<BookDetails></BookDetails>
      }
    ],
    errorElement: <ErrorPage></ErrorPage>
  }


])