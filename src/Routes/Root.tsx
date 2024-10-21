import Home from "../Pages/Home/Home.tsx"
import ErrorPage from "../Pages/Error.tsx"
import Works from "../Pages/Works/Works.tsx";
import {
  createBrowserRouter,
} from "react-router-dom";
import Contact from "../Pages/Contact/Contact.tsx";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/produtos",
    element: <Works/>,
    errorElement: <ErrorPage />,
  },
  
  {
    path: "/contato",
    element: <Contact />,
    errorElement: <ErrorPage />,
  },
]);