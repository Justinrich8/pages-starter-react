// There should be a helper to generate a stub
// of this file with a default config object based on the
// types of your component's props

import { Nearby, NearbyProps } from "./Nearby"
import withConfiguration from "../../withConfiguration";
import { Profile } from "../../types/data"
import LocationCard from "../../components/cards/LocationCard";

function config(profile: Profile): NearbyProps {
	return {
		heading: "Nearby Essilor Experts",
		apiKey: 'ae79e8eb05e10f03917d3f4836863ac7',
		Card: LocationCard,
	}
}

// Use standard withConfiguration helper to export version powered through configuration
// If we want to use multiple version of this component configured in different ways
// we would export multiple of these with different usePropsForRender functions
// We can think of a way to do that without needing code changes if we think it'll be common
const ConfiguredNearby = withConfiguration(Nearby, config)

export { ConfiguredNearby as Nearby } 