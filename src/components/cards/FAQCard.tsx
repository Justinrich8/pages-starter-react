import React from "react";
import classNames from "classnames";
import useCollapse from "react-collapsed";
import { FAQ } from "../../types/data";
import { FaChevronDown } from "react-icons/fa";
import "./FAQCard.css";
import { H3 } from "../Heading";

export default function FAQCard(props: { profile: FAQ }) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  const classes = classNames({
    "is-expanded": isExpanded,
  });

  return (
    <div className={`FAQ ${classes} flex flex-col`}>
      <button
        className="flex items-center text-left justify-between w-full"
        {...getToggleProps()}
      >
        <H3>{props.profile.name}</H3> <FaChevronDown />
      </button>
      <div {...getCollapseProps()}>
        <div className="mt-2">{props.profile.answer}</div>
      </div>
    </div>
  );
}
