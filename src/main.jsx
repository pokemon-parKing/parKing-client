import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AccountsPage from "./containers/AccountsPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  // {
  //   path: yourpathhere,
  //   element: importyourelementhere
  // }
  // you also need to import Link in a different component with the 'to' property that points to your path
  // see app.jsx for an example (dont create it in app.jsx)
  {
    path: "/user",
    element: <AccountsPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
