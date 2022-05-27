import React, { EffectCallback, PropsWithChildren, useEffect } from "react"
import { useProfile } from "./types/data";
import { Profile } from "./types/data"

type Provider<P> = (p: Profile) => P

// These are props that all components should take. 
// The logic for handling them should be handled in the withConfiguration function,
// implementers of components shouldn't have to think about them
export interface GlobalComponentProps {
  useEffect?: () => EffectCallback | void
}

export default function withConfiguration<P>(Component: React.ComponentType<P>, useProvider: Provider<P & GlobalComponentProps>) {
  function Comp(props: PropsWithChildren<Record<string, never>>) {
		const profile = useProfile(profile => profile);
    const providedProps = useProvider(profile)
    useEffect(() => {
      if (providedProps.useEffect) providedProps.useEffect()
    }, [])
    return <Component {...providedProps} {...props} />
  }
  return Comp
} 