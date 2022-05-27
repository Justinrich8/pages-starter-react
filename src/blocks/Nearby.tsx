import React, { useEffect, useState } from "react";
import { Card, Profile, useProfile } from "../types/data";

interface NearbyProps {
	Card: Card<Profile>
}

export function Nearby(props: NearbyProps) {
	const [nearbyLocs, setNearbyLocs] = useState<Profile[]>([]);
	const {id, geocodedCoordinate} = useProfile(profile => profile);

	useEffect(() => {
		fetch(`https://liveapi-sandbox.yext.com/v2/accounts/me/entities/geosearch?v=20190101&locale=en&entityTypes=location&api_key=ae79e8eb05e10f03917d3f4836863ac7&location=${geocodedCoordinate.latitude},${geocodedCoordinate.longitude}&radius=2500&filter={"meta.id":{"!$eq": "${id}"}}`)
			.then(resp => resp.json())
			.then(resp => setNearbyLocs(resp.response.entities))
	}, [])


	return (
		<div className="Nearby centered-container">
			<div className="grid grid-cols-3 gap-4">
				{nearbyLocs.map(loc => <props.Card key={loc.name} profile={loc} />)}
			</div>
		</div>
	)
}