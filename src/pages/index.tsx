import React from "react";
import Layout from "../components/Layout";
import { H1, P } from "../components/Primitives";

export default function Index(): React.ReactElement {
	return (
		<Layout>
			<H1>Password Policy Generator</H1>
			<P>
				Click the button to generate a password policy for your sign-up flow.
			</P>
		</Layout>
	);
}
