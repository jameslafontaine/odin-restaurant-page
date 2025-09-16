import "./styles.css";
import { renderHomeContent } from "./home.js";
import { renderMenuContent } from "./menu.js";
import { renderContactContent } from "./contact.js";

const contentDiv = document.querySelector("#content");

// Map button selectors to their corresponding render functions for easy extension
const moduleMap = {
  ".home-btn": renderHomeContent,
  ".menu-btn": renderMenuContent,
  ".contact-btn": renderContactContent,
};

// Generic function to show a module
function showModule(renderFunction) {
  contentDiv.innerHTML = '';
  renderFunction();
}

// Attach event listeners in a loop
for (const [selector, renderFunction] of Object.entries(moduleMap)) {
  const button = document.querySelector(selector);
  button.addEventListener("click", () => showModule(renderFunction));
}

// Render the home page by default
renderHomeContent();