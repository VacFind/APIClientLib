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


export const persistToStorage = (query: Promise<AirtableRecord[]>, storageKey: string) => {

	return query.then((results) => {
		if (results) {
			localStorage.setItem(storageKey, JSON.stringify(results));
		}
		// pass results through
		return results
	})
}

export const retrieveFromStorage = (storageKey: string, defaultValue: any):AirtableRecord[] => {
	const storedValue = localStorage.getItem(storageKey);
	if (storedValue){
		return JSON.parse(storedValue);
	} else {
		return defaultValue;
	}
}
