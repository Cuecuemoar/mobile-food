const { Model } = require('objection');

class MobileFoodLocation extends Model {
    static get tableName() {
        return 'mobile_food_locations';
    }
}

module.exports = MobileFoodLocation;