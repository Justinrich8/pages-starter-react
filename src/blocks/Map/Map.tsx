import React from "react";
import { useBreakpoint } from "../../hooks/useBreakpoints";

export default function Map() {
  const isDesktop = useBreakpoint("sm");
  if (!isDesktop) return null;

  return (
    // Use component when it's merged
    <div className="container">
      <div className="bg-brand-blue h-80 flex justify-center items-center text-white">
        Map Placeholder
      </div>
    </div>
  );
}
