import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { store } from "./store.js";
import { Provider } from "react-redux";
import App from "./App";
import UserReservation from "./containers/UserReservation";
import ValetReservation from "./containers/ValetReservation";
import AccountsPage from "./containers/AccountsPage.jsx";
import LogInPage from "./containers/LogInPage.jsx";
import AuthCallbackPage from "./containers/AuthCallbackPage.jsx";
import ReservationDetails from "./components/valet-reservation/ReservationDetails.jsx";
import Scanner from "./components/valet-reservation/Scanner.jsx";
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
  {
    path: "/valetReservation",
    element: <ValetReservation />,
  },
  {
    path: "/valetReservation/reservationDetails/:reservation_id",
    element: <ReservationDetails />,
  },
  {
    path: "/scanner",
    element: <Scanner />
  },
  // {
  //   path: yourpathhere,
  //   element: importyourelementhere
  // }
  // you also need to import Link in a different component with the 'to' property that points to your path
  // see app.jsx for an example (dont create it in app.jsx)
  {
    path: "/user/:id",
    element: <AccountsPage />,
  },
  {
    path: "/login",
    element: <LogInPage />,
  },
  {
    path: "/authcallback",
    element: <AuthCallbackPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    <Toaster position="top-center" reverseOrder={false} />
  </>
);
