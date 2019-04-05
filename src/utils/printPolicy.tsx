import { Policy } from "./policies";

export default function printPolicy(policy: Policy): string {
	return `Password must contain ${policy()}.`;
}
