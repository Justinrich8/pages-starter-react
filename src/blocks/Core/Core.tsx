import React from "react";
import { Link } from "@yext/sites-react-components";
import { Address, CTA, Hours } from "@yext/types";
import { H2, H3 } from "../../components/Heading";
import "./Core.css";

export interface CoreProps {
  title: string;
  description?: string;
  infoTitle?: string;
  hoursTitle?: string;
  hours?: Hours;
  address: Address;
  phone?: string;
  cta?: CTA;
  // listings: Listing TODO(bhaines): figure out listings
}

export function Core(props: CoreProps) {
  const {
    title,
    address,
    cta,
    phone,
    description,
    infoTitle = "Information",
    hoursTitle = "Hours",
  } = props;

  return (
    <div className="Core container">
      <H2 className="mb-8">{title}</H2>
      <div className="Core-grid">
        <div className="flex flex-col items-start justify-start">
          <div className="mb-8">{description}</div>
          {cta && (
            <Link
              className="Button Button--primary Button--loose"
              link={cta}
            >
              {cta.label}
            </Link>
          )}
        </div>
        <div>
          <H3 className="mb-4">{infoTitle}</H3>
          <div className="mb-4">
            <div>{address.line1}</div>
            <div>
              {address.city}, {address.region} {address.postalCode}
            </div>
          </div>

          <div className="mb-4">
            <Link link={{link: phone, label: '', linkType: "Phone"}}>
              {phone}
            </Link>
          </div>
          <div>
            {/* TODO(bhaines): use getDirections component */}
            <Link
              className="Link Link--primary Link--arrow"
              href="https://www.yext.com"
            >
              Get Directions
            </Link>
          </div>
        </div>
        <div>
          <H3 className="mb-4">{hoursTitle}</H3>
          {/* TODO(bhaines): use hours component */}
          <div>Hours Placeholder</div>
        </div>
      </div>
    </div>
  );
}
