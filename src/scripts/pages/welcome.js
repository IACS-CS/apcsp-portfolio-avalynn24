// src/scripts/pages/welcome.js
import { renderMenu } from "../utils/renderMenu.js";

export function renderWelcome() {
  /* html */
  return `
    <!-- code generated in welcome.js -->
    <h1>Avalynn's Student Portfolio</h1>
    ${renderMenu()}
    <h2>About Me</h2>
    <p>My name is Avalynn. I am a junior at IACS.</p>
    <p>This portfolio has all of my projects!</p>
    <p>plz be nice to my projects, they have feelings too</p>

    <h2>Example Image</h2>
    <!-- an example image: Notice that images live in public/ -->
    <img src="./example-circle.svg" alt="A blue circle" >

    <!-- end code generated in welcome.js -->
  `;
}
