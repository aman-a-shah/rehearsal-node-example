export function pageAfter(events, cursor, limit) {
  if (!Number.isInteger(limit) || limit < 0) throw new RangeError('Invalid limit');
  return events.filter(event => event.id >= cursor).sort((a, b) => a.id - b.id).slice(0, limit);
}
