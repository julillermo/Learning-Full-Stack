import { sum } from "./sum";
export function fibonacci(length) {
    const sequence = [];
    for (let i = 0; i < length; i++) {
        if (i < 2) {
            sequence.push(sum([0, i]));
        }
        else {
            sequence.push(sum([sequence[i - 1], sequence[i - 2]]));
        }
    }
    return sequence.join(", ");
}
