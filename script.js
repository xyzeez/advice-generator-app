const quoteNumber = document.querySelector('#quoteNumber');
const quoteParagraph = document.querySelector('#quoteParagraph');
const quoteBtn = document.querySelector('#quoteBtn');

getQuote = (id, advice) => {
    quoteNumber.textContent = id;
    quoteParagraph.textContent = advice.replaceAll('\u00e2\u20ac\u02dc', "\'");
}

generateQuote = () => {
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(quote => {
        getQuote(quote.slip["id"], quote.slip["advice"]);
    })
}

generateQuote();

quoteBtn.addEventListener('click', async () => {
    setTimeout(generateQuote, 1000)
})