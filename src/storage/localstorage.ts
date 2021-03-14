
export default class LocalStorage<T> {
	storageKey: string;
	defaultValue: any;

	constructor(storageKey: string, defaultValue?:T|T[]){
		this.storageKey = storageKey;
		this.defaultValue = defaultValue;
	}

	asyncPersist = (query: Promise<T | T[]>) => {

		return query.then((results) => {
			if (results) {
				this.persist(results)
			}
			// pass results through to another possible async call
			return results
		})
	}

	persist = (data:T | T[]) => {
		localStorage.setItem(this.storageKey, JSON.stringify(data));
	}

	retrieve = (): T | T[] => {
		const storedValue = localStorage.getItem(this.storageKey);
		if (storedValue) {
			return JSON.parse(storedValue) as T | T[];
		} else {
			return this.defaultValue;
		}
	}

}

