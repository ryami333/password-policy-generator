import random from "lodash/random";

export type Policy = () => string;

export type Policies = Policy[];

const policies: Policy[] = [
	(qty: number = random(1, 3)): string =>
		`${qty} embarassing ${qty === 1 ? "secret" : "secrets"}`,
	(qty: number = random(1, 3)): string =>
		`${qty} harsh ${qty === 1 ? "truth" : "truths"}`,
	(qty: number = random(1, 3)) =>
		`${qty} deep-seated ${qty === 1 ? "insecurity" : "insecurities"}`
];

export default policies;
