// ---------- 1. DATA ----------
// All sample data (made-up spots). Later you can move this into its own JSON file.
const spots = [
  { id: 1,  name: "Yabatech Corner Reading Room", area: "Yaba", price: 0,    amenities: ["Wi-Fi", "Quiet"],           description: "A calm reading room with long tables and plenty of natural light." },
  { id: 2,  name: "Lagoon Side Study Hub",        area: "Lekki", price: 2500, amenities: ["Wi-Fi", "Power", "Quiet"], description: "Air-conditioned co-working desks with backup power and a quiet zone." },
  { id: 3,  name: "Ikeja Central Library Annex",  area: "Ikeja", price: 0,    amenities: ["Quiet", "Power"],          description: "Free public library annex with silent study carrels." },
  { id: 4,  name: "Surulere Study Cafe",          area: "Surulere", price: 1500, amenities: ["Wi-Fi", "Power"],      description: "Cafe with strong Wi-Fi and plenty of sockets. A bit busy at lunch." },
  { id: 5,  name: "VI Focus Desk",                area: "Victoria Island", price: 4000, amenities: ["Wi-Fi", "Power", "Quiet"], description: "Private desks, steady power, and a quiet floor for exam prep." },
  { id: 6,  name: "Yaba Tech Co-Study",           area: "Yaba", price: 2000, amenities: ["Wi-Fi", "Power"],          description: "Shared tables near the tech cluster, popular with students." },
  { id: 7,  name: "Lekki Garden Reading Spot",    area: "Lekki", price: 1000, amenities: ["Quiet"],                  description: "Outdoor shaded seating, best in the morning before the heat." },
  { id: 8,  name: "Ikeja Night Owl Space",        area: "Ikeja", price: 3000, amenities: ["Wi-Fi", "Power"],         description: "Open late, good for last-minute revision sessions." }
];

// ---------- 2. GRAB ELEMENTS FROM THE PAGE ----------
const spotList   = document.getElementById("spot-list");
const resultCount = document.getElementById("result-count");
const emptyState = document.getElementById("empty-state");
// Remembers which spots are saved (by their id)
const savedIds = [];

// ---------- 3. HELPERS ----------
function formatPrice(price) {
  return price === 0 ? "Free" : "₦" + price.toLocaleString() + " per day";
}

// Builds the HTML for ONE card
function createSpotCard(spot) {
  const isSaved = savedIds.includes(spot.id);

  const amenityItems = spot.amenities
    .map(function (item) { return "<li>" + item + "</li>"; })
    .join("");

  return `
    <li>
      <article class="spot-card">
        <h3>${spot.name}</h3>
        <p class="spot-meta">${spot.area} &middot; ${formatPrice(spot.price)}</p>
        <p class="spot-desc">${spot.description}</p>
        <ul class="amenities" aria-label="Amenities">${amenityItems}</ul>
        <button type="button" class="btn" aria-pressed="${isSaved}" data-id="${spot.id}">
          ${isSaved ? "Saved" : "Save spot"}
        </button>
      </article>
    </li>
  `;
}

// ---------- 4. RENDER ----------
// Takes a list of spots and puts them on the page
function renderSpots(list) {
  spotList.innerHTML = list.map(createSpotCard).join("");
  resultCount.textContent = list.length + (list.length === 1 ? " spot found" : " spots found");
  emptyState.hidden = list.length !== 0;
}

// Show everything when the page first loads
renderSpots(spots);

// ---------- 5. TODO (your Task 1.2 interactivity) ----------
// a) Make the search box + area dropdown + checkboxes filter the list
// b) Make the "Save spot" button toggle on/off (and flip aria-pressed)


// Stop the form from reloading the page when Enter is pressed
const filterForm = document.getElementById("filter-form");
filterForm.addEventListener("submit", function (event) {
  event.preventDefault();
});

// Grab the filter controls
const searchInput = document.getElementById("search");
const areaSelect = document.getElementById("area");
const amenityBoxes = document.querySelectorAll('input[name="amenity"]');

// Check every filter at once and redraw the list
function applyFilters() {
  const text = searchInput.value.trim().toLowerCase();
  const area = areaSelect.value;

  // Collect the names of the ticked boxes, e.g. ["Wi-Fi", "Power"]
  const wanted = Array.from(amenityBoxes)
    .filter(function (box) { return box.checked; })
    .map(function (box) { return box.value; });

  const filtered = spots.filter(function (spot) {
    const matchesName = spot.name.toLowerCase().includes(text);
    const matchesArea = area === "all" || spot.area === area;
    const matchesAmenities = wanted.every(function (item) {
      return spot.amenities.includes(item);
    });
    return matchesName && matchesArea && matchesAmenities;
  });

  renderSpots(filtered);
}

// Run it whenever any filter changes
searchInput.addEventListener("input", applyFilters);
areaSelect.addEventListener("change", applyFilters);
amenityBoxes.forEach(function (box) {
  box.addEventListener("change", applyFilters);
});


// Save / unsave a spot when its button is clicked
spotList.addEventListener("click", function (event) {
  const button = event.target.closest("button[data-id]");
  if (!button) return;

  const id = Number(button.dataset.id);

  if (savedIds.includes(id)) {
    savedIds.splice(savedIds.indexOf(id), 1);   // remove it
  } else {
    savedIds.push(id);                          // add it
  }

  const isSaved = savedIds.includes(id);
  button.setAttribute("aria-pressed", isSaved);
  button.textContent = isSaved ? "Saved" : "Save spot";
});
