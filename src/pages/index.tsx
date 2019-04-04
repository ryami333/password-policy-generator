import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import { H1, P, Button } from "../components/Primitives";

const Container = styled.div`
	display: grid;
	grid-template-columns: 100%;
	grid-row-gap: var(--size3);
`;

export default function Index(): React.ReactElement {
	return (
		<Layout>
			<Container>
				<H1>Password Policy Generator</H1>
				<P>
					Click the button to generate a password policy for your sign-up flow.
				</P>
				<div>
					<Button>Generate</Button>
				</div>
			</Container>
		</Layout>
	);
}
