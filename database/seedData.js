const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
const { Model } = require('objection');
const Knex = require('knex');
const knexConfig = require('../knexfile');
const MobileFoodLocation = require('../models/MobileFoodLocation');

const knex = Knex(knexConfig.development);
Model.knex(knex);

async function insertDataByRow(data) {
    for (let i = 0; i < data.length; i++) {
        const row = data[i];
        await MobileFoodLocation.query().insert(row);
    }
}

async function seedData() {
    const csvFilePath = path.join(__dirname, 'Mobile_Food_Facility_Permit.csv');
    const data = [];

    fs.createReadStream(csvFilePath)
        .pipe(csv())
        .on('data', (row) => {
            data.push(row);
        })
        .on('end', async () => {
            try {
                await insertDataByRow(data);
                console.log('Data imported successfully');
            } catch (error) {
                console.error('Error importing data:', error);
            } finally {
                knex.destroy();
            }
        });
}

seedData();
