import { Link } from "@yext/sites-react-components";
import { Address, CTA, Hours, LinkType } from "@yext/types";
import React from "react";

export interface CoreProps {
	title: string
	description: string
	infoTitle?: string
	hoursTitle?: string
	hours: Hours
	address: Address
	phone: string
	cta: CTA
	// listings: Listing TODO(bhaines): figure out listings
}

export function Core(props: CoreProps) {
	const { title, address, cta, phone, description, infoTitle = "Information", hoursTitle = "Hours" } = props;

	return (
		<div className="Core centered-container">
			<div>{title}</div>
			<div className="grid sm:grid-cols-1 md:grid-cols-2">
				<div>
					<div>
						{description}
					</div>
					<Link link={cta.link}>
						{cta.label}
					</Link>
				</div>
				<div className="grid sm:grid-cols-1 md:grid-cols-2">
					<div>
						<div>{infoTitle}</div>
						<div>
							<div>
								{address.line1}
							</div>
							<div>
								{address.city}, {address.region} {address.postalCode}
							</div>
						</div>

						<div>
							<Link link={phone} linkType={"Phone"} />
						</div>
						<div>
							{/* TODO(bhaines): use getDirections component */}
							<Link link="https://www.yext.com">
								Get Directions
							</Link>
						</div>
					</div>
					<div>
						<div>{hoursTitle}</div>
						{/* TODO(bhaines): use hours component */}
						<div>Hours Placeholder</div>
					</div>
				</div>
			</div>
		</div>
	)
}