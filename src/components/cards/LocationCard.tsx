import React from "react";
import { Link } from "@yext/sites-react-components";
import { Profile } from "../../types/data";
import { H3 } from "../Heading";
import "./LocationCard.css";

export default function LocationCard(props: {profile: Profile}) {
  const {name, address, mainPhone} = props.profile;
  return (
    <div className="LocationCard u-dropShadowActive bg-white px-6 py-8 border border-brand-blue">
    <H3 className="mb-4">
      {name}
    </H3>

    {/* TODO(bhaines): use hours component when it exists */}
    <div className="mb-4">
     <span className="font-bold">OPEN NOW</span> | Closes at 5:00 PM
    </div>

    {/* TODO(bhaines): use address component when it exists */}
    <div className="mb-4">
      <div>
        {address.line1} <span>{address.city}</span>, <span>{address.region}</span> {address.postalCode}
      </div>
    </div>

    <div className="flex justify-between">
      <Link className="Button Button--primary" link={mainPhone} type={"Phone"}>
        Call Now
      </Link>
    </div>
  </div>
  )
}