import AsyncAirtable = require("asyncairtable");
import { AirtableRecord, QueryObject } from "asyncairtable/lib/@types";

const asyncAirtable = new AsyncAirtable("keyyCSADD61J0D4wQ", "appGzEQkD3QySIDvj", { baseURL: "https://api.vacfind.org/v0" });//, { ...CONFIG }


export const helloWorld = () => {
	console.log("Hello World");
}

export var loadLinks = async (filterOpts:QueryObject) => {

	// let allrecords = []

	return asyncAirtable.select('links', {
		sort: [
			{ field: 'group', direction: 'asc' }
		],
		where: filterOpts
	}).then((results: AirtableRecord[]) => persistToStorage(results))
};

const persistToStorage = (results: AirtableRecord[]) => {
	console.log("persisting to storage")
	if (results) {
		localStorage.setItem("vacFind-links", JSON.stringify(results));
	}
	return results
}

export const retrieveFromStorage = ():AirtableRecord[] => {
	console.log("retrieving from storage")
	const storedValue = localStorage.getItem("vacFind-links");
	if (storedValue){
		return JSON.parse(storedValue);
	} else {
		return [];
	}
	
}
