const express = require('express');
const router = express.Router();
const Restaurant = require('../models/restaurant');
const Meal = require('../models/meal');
const Cart = require('../models/cart');

router.get('/mcdonalds', (req,res)=>{
    Meal.findAll({
        where:{
            restaurantId : 1
        }
    }).then(meals=>{
        res.render('restaurant', {title : 'McDonalds', meals: meals});
    });
});


router.get('/add-to-cart/:mealId', (req,res)=>{
    let productId = req.params.mealId;
    let cart = new Cart(req.session.cart ? req.session.cart : {});

    Meal.findByPk(productId)
        .then(meal=>{
            cart.add(meal, meal.mealId);
            req.session.cart = cart;
            console.log(req.session.cart);
            req.flash('success','Item added');
            res.redirect('back');
        })
        .catch(err=>{
            req.flash('danger','Item unavailable');
            res.redirect('back');
        })
})

module.exports = router;