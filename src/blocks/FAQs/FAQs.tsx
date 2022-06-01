import React from "react";
import { Image } from "@yext/types";
import { Card, FAQ } from "../../types/data";
import { H2 } from "../../components/Heading";
import { useBreakpoint } from "../../hooks/useBreakpoints";
import "./FAQs.css"

export interface FAQsProps {
  faqs?: FAQ[]
  image?: Image
  Card: Card<FAQ>
}

export function FAQs(props: FAQsProps) {
  // TODO(bhaines): doesn't run on initial render, use something else
  // https://github.com/kodingdotninja/use-tailwind-breakpoint/issues/2
  const isDesktop = useBreakpoint('sm');

  const {faqs = []} = props;

  if (!faqs.length) return null;

  return (
    <div className="FAQs container">
      {isDesktop && props.image?.url && <img src={props.image.url} alt="" />}
      <div>
        <H2 className="my-4">Frequently Asked Questions</H2>
        <ul className="text-left">
          {faqs.map(faq => <li className="FAQs-item py-4" key={faq.name}>
            <props.Card key={faq.name} profile={faq} />
            </li>)}
        </ul>
      </div>
    </div>
  )
}
