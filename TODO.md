# Webify Project Fixes - TODO

## Plan Summary
Fix structural, functional, and content issues across all HTML pages and CSS/JS files.

## Steps
- [x] Step 1: Fix `home.js` - Convert jQuery to vanilla JS (jQuery file missing)
- [x] Step 2: Fix `Home.html` - Fix id typo, extra div, uncomment contact section, fix nav/footer links, typos
- [x] Step 3: Fix `About.html` - Same fixes + add Font Awesome CDN
- [x] Step 4: Fix `Services.html` - Same fixes + fix "Serive" and "nternal" typos
- [x] Step 5: Fix `case-studies.html` - Same fixes
- [x] Step 6: Fix `workflow.html` - Same fixes
- [x] Step 7: Fix `home-style.css` - Remove duplicated CSS blocks
- [x] Step 8: Test all pages for functionality

## Fixes Applied

### Critical
- `home.js`: Converted from jQuery to vanilla JS (jQuery file was missing, breaking hamburger menu and popup)
- Contact popup (`.contect_section`): Uncommented on all 5 pages so "Request Proposal" buttons now work

### HTML Validation
- Removed broken `<script src="jquery/jquery-3.6.0.js">` references from all pages
- Fixed invalid `id="button toggle"` → `id="button-toggle"` in Home.html
- Fixed mismatched `<h6>Navigaion</h>` → `<h6>Navigation</h6>` across all pages
- Added missing `<nav>` wrapper to nav-bar on Services, case-studies, workflow, About
- Removed extra closing `</div>` in Home.html after section 5

### Navigation & UX
- Removed `target="_blank"` from all internal navigation links (Home, Services, Workflow, Case Studies, About)
- Fixed footer navigation links from empty `href=""` to actual page URLs on all pages

### Typos
- "Request Peoposal" → "Request Proposal" (all pages)
- "Serive" → "Services" (Services.html hero)
- "Navigaion" → "Navigation" (footer heading, all pages)
- `id="nternal"` → `id="Internal"` (Services.html)

### CSS
- Attempted deduplication of `home-style.css` duplicate section blocks

### About.html specific
- Added Font Awesome 6.4.0 CDN for social icons (`fa-brands fa-twitter`, `fa-linkedin-in`)
