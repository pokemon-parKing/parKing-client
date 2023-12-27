import ReactDOM from "react-dom/client";
import App from "./App";
import UserReservation from "./containers/UserReservation";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/reservation",
    element: <UserReservation />,
  },
]);
{
  /* // you also need to import Link in a different component with the 'to' property that points to your path
  // see app.jsx for an example (dont create it in app.jsx) */
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
