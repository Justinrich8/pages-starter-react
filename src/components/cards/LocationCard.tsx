import React from "react";
import { Link } from "@yext/sites-react-components";
import { Profile } from "../../types/data";
import "./LocationCard.scss";
import { LinkType } from "@yext/types";

export default function LocationCard(props: {profile: Profile}) {
  const {name, address, mainPhone} = props.profile;
  return (
    <div className="LocationCard bg-white p-4 border border-brand-blue">
    <div>
      {name}
    </div>

    {/* TODO(bhaines): use hours component when it exists */}
    <div>
     OPEN NOW | Closes at 5:00 PM
    </div>

    {/* TODO(bhaines): use address component when it exists */}
    <div>
      <div>
        {address.line1}
      </div>
      <div>
        <span>{address.city}</span>, <span>{address.region}</span>
      </div>
      <div>
        {address.postalCode}
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