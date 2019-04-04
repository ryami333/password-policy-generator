import React from "react";
import random from "lodash/random";
import sampleSize from "lodash/sampleSize";
import clamp from "lodash/clamp";
import policies, { Policies } from "./policies";

const getRandomPolicies = (): Policies => {
	return sampleSize(policies, clamp(random(3, 6), 0, policies.length));
};

export default function usePolicies(): [Policies | null, (() => void)] {
	const [state, setState] = React.useState(null as Policies | null);

	const randomize = React.useCallback(
		(): void => setState((): Policies => getRandomPolicies()),
		[]
	);

	return [state, randomize];
}
