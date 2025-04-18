"use client";

import React, { useState } from "react";
import AuthNavbar from "@/components/reusables/authNavbar";
import Inbox from "../UserDashboard/Inbox";
import SideBarAdmin from "@/components/reusables/SideBarAdmin";
import Overview from "./Overview";
import AllPainters from "./PainterManagement/AllPainters";

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
        {isViewing === "overview" && <Overview />}
        {isViewing === "inbox" && <Inbox />}
        {isViewing === "all" && <AllPainters />}
        {/* {isViewing === "availability" && <Service />} */}
      </div>
    </div>
  );
};

export default AdminDashboard;
