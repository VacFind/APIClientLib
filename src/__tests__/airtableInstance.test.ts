import { asyncAirtable } from './../index';

describe('Tests for Airtable instance', () => {
  test('init. of airtable instance', () => {
	expect(asyncAirtable.base).not.toBeNull();
  });
});
