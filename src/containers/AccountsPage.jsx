import { useState } from "react";
import AccountSetting from "../components/account/AccountSetting.jsx";
import SavedVehicle from "../components/account/SavedVehicle.jsx";
import MyParking from "../components/account/MyParking.jsx";

const AccountsPage = () => {
  const [activeMenu, setActiveMenu] = useState("accountSettings");

  const renderContent = () => {
    switch (activeMenu) {
      case "accountSettings":
        return <AccountSetting />;
      case "savedVehicles":
        return <SavedVehicle />;
      case "myParking":
        return <MyParking />;
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
        </ul>
      </nav>
      <div className="flex-grow">
        <div className="max-w-7xl mx-auto">{renderContent()}</div>
      </div>
    </div>
  );
};

export default AccountsPage;
