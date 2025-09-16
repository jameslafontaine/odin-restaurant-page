import logoImageSrc from "./img/restaurant-logo-640x640.jpg";

export function renderContactContent() {
    const contentDiv = document.querySelector("#content");

    // Create a module container
    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contact-container");

    contactContainer.innerHTML = `
        <img src="${logoImageSrc}" 
             alt="outline of a chef with a moustache wearing a tall hat" 
             width="640" height="640">
        <h1>Contact Us</h1>
        <p>
            We'd love to hear from you! Whether you have questions about our menu, want to make a reservation, 
            or need assistance with dietary requirements, our team is here to help.
        </p>
        <p>
            You can reach us through the following methods:
        </p>
        <ul>
            <li><strong>Phone:</strong> (123) 456-7890</li>
            <li><strong>Email:</strong> lerestaurantodin@email.com</li>
            <li><strong>Address:</strong> 123 Culinary Lane, Foodie City, FL 12345</li>
        </ul>
        <p>
            We look forward to welcoming you to Le Restaurant Odin and providing you with an exceptional dining experience!
        </p>
    `;

    contentDiv.appendChild(contactContainer);
}