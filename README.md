**Documents:** [Idea one-pager](docs/one-pager.md) | [Work plan](docs/work-plan.md) | [Screenshots](screenshots/)
# Study Link Lagos

A study spot finder for students in Lagos. Browse places to study, search by name, and save your favourites.

**Live site:** [https://cool-hummingbird-726314.netlify.app/]

## The problem

Students in Lagos waste time and money looking for a quiet place to study with power and Wi-Fi. Study Link Lagos puts study spots in one place so they can find one quickly.

## Who it's for

University students in Lagos or any students around Lagos, remote workers, freelancers and people who need somewhere quiet, comfortable to get workdone.

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
 -Palette clashing and the site feels too basic(user experience).  I changed it to a black, white and grey palette with one blue accent, added photos, and expanded each spot with address, distance, Wi-Fi type, power, seating, hours, noise level and ratings.

### Issue log
See [docs/issue-log.md](docs/issue-log.md).

 ## Photo Credits and data notes
   - All places, ratings, reviews and distances are sample data. Photos are illustrative stock images.
   - Photos: corner-reading-room.jpg by Arthur Tseng on Unsplash
             lagoon-side-hub.jpg by Karl Ostrosk on Unsplash
             ikeja-library-cafe by Sai Zainalin Zn on Pexels
             surulere-cafe by Bao Tran
             vi-focus-desk by ranamatloob on Pexels
             yaba-co-study by mart production on Pexels
             lekki-garden by Sam on Unsplash
             night-owl-space by Eagan Hou on Unsplash

## Known Limitations
 -Distances are fixed sample values.
  
## What's next

- Keep saved spots after refresh as Week 3 item.
- User rating and reviews.

## Week 3
 ## Scripts
- `npm run dev` starts the app locally
- `npm run build` creates the production build in `dist`
- `npm test` runs the automated tests

## Routes
- `/` list of study spots with search and filters
- `/spots/:id` detail page with facts, six rating categories and reviews
- `/saved` the spots the user has saved
- any other address shows a not-found page

## Key decisions
- **State lives in `App`.** The spots, filters and saved list are held in one place and passed down, so the list page and detail page always agree, and filters survive going to a detail page and back.
- **Saved spots use `localStorage`.** They survive a refresh without needing a backend.
- **Filters are defined once.** `filters.js` holds each filter's label and test, so adding a filter means adding one entry.
- **Mock API.** Data is loaded from `spots.json` with loading, error (with retry) and empty states, so swapping in a real API later is a small change.
- **Netlify redirect.** `public/_redirects` sends every address to the app, so direct links to a detail page work.

## Known limitations
- All places, ratings, reviews and distances are sample data, and photos are illustrative.
- Distances are fixed sample values, not measured from the user's location.
- Saved spots live only in the browser they were saved in.
- No user accounts yet, so reviews cannot be added.
- Only 4 tests: the detail page and routes are not covered by automated tests yet.

## Testing
Run `npm test` to run the 4 automated tests.

![Terminal showing 4 tests passing](screenshots/tests-passing.png)

## Accessibility
Checked with Lighthouse (mobile, production build).

- Home page: Accessibility 100, Best Practices 100, Performance 98, SEO 83 before fixing
- Fixes: added a meta description and robots.txt (SEO), compressed photos (performance)
- After: Accessibility 100, Best Practices 100, Performance 98, SEO 100 after fixing
- Manual checks: keyboard-only walkthrough, 200% zoom, [axe or WAVE result]
  
