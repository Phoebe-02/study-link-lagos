**Documents:** [Idea one-pager](docs/one-pager.md) | [Work plan](docs/work-plan.md) | [Screenshots](screenshots/)
# Study Link Lagos

A study spot finder for students in Lagos. Browse places to study, search by name, and save your favourites.

**Live site:** [https://cool-hummingbird-726314.netlify.app/]

## The problem

Students in Lagos waste time and money looking for a quiet place to study with power and Wi-Fi. Study Link Lagos puts study spots in one place so they can find one quickly.

## Who it's for

University students in Lagos.

## Tech Stack
HTML, CSS, JavaScript and React (built with Vite). Hosted on Netlify. Week 1 used plain JavaScript and is preserved in the `week-1` tag.

## How to run it

1. Install Node.js (LTS version).
2. Download or clone this repo.
3. In the project folder, run `npm install`, then `npm run dev`.
4. Open the link it prints (usually http://localhost:5173).

## Features and how they work

### 1. Search filter
When the user types in the search box, the app reads the text, keeps only the spots whose name contains it, and redraws the list. If nothing matches, an empty-state message shows instead of a blank page.

### 2. Save spot button
Each card has a "Save spot" button. Clicking it adds or removes that spot's id from a `savedIds` list and updates the button text and `aria-pressed` state. Saved spots stay marked as saved when the user searches, because the cards check the list each time they are drawn. It also works with the keyboard (Tab, then Enter).

## Accessibility

- Semantic HTML (header, nav, main, section, footer)
- Labelled form fields and a skip link
- Visible focus outlines on all interactive elements
- Text colours chosen for good contrast
- Layout tested from 320px wide up to desktop

## Data

All study spots are made-up sample data.

   ### 3. Area and amenity filters
   The area dropdown and the Wi-Fi, Power and Quiet checkboxes work together with the search box. A single `applyFilters()` function checks all of them each time one changes, and keeps only the spots that match every filter.

   ## Known limitations

- Saved spots reset when the page is refreshed.

  ## Week 2: Components and data

### Component map
- **App**: fetches the data, holds the state (spots, filters, saved spots) and passes it down
  - **Header**: title, tagline and navigation
  - **FilterBar**: the filter panel
    - **SearchBar**: the search input
  - **SpotList**: the grid of cards
    - **SpotCard**: one study spot with a save button
  - **StatusMessage**: loading, error (with retry) and empty messages

### Data
The app fetches `spots.json` (a mock API stored in the `public` folder) when it loads. It shows a loading message while waiting, an error message with a "Try again" button if the request fails, and an empty-state message when no spots match. No API keys are used.

### Feedback
My Week 1 idea was given a go-ahead with no feedback, so there was nothing to change.

### Issue log
See [docs/issue-log.md](docs/issue-log.md).
  
## What's next

- Keep saved spots after refresh as Week 3 item.
  
