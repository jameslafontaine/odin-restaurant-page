import logoImageSrc from "./img/restaurant-logo-640x640.jpg";

export function renderMenuContent() {
    const contentDiv = document.querySelector("#content");

    // Create a module container
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");

    menuContainer.innerHTML = `
        <img src="${logoImageSrc}" 
             alt="outline of a chef with a moustache wearing a tall hat" 
             width="640" height="640">
        <h1>Le Menu</h1>
        <p>
            Our menu is seasonal and changes often. Here are some examples of dishes we serve:
        </p>
        <p>
            Whether you're joining us for a romantic dinner, a family celebration, or a casual meal, 
            we promise to deliver exceptional service and delectable flavors that will tantalize your taste buds. 
            Bon appétit!
        </p>
        <div class="menu">
            <ul>
                <li>French Onion Soup</li>
                <li>Coq au Vin</li>
                <li>Boeuf Bourguignon</li>
                <li>Ratatouille</li>
                <li>Crème Brûlée</li>
            </ul>
        </div>
    `;

    contentDiv.appendChild(menuContainer);
}