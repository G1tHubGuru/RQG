//DDOM elements
let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");

// API URL
const url = "https://api.quotable.io/random";

// Funktion zum Abrufen und Anzeigen von Zitaten
let getQuote = () => {
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      quote.innerText = item.content;
      author.innerText = item.author;
    });
};

//Zitat beim Laden der Seite
window.addEventListener("load", getQuote);

//neues Zitat beim Klicken des Buttons
btn.addEventListener("click", getQuote);