import { FaBeer } from "react-icons/fa";
import React from "react";

interface AlertBannerProps {
	content: React.ReactElement
}

export default function AlertBanner(props: AlertBannerProps) {
	if (!props.content) return null;

	return (
		<div>
			<FaBeer /> {props.content}
		</div>
	)
}