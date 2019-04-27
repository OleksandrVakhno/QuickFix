const Restaurant = require('../models/restaurant');
const db = require('../config/database');

let restaurants = [
    new Restaurant({
        restaurantName: 'MacDonalds',
        restaurantDesc: 'FastFood',
        backgroungImg: '/images/Restaurants/macdonalds.jpg'
    })
]

for(let i = 0; i < restaurants.length; i++){
    restaurants[i].save();
}