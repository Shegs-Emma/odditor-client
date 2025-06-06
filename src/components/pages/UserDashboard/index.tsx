"use client";

import React, { useState } from "react";
import SideBar from "@/components/reusables/SideBar";
import AuthNavbar from "@/components/reusables/authNavbar";
import Dashboard from "./Dashboard";
import Inbox from "./Inbox";
import Profile from "./Profile";
import Service from "./Service";
import AuthNavbarMobile from "@/components/reusables/authNavbarMobile";
import MobileInbox from "./Inbox/MobileInbox";
import MobileProfile from "./Profile/MobileProfile";
import MobileService from "./Service/MobileService";

const UserDashboard = () => {
  const [isViewing, setIsViewing] = useState<string>("dashboard");

  const handleViewing = (isViewing: string) => {
    setIsViewing(isViewing);
  };

  return (
    <div className="w-full flex">
      <SideBar viewing={handleViewing} />
      <div className="flex flex-col w-full">
        <AuthNavbar />
        <AuthNavbarMobile viewing={handleViewing} />
        {isViewing === "dashboard" && <Dashboard />}
        {isViewing === "inbox" && <Inbox />}
        {isViewing === "inbox" && <MobileInbox />}
        {isViewing === "profile" && <Profile />}
        {isViewing === "profile" && <MobileProfile />}
        {isViewing === "service" && <Service />}
        {isViewing === "service" && <MobileService />}
      </div>
    </div>
  );
};

export default UserDashboard;
