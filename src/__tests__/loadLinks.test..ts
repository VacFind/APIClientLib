import {  loadLinks } from '../index';

describe('Tests for LoadLinks Function', () => {
  test('result from "loadLinks" is not null', async () => {
	const links = await loadLinks({});
	expect(links).not.toBeNull();
  });
});
