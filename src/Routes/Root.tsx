import Home from "../Pages/Home/Home.tsx"
import ErrorPage from "../Pages/Error.tsx"
import { Brands } from "../Pages/Works/Brands/Brands.tsx";
import { Videos } from "../Pages/Works/Videos/Videos.tsx";
import Works from "../Pages/Works/Works.tsx";
import { Photos } from "../Pages/Works/Photos/Photos.tsx";
import { Social } from "../Pages/Portfolio/Social/Social.tsx";
import { Videos as PortfolioVideos } from "../Pages/Portfolio/Videos/Videos.tsx";
import {
  createBrowserRouter,
} from "react-router-dom";
import { Thumbs } from "../Pages/Portfolio/Thumbs/Thumbs.tsx";
import { Photography } from "../Pages/Portfolio/Fotografias/Photography.tsx";
import Contact from "../Pages/Contact/Contact.tsx";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/trabalhos",
    element: <Works/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/trabalhos/marcas/:id",
    element: <Brands></Brands>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/trabalhos/videos/:id",
    element: <Videos />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/trabalhos/fotos/:id",
    element: <Photos />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/portfolio/social",
    element: <Social />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/portfolio/videos",
    element: <PortfolioVideos />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/portfolio/thumbs",
    element: <Thumbs />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/portfolio/fotografias",
    element: <Photography />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/contato",
    element: <Contact />,
    errorElement: <ErrorPage />,
  },
]);