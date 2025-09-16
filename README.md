# Odin Restaurant Page

A modular JavaScript project built as part of [The Odin Project](https://www.theodinproject.com/) curriculum.  
This project demonstrates **modern front-end development practices** using **npm**, **Webpack**, and modular JavaScript.

## Project Description

This project implements a dynamic, multi-section restaurant website entirely in JavaScript, without separate HTML files.  
It emphasizes **modular design**, **encapsulation**, and **dynamic DOM rendering**, while leveraging **npm-managed dependencies** and **Webpack bundling** for maintainable and scalable code.

---

## Features

### Modern Front-End Tooling

-   **npm** is used to manage development dependencies and scripts.
-   **Webpack** handles:
    -   Bundling all JavaScript modules into a single build file.
    -   Managing CSS imports via loaders.
    -   Importing images and other assets.
    -   Providing a development server with hot reloading.
-   **Modular file structure** ensures each page section (Home, Menu, Contact) is maintained in its own module.
-   Supports **ES6 modules** with import/export syntax.

### UI / UX

-   Dynamic content insertion: modules generate their own **content containers** appended to the main content div.
-   Navigation buttons dynamically render different pages without page reloads.

### Code Encapsulation & Organization

-   Modules are self-contained and manage their own DOM elements.
-   Utility functions handle repeated tasks like clearing the main container or creating reusable components.
-   CSS and asset handling is fully integrated with Webpack for maintainability.

### Dynamic Content

-   Home page displays a logo, headings, and descriptive text.
-   Menu page dynamically lists **menu items**.
-   Contact page provides **contact info** and directions for reservations.
-   Easily extendable for new pages or dynamic data.

### Buttons and Controls

-   Navigation buttons use **event listeners** to call rendering functions for each module.
-   Previous page content is cleared automatically before rendering the next module.
-   All event handling is decoupled from module logic to maintain **separation of concerns**.

---

## Learning Objectives

This project demonstrates:

-   **npm & package management**: installing dependencies, running scripts, and using development tools.
-   **Webpack & asset bundling**: combining JavaScript, CSS, and images for efficient builds.
-   **Modules & Factory Functions**: organizing JavaScript into reusable, self-contained units.
-   **Dynamic DOM manipulation**: programmatically building page content.
-   **Event handling & UI interactivity**: managing page navigation and user interactions.
-   **Encapsulation & separation of concerns**: keeping UI rendering, data, and logic distinct.
-   **Scalable and maintainable code**: writing code structured for growth and reusability.

---

## Live Demo

[Odin Restaurant Page Live Demo](https://jameslafontaine.github.io/odin-restaurant-page/)

---

## Future Improvements

-   Enhance **UI/UX** with transitions, animations, and responsive layout.
-   Add **persistent state** using `localStorage` (e.g., for user preferences or session data).
-   Extend pages with interactive elements such as filters, forms, or modals.
-   Improve **accessibility**: ARIA labels, keyboard navigation, and contrast.
-   Refactor modules for **reuse** in other projects.
-   Optimize Webpack configuration for production builds.

---

## License

This project is for educational purposes and follows The Odin Project curriculum guidelines.
