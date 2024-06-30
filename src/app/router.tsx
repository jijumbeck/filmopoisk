import { createBrowserRouter } from "react-router-dom";
import { FilmSearchPage } from "../pages/FilmSearchPage";
import { RootPage } from "../pages/RootPage";
import { FilmPage, loader } from "../pages/FilmPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootPage />,
        children: [
            {
                path: "/films",
                element: <FilmSearchPage />,
            },
            {
                path: '/films/:filmId',
                element: <FilmPage />,
                loader: loader
            }
        ]
    },
])
