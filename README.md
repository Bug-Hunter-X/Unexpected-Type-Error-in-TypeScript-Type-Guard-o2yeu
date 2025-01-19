# Unexpected Type Error in TypeScript Type Guard

This repository demonstrates a common error in TypeScript type guards where a null or undefined value slips through type checking, leading to runtime errors.  The `processValue` function uses a type guard to check if the input is a number or a string, but it fails to handle cases where the input is null.

## How to Reproduce

1. Clone the repository
2. Run `tsc bug.ts` to compile the code.
3. Run `node bug.js` to execute the code.  Observe the 'Unexpected type' error message.