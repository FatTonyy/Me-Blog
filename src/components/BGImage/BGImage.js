import React from "react";

// styles
import { Wrapper, FakeBGImage, Content } from "./BGImageStyle";

export default function BGImage({ fluid, title, className, children }) {
	return (
		<Wrapper>
			<FakeBGImage fluid={fluid} title={title} />
			<Content className={className}>{children}</Content>
		</Wrapper>
	);
}
