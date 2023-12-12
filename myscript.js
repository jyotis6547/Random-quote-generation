
const quotesData = [
    { quote: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt", category: "Inspiration" },
    { quote: "Do not wait to strike till the iron is hot, but make it hot by striking.", author: "William Butler Yeats", category: "Motivation" },
    // Add more quotes with author and category
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotesData.length);
    return quotesData[randomIndex];
}

const generateBtn = document.getElementById('generate-btn');
generateBtn.addEventListener('click', function() {
    const quoteText = document.getElementById('quote-text');
    const quoteInfo = document.getElementById('quote-info');

    const randomQuote = getRandomQuote();
    quoteText.textContent = `"${randomQuote.quote}"`;
    quoteInfo.textContent = `- ${randomQuote.author}, ${randomQuote.category}`;
});