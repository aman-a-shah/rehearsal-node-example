import test from 'node:test';
import assert from 'node:assert/strict';
import { feedResponse } from '../src/feed.js';

test('empty feed keeps the cursor', () => assert.deepEqual(feedResponse([], 10, 5), {items: [], nextCursor: 10}));
