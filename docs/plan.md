# The Goal

essentially the goal is to create a national client library to provide combined access to data form sources such as:
- regional API's from sites like covidwa.com and nycvaccinelist
- scrapers for retail and government sites
- Data collected from phonecall based operations
- data crowdsourced from people who have gotten vaccines
- [GISCorps mapping data including vaccination sites](https://covid-19-giscorps.hub.arcgis.com/)
- [covid19api](https://covid19api.com/) (seems to be mostly dashboard type data, lower priority)
- airtable-hosted databases from various covid projects

This library would intelligently handle calling whichever API is required to process the request and switching between them so all clients have to do is request data and it handles the behind the scenes of that process





# Structure

This repo plans to take a modular approach:

"backends" represent various api's (i.e. each thing listed in the goals section will likely become one or more backends). each backend should be able to:
- check whether a  URL will work on it
- report what kinds of information it can provide (vaccine, testing counts, case count, vaccination sites, site availabilities, etc )
- interface with the API or backend that it is for

"adapters" are code that adapts different API schemas into one standard common format to interface with the user. These should be two-way adapters so requests can be translated to something that the backend understands (if it doesnt use the standard scraper format (TBD, add link to one here when it exists)) for both requests and responses. datasources pass data through adapters before returning the results of a function call to the client

the main file should be responsible for providing a standard interface of functions to the client and determining which backends to use

# TODO's
- [ ] create a spec for an API request format that allows requests to be sotred into their respective sources (or sent out to multiple API's)

