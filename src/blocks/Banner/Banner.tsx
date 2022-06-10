import { FaInfo } from "react-icons/fa";
import React from "react";

export interface BannerProps {
  content: React.ReactElement;
}

export function Banner(props: BannerProps) {
  if (!props.content) return null;

  return (
    <div className="Banner bg-brand-blueSecondary text-white py-4">
      <div className="container">
        <div className="flex items-start sm:items-center">
          <FaInfo className="m-4 flex-shrink-0" /> {props.content}
        </div>
      </div>
    </div>
  );
}
