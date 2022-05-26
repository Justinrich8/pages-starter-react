import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";

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
					links={_site.c_header}
				/>
			</div>
			<div>
				{props.content}
			</div>
			<Footer />
		</>
	)
}