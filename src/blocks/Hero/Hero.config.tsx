// There should be a helper to generate a stub
// of this file with a default config object based on the
// types of your component's props

import { Hero, HeroProps } from "./Hero";
import withConfiguration from "../../withConfiguration";
import { Profile } from "../../types/data";

function heroConfig(profile: Profile): HeroProps {
  const { name, c_hero, address } = profile;

  return {
    ...c_hero,
    address,
    name,
  };
}

// Use standard withConfiguration helper to export version powered through configuration
// If we want to use multiple version of this component configured in different ways
// we would export multiple of these with different usePropsForRender functions
// We can think of a way to do that without needing code changes if we think it'll be common
const ConfiguredHero = withConfiguration(Hero, heroConfig);

export { ConfiguredHero as Hero };
