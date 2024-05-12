"use strict";

const joke = document.querySelector(".joke");
const btn = document.querySelector(".btn");
const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";

let getjoke = () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      joke.textContent = `${data.joke}`;
    });
};

btn.addEventListener("click", getjoke);
getjoke()
