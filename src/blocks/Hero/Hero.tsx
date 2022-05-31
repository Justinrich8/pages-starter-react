import React from "react";
import { Link } from "@yext/sites-react-components";
import { Address, CTA, Image } from "@yext/types";
import "./Hero.scss";

export interface HeroProps {
  name: string
  address: Address
  background: Image
  cTA1: CTA
  cTA2: CTA
}

export function Hero(props: HeroProps) {
  return (
    <div className="Hero bg-brand-blue">
      <div className="Hero-imgWrapper">
        <img className="Hero-img" src={props.background.url} alt="" />
      </div>
      <div className="container mx-auto flex justify-start items-center">
        <div className="Hero-info bg-white p-4">
          <div>
            {props.name}
          </div>

          {/* TODO(bhaines): use address component when it exists */}
          <div>
            <div>
              {props.address.line1}
            </div>
            <div>
              {props.address.line2}
            </div>
            <div>
              <span>{props.address.city}</span>, <span>{props.address.region}</span>
            </div>
            <div>
              {props.address.postalCode}
            </div>
          </div>

          {/* TODO(bhaines): use hours component when it exists */}
          <div>
           OPEN NOW | Closes at 5:00 PM
          </div>

          <div className="flex justify-between">
            {props.cTA1 && <Link className="Button Button--primary" {...props.cTA1}>
              {props.cTA1.label}
            </Link>}

            {props.cTA2 && <Link className="Button Button--secondary" link={props.cTA2.link} type={props.cTA2.linkType}>
              {props.cTA2.label}
            </Link>}
          </div>
        </div>
      </div>
    </div>
  )
}