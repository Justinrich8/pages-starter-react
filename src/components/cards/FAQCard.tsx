import React from "react";
import classNames from "classnames";
import useCollapse from "react-collapsed";
import { FAQ } from "../../types/data";
import { FaChevronDown } from "react-icons/fa";
import "./FAQCard.scss";

export default function FAQCard(props: {profile: FAQ}) {
  const {getCollapseProps, getToggleProps, isExpanded} = useCollapse();

  const classes = classNames({
    "is-expanded": isExpanded,
  })

  return (
    <div className={`FAQ ${classes} flex flex-col`}>
      <button className="flex items-center justify-between w-full" {...getToggleProps()}>
        {props.profile.name} <FaChevronDown color="blue" />
      </button>
      <div {...getCollapseProps()}>
        <div>
          {props.profile.answer}
        </div>
      </div>
    </div>
  )
} 