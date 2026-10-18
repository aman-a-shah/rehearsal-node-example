# rehearsal-node-example

A small, intentionally broken node project for verifying [Rehearsal](https://github.com/aman-a-shah/rehearsal) against a real GitHub repository. It contains ordinary source files and tests. Rehearsal generates the repair during a run.

## Reproduce

```sh
npm test
```

One test should fail on `main`.

## Incident to investigate

The event feed repeats the final event of the previous page. pageAfter(events, cursor, limit) should return only IDs strictly greater than the cursor, ordered by ascending ID, without mutating the input. A zero limit must return an empty page. Fix pagination while retaining the input validation.

Import this repository into Rehearsal, use the test command above, and run a rehearsal. Review the generated diff and test output before creating a draft pull request. The broken default branch is kept as a repeatable example.
