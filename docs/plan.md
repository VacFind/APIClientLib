# The Goal

essentially the goal is to create a national client library to provide combined access to data form sources such as:
- regional API's from sites like covidwa.com and nycvaccinelist
- scrapers for retail and government sites
- Data collected from phonecall based operations
- data crowdsourced from people who have gotten vaccines
- [GISCorps mapping data including vaccination sites](https://covid-19-giscorps.hub.arcgis.com/)
- [covid19api](https://covid19api.com/) (seems to be mostly dashboard type data, lower priority)

This library would intelligently handle calling whichever API is required to process the request and switching between them so all clients have to do is request data and it handles the behind the scenes of that process


# TODO's
- [ ] create a spec for an API request format that allows requests to be sotred into their respective sources (or sent out to multiple API's)
- [ ] 