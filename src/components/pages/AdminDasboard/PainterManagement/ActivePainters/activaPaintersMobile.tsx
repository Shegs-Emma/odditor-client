"use client";

import { useState } from "react";
import ListActivePainters from "./ListActivePainters";
import AssignWork from "./assignWork";

export default function ActivePainterMobile() {
  const [isViewing, setIsViewing] = useState<string>("list");

  const handleViewing = (isViewing: string) => {
    setIsViewing(isViewing);
  };

  return (
    <div className="w-full flex">
      {isViewing === "list" && <ListActivePainters viewing={handleViewing} />}
      {isViewing === "assign" && <AssignWork viewing={handleViewing} />}
    </div>
  );
}
