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
        <div>Frequently Asked Questions</div>
        <div>
          {faqs.map(faq => <props.Card key={faq.name} profile={faq} />)}
        </div>
      </div>
    </div>
  )
}
