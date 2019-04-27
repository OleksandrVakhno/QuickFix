const Meal = require('../models/meal');
const db = require('../config/database');

let meals = [
    new Meal({
        mealName: 'BigMac',
        price: 3.25,
        restaurantId: 1,
        Img: '/images/Meals/BigMac.png'
    })
]

for( let i = 0; i< meals.length; i++){
    meals[i].save();
}

