const { query, validationResult } = require('express-validator');
const MobileFoodLocation = require('../models/MobileFoodLocation');

exports.searchFoodItems = [
    query('term')
        .exists().withMessage('Search term must be provided.')
        .trim()
        .isLength({ min: 1 }).withMessage('Search term must be at least 1 character long.')
        .escape(),

    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { term } = req.query;

        try {
            const results = await MobileFoodLocation.query()
                .where('FoodItems', 'like', `%${term}%`);
            res.json(results);
        } catch (error) {
            console.error('Error executing query:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
];
