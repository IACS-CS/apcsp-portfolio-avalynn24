// src/scripts/utils/renderMenu.js
export function renderMenu(currentPage) {
  /* html */
  return `    
    <!-- code generated in renderMenu.js -->
    <nav>
      <ul>
        <li>${renderLink("#/" , "Home" ,currentPage)}</li>
        <li>${renderLink(
          "#/binary-search",
          "Binary Search Project",
          currentPage
        )}</li>
        <li>${renderLink("#/citations", "Citations", currentPage)}</li>
      </ul>
    </nav>
    <!-- end code generated in renderMenu.js -->
  `;
}
function renderLink(page, text, currentPage){
  if (page === currentPage){
    return `<strong>${text}</strong>`;
  } else {
    return `<a href="${page}">${text}</a>`;
  }
}
