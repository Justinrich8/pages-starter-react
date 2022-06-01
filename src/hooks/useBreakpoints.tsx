import React from "react";
import { isBrowser, useIsomorphicEffect } from "./utils";

// TODO(bhaines): pull from actual tailwind config. I was having some problems
const screens = {
	sm: '640px',
	md: '768px',
	lg: '1024px',
	xl: '1280px',
	'2xl': '1536px',
}

export function useBreakpoint(breakpoint: keyof typeof screens, defaultValue = false) {
	const [match, setMatch] = React.useState(() => defaultValue);

	useIsomorphicEffect(() => {
		if (!(isBrowser && "matchMedia" in window)) return undefined;

		const value = screens[breakpoint];
		const query = window.matchMedia(`(min-width: ${value})`);
		const handler = () => {
			if (query.matches != match) {
				setMatch(query.matches);
			}
		}

		handler();
		query.addEventListener('change', handler);
		return () => {
			query.removeEventListener("change", handler);
		}
	});

	return match;
}