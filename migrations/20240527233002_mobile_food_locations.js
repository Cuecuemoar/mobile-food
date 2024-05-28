/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('mobile_food_locations', function(table) {
        table.increments('id').primary();
        table.integer('locationid');
        table.string('Applicant');
        table.string('FacilityType');
        table.integer('cnn');
        table.string('LocationDescription');
        table.string('Address');
        table.string('blocklot');
        table.string('block');
        table.string('lot');
        table.string('permit');
        table.enum('Status', ['REQUESTED', 'APPROVED', 'SUSPEND', 'EXPIRED', 'ISSUED']);
        table.string('FoodItems');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('mobile_food_locations');
};
