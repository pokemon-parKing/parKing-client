import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { store } from "./store.js";
import { Provider } from "react-redux";
import App from "./App";
import UserReservation from "./containers/UserReservation";
import ValetReservation from "./containers/ValetReservation";
import ValetResPage from "./containers/ValetResPage";
import AccountsPage from "./containers/AccountsPage.jsx";
import LogInPage from "./containers/LogInPage.jsx";
import AuthCallbackPage from "./containers/AuthCallbackPage.jsx";
import ReservationDetails from "./components/valet-reservation/ReservationDetails.jsx";
import Reservation from "./components/user-reservation/reservation/Reservation.jsx";
import Confirmation from "./components/user-reservation/confirmation/Confirmation.jsx";
import Scanner from "./components/valet-reservation/Scanner.jsx";
import AccountCreation from "./components/login/AccountCreation.jsx";
import LandingPage from "./components/landingpage/LandingPage.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <LandingPage />,
      },
      {
        path: '/reservation',
        element: <UserReservation />,
        children: [
          {
            path: '/reservation',
            element: <Reservation />,
          },
          {
            path: '/reservation/confirmation',
            element: <Confirmation />,
          }
        ]
      },
      {
        path: "/valet",
        element: <ValetResPage />,
        children: [
          {
            path: '/valet',
            element: <ValetReservation />
          },
          {
            path: '/valet/reservation/:reservation_id',
            element: <ReservationDetails />,
          },
          {
            path: "/valet/scanner",
            element: <Scanner />,
          },
        ]
      },
      {
        path: "/user",
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
    ],
  },
  {
    path: "/accountcreation",
    element: <AccountCreation />,
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
