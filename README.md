## Overview
I developed an API using Node and Express that allows users to search food truck offerings. 
To support this, I created a migration to model the food truck locations and wrote a seeding script to populate a local database.
I chose this approach over wrapping the city's API for several reasons. 
By maintaining a local store, I avoid dependency on the city's API availability or latency variations, ensuring consistent performance for my API.
Additionally, the data set is small enough to be easily maintained with regular updates.

I created a single `/search` endpoint to allow users to see all food trucks whose offerings match the term they supply.
I opted for a single endpoint with useful validation and meaningful test coverage over multiple unrefined endpoints.
Every aspect of the project is extensible to allow for additional endpoints or other functionality without having to change existing functionality.

I used a minimalist directory structure to include only code I'd written to make the project more easily reviewable. 
If I were going to deploy this as a production application I'd use the extra Express boilerplate to better organize things like routes and controllers.

---
## Getting Started

Before attempting to run this project, [install Node if you haven't already](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs), it's quick, easy, and fun! 

Clone this repo, then from the root of the project run the following commands:

`npm install`

`knex migrate:latest`

`node database/seedData.js`

`npm test`

`node app.js`

By default, the server will be available at [localhost:3000](localhost:3000). 
There is a single `/search` endpoint defined which will return a set of mobile food locations
based on the `term` parameter supplied. For example, `/search?term=taco` will return all locations that include
"taco" in their offerings.