export const foo = 1234;

// No diagnostic; we did not set versionsToTest and so are in an editor.
export const badSet: Array<string, number, number, number>;
