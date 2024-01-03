import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../utils/slice/accountsSlice.js";
import axios from "axios";
import AccountSetting from "../components/account/AccountSetting.jsx";
import SavedVehicle from "../components/account/SavedVehicle.jsx";
import MyParking from "../components/account/MyParking.jsx";
import AdminSettings from "../components/account/AdminSettings.jsx";

const AccountsPage = () => {
  const [activeMenu, setActiveMenu] = useState("accountSettings");
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.accounts.userData);
  const { id } = userData;

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/user/${id}`);
        dispatch(setUserData(response.data));
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [dispatch, id]);

  const renderAdminTab = () => {
    if (userData.role === "admin") {
      return (
        <li onClick={() => setActiveMenu("adminSettings")}>
          <a>ADMIN SETTINGS</a>
        </li>
      );
    }
    return null;
  };

  const renderContent = () => {
    switch (activeMenu) {
      case "accountSettings":
        return <AccountSetting />;
      case "savedVehicles":
        return <SavedVehicle />;
      case "myParking":
        return <MyParking />;
      case "adminSettings":
        return <AdminSettings />;
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <nav>
        <ul className="menu bg-base-200 w-56 rounded-box">
          <li onClick={() => setActiveMenu("accountSettings")}>
            <a>ACCOUNT SETTINGS</a>
          </li>
          <li onClick={() => setActiveMenu("savedVehicles")}>
            <a>SAVED VEHICLES</a>
          </li>
          <li onClick={() => setActiveMenu("myParking")}>
            <a>MY PARKING</a>
          </li>
          {renderAdminTab()}
        </ul>
      </nav>
      <div className="flex-grow">
        <div className="max-w-7xl mx-auto">{renderContent()}</div>
      </div>
    </div>
  );
};

export default AccountsPage;
