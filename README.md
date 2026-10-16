**Documents:** [Idea one-pager](docs/one-pager.md) | [Work plan](docs/work-plan.md) | [Screenshots](screenshots/)
# Study Link Lagos

A study spot finder for students in Lagos. Browse places to study, search by name, and save your favourites.

**Live site:** [paste your Netlify link here]

## The problem

Students in Lagos waste time and money looking for a quiet place to study with power and Wi-Fi. Study Link Lagos puts study spots in one place so they can find one quickly.

## Who it's for

University students in Lagos.

## Tech stack

HTML, CSS and JavaScript (no frameworks). Hosted on Netlify.

## How to run it

1. Download or clone this repo.
2. Open `index.html` in your browser. No install needed.

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

## Known limitations

- Saved spots reset when the page is refreshed.
- Area and amenity filters are not working yet.

## What's next

- Make the area dropdown and amenity checkboxes filter the list.
- Load the data from a JSON file or public API.
- Keep saved spots after refresh.
