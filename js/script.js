// Copyright (c) 2023 Shyla Oommen All rights reserved
//
// Created by: Shyla Oommen
// Created on: Apr 2023
// This file contains the JS functions for index.html

"use strict"

function orderSent() {
  //setting a constants for tax and all prices except for salad dressing
  const HST = 0.13;
  const PRICE_SMALL = 5.99;
  const PRICE_MEDIUM = 7.99;
  const PRICE_LARGE = 10.99;
  const PRICE_TOPPINGS = 1.50;
  const PRICE_DRINKS = 2.50;
  
  //initializing variables sizeDrink for if else statement
  let sizeDrink = 0;
  
  //declaring size, number of drinks, and salad dressing
  let size = document.getElementById("size").value;
  let nOfDrinks = parseInt(document.getElementById("drinks").value);
  let userDressing = (document.getElementById("options").value);
  
  //determining the number of checkboxes checked for number of toppings
  let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  let nOfToppings = checkboxes.length;
  
  //determining the cost of the toppings using number of toppings x price per topping
  let costToppings = nOfToppings * PRICE_TOPPINGS;
  
  //determining the cost of the base sandwich using compound if/then statements
  //if the size is small and there is one drink
  if ((size == "small") && (nOfDrinks == 1)) {
    sizeDrinks = PRICE_SMALL + PRICE_DRINKS;
  }
  //if the meat type is beef and the size is small
  else if ((meatType == "beef") && (sandSize == "small")) {
    baseSandCost = 6.50;
  }
  //if the meat type is chicken and the size is medium
  else if ((meatType == "chicken") && (sandSize == "medium")) {
    baseSandCost = 7.00;
  }
  //if the meat type is beef and the size is medium
  else if ((meatType == "beef") && (sandSize == "medium")) {
    baseSandCost = 7.50;
  }
  //if the meat type is chicken and the size is large
  else if ((meatType == "chicken") && (sandSize == "large")) {
    baseSandCost = 8.00;
  }
  //if the meat type is beef and the size is large
  else if ((meatType == "beef") && (sandSize == "large")) {
    baseSandCost = 8.50;
  }
  
  //determining the cost of the sides using constants
  const UNIT_PRICE_DRINKS = 3.00;
  let costDrinks = numDrinks * UNIT_PRICE_DRINKS;
  const UNIT_PRICE_POTATOES = 6.00;
  let costPotatoes = numPotatoes * UNIT_PRICE_POTATOES;
  
  //calculating the subtotal, tax and total
  let subtotal = baseSandCost + costToppings + costDrinks + costPotatoes;
  let tax = subtotal * HST;
  let total = subtotal + tax;

  //displaying the totals to the screen
  document.getElementById("results").innerHTML = "Your subtotal is $" + subtotal.toFixed(2) + ".<br>The amount of HST added is $" + tax.toFixed(2) + ".<br>Your total is $" + total.toFixed(2) + ".";
}
