function pizzaOven(crust,sauce,cheeses,toppings){
    var pizza={};
    pizza.crustType=crust;
    pizza.sauceType=sauce;
    pizza.cheeseTypes=cheeses;
    pizza.toppings=toppings;
    return pizza;
}
function randomPizza(){
    var crusts=["deep dish","hand tossed"];
    var sauces=["traditional","marinara"];
    var cheeses=["mozzarella","feta"];
    var toppings=["mushrooms","olives","onions","sausages","pepperoni"];

    var crust=crusts[Math.floor(Math.random()*crusts.length)];
    var sauce=sauces[Math.floor(Math.random()*sauces.length)];
    var cheese=cheeses[Math.floor(Math.random()*cheeses.length)];
    var topping1=toppings[Math.floor(Math.random()*toppings.length)];
    var topping2=toppings[Math.floor(Math.random()*toppings.length)];

    return pizzaOven(crust,sauce,cheese,[topping1,topping2]);
}

var pizza1=pizzaOven("deep dish","traditional",["mozzarella"],["pepperoni","sausage"]);
var pizza2=pizzaOven("hand tossed","marinara",["mozzarella","feta"],["mushrooms","olives","onions"]);
var pizza3=pizzaOven("hand tossed","traditional",["mozzarella"],["pepperoni","sausage"]);
var pizza4=pizzaOven("deep dish","marinara",["mozzarella","feta"],["mushrooms","olives","onions"]);
console.log(pizza1);
console.log(pizza2);
console.log(pizza3);
console.log(pizza4);

console.log(randomPizza());