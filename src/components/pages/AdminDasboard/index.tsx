"use client";

import React, { useState } from "react";
import AuthNavbar from "@/components/reusables/authNavbar";
import Inbox from "../UserDashboard/Inbox";
import SideBarAdmin from "@/components/reusables/SideBarAdmin";
import Overview from "./Overview";
import AllPainters from "./PainterManagement/AllPainters";
import PendingPainters from "./PainterManagement/PendingPainters";
import ActivePainters from "./PainterManagement/ActivePainters";
import AuthNavbarMobileAdmin from "@/components/reusables/authNavbarMobileAdmin";
import MobileOverview from "./Overview/MobileOverview";
import MobileInbox from "../UserDashboard/Inbox/MobileInbox";
import AllPainterMobile from "./PainterManagement/AllPainters/allPainterMobile";
import PendingPainterMobile from "./PainterManagement/PendingPainters/pendingPainterMobile";
import ActivePainterMobile from "./PainterManagement/ActivePainters/activaPaintersMobile";
import UserManagement from "./UserManagement";
import UserManagementMobile from "./UserManagement/userManagementMobile";
import Settings from "./Settings";

const AdminDashboard = () => {
  const [isViewing, setIsViewing] = useState<string>("overview");

  const handleViewing = (isViewing: string) => {
    setIsViewing(isViewing);
  };

  return (
    <div className="w-full flex">
      <SideBarAdmin viewing={handleViewing} />
      <div className="flex flex-col w-full">
        <AuthNavbar isAdmin />
        <AuthNavbarMobileAdmin viewing={handleViewing} />
        {isViewing === "overview" && <Overview />}
        {isViewing === "overview" && <MobileOverview />}
        {isViewing === "inbox" && <Inbox />}
        {isViewing === "inbox" && <MobileInbox />}
        {isViewing === "all" && <AllPainters />}
        {isViewing === "all" && <AllPainterMobile />}
        {isViewing === "pending" && <PendingPainters />}
        {isViewing === "pending" && <PendingPainterMobile />}
        {isViewing === "active" && <ActivePainters />}
        {isViewing === "active" && <ActivePainterMobile />}
        {isViewing === "user_management" && <UserManagement />}
        {isViewing === "user_management" && <UserManagementMobile />}
        {isViewing === "settings" && <Settings />}
      </div>
    </div>
  );
};

export default AdminDashboard;
