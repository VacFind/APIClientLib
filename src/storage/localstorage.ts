
export default class LocalStorage<T> {
	storageKey: string;
	defaultValue: any;

	constructor(storageKey: string, defaultValue?:T|T[]){
		this.storageKey = storageKey;
		this.defaultValue = defaultValue;
	}

	persistToStorage = (query: Promise<T>) => {

		return query.then((results) => {
			if (results) {
				localStorage.setItem(this.storageKey, JSON.stringify(results));
			}
			// pass results through
			return results
		})
	}

	retrieveFromStorage = (): T | T[] => {
		const storedValue = localStorage.getItem(this.storageKey);
		if (storedValue) {
			return JSON.parse(storedValue) as T | T[];
		} else {
			return this.defaultValue;
		}
	}

}

