import React from "react";
import { Image } from "@yext/types";
import { FaChevronDown } from "react-icons/fa";
import useCollapse from "react-collapsed";
import classNames from "classnames";
import "./FAQs.scss"

// TODO(bhaines): this should be another profile type
interface FAQ {
  name: string
  // TODO(bhaines): how to handle rich text type
  answer: string
}

export interface FAQsProps {
  faqs: FAQ[]
  image: Image
}

export function FAQs(props: FAQsProps) {
  return (
    <div className="FAQs centered-container">
      <img src={props.image.url} alt="" />
      <div>
        <div>Frequently Asked Questions</div>
        <div>
          {props.faqs.map(faq => <FAQ key={faq.name} faq={faq} />)}
        </div>
      </div>
    </div>
  )
}

function FAQ(props: {faq: FAQ}) {
  const {getCollapseProps, getToggleProps, isExpanded} = useCollapse();

  const classes = classNames({
    "is-expanded": isExpanded,
  })

  return (
    <div className={`FAQ ${classes} flex flex-col`}>
      <button className="flex items-center justify-between w-full" {...getToggleProps()}>
        {props.faq.name} <FaChevronDown color="blue" />
      </button>
      <div {...getCollapseProps()}>
        <div>
          {props.faq.answer}
        </div>
      </div>
    </div>
  )
}