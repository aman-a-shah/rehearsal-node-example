import test from 'node:test';
import assert from 'node:assert/strict';
import { pageAfter } from '../src/pagination.js';

test('cursor is exclusive', () => {
  assert.deepEqual(pageAfter([{id: 1}, {id: 2}, {id: 3}], 2, 2), [{id: 3}]);
});
test('returns ascending order without mutating input', () => {
  const events = [{id: 3}, {id: 1}, {id: 2}];
  assert.deepEqual(pageAfter(events, 0, 2), [{id: 1}, {id: 2}]);
  assert.deepEqual(events, [{id: 3}, {id: 1}, {id: 2}]);
});
test('zero limit', () => assert.deepEqual(pageAfter([{id: 1}], 0, 0), []));
test('invalid limit', () => assert.throws(() => pageAfter([], 0, -1), RangeError));
