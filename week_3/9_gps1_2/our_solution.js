// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1. Max Lock
//  2. Yen Tran


// 0. "YOU SIGNED... WHO?!"

var angelinajolie = {
	name: "Angelina Jolie",
	age: 38,
	quote: "I'm badass!"
}

var bradpitt = {
    name: "Brad Pitt",
    age: 50,
    quote: "You don't talk about fight club."
}

// 1. "Here they Come!"

var adamSandler = {
    name: "Adam Sandler",
    age: 47,
    quote: "That's your home! Are you too good for your home?!"
}

var  kirstenBell = {
    name: "Kristen Bell",
    age: 33,
    quote: "Do you wanna build a snowman?"
}
var jimCarrey = {
    name: "Jim Carrey",
    age: 52,
    quote: "...So you're telling me there's a chance? YEAH!"
}


// 2. "TIME IS MONEY!"

var Client = function(name, age, quote) {
  this.name = name;
  this.age = age;
  this.quote = quote;
}

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";





// 3. "SHOW 'EM OFF!"

var adamSandler = new Client("Adam Sandler", 47, "That's your home! Are you too good for your home?!");
var kirstenBell = new Client("Kristen Bell", 33, "Do you wanna build a snowman?");
var jimCarry = new Client("Jim Carry", 52, "...So you're telling me there's a chance? YEAH!");

var Client = function Client(name, age, quote) {
  this.name = name;
  this.age = age;
  this.quote = quote;
  this.showQuote = function () {
      console.log("My client" + name + ", who is" + age + " says" + quote + ".");
  }
}


// 4. "But wait, there's more!"

var Client = function Client(name, age, quote) {
  this.name = name;
  this.age = age;
  this.quote = quote;
  this.showQuote = function() {
  console.log(quote);
  }
}


// 5.  ** BONUS **


//  6.  Your Reflection:
//
// I came into this session thinking that I had somewhat of an decent
// understanding of Js, but came out feeling lost. I had gone through
// all the Js labs, but was stumped when we came across the constructor
// and didn't know what to do. It sounds like the people who succeeded 
// in this challenge were the ones who did the Js Codeacademy before hand.
// I will likely try and squeeze in time to do it. 
