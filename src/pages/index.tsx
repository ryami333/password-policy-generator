import React from "react";
import styled from "styled-components";
import random from "lodash/random";
import Layout from "../components/Layout";
import { H1, P, Button, Ul, Li } from "../components/Primitives";
import usePolicies from "../utils/usePolicies";
import printPolicy from "../utils/printPolicy";
import { Policy } from "../utils/policies";

const Container = styled.div`
	display: grid;
	grid-template-columns: 100%;
	grid-row-gap: var(--size3);
`;

export default function Index(): React.ReactElement {
	const [policies, randomize] = usePolicies();
	return (
		<Layout>
			<Container>
				<H1>Password Policy Generator</H1>
				<P>
					Click the button to generate a password policy for your sign-up flow.
				</P>
				<div>
					<Button onClick={randomize}>Generate</Button>
				</div>
				{policies && policies.length > 0 && (
					<Ul>
						{policies.map(
							(policy: Policy): React.ReactElement => (
								<Li>{printPolicy(policy)}</Li>
							)
						)}
					</Ul>
				)}
			</Container>
		</Layout>
	);
}
