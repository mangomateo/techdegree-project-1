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
    citation: undefined,
    year: undefined,
    tags: ['literature', 'poetry']
  },
  {
    quote: `Tough times never last, but tough people do.`,
    source: `Robert H. Schuller`,
    citation: undefined,
    year: undefined,
    tags: ['motivation', 'religion']
  },
  {
    quote: `We talkin' about practice?`,
    source: `Allen Iverson`,
    citation: undefined,
    year: `2002`,
    tags: ['sports', 'basketball']
  },
  {
    quote: `I can't believe what you say because I can see what you do.`,
    source: `James Baldwin`,
    citation: undefined,
    year: undefined,
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
    citation: undefined,
    year: undefined,
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

// This function changes the background color of the page and tags 
const changeColor = () => {
  let body = document.querySelector('body');
  let tag1 = document.querySelector('#tag-1');
  let tag2 = document.querySelector('#tag-2');

  body.style.backgroundColor = `rgb(${random255()}, ${random255()}, ${random255()})`;
  tag1.style.backgroundColor = `rgb(${random255()}, ${random255()}, ${random255()})`;
  tag2.style.backgroundColor = `rgb(${random255()}, ${random255()}, ${random255()})`;
}

/***
 * `printQuote` function
***/
const printQuote = () => {

  let html = ``;
  let container = document.querySelector('.quote-box');

  // Run getRandomQuote() function to randomly select an object from the quotes array
  let item = getRandomQuote();

  html += `<p class="quote"> ${ item.quote } </p>
           <p class="source"> ${ item.source }`;
  
  if (item.citation !== undefined) {
    html += `<span class="citation"> ${ item.citation } </span>`;
  }

  if (item.year !== undefined) {
    html += `<span class="year"> ${ item.year } </span>`;
  }

  html += `<h6><span id="tag-1">${ item.tags[0] }</span> 
          <span id="tag-2">${ item.tags[1] }</span></h6>
           </p>`

  // Update content of .quote-box with dynamically generated info         
  container.innerHTML = html;

  // Change the color of the page and tags
  changeColor();
}

// Automatically refresh the page every 5 seconds
const refreshPage = () => setInterval(printQuote, 5000);

printQuote();
refreshPage();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
