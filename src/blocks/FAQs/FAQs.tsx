import React from "react";
import { Image } from "@yext/types";
import "./FAQs.scss"
import { Card, FAQ } from "../types/data";

export interface FAQsProps {
  faqs: FAQ[]
  image: Image
  Card: Card<FAQ>
}

export function FAQs(props: FAQsProps) {
  const {faqs = []} = props;

  return (
    <div className="FAQs centered-container">
      <img src={props.image.url} alt="" />
      <div>
        <div className="my-4 font-bold">Frequently Asked Questions</div>
        <ul>
          {faqs.map(faq => <li className="FAQs-item py-4" key={faq.name}>
            <props.Card key={faq.name} profile={faq} />
            </li>)}
        </ul>
      </div>
    </div>
  )
}
