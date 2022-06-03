import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import logo from "../assets/images/logo.svg";
import { Breadcrumbs } from "@yext/sites-react-components";

interface LayoutProps {
	streamOutput: any // TODO: fix type
	content: React.ReactElement
}

export default function CommonLayout(props: LayoutProps) {
	const { _site } = props.streamOutput;
	console.log("output: ", props.streamOutput)

	return (
		<>
			<Header 
				logo={logo}
				topLinks={_site.c_headerTopRow}
				links={_site.c_header}
			/>
			<div className="container flex">
				{props.streamOutput?.dm_directoryParents?.length > 0 && <Breadcrumbs streamsBreadcrumbs={props.streamOutput} />}
			</div>
			<div>
				{props.content}
			</div>
			<Footer 
				facebook={_site.c_facebook}
				instagram={_site.c_instagram}
				youtube={_site.c_youtube}
				linkedIn={_site.c_linkedIn}
				twitter={_site.c_twitter}
				links1={_site.c_footerLinks1}
				links2={_site.c_footerLinks2}
			/>
		</>
	)
}