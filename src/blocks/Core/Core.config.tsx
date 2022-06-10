// There should be a helper to generate a stub
// of this file with a default config object based on the
// types of your component's props

import { Core, CoreProps } from "./Core";
import withConfiguration from "../../withConfiguration";
import { Profile } from "../../types/data";

function coreConfig(profile: Profile): CoreProps {
  const { name, description, mainPhone, hours, address } = profile;

  return {
    title: `About ${name}`,
    description,
    hours,
    address,
    phone: mainPhone,
    cta: {
      link: "https://www.essilorusa.com",
      label: "essilorusa.com",
    },
  };
}

// Use standard withConfiguration helper to export version powered through configuration
// If we want to use multiple version of this component configured in different ways
// we would export multiple of these with different usePropsForRender functions
// We can think of a way to do that without needing code changes if we think it'll be common
const BasicCore = withConfiguration(Core, coreConfig);

export { BasicCore };
