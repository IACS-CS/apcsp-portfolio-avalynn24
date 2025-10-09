// src/scripts/pages/welcome.js
import { renderMenu, renderProjectGrid } from "../utils/renderMenu.js";

export function renderWelcome() {
  return `
    <!-- code generated in welcome.js -->
    <h1 class="animate__delay-2s animate__animated animate__backInDown">Avalynn's Student Portfolio</h1>
    ${renderMenu("#/")}
    <h2>Projects</h2>
    ${renderProjectGrid()}
    <div class="hero-background">
      <img class="hero" data-aos-duration="10500" data-aos-delay="3000" data-aos="zoom-in" src="./capsule-hi-res-grey.png" alt="A space capsule" >
    </div>
    <h2>About Me</h2>
    <p>My name is Avalynn. I am a junior at IACS.</p>
    <h2>Portfolio Information</h2>
    <p>This portfolio has all of my projects from AP Computer Science.</p>
    <p>Use the menu to navigate to different pages.</p>
    <!-- end code generated in welcome.js -->
  `;
}
