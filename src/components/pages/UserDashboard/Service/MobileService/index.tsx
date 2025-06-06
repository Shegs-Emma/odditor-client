"use client";

import React, { useState } from "react";
import ServiceForm from "./serviceForm";
import AddCard from "./addCard";

const MobileService = () => {
  const [isViewing, setIsViewing] = useState<string>("serviceform");

  const handleViewing = (isViewing: string) => {
    setIsViewing(isViewing);
  };

  console.log("isViewing", isViewing);

  return (
    <div className="w-full flex">
      {isViewing === "serviceform" && <ServiceForm viewing={handleViewing} />}
      {isViewing === "addcard" && <AddCard viewing={handleViewing} />}
    </div>
  );
};

export default MobileService;
