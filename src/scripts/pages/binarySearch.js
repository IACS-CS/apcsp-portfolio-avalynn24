// src/scripts/pages/binarySearch.js
import { renderMenu } from "../utils/renderMenu.js";
import { renderIframe } from "../utils/renderIframe.js";

// Render the Binary Search project page
export function renderBinarySearch() {
  /* html */
  return `
    <!-- code generated in binarySearch.js -->
    <h1 class="animate__animated animate__bounceInDown">Binary Search Project</h1>    
    ${renderMenu("#/binary-search")}
  
    <article>
      <p>Assignment: Create a program built on the concept of binary search</p>
      <hr>
      <p>In this project Chase and I decided to create a binary search game where 
      the user has to think of a linix distro and the program has to guess what distro 
      they're thinking of using different queations.</p>
      ${renderIframe(
        "https://iacs-cs.github.io/binary-search-chase-and-ava/",
        "My Project Title"
      )}
    </article>
    <!-- end code generated in binarySearch.js -->
  `;
}
