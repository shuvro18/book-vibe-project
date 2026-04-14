import { createBrowserRouter } from "react-router";
import MainLayOut from "../Layout/MainLayOut";
import HomePage from "../Component/Homepage/HomePage";
import Book from "../Component/Book/Book";
import ErrorPage from "../Component/ErrorPage/ErrorPage";

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
      }
    ],
    errorElement: <ErrorPage></ErrorPage>
  }


])