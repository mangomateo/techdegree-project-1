/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
***/
let quotes = [
  {
    quote: `And so, my fellow Americans: ask not what your country can do for you -- ask what you can do for your country.`,
    source: `John F. Kennedy`,
    citation: `Inauguration Address`,
    year: '1961',
    tags: ['history', 'politics']
  },
  {
    quote: `The dream was always running ahead of me. To catch up, to live for a moment in unison with it, that was the miracle.`,
    source: `Anais Nin`,
    citation: 'Citation unknown',
    year: 'Year unknown',
    tags: ['literature', 'poetry']
  },
  {
    quote: `Tough times never last, but tough people do.`,
    source: `Robert H. Schuller`,
    citation: 'Citation unknown',
    year: 'Year unknown',
    tags: ['motivation', 'religion']
  },
  {
    quote: `We talkin' about practice?`,
    source: `Allen Iverson`,
    citation: 'Citation unknown',
    year: `2002`,
    tags: ['sports', 'basketball']
  },
  {
    quote: `I can't believe what you say because I can see what you do.`,
    source: `James Baldwin`,
    citation: 'Citation unknown',
    year: 'Year unknown',
    tags: ['social justice', 'civil rights']
  },
  {
    quote: 'Just keep swimming!',
    source: `Dory`,
    citation: `Finding Nemo`,
    year: `2003`,
    tags: ['disney', 'film']
  },
  {
    quote: `To infinity and beyond!`,
    source: `Buzz Lightyear`,
    citation: `Toy Story`,
    year: `1995`,
    tags: ['pixar', 'film']
  },
  {
    quote: `Do not be dismayed by the brokenness of the world. All things break. And all things can be mended. Not with time, as they say, but with intention. So go. Love intentionally, extravagantly, unconditionally. The broken world waits in darkness for the light that is you.`,
    source: `L. R. Knost`,
    citation: 'Citation unknown',
    year: 'Year unknown',
    tags: ['motivation', 'healing']
  }
];


/***
 * `getRandomQuote` function
***/
const getRandomQuote = () => {

  // Generate a number between 0 and the length of the quotes array and return it
  let randomNum = Math.floor(Math.random() * quotes.length);
  return quotes[randomNum];
}

// This function generates a random number between 0 and 255, can be used to randomize colors
const random255 = () => Math.floor(Math.random() * 256);

const changeBG = () => {
  let body = document.querySelector('body');

  body.style.backgroundColor = `rgb(${random255()},
                                    ${random255()},
                                    ${random255()})`;
}

/***
 * `printQuote` function
***/
const printQuote = () => {

  // Run getRandomQuote() function to randomly select an object from the quotes array
  let item = getRandomQuote();

  let quote = document.querySelector('.quote');
  let source = document.querySelector('.source');

  // Change the background color of the page
  changeBG();

  // Update the HTML to reflect the properties of the selected object
  quote.innerHTML = `${item.quote}`;
  source.innerHTML = `${item.source}
                      <span class="citation"> ${ item.citation } </span>
                      <span class="year"> ${ item.year } </span>
                      <h6> Tags: ${ item.tags[0] } ${ item.tags[1] } </h6>`;
}

printQuote();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
