// Copyright (c) 2023 Shyla Oommen All rights reserved
//
// Created by: Shyla Oommen
// Created on: Apr 2023
// This file contains the JS functions for index.html

"use strict"

function orderSent() {
  //setting constants for tax and prices for all products (except for salad dressing)
  const HST = 0.13;
  const PRICE_SMALL = 5.99;
  const PRICE_MEDIUM = 7.99;
  const PRICE_LARGE = 10.99;
  const PRICE_TOPPINGS = 1.50;
  const PRICE_DRINKS = 2.50;
  const PRICE_DRESSING = 0.50;

  //declaring size, number of drinks, and salad dressing
  let select = document.getElementById("salad-size");
  let size = select.options[select.selectedIndex].value;
  let select2 = document.getElementById("drinks");
  let nOfDrinks = select2.options[select2.selectedIndex].value;
  let select3 = document.getElementById("salad-dressing");
  let userDressing = select3.options[select3.selectedIndex].value;

  //determining the number of checkboxes checked for number of toppings
  let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  let nOfToppings = checkboxes.length;

  //determining the cost of the toppings using number of toppings x price per topping
  let costToppings = nOfToppings * PRICE_TOPPINGS;
  // initializing sizeCost as 0 and order confirmation for displaying information
  let sizeCost = 0;
  //determining the cost of size + drinks using if, else if, else statements
  
  //if the size is small
  if (size == "small") {
    sizeCost = PRICE_SMALL;
  }
  //if the size is medium
  else if (size == "medium") {
    sizeCost = PRICE_MEDIUM;
  }
  //else if the size is large
  else if (size == "large") {
    sizeCost = PRICE_LARGE;
  }

  //otherwise, the user did not enter a size
  else {
    sizeCost = 0;
  }

  //determining cost of drinks
  let drinksCost = nOfDrinks * PRICE_DRINKS;
  //initializing salad dressing for upcoming if statement
  let dressingCost = 0;

  //adding 0.50 to the subtotal if the user wants salad dressing
  if (userDressing == "yes") {
    dressingCost = PRICE_DRESSING;
  }
  else {
    dressingCost = 0;
    userDressing = "no";
  }

  //calculating the subtotal, tax and total
  let subtotal = sizeCost + costToppings + drinksCost + dressingCost;
  let tax = subtotal * HST;
  let total = subtotal + tax;

  //failed response for when user did not enter a size
  if (sizeCost == 0) {
    document.getElementById("results").innerHTML = "Please enter a size."
  }
  else {
    document.getElementById("results").innerHTML = "You ordered: size " + size + ", " + nOfDrinks + " drink(s), " + nOfToppings + " toppings, and you said " + userDressing + " to salad dressing. <br>Your subtotal is $" + subtotal.toFixed(2) + ".<br>The amount of HST added is $" + tax.toFixed(2) + ".<br>Your total is $" + total.toFixed(2) + ".";
  }
  
}
