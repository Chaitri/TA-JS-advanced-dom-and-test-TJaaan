document.addEventListener('DOMContentLoaded', () => {
    alert('The content of the DOM is loaded');
});

let quotesElm = document.querySelector('.quotes');

function createUI() {
    let initialQuotes = quotes.splice(0,4);
    initialQuotes.forEach( quoteObj => {
        let div = document.createElement('div');
        let quote = document.createElement('q');
        let author = document.createElement('p');

        div.classList.add('quoteElm');
        quote.innerText = quoteObj.quoteText;
        author.innerText = '- ' + quoteObj.quoteAuthor;
        author.classList.add('author');

        div.append(quote, author);
        quotesElm.append(div);
    });
}

window.addEventListener('scroll', () => {
    let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;
    if (windowRelativeBottom > document.documentElement.clientHeight + 100) return;
    else createUI();
});

createUI();