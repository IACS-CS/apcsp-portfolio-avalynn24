// src/scripts/pages/welcome.js
import { renderMenu } from "../utils/renderMenu.js";

export function renderWelcome() {
  /* html */
  return `
    <!-- code generated in welcome.js -->
    <h1>Avalynn's Student Portfolio</h1>
    ${renderMenu("#/")}
    <div class="hero-background">
    <img class="hero" data-aos-duration="10500" data-aos-delay="3000" data-aos="zoom-in" src="./capsule-hi-res-grey.png" alt="A space capsule" >
    </div>
    <h2>About Me</h2>
    <p>My name is Avalynn. I am a junior at IACS.</p>
    <p>This portfolio has all of my projects!</p>
    <p>plz be nice to my projects, they have feelings too</p>

    <h2>Enjoy!</h2>

    <!-- end code generated in welcome.js -->
  `;
}
