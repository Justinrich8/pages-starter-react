import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

interface LayoutProps {
	streamOutput: any // TODO: fix type
	content: React.ReactElement
}

export default function CommonLayout(props: LayoutProps) {
	const { _site } = props.streamOutput;

	return (
		<>
      <div className="centered-container">
				<Header 
					logo="https://cdn.fs.brandfolder.com/cache=expiry:604800/deY3VGFpSjC761Abjbfc"
					topLinks={_site.c_headerTopRow}
					links={_site.c_header}
				/>
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