import React from "react";
import experts from "../assets/images/experts.png";

export default function Divider() {
	return (
		<div className="flex items-center container justify-center">
			<div className="flex-grow border-t border-solid border-[#C4C4C4]"></div>
			<img className="px-4" src={experts} />
			<div className="flex-grow border-t border-solid border-[#C4C4C4]"></div>
		</div>
	)
}