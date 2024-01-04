import { useState } from "react";
import { useSelector } from "react-redux";
import AccountSetting from "../components/account/AccountSetting.jsx";
import SavedVehicle from "../components/account/SavedVehicle.jsx";
import MyParking from "../components/account/MyParking.jsx";
import AdminSettings from "../components/account/AdminSettings.jsx";

const AccountsPage = () => {
  const [activeMenu, setActiveMenu] = useState("accountSettings");
  const userData = useSelector((state) => state.accounts.userData);

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
    <>
      <div className="flex items-center justify-center">
        <nav className="pt-20">
          <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
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
      </div>
      <div className="flex-grow pb-20">
        <div className="max-w-7xl mx-auto">{renderContent()}</div>
      </div>
    </>
  );
};

export default AccountsPage;
