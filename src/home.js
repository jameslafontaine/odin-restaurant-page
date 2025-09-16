import logoImageSrc from "./img/restaurant-logo-640x640.jpg";

export function renderHomeContent() {
  const contentDiv = document.querySelector("#content");

  // Create a module container
  const homeContainer = document.createElement("div");
  homeContainer.classList.add("home-container");

  homeContainer.innerHTML = `
      <img src="${logoImageSrc}" 
           alt="outline of a chef with a moustache wearing a tall hat" 
           width="640" height="640">
      <h1>Le Restaurant Odin</h1>
      <p>
        Welcome to Le Restaurant Odin, where we serve the finest cuisine inspired by the culinary traditions of France. 
        Our chefs are dedicated to creating exquisite dishes using the freshest ingredients, ensuring a memorable dining 
        experience for all our guests.
      </p>
      <p>
        Whether you're joining us for a romantic dinner, a family celebration, or a casual meal, 
        we promise to deliver exceptional service and delectable flavors that will tantalize your taste buds. 
        Bon appétit!
      </p>
    `;

  contentDiv.appendChild(homeContainer);
}