import { pageAfter } from './pagination.js';

export function feedResponse(events, cursor, limit) {
  const items = pageAfter(events, cursor, limit);
  return { items, nextCursor: items.length ? items.at(-1).id : cursor };
}
