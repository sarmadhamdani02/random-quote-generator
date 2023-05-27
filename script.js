

var quotes = [
    "The only way to do great work is to love what you do.",
    "In the end, we only regret the chances we didn't take.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Don't watch the clock; do what it does. Keep going.",
    "Life is either a daring adventure or nothing at all.",
    "Believe you can and you're halfway there.",
    "The best way to predict the future is to create it.",
    "Happiness is not something ready-made. It comes from your own actions.",
    "You miss 100% of the shots you don't take.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "The journey of a thousand miles begins with a single step."
  ];
  
  var authors = [
    "Steve Jobs",
    "Lewis Carroll",
    "Winston Churchill",
    "Eleanor Roosevelt",
    "Sam Levenson",
    "Helen Keller",
    "Theodore Roosevelt",
    "Peter Drucker",
    "Dalai Lama",
    "Wayne Gretzky",
    "Franklin D. Roosevelt",
    "Lao Tzu"
  ];
  

  // Generating a random integer between a minimum and maximum value
var min = 0; // Minimum value (inclusive)
var max = quotes.length; // Maximum value (inclusive)


let nextButton = document.querySelector('.quote-change-btn');

nextButton.addEventListener("click",function(){
    
    var randomInt = Math.floor(Math.random() * (max - min + 1)) + min;

    document.querySelector('.quote').innerText = quotes[randomInt];

    document.querySelector('.quoter').innerText = authors[randomInt];

})
