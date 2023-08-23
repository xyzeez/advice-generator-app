const quoteNumber = document.querySelector('#quoteNumber');
const quoteParagraph = document.querySelector('#quoteParagraph');
const quoteBtn = document.querySelector('#quoteBtn');
const loader = document.querySelector('#loader');
const quoteContainer = document.querySelector('#quoteContainer');

let loading;

showLoader = () => {
    loader.classList.remove('loader_hidden');
    quoteContainer.classList.add('quote_hidden');
}

hideLoader = () => {
    loader.classList.add('loader_hidden');
    quoteContainer.classList.remove('quote_hidden');
}

controlLoader = () => {
    if (loading) {
        showLoader();
    }
    if (!loading) {
        setTimeout(hideLoader, 1000);
    }
}

getQuote = (id, advice) => {
    quoteNumber.textContent = id;
    quoteParagraph.textContent = advice.replaceAll('\u00e2\u20ac\u02dc', "\'");
}

generateQuote = () => {
    loading = true;
    controlLoader();
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(quote => {
        getQuote(quote.slip["id"], quote.slip["advice"]);
        loading = false;
        controlLoader();
    })
}

generateQuote();

quoteBtn.addEventListener('click', async () => {
    generateQuote();
})