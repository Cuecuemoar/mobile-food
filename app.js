const express = require('express');
const Knex = require('knex');
const { Model } = require('objection');
const searchController = require('./controllers/searchController');

const knexConfig = require('./knexfile');
const knex = Knex(knexConfig.development);
Model.knex(knex);

const app = express();
app.use(express.json());

app.get('/search', searchController.searchFoodItems);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

module.exports = app;
