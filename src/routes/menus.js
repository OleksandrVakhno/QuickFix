const express = require('express');
const router = express.Router();
const Restaurant = require('../models/restaurant');
const Meal = require('../models/meal');

router.get('/mcdonalds', (req,res)=>{
    Meal.findAll({
        where:{
            restaurantId : 1
        }
    }).then(meals=>{
        res.render('restaurant', {title : 'McDonalds', meals: meals});
    });
});

module.exports = router;