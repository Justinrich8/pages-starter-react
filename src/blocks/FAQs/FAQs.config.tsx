// There should be a helper to generate a stub
// of this file with a default config object based on the
// types of your component's props

import { FAQs, FAQsProps } from "./FAQs"
import withConfiguration from "../../withConfiguration";
import { Profile } from "../../types/data"
import FAQCard from "../../components/cards/FAQCard";

function faqsConfig(profile: Profile): FAQsProps {
	const { c_faqImage, c_faqs } = profile;

	return {
		image: c_faqImage,
		faqs: c_faqs,
		Card: FAQCard,
	}
}

// Use standard withConfiguration helper to export version powered through configuration
// If we want to use multiple version of this component configured in different ways
// we would export multiple of these with different usePropsForRender functions
// We can think of a way to do that without needing code changes if we think it'll be common
const ConfiguredFAQs = withConfiguration(FAQs, faqsConfig)

export { ConfiguredFAQs as FAQs } 