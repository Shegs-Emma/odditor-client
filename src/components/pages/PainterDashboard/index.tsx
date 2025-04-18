"use client";

import React, { useState } from "react";
import AuthNavbar from "@/components/reusables/authNavbar";
import SideBarPainter from "@/components/reusables/SideBarPainter";
import Dashboard from "../UserDashboard/Dashboard";
import Inbox from "../UserDashboard/Inbox";
import Profile from "../UserDashboard/Profile";

const PainterDashboard = () => {
  const [isViewing, setIsViewing] = useState<string>("dashboard");

  const handleViewing = (isViewing: string) => {
    setIsViewing(isViewing);
  };

  return (
    <div className="w-full flex">
      <SideBarPainter viewing={handleViewing} />
      <div className="flex flex-col w-full">
        <AuthNavbar />
        {isViewing === "dashboard" && <Dashboard />}
        {isViewing === "inbox" && <Inbox />}
        {isViewing === "profile" && <Profile />}
        {/* {isViewing === "availability" && <Service />} */}
      </div>
    </div>
  );
};

export default PainterDashboard;
