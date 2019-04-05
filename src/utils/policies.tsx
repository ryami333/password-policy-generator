import random from "lodash/random";

export type Policy = () => string;

export type Policies = Policy[];

const policies: Policy[] = [
	(qty: number = random(5, 20, true)): string => `$${qty.toFixed(2)} USD`,
	(): string => `the word “p4ssw0rd”`,
	(): string => `two pints of lager and a bag of crisps`,
	(): string => `the name of your favourite child`,
	(): string => `your father’s middle name`,
	(): string => `the registration of your first car`,
	(): string => `your favourite ice cream flavor`,
	(): string => `your childhood nickname`,
	(): string => `the name of your first childhood pet`,
	(): string => `your mother’s maiden name`,
	(): string => `a haiku`,
	(): string => `a limerick`,
	(): string => `a knock-knock joke`,
	(): string => `the title of any film which features Jeff Goldblum`,
	(): string => `one teaspoon of baking soda`,
	(): string => `a sincere compliment about the shoes that I’m wearing today`,
	(): string => `a bank statement from the last 3 calendar months`,
	(): string => `your social-security number`,
	(qty: number = random(1, 3)): string =>
		`${qty} embarassing ${qty === 1 ? "secret" : "secrets"}`,
	(qty: number = random(1, 3)): string =>
		`${qty} pop-culture ${qty === 1 ? "reference" : "references"}`,
	(qty: number = random(1, 3)): string =>
		`${qty} harsh ${qty === 1 ? "truth" : "truths"}`,
	(qty: number = random(1, 3)): string =>
		`${qty} deep-seated ${qty === 1 ? "insecurity" : "insecurities"}`,
	(qty: number = random(1, 3)): string => `at least ${qty} bucket-list items`,
	(): string => `50 shades of gray`
];

export default policies;
