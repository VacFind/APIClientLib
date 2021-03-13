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


export const persistToStorage = (results: AirtableRecord[]) => {
	if (results) {
		localStorage.setItem('vacFind-links', JSON.stringify(results));
	}
	return results
}

export const retrieveFromStorage = ():AirtableRecord[] => {
	const storedValue = localStorage.getItem('vacFind-links');
	if (storedValue){
		return JSON.parse(storedValue);
	} else {
		return [];
	}
}
