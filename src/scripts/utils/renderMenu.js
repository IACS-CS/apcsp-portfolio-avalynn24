// src/scripts/utils/renderMenu.js
// Shared project list
export const projectList = [
  { url: "#/binary-search", label: "Binary Search Project" },
  { url: "#/citations", label: "Citations" },
];

export function renderMenu(currentPage) {
  return `
    <!-- code generated in renderMenu.js -->
    <nav>
      <ul>
        <li>${renderLink("#/", "Home", currentPage)}</li>
        ${projectList
          .map(
            (project) => `
          <li>${renderLink(project.url, project.label, currentPage)}</li>
        `
          )
          .join("")}
      </ul>
    </nav>
    <!-- end code generated in renderMenu.js -->
  `;
}

function renderLink(page, text, currentPage) {
  if (page === currentPage) {
    return `<strong>${text}</strong>`;
  } else {
    return `<a href="${page}">${text}</a>`;
  }
}

// Render a grid of project cards
export function renderProjectGrid() {
  return `
    <div class="project-grid">
      ${projectList
        .map(
          (project) => `
        <div class="project-card">
          <a href="${project.url}">${project.label}</a>
        </div>
      `
        )
        .join("")}
    </div>
  `;
}
