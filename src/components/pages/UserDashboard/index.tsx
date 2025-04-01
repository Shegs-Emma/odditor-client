"use client";

import React, { useState } from "react";
import SideBar from "@/components/reusables/SideBar";
import AuthNavbar from "@/components/reusables/authNavbar";
import Dashboard from "./Dashboard";
import Inbox from "./Inbox";
import Profile from "./Profile";

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
        {isViewing === "dashboard" && <Dashboard />}
        {isViewing === "inbox" && <Inbox />}
        {isViewing === "profile" && <Profile />}
      </div>
    </div>
  );
};

export default UserDashboard;
