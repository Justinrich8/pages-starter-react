import React from "react";
import classNames from "classnames";

type level = 1 | 2 | 3 | 4 | 5 | 6;

// Heading props
type HeadingProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> & {
	level: level
  variants?: string[] // Specifying a variant will remove the default variant derived from level
}

type HeadingPropsWithoutLevel = Omit<HeadingProps, 'level'>

const baseClass = "Heading";

const Heading = (props: React.PropsWithChildren<HeadingProps>) => {
 const {level, variants, ...rest} = props;
	const H = `h${level as level}` as const
  const resolvedVariants: string[] = variants || [String(props.level)];

  const clss = classNames(baseClass, resolvedVariants.map(variant => `${baseClass}--${variant}`), props.className)

  return <H {...rest} className={clss} />
}

const H1 = (props: React.PropsWithChildren<HeadingPropsWithoutLevel>) => {
  return <Heading level={1} {...props} />
}

const H2 = (props: React.PropsWithChildren<HeadingPropsWithoutLevel>) => {
  return <Heading level={2} {...props} />
}

const H3 = (props: React.PropsWithChildren<HeadingPropsWithoutLevel>) => {
  return <Heading level={3} {...props} />
}

export {
	Heading,
  H1,
  H2,
  H3,
}