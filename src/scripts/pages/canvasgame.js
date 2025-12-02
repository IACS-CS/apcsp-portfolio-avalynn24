// src/scripts/pages/canvasgame.js
import { renderMenu } from "../utils/renderMenu.js";
import { renderIframe } from "../utils/renderIframe.js";

// Render the Canvas Game project page
export function renderCanvasGame() {
  /* html */
  return `
    <!-- code generated in binarySearch.js -->
    <h1 class="animate__animated animate__bounceInDown">Canvas Game Project</h1>    
    ${renderMenu("#/canvasgame.js")}
  
    <article>
      <p>Assignment: Create an original game using animation code.</p>
      <hr>
      <p>In this project Chase and I decided to create a game where 
      the goal is to move the red ball into the corner using a leaf 
      blower as many times as possible to gain points. The blue ball 
      is the enimy in which the player must aviod, other wise they 
      loose and the game resets. To make the game more challenging 
      the blue ball grows larger each time you gain a point.</p>
      ${renderIframe(
        "https://iacs-cs.github.io/simple-canvas-game-dvd-consortium/",
        "My Project Title"
      )}
    </article>
    <!-- end code generated in binarySearch.js -->
  `;
}
