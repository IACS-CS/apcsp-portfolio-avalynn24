import {renderMenu} from "../utils/renderMenu";

export function renderCitations() {
  /* html */
  return `
  <h1 class="animate__animated animate__bounceInDown">Citations</h1>
  ${renderMenu("#/citations")}
  <p>My teacher Mr. Hinkle helped with my code.</p>
  <p>I also Copilot to help with code. Spacificly with animating the space capsule, 
  making the grid layout for the links and projects, 
  and it helped me with the text animations and installing animate.css.</p>
  <p>I used the animate.css library for animations.</p>
  <p>2025 Avalynn Annarelli. CC BY-SA 4.0</p>
  <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
  <img
    alt="Creative Commons License"
    style="border-width:0"
    src="https://i.creativecommons.org/l/by/4.0/88x31.png"
  />
</a>
<br />This work is licensed under a
<a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
  Creative Commons Attribution 4.0 International License</a
>.
  `;
}
