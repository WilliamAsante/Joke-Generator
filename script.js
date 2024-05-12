"use strict";

const joke = document.querySelector(".joke");
const btn = document.querySelector(".btn");
const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";

let getJoke = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    if (data.error) {
      throw new Error(`API error: ${data.error}`);
    }
    if (data.joke === undefined || data.joke === null) {
      throw new Error(`API returned undefined or null joke`);
    }
    joke.textContent = `${data.joke}`;
  } catch (error) {
    console.error('Error fetching joke:', error);
    // Display a fallback message to the user
    joke.textContent = "Oops! Failed to fetch joke. Please try again later.";
  }
};

btn.addEventListener("click", getJoke);
getJoke(); // Call the function once to fetch a joke when the page loads
