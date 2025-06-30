"use client";

import { useState } from "react";
import ListPendingPainters from "./listPendingPainter";
import PendingReview from "./pendingReview";

export default function PendingPainterMobile() {
  const [isViewing, setIsViewing] = useState<string>("list");

  const handleViewing = (isViewing: string) => {
    setIsViewing(isViewing);
  };

  return (
    <div className="w-full flex">
      {isViewing === "list" && <ListPendingPainters viewing={handleViewing} />}
      {isViewing === "review" && <PendingReview viewing={handleViewing} />}
    </div>
  );
}
