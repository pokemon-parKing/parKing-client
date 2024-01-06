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
    return (
      <>
        {userData.role === "admin" && (
          <li onClick={() => setActiveMenu("adminSettings")}>
            <a className="shadow-md font-semibold">ADMIN SETTINGS</a>
          </li>
        )}
      </>
    );
  };

  const renderContent = () => {
    switch (activeMenu) {
      case "accountSettings":
        return <AccountSetting />;
      case "adminSettings":
        return userData.role === "admin" ? <AdminSettings /> : null;
      case "savedVehicles":
        return userData.role === "user" ? <SavedVehicle /> : null;
      case "myParking":
        return userData.role === "user" ? <MyParking /> : null;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <nav className="pt-10">
          <ul className="menu flex flex-row flex-wrap justify-center gap-4 bg-base-200 rounded-box">
            <li onClick={() => setActiveMenu("accountSettings")}>
              <a className="shadow-md font-semibold">ACCOUNT SETTINGS</a>
            </li>
            {userData.role === "user" && (
              <>
                <li onClick={() => setActiveMenu("savedVehicles")}>
                  <a className="shadow-md font-semibold">SAVED VEHICLES</a>
                </li>
                <li onClick={() => setActiveMenu("myParking")}>
                  <a className="shadow-md font-semibold">RESERVATIONS</a>
                </li>
              </>
            )}
            {renderAdminTab()}
          </ul>
        </nav>
      </div>
      <div className="flex-grow pb-10">
        <div className="max-w-7xl mx-auto">{renderContent()}</div>
      </div>
    </>
  );
};

export default AccountsPage;
