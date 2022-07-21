import { Link } from "@yext/sites-react-components";
import React, { useEffect, useState } from "react";
import { H2 } from "../../components/Heading";
import { Card, Profile, useProfile } from "../../types/data";

export interface NearbyProps {
  heading: string;
  Card: Card<Profile>;
  apiKey: string;
  entityTypes?: string[];
  radius?: number;
  version?: string;
  locale?: string[];
}

export function Nearby(props: NearbyProps) {
  const [nearbyLocs, setNearbyLocs] = useState<Profile[]>([]);
  const { id, geocodedCoordinate } = useProfile((profile) => profile);

  useEffect(() => {
    const searchParams = new URLSearchParams({
      v: props.version || "20190101",
      radius: props.radius ? String(props.radius) : "50",
      api_key: props.apiKey,
      locale: (props.locale || ["en"]).join(","),
      entityTypes: (props.entityTypes || ["location"]).join(","),
      location: `${geocodedCoordinate.latitude},${geocodedCoordinate.longitude}`,
      filter: JSON.stringify({ "meta.id": { "!$eq": `${id}` } }),
    });

    fetch(
      `https://liveapi-sandbox.yext.com/v2/accounts/me/entities/geosearch?${searchParams.toString()}`
    )
      .then((resp) => resp.json())
      .then((resp) => setNearbyLocs(resp.response.entities));
  }, []);

  return (
    <div className="Nearby container">
      <div className="flex justify-between">
        <H2>{props.heading}</H2>
        <Link className="Button Button--primary" href="https://www.yext.com">
          Find a Location
        </Link>
      </div>
      <div className="grid gap-4 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {nearbyLocs.map((loc) => (
          <props.Card key={loc.name} profile={loc} />
        ))}
      </div>
    </div>
  );
}
