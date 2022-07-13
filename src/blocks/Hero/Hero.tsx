import React from "react";
import { Image, Link } from "@yext/sites-react-components";
import { Address, CTA, Image as ImageType } from "@yext/types";
import "./Hero.css";
import { Heading } from "../../components/Heading";

export interface HeroProps {
  name?: string;
  address: Address;
  background?: ImageType;
  cTA1?: CTA;
  cTA2?: CTA;
}

export function Hero(props: HeroProps) {
  return (
    <div className="Hero bg-transparent sm:bg-brand-blue">
      <div className="Hero-imgWrapper">
        {props.background && (
          <Image className="Hero-img" imageField={props.background} />
        )}
      </div>
      <div className="container mx-auto flex justify-start items-center z-10">
        <div className="Hero-info w-full sm:w-auto text-center sm:text-left bg-white py-8 sm:px-8">
          {props.name && (
            <Heading className="mb-1" level={1} variants={["2"]}>
              {props.name}
            </Heading>
          )}

          {/* TODO(bhaines): use address component when it exists */}
          <Heading className="mb-6" level={2} variants={["1"]}>
            <div>{props.address.line1}</div>
            <div>{props.address.line2}</div>
            <div>
              <span>{props.address.city}</span>,{" "}
              <span>{props.address.region}</span>
            </div>
            <div>{props.address.postalCode}</div>
          </Heading>

          {/* TODO(bhaines): use hours component when it exists */}
          <div className="flex items-center justify-center sm:justify-start mb-6">
            <span className="Hero-circle mr-2"></span>
            <span className="font-bold">OPEN NOW</span> | Closes at 5:00 PM
          </div>

          <div className="flex flex-col sm:flex-row justify-between">
            {props.cTA1 && (
              <Link
                className="Button Button--primary mb-4 sm:mb-0"
                link={props.cTA1}
              >
                {props.cTA1.label}
              </Link>
            )}

            {props.cTA2 && (
              <Link
                className="Button Button--secondary"
                link={props.cTA2}
              >
                {props.cTA2.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
