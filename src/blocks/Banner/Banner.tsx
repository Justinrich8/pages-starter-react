import { FaInfo } from "react-icons/fa";
import React from "react";

export interface BannerProps {
	content: React.ReactElement
}

export function Banner(props: BannerProps) {
	if (!props.content) return null;

	return (
		<div className="Banner bg-brand-blue text-white p-4">
			<div className="centered-container">
				<div className="flex items-center">
					<FaInfo className="m-4" /> {props.content}
				</div>
			</div>
		</div>
	)
}