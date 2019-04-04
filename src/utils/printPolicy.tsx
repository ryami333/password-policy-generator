import { Policy } from "./policies";

export default function printPolicy(
	[singular, plural]: Policy,
	quantity: number
): string {
	return `Password must contain ${String(quantity)} ${String(
		quantity === 1 ? singular : plural
	)}`;
}
