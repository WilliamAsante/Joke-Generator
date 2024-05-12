"use strict";

const joke = document.querySelector(".joke");
const btn = document.querySelector(".btn");
const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";

let getJoke = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    joke.textContent = `${data.joke}`;
  } catch (error) {
    console.error("Error fetching joke:", error);
  }
};

btn.addEventListener("click", getJoke);
getJoke(); // Call the function once to fetch a joke when the page loads
