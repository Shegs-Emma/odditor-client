"use client";

import React, { useState } from "react";
import MobileInboxMessages from "./messages";
import MobileInboxDetail from "./details";

const MobileInbox = () => {
  const [isViewing, setIsViewing] = useState<string>("messages");

  const handleViewing = (isViewing: string) => {
    setIsViewing(isViewing);
  };

  return (
    <div className="w-full flex">
      {isViewing === "messages" && (
        <MobileInboxMessages viewing={handleViewing} />
      )}
      {isViewing === "detail" && <MobileInboxDetail viewing={handleViewing} />}
    </div>
  );
};

export default MobileInbox;
