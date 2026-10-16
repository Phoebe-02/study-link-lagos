# Work Plan

## Week 1: Foundations
- Idea one-pager and public repo with README
- 1.1 Responsive, accessible main screen (mobile-first, semantic HTML)
- 1.2 JavaScript interactivity: search filter and save button
- Deploy and tag `week-1`
- 5-minute presentation to mentors

## Week 2: Components and data
- List the Week 1 mentor feedback and what I changed (or why I did not)
- Keep an issue log of bugs, options considered and fixes (aim for 5+ entries)
- 2.1 Rebuild the UI from reusable components (for example Card, List, SearchBar, Button) in a framework, and add a component map to the README
- 2.2 Load data from a public API or mock (JSON file / JSON Server), with loading, empty and error states (with retry), plus search/filter over the data
- Keep API keys out of the repo
- Tag `week-2`

## Week 3: Quality and delivery
- 3.1 Add at least two routed views (list and detail), working deep links, a not-found page, and saved spots that persist across views (and reloads with localStorage)
- 3.2 Run Lighthouse or axe and record the accessibility score before and after fixes, check keyboard-only use, add at least 3 automated tests, and deploy
- Finish the README (idea, stack, setup, how to run tests, key decisions, known limitations)
- Final package: 5-minute walkthrough video, technical reflection, and declaration of my own work, libraries and AI use
- Tag `week-3`

## Top 3 risks and how I will handle them
1. **Time and beginner skill level:** build the required parts first, add extras only after, and commit small and often.
2. **Complex filter logic:** combine one filter at a time and test each before adding the next.
3. **Accessibility gaps:** run a keyboard-only and contrast check at the end of every week.
