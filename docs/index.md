# CovidJS Documentation
This is an NPM package designed to make it easier to integrate data from various COVID-related API's into your project so you can easily access up-to-date vaccine availability data.

The purpose of this library is to make it easier for developers to access multiple COVID-related API's and allow the maintainers of those API's to have some control over client implementations. This provides the API developers with the ability to help move projects over to a new versions of their API should they need to make a breaking change. This also helps developers more easily access data from multiple API's and update their implementations just by updating a dependency.  


## Goal

essentially the goal is to create a national client library to provide combined access to data form sources such as:
- regional API's from sites like covidwa.com and nycvaccinelist
- scrapers for retail and government sites
- Data collected from phonecall based operations
- data crowdsourced from people who have gotten vaccines
- [GISCorps mapping data including vaccination sites](https://covid-19-giscorps.hub.arcgis.com/)
- [covid19api](https://covid19api.com/) (seems to be mostly dashboard type data, lower priority)
- airtable-hosted databases from various covid projects

This library would intelligently handle calling whichever API is required to process the request and switching between them so all clients have to do is request data and it handles the behind the scenes of that process



## Structure

This repo plans to take a modular approach:

"backends" (not yet implemented) represent various api's (i.e. each thing listed in the goals section will likely become one or more backends). each backend should be able to:
- check whether a  URL will work on it
- report what kinds of information it can provide (vaccine, testing counts, case count, vaccination sites, site availabilities, etc )
- interface with the API or backend that it is for

"adapters" (not yet implemented) are code that adapts different API schemas into one standard common format to interface with the user. These should be two-way adapters so requests can be translated to something that the backend understands (if it doesnt use the standard scraper format (TBD, add link to one here when it exists)) for both requests and responses. datasources pass data through adapters before returning the results of a function call to the client

the main file should be responsible for exporting classes and potentially providing a standard interface or some kind of "registration system" (not yet implemented) where backends can "register" to provide certain pieces of data


## Current Usage

This library is currently only being used to interface with the VacFind API to help display a directory of resources on https://vacfind.org.


## TODO's
- [ ] create a spec for an API request/response format that allows calls to this library to be sent out to the correct API's

