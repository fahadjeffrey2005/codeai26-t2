


# Copilot Instructions for AI Agents

## Project Overview
This codebase is a static website for the CODE-AI 2026 conference, organized as two separate site architectures:

1. **Root-level site**: Simple HTML pages (e.g., `index.html`, `demo-background.html`) with paired asset folders (`index_files/`). Minimal styling and direct DOM manipulation via JS. No build tools or backend.
2. **Production site (`sm/` directory)**: Multi-page, fully styled site with glassmorphism, dark overlays, and interactive JS. Each page has dedicated CSS and assets. (See `sm/` for details.)

## Architecture & Patterns
- **Flat structure**: Each root HTML page has a corresponding `_files/` folder for JS/CSS/images. Example: `index.html` + `index_files/main.js`.
- **No cross-site asset sharing**: Root and `sm/` sites are independent.
- **All content is static**: No API/backend; forms redirect externally.
- **JS is inline/global**: No modules; use direct DOM manipulation and event listeners.
- **External dependencies**: Only ScrollReveal (for scroll animations) and Boxicons (for icons) are allowed via CDN.

## Styling Conventions
- **Glassmorphism**: Use `.glass-card` with `backdrop-filter: blur(20px)` and semi-transparent backgrounds.
- **Color scheme**: Lavender/purple accent (`rgba(150, 120, 182, ...)`) on dark backgrounds.
- **Dark overlays**: Use `rgba(0,0,0,0.45)` with z-index 0 for contrast.
- **Mobile responsiveness**: Use @media queries; test at 768px and 480px breakpoints.

## Developer Workflows
- **Local dev**: Run with `python3 -m http.server` (root) or `npm run start` (if `sm/` has package.json).
- **Manual testing**: Use browser DevTools for CSS/JS debugging. No automated tests.
- **Live reload**: Use VS Code Live Server or `http-server` for instant updates.
- **Restore perfect state**: Use git tag `v1.0-perfect-state` for last known working version.

## Project-Specific Conventions
- **Add content**: Edit HTML directly; create `_files/` folder only if JS/CSS needed.
- **Modify styles**: Use page-specific CSS in `index_files/css/` or equivalent. For global changes, update main CSS files.
- **Images**: Store in relevant asset folders; change filename to force browser cache refresh.
- **Backgrounds**: Apply GIFs via inline style in HTML; check z-index to avoid hiding content.

## Examples
- **Menu toggle**: Use Boxicons and toggle `.navbar.active` via JS.
- **Scroll animations**: Use ScrollReveal in inline `<script>` blocks.
- **Sponsor logos**: Add to asset folder and reference in HTML.

## Guidance for AI Agents
- Edit only necessary files; preserve existing structure and style.
- Match glassmorphism and color patterns; do not override `.glass-card` without understanding z-index/backdrop-filter impact.
- Document changes clearly in commits.

---
**Feedback requested:** If any section is unclear or missing, please specify so it can be improved for future AI agents.
