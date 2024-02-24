const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Don't be afraid to give up the good to go for the great. - John D. Rockefeller",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "If you don't like the road you're walking, start paving another one. - Dolly Parton",
    "Success is stumbling from failure with no loss of enthusiam. - Winston Churchill",
    "If you can do what you do best and be happy, you are further along in life than most people. - Leonardo DiCaprio",
    "We must accept finite disappointment, but never lose infinite hope. - Martin Luther King Jr.",
    "You cannot escape the responsibility of tomorrow by evading it today. - Abraham Lincoln"
];

const generateButton = document.getElementById("generateButton");
const quoteElement = document.getElementById("quote");

generateButton.addEventListener("click", generateRandomQuote);

function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
}