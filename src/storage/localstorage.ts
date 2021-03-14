
export default class LocalStorage<T> {

	persistToStorage = (query: Promise<T>, storageKey: string) => {

		return query.then((results) => {
			if (results) {
				localStorage.setItem(storageKey, JSON.stringify(results));
			}
			// pass results through
			return results
		})
	}

	retrieveFromStorage = (storageKey: string, defaultValue: any): T | T[] => {
		const storedValue = localStorage.getItem(storageKey);
		if (storedValue) {
			return JSON.parse(storedValue);
		} else {
			return defaultValue;
		}
	}

}

