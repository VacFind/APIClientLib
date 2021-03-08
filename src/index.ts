import { AsyncAirtable } from 'asyncairtable';
import { QueryObject, AirtableRecord } from 'asyncairtable/lib/@types';

export const asyncAirtable = new AsyncAirtable(
  'keyyCSADD61J0D4wQ',
  'appGzEQkD3QySIDvj',
  { baseURL: 'https://api.vacfind.org/v0' }
);

export let loadLinks = async (
  filterOpts: QueryObject
): Promise<AirtableRecord[]> => {
  return asyncAirtable
	.select('links', {
		sort: [{ field: 'group', direction: 'asc' }],
		where: filterOpts
	})
	.then((results: AirtableRecord[]) => results);
};


